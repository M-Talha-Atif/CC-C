"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Authentication
export const login = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/auth/login?admin=true`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { data } = response;

    // Extract and manually set cookies from response
    const setCookieHeader = response.headers["set-cookie"];

    if (setCookieHeader && Array.isArray(setCookieHeader)) {
      const cookieStore = await cookies();

      setCookieHeader.forEach((cookie) => {
        // Parse cookie string
        const parts = cookie.split(";")[0];
        const [name, ...valueParts] = parts.split("=");
        const value = valueParts.join("=");

        if (name && value) {
          // Set cookie with httpOnly and secure flags
          cookieStore.set(name.trim(), value.trim(), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
          });
        }
      });
    }

    // On successful login, redirect to admin dashboard
    redirect("/dashboard/overview");
  } catch (error) {
    // If it's a redirect, re-throw it
    if (
      error.message === "NEXT_REDIRECT" ||
      error.digest?.startsWith("NEXT_REDIRECT")
    ) {
      throw error;
    }

    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
};

export const logout = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    cookieStore.delete("refreshToken");
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export const refreshTokenServer = async () => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/auth/refresh-token`,
      {},
      {
        withCredentials: true,
        headers: {
          Cookie: (await cookies()).toString(), // Forward all cookies
        },
      }
    );

    return {
      success: true,
      data: data.data,
      message: "Token refreshed successfully",
    };
  } catch (error) {
    console.error("Server token refresh error:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Token refresh failed",
    };
  }
};

const makeAuthenticatedRequest = async (url, options = {}) => {
  const cookieStore = await cookies();

  try {
    const response = await axios({
      url,
      headers: {
        Cookie: cookieStore.toString(),
        "Content-Type": "application/json",
        ...options.headers,
      },
      timeout: 30000,
      withCredentials: true,
      ...options,
    });

    return { success: true, data: response.data };
  } catch (error) {
    // If 401 and we haven't retried yet, try to refresh
    if (error.response?.status === 401 && !options.skipRefresh) {
      console.log("Token expired, attempting refresh...");

      const refreshResult = await refreshTokenServer();

      if (refreshResult.success) {
        try {
          const retryResponse = await axios({
            url,
            headers: {
              Cookie: (await cookies()).toString(),
              "Content-Type": "application/json",
              ...options.headers,
            },
            timeout: 30000,
            withCredentials: true,
            ...options,
            skipRefresh: true,
          });

          return { success: true, data: retryResponse.data };
        } catch (retryError) {
          // Throw axios error as-is so response data is preserved
          throw retryError;
        }
      }
    }

    // Throw axios error as-is so response data is preserved
    throw error;
  }
};
// Get referral codes with filters
export const getReferralCodes = async ({
  page = 1,
  limit = 10,
  isActive,
  assignedStatus,
  search,
} = {}) => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...(isActive !== undefined && { isActive: isActive.toString() }),
    ...(assignedStatus && { assignedStatus }),
    ...(search && { search }),
  });

  const result = await makeAuthenticatedRequest(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }api/admin/referral-codes?${queryParams.toString()}`,
    {
      method: "GET",
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to get referral codes");
};

// Get users for dropdown selection
export const getUsers = async ({
  page = 1,
  limit = 100, // Get more users for dropdown
  userType,
  search,
} = {}) => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...(userType && { userType }),
    ...(search && { search }),
  });

  const result = await makeAuthenticatedRequest(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }api/admin/users?${queryParams.toString()}`,
    {
      method: "GET",
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to get users");
};

// Create new referral code
export const createReferralCode = async ({
  code,
  description,
  expiresAt,
  assignedToUserId,
}) => {
  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/referral-codes`,
    {
      method: "POST",
      data: {
        code,
        description,
        expiresAt,
        assignedToUserId:
          assignedToUserId === "admin" ? null : assignedToUserId,
      },
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to create referral code");
};

// Update referral code
export const updateReferralCode = async ({
  id,
  code,
  description,
  expiresAt,
  isActive,
}) => {
  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/referral-codes/${id}`,
    {
      method: "PUT",
      data: {
        code,
        description,
        expiresAt,
        isActive,
      },
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to update referral code");
};

// Delete referral code
export const deleteReferralCode = async (id) => {
  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/referral-codes/${id}`,
    {
      method: "DELETE",
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to delete referral code");
};

// Assign referral code to user
export const assignReferralCode = async ({ id, userId }) => {
  try {
    if (!id || !userId) {
      return {
        success: false,
        message: "Referral code ID and user ID are required",
      };
    }

    const result = await makeAuthenticatedRequest(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/referral-codes/${id}/assign`,
      {
        method: "POST",
        data: { userId: userId.toString() }, // Ensure userId is string
        timeout: 10000,
      }
    );

    if (result.success) {
      return {
        success: true,
        data: result.data,
      };
    }

    throw new Error("Failed to assign referral code");
  } catch (error) {
    console.error("Error in assignReferralCode API:", error);

    let message = "An unexpected error occurred";

    if (error.response) {
      message =
        error.response.data?.message ||
        `Request failed with status ${error.response.status}`;
    } else if (error.request) {
      message = "Network error. Please check your connection and try again.";
    } else {
      message = error.message || "An unexpected error occurred";
    }

    return {
      success: false,
      message,
    };
  }
};

export const unassignReferralCode = async (id) => {
  try {
    if (!id) {
      throw new Error("Referral code ID is required");
    }

    const result = await makeAuthenticatedRequest(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/referral-codes/${id}/unassign`,
      {
        method: "POST",
        data: {},
        timeout: 10000,
      }
    );

    if (result.success) {
      return result.data;
    }

    throw new Error("Failed to unassign referral code");
  } catch (error) {
    console.error("Error in unassignReferralCode API:", error);

    if (error.response) {
      throw new Error(
        error.response.data?.message || "Failed to unassign referral code"
      );
    } else if (error.request) {
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    } else {
      throw new Error(error.message || "An unexpected error occurred");
    }
  }
};

// Get referral code by ID
export const getReferralCodeById = async (id) => {
  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/referral-codes/${id}`,
    {
      method: "GET",
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to get referral code");
};

// Get referral analytics
export const getReferralAnalytics = async ({
  startDate,
  endDate,
  adminId,
} = {}) => {
  const queryParams = new URLSearchParams({
    ...(startDate && { startDate }),
    ...(endDate && { endDate }),
    ...(adminId && { adminId }),
  });

  const result = await makeAuthenticatedRequest(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }api/admin/referral-analytics?${queryParams.toString()}`,
    {
      method: "GET",
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to get referral analytics");
};

// Get referral usage data
export const getReferralUsage = async ({
  page = 1,
  limit = 10,
  referralCode,
  userId,
} = {}) => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...(referralCode && { referralCode }),
    ...(userId && { userId }),
  });

  const result = await makeAuthenticatedRequest(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }api/admin/referral-usage?${queryParams.toString()}`,
    {
      method: "GET",
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to get referral usage");
};

// Get user by ID
export const getUserById = async (id) => {
  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/users/${id}`,
    {
      method: "GET",
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to get user");
};

// Update user points
export const updateUserPoints = async ({ id, amount, type, description }) => {
  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/users/${id}/points`,
    {
      method: "PUT",
      data: {
        amount,
        type,
        description,
      },
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to update user points");
};

// Bulk create referral codes
export const bulkCreateReferralCodes = async (codes) => {
  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/referral-codes/bulk-create`,
    {
      method: "POST",
      data: { codes },
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to bulk create referral codes");
};

// Bulk assign referral codes
export const bulkAssignReferralCodes = async (assignments) => {
  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/referral-codes/bulk-assign`,
    {
      method: "POST",
      data: { assignments },
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to bulk assign referral codes");
};

export const getPendingUsers = async () => {
  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/pending/users`,
    {
      method: "GET",
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to get pending users");
};

export const getApprovedUsers = async ({
  page = 1,
  limit = 10,
  search = "",
} = {}) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...(search && { search }),
  });

  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/approved/users?${params}`,
    {
      method: "GET",
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to get approved users");
};

export const getUserReferralUsage = async ({
  userId,
  page = 1,
  limit = 50,
} = {}) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/users/${userId}/referral-usage?${params}`,
    {
      method: "GET",
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to get user referral usage");
};

export const getRejectedUsers = async ({
  page = 1,
  limit = 10,
  search = "",
  status = "all",
} = {}) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    status,
    ...(search && { search }),
  });

  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/rejected-users?${params}`,
    {
      method: "GET",
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to get rejected users");
};

// GET all users with status
export const getAllUsersWithStatus = async () => {
  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/users/status/all`,
    {
      method: "GET",
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to get all users with status");
};

export const approveUser = async (userId) => {
  try {
    const result = await makeAuthenticatedRequest(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/users/${userId}/approve`,
      {
        method: "PATCH",
        data: {},
      }
    );

    // If successful, return the result
    return result;
  } catch (error) {
    console.log("Raw error in approveUser:", error);
    console.log("Axios response:", error.response);
    console.log("Axios response data:", error.response?.data);

    // Axios errors have the response in error.response
    // We need to throw an error that preserves this structure
    const enhancedError = new Error(
      error.response?.data?.message || error.message || "Failed to approve user"
    );

    // Preserve the axios response structure
    enhancedError.response = error.response;

    throw enhancedError;
  }
};

// PATCH reject single user
export const rejectUser = async (userId) => {
  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/users/${userId}/reject`,
    {
      method: "PATCH",
      data: {},
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to reject user");
};

// PATCH bulk update user status
export const bulkUpdateUserStatus = async ({ userIds, status }) => {
  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/users/bulk-update-status`,
    {
      method: "PATCH",
      data: {
        userIds,
        status,
      },
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to bulk update user status");
};

export const deleteUser = async (userId) => {
  const result = await makeAuthenticatedRequest(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/admin/users/delete/${userId}`,
    {
      method: "DELETE",
    }
  );

  if (result.success) {
    return result.data;
  }

  throw new Error("Failed to delete user");
};
