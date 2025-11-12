"use client";
import { useState, useEffect } from "react";
import { DataTable } from "../components/DataTable";
import { BulkActions } from "../components/BulkActions";
import { StatusBadge } from "../components/StatusBadge";
import { ActionButtons } from "../components/ActionButtons";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { EmptyState } from "../components/EmptyState";
import { SearchBar } from "../components/SearchBar";
import {
  approveUser,
  bulkUpdateUserStatus,
  getPendingUsers,
  getUserReferralUsage,
  rejectUser,
} from "../../../../action";
import Toast from "../../../../components/Toast";
import SimplePopup from "../components/Popup";
import Modal from "../../referrals/components/Modal";
import { Loader } from "lucide-react";

export default function PendingUsersPage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bulkLoading, setBulkLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState(null);
  const [actionLoading, setActionLoading] = useState({});
  const [showLimitPopup, setShowLimitPopup] = useState(false);
  const [limitReachedUserId, setLimitReachedUserId] = useState(null);
  const [showUsageModal, setShowUsageModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [usageData, setUsageData] = useState([]);
  const [usageLoading, setUsageLoading] = useState(false);
  const [expandedEmailId, setExpandedEmailId] = useState(null);

  const showToast = (message, type = "info") => {
    setToast({ message, type });
  };

  const handleViewReferralUsage = async (user) => {
    if (!user.referralCodeOwner || user.referralCodeOwner.type === "admin") {
      return;
    }

    try {
      setUsageLoading(true);
      setSelectedUser(user);
      setShowUsageModal(true);

      // Find the user who owns this referral code
      const response = await getUserReferralUsage({
        userId: user.referralCodeOwner.id, // You'll need to pass the owner's ID
        page: 1,
        limit: 50,
      });

      setUsageData(response.data.data || []);
    } catch (error) {
      console.error("Error loading usage data:", error);
      showToast("Failed to load referral usage", "error");
      setUsageData([]);
    } finally {
      setUsageLoading(false);
    }
  };

  const setUserActionLoading = (userId, action, isLoading) => {
    setActionLoading((prev) => ({
      ...prev,
      [`${userId}-${action}`]: isLoading,
    }));
  };

  const isUserActionLoading = (userId, action) => {
    return actionLoading[`${userId}-${action}`] || false;
  };

  useEffect(() => {
    loadPendingUsers();
  }, []);

  useEffect(() => {
    let filtered = users;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (user) =>
          user.email?.toLowerCase().includes(query) ||
          user.businessName?.toLowerCase().includes(query) ||
          user.firstName?.toLowerCase().includes(query) ||
          user.lastName?.toLowerCase().includes(query) ||
          user.phone?.toLowerCase().includes(query) ||
          user.website?.toLowerCase().includes(query) ||
          user.instagram?.toLowerCase().includes(query)
      );
    }

    setFilteredUsers(filtered);
  }, [users, searchQuery]);

  const loadPendingUsers = async () => {
    try {
      setLoading(true);
      const data = await getPendingUsers();
      const pendingUsers = data.data.users.filter(
        (user) => user.status === "pending"
      );
      setUsers(pendingUsers);
    } catch (error) {
      console.error("Failed to fetch pending users:", error);
      showToast("Failed to load pending users", "error");
    } finally {
      setLoading(false);
    }
  };


  const handleApprove = async (userId) => {
    if (isUserActionLoading(userId, "approve")) {
      return;
    }

    try {
      setUserActionLoading(userId, "approve", true);
      const response = await approveUser(userId);

      if (response.success) {
        setUsers((prev) => prev.filter((u) => u.id !== userId));
        setSelectedUsers((prev) => prev.filter((id) => id !== userId));
        showToast("User approved successfully", "success");
      }
    } catch (error) {
      console.log("==================== ERROR CAUGHT ====================");
      console.log("Error object:", error);
      console.log("Error.response:", error.response);
      console.log("Error.response.data:", error.response?.data);
      console.log("====================================================");

      const errorData = error.response?.data;

      if (
        errorData?.errorType === "REFERRAL_LIMIT_REACHED" ||
        errorData?.showAdminPopup === true ||
        errorData?.requiresSignup === true
      ) {
        console.log("✅ SHOWING POPUP!");
        setLimitReachedUserId(userId);
        setShowLimitPopup(true);
      } else {
        console.log("❌ SHOWING TOAST");
        showToast(errorData?.message || "Failed to approve user", "error");
      }
    } finally {
      setUserActionLoading(userId, "approve", false);
    }
  };

  const handleLimitPopupClose = () => {
    setShowLimitPopup(false);
    // Remove user from UI
    if (limitReachedUserId) {
      setUsers((prev) => prev.filter((u) => u.id !== limitReachedUserId));
      setSelectedUsers((prev) =>
        prev.filter((id) => id !== limitReachedUserId)
      );
      setLimitReachedUserId(null);
    }
    // Reload to ensure UI is in sync with backend
    loadPendingUsers();
  };

  const handleReject = async (userId) => {
    // Prevent double-click
    if (isUserActionLoading(userId, "reject")) {
      return;
    }

    try {
      setUserActionLoading(userId, "reject", true);

      // Immediately remove from UI
      setUsers((prev) => prev.filter((u) => u.id !== userId));
      setSelectedUsers((prev) => prev.filter((id) => id !== userId));

      await rejectUser(userId);
      showToast("User rejected successfully", "success");
    } catch (error) {
      console.error("Failed to reject user:", error);
      showToast(
        error.response?.data?.message || "Failed to reject user",
        "error"
      );

      // Reload users on error
      await loadPendingUsers();
    } finally {
      setUserActionLoading(userId, "reject", false);
    }
  };

  const handleBulkApprove = async () => {
    if (selectedUsers.length === 0) return;

    try {
      setBulkLoading(true);
      await bulkUpdateUserStatus({
        userIds: selectedUsers,
        status: "approved",
      });
      setUsers((prev) => prev.filter((u) => !selectedUsers.includes(u.id)));
      setSelectedUsers([]);
      showToast(
        `${selectedUsers.length} users approved successfully`,
        "success"
      );
    } catch (error) {
      console.error("Failed to bulk approve users:", error);
      showToast("Failed to bulk approve users", "error");
    } finally {
      setBulkLoading(false);
    }
  };

  const handleBulkReject = async () => {
    if (selectedUsers.length === 0) return;

    try {
      setBulkLoading(true);
      await bulkUpdateUserStatus({
        userIds: selectedUsers,
        status: "rejected",
      });
      setUsers((prev) => prev.filter((u) => !selectedUsers.includes(u.id)));
      setSelectedUsers([]);
      showToast(
        `${selectedUsers.length} users rejected successfully`,
        "success"
      );
    } catch (error) {
      console.error("Failed to bulk reject users:", error);
      showToast("Failed to bulk reject users", "error");
    } finally {
      setBulkLoading(false);
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedUsers(filteredUsers.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId, checked) => {
    if (checked) {
      setSelectedUsers((prev) => [...prev, userId]);
    } else {
      setSelectedUsers((prev) => prev.filter((id) => id !== userId));
    }
  };

  const columns = [
    {
      key: "registrationDate",
      header: "Date",
      render: (user) => (
        <div className="text-gray-600">
          {user.createdAt
            ? new Date(user.createdAt).toLocaleDateString()
            : "N/A"}
        </div>
      ),
    },
    {
      key: "email",
      header: "Email",
      render: (user) => (
        <div className="relative inline-block">
          <div
            className="text-gray-600 cursor-pointer hover:text-blue-600"
            onClick={() =>
              setExpandedEmailId(expandedEmailId === user.id ? null : user.id)
            }
          >
            {user.email}
          </div>

          {expandedEmailId === user.id && user.phone && (
            <div className="mt-1 text-xs text-gray-500 border rounded p-1 bg-gray-50 shadow-lg fixed left-4 right-4 sm:relative sm:left-auto sm:right-auto sm:mt-1 z-50">
              📞 {user.phone}
            </div>
          )}
        </div>
      ),
    },
    {
      key: "website",
      header: "Website",
      render: (user) =>
        user.website ? (
          <a
            href={user.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {user.website}
          </a>
        ) : (
          <span className="text-gray-400">N/A</span>
        ),
    },
    {
      key: "instagram",
      header: "Instagram",
      render: (user) => {
        if (!user.instagram) {
          return <span className="text-gray-400">N/A</span>;
        }

        const username = user.instagram.startsWith("@")
          ? user.instagram.slice(1)
          : user.instagram;

        const url = `https://instagram.com/${username}`;

        return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {user.instagram}
          </a>
        );
      },
    },
    {
      key: "creativeDomains",
      header: "Creative Domains",
      render: (user) =>
        user.creativeDomains?.length > 0 ? (
          <span className="text-gray-600">
            {user.creativeDomains.join(", ")}
          </span>
        ) : (
          <span className="text-gray-400">N/A</span>
        ),
    },
    {
      key: "phone",
      header: "Phone",
      render: (user) => (
        <div className="text-gray-600">{user.phone || "N/A"}</div>
      ),
    },
    {
      key: "referralCode",
      header: "Referral Code",
      render: (user) => {
        if (!user.referralCodeOwner) {
          return <span className="text-gray-400">N/A</span>;
        }

        if (user.referralCodeOwner.type === "admin") {
          return (
            <div className="text-gray-600">
              <div className="font-semibold">Admin</div>
            </div>
          );
        }

        return (
          <div
            className="cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
            onClick={() => handleViewReferralUsage(user)}
          >
            <div
              className="text-sm text-gray-600 max-w-[200px] truncate"
              title={user.referralCodeOwner.email}
            >
              {user.referralCodeOwner.email}
            </div>
            <div
              className="text-sm text-blue-600 truncate max-w-[200px]"
              title={user.referralCodeOwner.instagram || "N/A"}
            >
              {user.referralCodeOwner.instagram || "N/A"}
            </div>
          </div>
        );
      },
    },
    {
      key: "actions",
      header: "Actions",
      render: (user) => (
        <ActionButtons
          onApprove={() => handleApprove(user.id)}
          onReject={() => handleReject(user.id)}
          showApproveReject={true}
          approveLoading={isUserActionLoading(user.id, "approve")}
          rejectLoading={isUserActionLoading(user.id, "reject")}
        />
      ),
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-7xl mx-auto">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {showLimitPopup && (
        <SimplePopup
          message="Referral code has reached its usage limit, All user data will be deleted"
          buttonText="OK"
          onClose={handleLimitPopupClose}
        />
      )}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            Pending User Approvals
          </h1>
          <p className="text-gray-600">
            Review and approve or reject pending user registrations
          </p>
        </div>

        <div className="mb-6">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search users by email, name, business, phone, website, or Instagram..."
            className="w-full max-w-md"
          />
        </div>

        {selectedUsers.length > 0 && (
          <div className="mb-6">
            <BulkActions
              selectedCount={selectedUsers.length}
              onBulkApprove={handleBulkApprove}
              onBulkReject={handleBulkReject}
              loading={bulkLoading}
            />
          </div>
        )}

        {filteredUsers.length > 0 ? (
          <DataTable
            data={filteredUsers}
            columns={columns}
            selectedRows={selectedUsers}
            onSelectAll={handleSelectAll}
            onSelectRow={handleSelectUser}
            className="bg-white border border-gray-200 rounded-lg shadow-sm"
          />
        ) : searchQuery ? (
          <EmptyState
            title="No users found"
            description="No pending users match your search criteria."
          />
        ) : (
          <EmptyState
            title="No pending users"
            description="There are no users waiting for approval at the moment."
          />
        )}
      </div>

      {/* Referral Usage Modal */}
      <Modal
        isOpen={showUsageModal}
        onClose={() => {
          setShowUsageModal(false);
          setSelectedUser(null);
          setUsageData([]);
        }}
        title={`Referral Code: ${selectedUser?.referralCodeOwner?.code || "N/A"
          }`}
        size="lg"
      >
        <div className="space-y-4">
          {selectedUser && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-700">
                    Total Usage:
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {Array.isArray(usageData) ? usageData.length : 0}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700">
                    Code Owner:
                  </div>
                  <div className="font-medium text-gray-900  max-w-[340px] break-words">
                    {selectedUser.referralCodeOwner?.email || "N/A"}
                  </div>
                </div>
              </div>
            </div>
          )}

          {usageLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader className="h-6 w-6 animate-spin mr-2" />
              <span>Loading usage data...</span>
            </div>
          ) : !Array.isArray(usageData) || usageData.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-500 mb-2">
                No usage data found for this referral code
              </div>
              <div className="text-sm text-gray-400">
                This code hasn't been used by any users yet.
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-700 mb-3">
                Users who used this code:
              </div>
              <div className="space-y-2 max-h-[400px] overflow-y-auto">
                {usageData.map((usage, index) => (
                  <div
                    key={usage.id || `usage-${index}`}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-sm text-gray-900 truncate">
                        {usage.user?.email || "No email"}
                      </div>
                      {(usage.user?.firstName || usage.user?.lastName) && (
                        <div className="text-xs text-gray-600 mt-1">
                          {[usage.user?.firstName, usage.user?.lastName]
                            .filter(Boolean)
                            .join(" ")}
                        </div>
                      )}
                      {usage.referralLevel && (
                        <div className="inline-block mt-2 text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                          Level {usage.referralLevel}
                        </div>
                      )}
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-xs text-gray-500">
                        {usage.usedAt
                          ? new Date(usage.usedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                          : "Unknown"}
                      </div>
                      {parseFloat(usage.pointsToUser) > 0 && (
                        <div className="text-xs text-green-600 font-medium">
                          +{parseFloat(usage.pointsToUser).toFixed(1)} pts
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="mt-6">
          <button
            onClick={() => {
              setShowUsageModal(false);
              setSelectedUser(null);
              setUsageData([]);
            }}
            className="w-full bg-gray-300 hover:bg-gray-400 shadow-sm px-5 py-2 rounded-xl cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
