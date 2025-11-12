"use client";
import { useState, useEffect } from "react";
import { ApprovedUsersTable } from "../components/ApprovedUsersTable";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { EmptyState } from "../components/EmptyState";
import { SearchBar } from "../components/SearchBar";
import { getApprovedUsers, getUserReferralUsage } from "../../../../action";
import Toast from "../../../../components/Toast";
import { Loader, Eye, MoreVertical } from "lucide-react";
import { Camera, Video, Clipboard, Flower2 } from "lucide-react";

// Modal Component
const Modal = ({ isOpen, onClose, title, children, size = "md" }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    md: "max-w-md",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0000006e] bg-opacity-50">
      <div
        className={`bg-white rounded-lg shadow-xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

const domainIconsMap = {
  photography: <Camera size={16} />,
  videography: <Video size={16} />,
  florist: <Flower2 size={16} />,
  planner: <Clipboard size={16} />,
};

function getDomainIcons(domains) {
  return domains
    .map((domain) => domainIconsMap[domain.toLowerCase()] || null)
    .filter(Boolean)
    .map((icon, i) => (
      <span key={i} className="mx-1">
        {icon}
      </span>
    ));
}

const ActionsDropdown = ({ onViewUsage, loading = false }) => {
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
                onClick={() => handleAction(onViewUsage)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Usage
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default function ApprovedUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState(null);
  const [showUsageModal, setShowUsageModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [usageData, setUsageData] = useState([]);
  const [usageLoading, setUsageLoading] = useState(false);
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


  const handleViewReferralOwnerUsage = async (user) => {
    if (!user.referralCodeOwner || user.referralCodeOwner.type === "admin") {
      return;
    }

    try {
      setIsLoadingReferralData(true);
      setCurrentReferralUser(user);
      setIsReferralModalOpen(true);

      const response = await getUserReferralUsage({
        userId: user.referralCodeOwner.id,
        page: 1,
        limit: 50,
      });

      setReferralUsageList(response.data.data || []);
    } catch (error) {
      console.error("Error loading usage data:", error);
      showToast("Failed to load referral usage", "error");
      setReferralUsageList([]);
    } finally {
      setIsLoadingReferralData(false);
    }
  };

  const showToast = (message, type = "info") => {
    setToast({ message, type });
  };

  useEffect(() => {
    loadApprovedUsers(1, searchQuery);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadApprovedUsers(1, searchQuery);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const loadApprovedUsers = async (page = 1, search = "") => {
    try {
      setLoading(true);
      const response = await getApprovedUsers({
        page,
        limit: pagination.limit,
        search: search.trim(),
      });

      setUsers(response.data.data || []);
      setPagination({
        page: response.data.pagination?.page || 1,
        limit: response.data.pagination?.limit || 10,
        total: response.data.pagination?.total || 0,
        totalPages: response.data.pagination?.pages || 0,
      });
    } catch (error) {
      console.error("Failed to fetch approved users:", error);
      showToast("Failed to load approved users", "error");
    } finally {
      setLoading(false);
    }
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
    }
    ,
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
          <a
            href={`https://instagram.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
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
          <span className="text-gray-600 text-sm">
            {/* {user.creativeDomains.join(", ")} */}
            {getDomainIcons(user.creativeDomains)}
          </span>
        ) : (
          <span className="text-gray-400">N/A</span>
        ),
    },
    {
      key: "phone",
      header: "Phone",
      render: (user) => (
        <div className="text-gray-600 text-sm">{user.phone || "N/A"}</div>
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
            className="max-w-[220px] cursor-pointer"
            onClick={() => handleViewReferralOwnerUsage(user)}
          >
            <div
              className="text-sm text-gray-600 truncate"
              title={user.referralCodeOwner.email}
            >
              {user.referralCodeOwner.email}
            </div>
            <div
              className="text-sm text-blue-600 truncate"
              title={user.referralCodeOwner.instagram || "N/A"}
            >
              {user.referralCodeOwner.instagram || "N/A"}
            </div>
          </div>
        );
      },
    },
    {
      key: "points",
      header: "Points",
      render: (user) => (
        <div
          onClick={() => handleViewReferralUsage(user)}
          className="text-gray-600 font-medium cursor-pointer hover:text-blue-600 transition-colors"
        >
          {parseFloat(user.points || 0).toFixed(2)}
        </div>
      ),
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
          <h1 className="text-3xl font-bold text-black mb-2">Approved Users</h1>
          <p className="text-gray-600">
            View and manage approved user accounts and their referral usage
          </p>
        </div>

        <div className="mb-6">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by email, name, business, or referral code..."
            className="w-full max-w-md"
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
            <ApprovedUsersTable
              data={users}
              columns={columns}
              className="bg-white border border-gray-200 rounded-lg shadow-sm"
            />

            {pagination.totalPages > 1 && (
              <div className="mt-6 flex justify-end items-center space-x-2">
                <button
                  onClick={() =>
                    loadApprovedUsers(pagination.page - 1, searchQuery)
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
                    loadApprovedUsers(pagination.page + 1, searchQuery)
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
            description="No approved users match your search criteria."
          />
        ) : (
          <EmptyState
            title="No approved users"
            description="There are no approved users at the moment."
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
        title={`Referral Usage: ${selectedUser?.email || "N/A"}`}
        size="lg"
      >
        <div className="space-y-4">
          {selectedUser && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-700">
                    Total Referrals:
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {Array.isArray(usageData) ? usageData.length : 0}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700">
                    Personal Code:
                  </div>
                  <div className="font-mono text-sm bg-gray-200 px-2 py-1 rounded mt-1">
                    {selectedUser.personalReferralCode || "N/A"}
                  </div>
                </div>
              </div>
            </div>
          )}

          {usageLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="h-6 w-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mr-2" />
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
                      <div className="font-medium text-sm text-gray-900">
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

      {/* Referral Usage Modal */}
      <Modal
        isOpen={isReferralModalOpen}
        onClose={() => {
          setIsReferralModalOpen(false);
          setCurrentReferralUser(null);
          setReferralUsageList([]);
        }}
        title={`Referral Code: ${currentReferralUser?.referralCodeOwner?.code || "N/A"
          }`}
        size="lg"
      >
        <div className="space-y-4">
          {currentReferralUser && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-700">
                    Total Usage:
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {Array.isArray(referralUsageList)
                      ? referralUsageList.length
                      : 0}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700">
                    Code Owner:
                  </div>
                  <div className="font-medium text-gray-900  max-w-[340px] break-words">
                    {currentReferralUser.referralCodeOwner?.email || "N/A"}
                  </div>
                </div>
              </div>
            </div>
          )}

          {isLoadingReferralData ? (
            <div className="flex items-center justify-center py-8">
              <Loader className="h-6 w-6 animate-spin mr-2" />
              <span>Loading usage data...</span>
            </div>
          ) : !Array.isArray(referralUsageList) ||
            referralUsageList.length === 0 ? (
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
                {referralUsageList.map((usage, index) => (
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
              setIsReferralModalOpen(false);
              setCurrentReferralUser(null);
              setReferralUsageList([]);
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
