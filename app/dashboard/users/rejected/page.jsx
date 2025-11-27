"use client";
import { useState, useEffect } from "react";
import { ApprovedUsersTable } from "../components/ApprovedUsersTable";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { EmptyState } from "../components/EmptyState";
import { SearchBar } from "../components/SearchBar";
import {
  getRejectedUsers,
  deleteUser,
  getUserReferralUsage,
} from "../../../../action";
import Toast from "../../../../components/Toast";
import { Loader, Trash2, MoreVertical } from "lucide-react";
import { RejectedUsersTable } from "../components/RejectedUsersTable";
import Modal from "../../referrals/components/Modal";
import PhotographerIcon from "../components/icons/PhotographerIcon";
import VideographerIcon from "../components/icons/VideographerIcon";
import FloristIcon from "../components/icons/FloristIcon";
import PlannerIcon from "../components/icons/PlannerIcon";
import OwnerEmailModal from "../components/OwnerEmailModal";



const domainIconsMap = {
  photography: <PhotographerIcon size={12} />,
  videography: <VideographerIcon size={12} />,
  florist: <FloristIcon size={12} />,
  planner: <PlannerIcon size={12} />,
};

function getDomainIcons(domains) {
  return domains
    .map((domain) => domainIconsMap[domain.toLowerCase()] || null)
    .filter(Boolean)
    .map((icon, i) => (
      <span key={i} className="inline-flex items-center mx-0.5">
        {icon}
      </span>
    ));
}


// Confirmation Modal Component
const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  loading,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0000006e] bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 ">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={loading}
          >
            ✕
          </button>
        </div>
        <div className="px-6">
          <p className="text-gray-600">{message}</p>
        </div>
        <div className="flex gap-3 p-6 ">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <>
                <Loader className="h-4 w-4 animate-spin mr-2" />
                Deleting...
              </>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// Actions Dropdown Component
const ActionsDropdown = ({ onDelete, loading = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (action) => {
    setIsOpen(false);
    action();
  };

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
        disabled={loading}
      >
        {loading ? (
          <Loader className="h-4 w-4 animate-spin" />
        ) : (
          <MoreVertical className="h-4 w-4" />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-20">
            <div className="py-1">
              <button
                onClick={() => handleAction(onDelete)}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete User
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default function RejectedUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });

  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);
  const [currentReferralUser, setCurrentReferralUser] = useState(null);
  const [referralUsageList, setReferralUsageList] = useState([]);
  const [isLoadingReferralData, setIsLoadingReferralData] = useState(false);

  const [expandedEmailId, setExpandedEmailId] = useState(null);
  const [usageLoading, setUsageLoading] = useState(false);
  const [showUsageModal, setShowUsageModal] = useState(false);
  const [usageData, setUsageData] = useState([]);
  const [showOwnerModal, setShowOwnerModal] = useState(false);
  const [ownerRefferal, setOwner] = useState(null);

  const handleShowOwnerEmail = (owner) => {
    setOwner(owner)
    setShowOwnerModal(true);
  };


  const handleViewReferralUsage = async (user) => {
    try {
      setUsageLoading(true);
      setSelectedUser(user);
      setShowUsageModal(true);

      const response = await getUserReferralUsage({
        userId: user.id,
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

  const showToast = (message, type = "info") => {
    setToast({ message, type });
  };

  useEffect(() => {
    loadRejectedUsers(1, searchQuery, statusFilter);
  }, [statusFilter]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadRejectedUsers(1, searchQuery, statusFilter);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const loadRejectedUsers = async (page = 1, search = "", status = "all") => {
    try {
      setLoading(true);
      const response = await getRejectedUsers({
        page,
        limit: pagination.limit,
        search: search.trim(),
        status,
      });

      setUsers(response.data.data || []);
      setPagination({
        page: response.data.pagination?.page || 1,
        limit: response.data.pagination?.limit || 10,
        total: response.data.pagination?.total || 0,
        totalPages: response.data.pagination?.pages || 0,
      });
    } catch (error) {
      console.error("Failed to fetch rejected users:", error);
      showToast("Failed to load rejected users", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async () => {
    if (!selectedUser) return;

    try {
      setDeleteLoading(true);
      await deleteUser(selectedUser.id);
      showToast("User deleted successfully", "success");
      setShowDeleteModal(false);
      setSelectedUser(null);
      loadRejectedUsers(pagination.page, searchQuery, statusFilter);
    } catch (error) {
      console.error("Error deleting user:", error);
      showToast("Failed to delete user", "error");
    } finally {
      setDeleteLoading(false);
    }
  };

  const columns = [
    {
      key: "createdAt",
      header: "Date",
      render: (user) => (
        <div className="text-gray-600 text-sm">
          {user.createdAt
            ? new Date(user.createdAt).toLocaleDateString()
            : "N/A"}
        </div>
      ),
    },
     {
      key: "email",
      header: "Email",
      render: (user) => {
        const isOpen = expandedEmailId === user.id;
        return (
          <div className="relative inline-block">
            <div
              className="flex items-center gap-1 text-gray-600 cursor-pointer hover:text-blue-600 text-sm"
              onClick={() =>
                setExpandedEmailId(isOpen ? null : user.id)
              }
            >
              {user.email}
              <span className={`transition-transform ${isOpen ? "rotate-90" : ""}`}>
                ▶
              </span>
            </div>

            {isOpen && user.phone && (
              <div className="mt-1 text-xs text-gray-500 border rounded p-1 bg-gray-50 shadow-lg fixed left-4 right-4 sm:relative sm:left-auto sm:right-auto sm:mt-1 z-50">
                📞 {user.phone}
              </div>
            )}
          </div>
        );
      },
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
            className="text-blue-600 hover:underline text-sm"
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

        return (
          <div className="flex flex-col items-start">
            <a
              href={`https://instagram.com/${user.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              {user.instagram}
            </a>

            <div className="flex items-center gap-1 mt-0.5">
              {getDomainIcons(user.creativeDomains)}
            </div>
          </div>

        );
      },
    },

    {
      key: "referralCode",
      header: "Referral Code",
      render: (user) => {
        const owner = user.referralCodeOwner;

        if (!owner) {
          return <span className="text-gray-400">N/A</span>;
        }

        return (
          <div
            className="cursor-pointer max-w-[240px]"
            onClick={() => handleShowOwnerEmail(user.referralCodeOwner)}
          >

            <div className="text-sm font-semibold text-blue-600">
              {owner.code || "N/A"}
            </div>
          </div>
        );
      },
    },
  ];

  if (loading && pagination.page === 1) {
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

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Rejected Users</h1>
          <p className="text-gray-600">
            View and manage rejected user accounts
          </p>
        </div>

        <div className="mb-6 flex gap-4 items-center">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by email, name, business, or referral code..."
            className="flex-1 max-w-md"
          />
        </div>

        {searchQuery && (
          <div className="mb-4 text-sm text-gray-600">
            {pagination.total === 0
              ? `No results found for "${searchQuery}"`
              : `Found ${pagination.total} result${pagination.total !== 1 ? "s" : ""
              } for "${searchQuery}"`}
          </div>
        )}

        {users.length > 0 ? (
          <>
            <RejectedUsersTable
              data={users}
              columns={columns}
              className="bg-white border border-gray-200 rounded-lg shadow-sm"
            />

            {pagination.totalPages > 1 && (
              <div className="mt-6 flex justify-end items-center space-x-2">
                <button
                  onClick={() =>
                    loadRejectedUsers(
                      pagination.page - 1,
                      searchQuery,
                      statusFilter
                    )
                  }
                  disabled={pagination.page <= 1 || loading}
                  className={`px-3 py-1 bg-gray-200 rounded disabled:opacity-50 shadow-md ${pagination.page <= 1 || loading
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                    }`}
                >
                  Previous
                </button>
                <span className="text-sm text-gray-600">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
                <button
                  onClick={() =>
                    loadRejectedUsers(
                      pagination.page + 1,
                      searchQuery,
                      statusFilter
                    )
                  }
                  disabled={pagination.page >= pagination.totalPages || loading}
                  className={`px-3 py-1 bg-gray-200 rounded disabled:opacity-50 shadow-md ${pagination.page >= pagination.totalPages || loading
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                    }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : searchQuery ? (
          <EmptyState
            title="No users found"
            description="No rejected users match your search criteria."
          />
        ) : (
          <EmptyState
            title="No rejected users"
            description="There are no rejected users at the moment."
          />
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedUser(null);
        }}
        onConfirm={handleDeleteUser}
        title="Delete User"
        message={`Are you sure you want to delete ${selectedUser?.email}? This action cannot be undone.`}
        loading={deleteLoading}
      />
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
                      <div
                        className="font-medium text-sm text-gray-900 line-clamp-2 break-all"
                        title={usage.user?.email}
                      >
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

      <OwnerEmailModal
        isOpen={showOwnerModal}
        onClose={() => setShowOwnerModal(false)}
        owner={ownerRefferal}

      />
    </div>
  );
}
