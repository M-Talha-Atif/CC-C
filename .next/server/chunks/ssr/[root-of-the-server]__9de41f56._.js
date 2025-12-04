module.exports = {

"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/action.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f096e46829575edddc45bb2811e1168227e7d276c":"deleteUser","7f13bffc63cf5335e337f22081fafd35d4fad7ea81":"getUsers","7f1e2bb3b6854e1cd38654ca6bf60354bc16b8a9cf":"unassignReferralCode","7f2811cc40e639d3b5cbf529c06b8c3b74c43b9e76":"rejectUser","7f33471bad80cdd3d4283a09a427be9d5071d8ed4f":"resetPasswordWithToken","7f3741827c3f5d46a4d853a3880fffa3db69efb0f5":"getAllUsersWithStatus","7f4ea68bc907082c24cd61912e059769f7e55caf8e":"getReferralCodeById","7f4f50219cd21575d54d9bc68743302ec4e599d211":"getUserReferralUsage","7f5b7649f825616330773b3bfcf323a2d14c7a0544":"getReferralUsage","7f634046f827e92794253bb3d9a7f38597523d3f9c":"logout","7f68bae5c2aea64111ce913ea84e3ae85c8a9d2cfc":"bulkAssignReferralCodes","7f6dce953196bda0c3c48bfb1528aceb2dd46d5ca6":"getReferralCodes","7f6f24e6cbd1b3fa3c55b67d3ffbf2c3b0c07d14b6":"getApprovedUsers","7f746c1d769e19f7351c95a34c6d96484824eb200b":"updateUserPoints","7f98ef1a78c445d8fdbf78325bb301ad4572016776":"assignReferralCode","7fa264b0eb4e14f9511b5952c5a0889e9f1b7b6469":"forgotPasswordAdmin","7fac116abffd0d72a56c3d6979d040c5bfda37c582":"createReferralCode","7fadcf3ba5f81b4fdda32309ce34eb5db0e14d0707":"bulkUpdateUserStatus","7faf55d4a5250e32d7c281615d6cdd202c2e9af8fd":"login","7fb3afb859c050d31294fe51765501edcc95f80178":"bulkCreateReferralCodes","7fca85de0f604c5ae92a80abf071d0306631d57522":"approveUser","7fcc76b31d08b05a4156f910b46f92525464ba44c6":"getPendingUsers","7fd9750286bc4a1f35159202aff2e4514a940ede5f":"getReferralAnalytics","7fdb89417200e76198de656a4aea5446c994abc42f":"getRejectedUsers","7fe0783bba1a10f1d4244de8d4a070c14f79d53c16":"updateReferralCode","7fe3ebac4614d3a31e324dc20bd3304d15de14b6d4":"deleteReferralCode","7ff81f74be8868f15383cf98a71533f61625c2c70c":"refreshTokenServer","7ffc33e0be18affc83238ecc1a936c146732872289":"getUserById"},"",""] */ __turbopack_context__.s({
    "approveUser": (()=>approveUser),
    "assignReferralCode": (()=>assignReferralCode),
    "bulkAssignReferralCodes": (()=>bulkAssignReferralCodes),
    "bulkCreateReferralCodes": (()=>bulkCreateReferralCodes),
    "bulkUpdateUserStatus": (()=>bulkUpdateUserStatus),
    "createReferralCode": (()=>createReferralCode),
    "deleteReferralCode": (()=>deleteReferralCode),
    "deleteUser": (()=>deleteUser),
    "forgotPasswordAdmin": (()=>forgotPasswordAdmin),
    "getAllUsersWithStatus": (()=>getAllUsersWithStatus),
    "getApprovedUsers": (()=>getApprovedUsers),
    "getPendingUsers": (()=>getPendingUsers),
    "getReferralAnalytics": (()=>getReferralAnalytics),
    "getReferralCodeById": (()=>getReferralCodeById),
    "getReferralCodes": (()=>getReferralCodes),
    "getReferralUsage": (()=>getReferralUsage),
    "getRejectedUsers": (()=>getRejectedUsers),
    "getUserById": (()=>getUserById),
    "getUserReferralUsage": (()=>getUserReferralUsage),
    "getUsers": (()=>getUsers),
    "login": (()=>login),
    "logout": (()=>logout),
    "refreshTokenServer": (()=>refreshTokenServer),
    "rejectUser": (()=>rejectUser),
    "resetPasswordWithToken": (()=>resetPasswordWithToken),
    "unassignReferralCode": (()=>unassignReferralCode),
    "updateReferralCode": (()=>updateReferralCode),
    "updateUserPoints": (()=>updateUserPoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const login = async ({ email, password })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/auth/login?admin=true`, {
            email,
            password
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(response);
        const { data } = response;
        // Extract and manually set cookies from response
        const setCookieHeader = response.headers["set-cookie"];
        if (setCookieHeader && Array.isArray(setCookieHeader)) {
            const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
            setCookieHeader.forEach((cookie)=>{
                // Parse cookie string
                const parts = cookie.split(";")[0];
                const [name, ...valueParts] = parts.split("=");
                const value = valueParts.join("=");
                if (name && value) {
                    // Set cookie with httpOnly and secure flags
                    cookieStore.set(name.trim(), value.trim(), {
                        httpOnly: true,
                        secure: ("TURBOPACK compile-time value", "development") === "production",
                        sameSite: "lax",
                        path: "/"
                    });
                }
            });
        }
        // On successful login, redirect to admin dashboard
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard/overview");
    } catch (error) {
        // If it's a redirect, re-throw it
        if (error.message === "NEXT_REDIRECT" || error.digest?.startsWith("NEXT_REDIRECT")) {
            throw error;
        }
        return {
            success: false,
            message: error.response?.data?.message || "Login failed"
        };
    }
};
const logout = async ()=>{
    try {
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.delete("token");
        cookieStore.delete("refreshToken");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false
        };
    }
};
const refreshTokenServer = async ()=>{
    try {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/auth/refresh-token`, {}, {
            withCredentials: true,
            headers: {
                Cookie: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).toString()
            }
        });
        return {
            success: true,
            data: data.data,
            message: "Token refreshed successfully"
        };
    } catch (error) {
        console.error("Server token refresh error:", error);
        return {
            success: false,
            message: error.response?.data?.message || "Token refresh failed"
        };
    }
};
const makeAuthenticatedRequest = async (url, options = {})=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            url,
            headers: {
                Cookie: cookieStore.toString(),
                "Content-Type": "application/json",
                ...options.headers
            },
            timeout: 30000,
            withCredentials: true,
            ...options
        });
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        // If 401 and we haven't retried yet, try to refresh
        if (error.response?.status === 401 && !options.skipRefresh) {
            console.log("Token expired, attempting refresh...");
            const refreshResult = await refreshTokenServer();
            if (refreshResult.success) {
                try {
                    const retryResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
                        url,
                        headers: {
                            Cookie: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).toString(),
                            "Content-Type": "application/json",
                            ...options.headers
                        },
                        timeout: 30000,
                        withCredentials: true,
                        ...options,
                        skipRefresh: true
                    });
                    return {
                        success: true,
                        data: retryResponse.data
                    };
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
const forgotPasswordAdmin = async (email)=>{
    try {
        const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/auth/forgot-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Failed to send reset email");
        }
        return {
            success: true,
            message: data.message,
            tokenSent: data.data?.tokenSent || false
        };
    } catch (error) {
        console.error("Forgot password error:", error);
        return {
            success: false,
            message: error.message || "Failed to send reset email. Please try again."
        };
    }
};
const resetPasswordWithToken = async (token, newPassword)=>{
    try {
        const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/auth/reset-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token,
                password: newPassword
            })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Failed to reset password");
        }
        return {
            success: true,
            message: data.message || "Password reset successful"
        };
    } catch (error) {
        console.error("Reset password error:", error);
        return {
            success: false,
            message: error.message || "Failed to reset password. Please try again."
        };
    }
};
const getReferralCodes = async ({ page = 1, limit = 10, isActive, assignedStatus, search } = {})=>{
    const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...isActive !== undefined && {
            isActive: isActive.toString()
        },
        ...assignedStatus && {
            assignedStatus
        },
        ...search && {
            search
        }
    });
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/referral-codes?${queryParams.toString()}`, {
        method: "GET"
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to get referral codes");
};
const getUsers = async ({ page = 1, limit = 100, userType, search } = {})=>{
    const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...userType && {
            userType
        },
        ...search && {
            search
        }
    });
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/users?${queryParams.toString()}`, {
        method: "GET"
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to get users");
};
const createReferralCode = async ({ code, description, expiresAt, assignedToUserId })=>{
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/referral-codes`, {
        method: "POST",
        data: {
            code,
            description,
            expiresAt,
            assignedToUserId: assignedToUserId === "admin" ? null : assignedToUserId
        }
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to create referral code");
};
const updateReferralCode = async ({ id, code, description, expiresAt, isActive })=>{
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/referral-codes/${id}`, {
        method: "PUT",
        data: {
            code,
            description,
            expiresAt,
            isActive
        }
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to update referral code");
};
const deleteReferralCode = async (id)=>{
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/referral-codes/${id}`, {
        method: "DELETE"
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to delete referral code");
};
const assignReferralCode = async ({ id, userId })=>{
    try {
        if (!id || !userId) {
            return {
                success: false,
                message: "Referral code ID and user ID are required"
            };
        }
        const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/referral-codes/${id}/assign`, {
            method: "POST",
            data: {
                userId: userId.toString()
            },
            timeout: 10000
        });
        if (result.success) {
            return {
                success: true,
                data: result.data
            };
        }
        throw new Error("Failed to assign referral code");
    } catch (error) {
        console.error("Error in assignReferralCode API:", error);
        let message = "An unexpected error occurred";
        if (error.response) {
            message = error.response.data?.message || `Request failed with status ${error.response.status}`;
        } else if (error.request) {
            message = "Network error. Please check your connection and try again.";
        } else {
            message = error.message || "An unexpected error occurred";
        }
        return {
            success: false,
            message
        };
    }
};
const unassignReferralCode = async (id)=>{
    try {
        if (!id) {
            throw new Error("Referral code ID is required");
        }
        const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/referral-codes/${id}/unassign`, {
            method: "POST",
            data: {},
            timeout: 10000
        });
        if (result.success) {
            return result.data;
        }
        throw new Error("Failed to unassign referral code");
    } catch (error) {
        console.error("Error in unassignReferralCode API:", error);
        if (error.response) {
            throw new Error(error.response.data?.message || "Failed to unassign referral code");
        } else if (error.request) {
            throw new Error("Network error. Please check your connection and try again.");
        } else {
            throw new Error(error.message || "An unexpected error occurred");
        }
    }
};
const getReferralCodeById = async (id)=>{
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/referral-codes/${id}`, {
        method: "GET"
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to get referral code");
};
const getReferralAnalytics = async ({ startDate, endDate, adminId } = {})=>{
    const queryParams = new URLSearchParams({
        ...startDate && {
            startDate
        },
        ...endDate && {
            endDate
        },
        ...adminId && {
            adminId
        }
    });
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/referral-analytics?${queryParams.toString()}`, {
        method: "GET"
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to get referral analytics");
};
const getReferralUsage = async ({ page = 1, limit = 10, referralCode, userId } = {})=>{
    const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...referralCode && {
            referralCode
        },
        ...userId && {
            userId
        }
    });
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/referral-usage?${queryParams.toString()}`, {
        method: "GET"
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to get referral usage");
};
const getUserById = async (id)=>{
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/users/${id}`, {
        method: "GET"
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to get user");
};
const updateUserPoints = async ({ id, amount, type, description })=>{
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/users/${id}/points`, {
        method: "PUT",
        data: {
            amount,
            type,
            description
        }
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to update user points");
};
const bulkCreateReferralCodes = async (codes)=>{
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/referral-codes/bulk-create`, {
        method: "POST",
        data: {
            codes
        }
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to bulk create referral codes");
};
const bulkAssignReferralCodes = async (assignments)=>{
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/referral-codes/bulk-assign`, {
        method: "POST",
        data: {
            assignments
        }
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to bulk assign referral codes");
};
const getPendingUsers = async ()=>{
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/pending/users`, {
        method: "GET"
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to get pending users");
};
const getApprovedUsers = async ({ page = 1, limit = 10, search = "" } = {})=>{
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...search && {
            search
        }
    });
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/approved/users?${params}`, {
        method: "GET"
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to get approved users");
};
const getUserReferralUsage = async ({ userId, page = 1, limit = 50 } = {})=>{
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString()
    });
    console.log(userId);
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/users/${userId}/referral-usage?${params}`, {
        method: "GET"
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to get user referral usage");
};
const getRejectedUsers = async ({ page = 1, limit = 10, search = "", status = "all" } = {})=>{
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        status,
        ...search && {
            search
        }
    });
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/rejected-users?${params}`, {
        method: "GET"
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to get rejected users");
};
const getAllUsersWithStatus = async ()=>{
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/users/status/all`, {
        method: "GET"
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to get all users with status");
};
const approveUser = async (userId)=>{
    try {
        const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/users/${userId}/approve`, {
            method: "PATCH",
            data: {}
        });
        // If successful, return the result
        return result;
    } catch (error) {
        console.log("Raw error in approveUser:", error);
        console.log("Axios response:", error.response);
        console.log("Axios response data:", error.response?.data);
        // Axios errors have the response in error.response
        // We need to throw an error that preserves this structure
        const enhancedError = new Error(error.response?.data?.message || error.message || "Failed to approve user");
        // Preserve the axios response structure
        enhancedError.response = error.response;
        throw enhancedError;
    }
};
const rejectUser = async (userId)=>{
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/users/${userId}/reject`, {
        method: "PATCH",
        data: {}
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to reject user");
};
const bulkUpdateUserStatus = async ({ userIds, status })=>{
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/users/bulk-update-status`, {
        method: "PATCH",
        data: {
            userIds,
            status
        }
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to bulk update user status");
};
const deleteUser = async (userId)=>{
    const result = await makeAuthenticatedRequest(`${("TURBOPACK compile-time value", "http://localhost:3001/")}api/admin/users/delete/${userId}`, {
        method: "DELETE"
    });
    if (result.success) {
        return result.data;
    }
    throw new Error("Failed to delete user");
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    login,
    logout,
    refreshTokenServer,
    forgotPasswordAdmin,
    resetPasswordWithToken,
    getReferralCodes,
    getUsers,
    createReferralCode,
    updateReferralCode,
    deleteReferralCode,
    assignReferralCode,
    unassignReferralCode,
    getReferralCodeById,
    getReferralAnalytics,
    getReferralUsage,
    getUserById,
    updateUserPoints,
    bulkCreateReferralCodes,
    bulkAssignReferralCodes,
    getPendingUsers,
    getApprovedUsers,
    getUserReferralUsage,
    getRejectedUsers,
    getAllUsersWithStatus,
    approveUser,
    rejectUser,
    bulkUpdateUserStatus,
    deleteUser
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "7faf55d4a5250e32d7c281615d6cdd202c2e9af8fd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "7f634046f827e92794253bb3d9a7f38597523d3f9c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(refreshTokenServer, "7ff81f74be8868f15383cf98a71533f61625c2c70c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(forgotPasswordAdmin, "7fa264b0eb4e14f9511b5952c5a0889e9f1b7b6469", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(resetPasswordWithToken, "7f33471bad80cdd3d4283a09a427be9d5071d8ed4f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getReferralCodes, "7f6dce953196bda0c3c48bfb1528aceb2dd46d5ca6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUsers, "7f13bffc63cf5335e337f22081fafd35d4fad7ea81", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createReferralCode, "7fac116abffd0d72a56c3d6979d040c5bfda37c582", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateReferralCode, "7fe0783bba1a10f1d4244de8d4a070c14f79d53c16", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteReferralCode, "7fe3ebac4614d3a31e324dc20bd3304d15de14b6d4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(assignReferralCode, "7f98ef1a78c445d8fdbf78325bb301ad4572016776", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(unassignReferralCode, "7f1e2bb3b6854e1cd38654ca6bf60354bc16b8a9cf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getReferralCodeById, "7f4ea68bc907082c24cd61912e059769f7e55caf8e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getReferralAnalytics, "7fd9750286bc4a1f35159202aff2e4514a940ede5f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getReferralUsage, "7f5b7649f825616330773b3bfcf323a2d14c7a0544", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserById, "7ffc33e0be18affc83238ecc1a936c146732872289", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUserPoints, "7f746c1d769e19f7351c95a34c6d96484824eb200b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkCreateReferralCodes, "7fb3afb859c050d31294fe51765501edcc95f80178", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkAssignReferralCodes, "7f68bae5c2aea64111ce913ea84e3ae85c8a9d2cfc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPendingUsers, "7fcc76b31d08b05a4156f910b46f92525464ba44c6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getApprovedUsers, "7f6f24e6cbd1b3fa3c55b67d3ffbf2c3b0c07d14b6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserReferralUsage, "7f4f50219cd21575d54d9bc68743302ec4e599d211", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRejectedUsers, "7fdb89417200e76198de656a4aea5446c994abc42f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllUsersWithStatus, "7f3741827c3f5d46a4d853a3880fffa3db69efb0f5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(approveUser, "7fca85de0f604c5ae92a80abf071d0306631d57522", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(rejectUser, "7f2811cc40e639d3b5cbf529c06b8c3b74c43b9e76", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkUpdateUserStatus, "7fadcf3ba5f81b4fdda32309ce34eb5db0e14d0707", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteUser, "7f096e46829575edddc45bb2811e1168227e7d276c", null);
}}),
"[project]/.next-internal/server/app/dashboard/users/rejected/page/actions.js { ACTIONS_MODULE0 => \"[project]/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/action.js [app-rsc] (ecmascript)");
;
;
;
;
}}),
"[project]/.next-internal/server/app/dashboard/users/rejected/page/actions.js { ACTIONS_MODULE0 => \"[project]/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/action.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$users$2f$rejected$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/users/rejected/page/actions.js { ACTIONS_MODULE0 => "[project]/action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/dashboard/users/rejected/page/actions.js { ACTIONS_MODULE0 => \"[project]/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7f096e46829575edddc45bb2811e1168227e7d276c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteUser"]),
    "7f4f50219cd21575d54d9bc68743302ec4e599d211": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserReferralUsage"]),
    "7f634046f827e92794253bb3d9a7f38597523d3f9c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"]),
    "7fdb89417200e76198de656a4aea5446c994abc42f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRejectedUsers"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/action.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$users$2f$rejected$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/users/rejected/page/actions.js { ACTIONS_MODULE0 => "[project]/action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/dashboard/users/rejected/page/actions.js { ACTIONS_MODULE0 => \"[project]/action.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7f096e46829575edddc45bb2811e1168227e7d276c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$users$2f$rejected$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f096e46829575edddc45bb2811e1168227e7d276c"]),
    "7f4f50219cd21575d54d9bc68743302ec4e599d211": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$users$2f$rejected$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f4f50219cd21575d54d9bc68743302ec4e599d211"]),
    "7f634046f827e92794253bb3d9a7f38597523d3f9c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$users$2f$rejected$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f634046f827e92794253bb3d9a7f38597523d3f9c"]),
    "7fdb89417200e76198de656a4aea5446c994abc42f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$users$2f$rejected$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fdb89417200e76198de656a4aea5446c994abc42f"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$users$2f$rejected$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/users/rejected/page/actions.js { ACTIONS_MODULE0 => "[project]/action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$users$2f$rejected$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$action$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/users/rejected/page/actions.js { ACTIONS_MODULE0 => "[project]/action.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/dashboard/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/dashboard/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/dashboard/users/rejected/page.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/dashboard/users/rejected/page.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/dashboard/users/rejected/page.jsx <module evaluation>", "default");
}}),
"[project]/app/dashboard/users/rejected/page.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/dashboard/users/rejected/page.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/dashboard/users/rejected/page.jsx", "default");
}}),
"[project]/app/dashboard/users/rejected/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$rejected$2f$page$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/dashboard/users/rejected/page.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$rejected$2f$page$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/app/dashboard/users/rejected/page.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dashboard$2f$users$2f$rejected$2f$page$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/dashboard/users/rejected/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/dashboard/users/rejected/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9de41f56._.js.map