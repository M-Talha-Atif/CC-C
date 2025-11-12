"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Search, Plus, Loader } from "lucide-react";
import {
  getReferralCodes,
  getUsers,
  createReferralCode,
  updateReferralCode,
  deleteReferralCode,
  getReferralUsage,
  assignReferralCode,
  unassignReferralCode,
} from "../../../action";
import Toast from "../../../components/Toast";
import Modal from "./components/Modal";
import ActionsDropdown from "./components/ActionsDropdown";
import DataTable from "./components/DataTable";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import StatusBadge from "./components/StatusBadge";

const ReferralManagement = () => {
  const [users, setUsers] = useState([]);
  const [referralCodes, setReferralCodes] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUsageModal, setShowUsageModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedCodeForAssign, setSelectedCodeForAssign] = useState(null);
  const [selectedUserForAssign, setSelectedUserForAssign] = useState("");
  const [selectedCodeUsage, setSelectedCodeUsage] = useState([]);
  const [selectedCodeForUsage, setSelectedCodeForUsage] = useState(null); // Add this state
  const [usageLoading, setUsageLoading] = useState(false); // Add this state
  const [selectedUser, setSelectedUser] = useState("admin");
  const [codeCount, setCodeCount] = useState(1);
  const [description, setDescription] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [createLoading, setCreateLoading] = useState(false);
  const [assignLoading, setAssignLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState({});
  const [toast, setToast] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 7,
    total: 0,
    totalPages: 0,
  });

  const showToast = (message, type = "info") => {
    setToast({ message, type });
  };

  const loadData = async (page = 1, search = searchTerm) => {
    try {
      setLoading(true);

      const codesResponse = await getReferralCodes({
        page,
        limit: pagination.limit,
        search: search.trim() || undefined,
      });

      console.log("Codes response:", codesResponse);

      const codes = codesResponse.data.data || [];
      setReferralCodes(codes);

      setPagination({
        page: codesResponse.data.pagination?.page || 1,
        limit: codesResponse.data.pagination?.limit || 10,
        total: codesResponse.data.pagination?.total || 0,
        totalPages: codesResponse.data.pagination?.pages || 0,
      });
    } catch (error) {
      console.error("Error loading data:", error);
      showToast("Failed to load referral codes", "error");
    } finally {
      setLoading(false);
    }
  };

  const loadUsers = async () => {
    try {
      const usersResponse = await getUsers({ limit: 100 });
      setUsers(usersResponse.data.data || []);
    } catch (error) {
      console.error("Error loading users:", error);
      showToast("Failed to load users", "error");
    }
  };

  useEffect(() => {
    loadData();
    loadUsers();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadData(1, searchTerm);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  function generateReferralCode() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const getRandom = (chars, length) =>
      Array.from(
        { length },
        () => chars[Math.floor(Math.random() * chars.length)]
      ).join("");

    return getRandom(letters, 3) + getRandom(numbers, 3);
  }

  const handleCreateReferralCode = async () => {
    try {
      setCreateLoading(true);

      const numCodes = selectedUser === "admin" ? codeCount : 1;
      const createdCodes = [];

      for (let i = 0; i < numCodes; i++) {
        const payload = {
          code: generateReferralCode(),
          description,
          expiresAt: expiresAt || null,
          assignedToUserId: selectedUser === "admin" ? null : selectedUser,
        };

        try {
          const result = await createReferralCode(payload);
          createdCodes.push(result);
        } catch (error) {
          console.error(`Failed to create code ${i + 1}:`, error);
        }
      }

      if (createdCodes.length > 0) {
        showToast(
          `${createdCodes.length} referral code(s) created successfully`,
          "success"
        );
        setShowCreateModal(false);
        resetCreateForm();
        loadData(1);
      } else {
        showToast("Failed to create any referral codes", "error");
      }
    } catch (error) {
      console.error("Error creating referral codes:", error);
      showToast("Failed to create referral code", "error");
    } finally {
      setCreateLoading(false);
    }
  };

  const resetCreateForm = () => {
    setSelectedUser("admin");
    setDescription("");
    setExpiresAt("");
    setCodeCount(1);
  };

  const handlePause = async (codeId) => {
    try {
      setActionLoading((prev) => ({ ...prev, [codeId]: true }));
      const code = referralCodes.find((c) => c.id === codeId);
      await updateReferralCode({
        id: codeId,
        isActive: !code.isActive,
      });
      showToast(
        `Referral code ${code.isActive ? "paused" : "resumed"} successfully`,
        "success"
      );
      loadData(pagination.page);
    } catch (error) {
      console.error("Error updating referral code:", error);
      showToast("Failed to update referral code", "error");
    } finally {
      setActionLoading((prev) => ({ ...prev, [codeId]: false }));
    }
  };

  const handleViewUsage = async (code) => {
    try {
      setUsageLoading(true);
      setSelectedCodeForUsage(code);
      setShowUsageModal(true);

      console.log("Fetching usage for code:", code.code);

      const usageResponse = await getReferralUsage({
        referralCode: code.code,
        page: 1,
        limit: 50, // Get more results for usage view
      });

      console.log("Usage response:", usageResponse);

      // Handle the response structure based on your data format
      let usageData = [];

      if (
        usageResponse &&
        usageResponse.success &&
        usageResponse.data &&
        usageResponse.data.data
      ) {
        // Your current data structure: response.data.data
        usageData = usageResponse.data.data;
      } else if (
        usageResponse &&
        usageResponse.data &&
        Array.isArray(usageResponse.data)
      ) {
        // Alternative structure: response.data is array
        usageData = usageResponse.data;
      } else if (Array.isArray(usageResponse)) {
        // Direct array response
        usageData = usageResponse;
      } else {
        // Fallback to empty array
        usageData = [];
      }

      console.log("Processed usage data:", usageData);
      console.log("Usage data length:", usageData.length);
      console.log(
        "Usage data type:",
        typeof usageData,
        Array.isArray(usageData)
      );

      setSelectedCodeUsage(usageData);
    } catch (error) {
      console.error("Error loading usage data:", error);
      showToast("Failed to load usage data", "error");
      setSelectedCodeUsage([]);
    } finally {
      setUsageLoading(false);
    }
  };

  const handleAssignUser = (code) => {
    setSelectedCodeForAssign(code);
    setSelectedUserForAssign("");
    setShowAssignModal(true);
  };

  const handleConfirmAssign = async () => {
    if (!selectedUserForAssign || !selectedCodeForAssign) {
      showToast("Please select a user to assign", "error");
      return;
    }

    try {
      setAssignLoading(true);
      const res = await assignReferralCode({
        id: selectedCodeForAssign.id,
        userId: selectedUserForAssign,
      });

      if (res.success) {
        showToast("User assigned successfully", "success");
        setShowAssignModal(false);
        setSelectedCodeForAssign(null);
        setSelectedUserForAssign("");
        loadData(pagination.page);
      } else {
        showToast(res.message || "Failed to assign user", "error");
      }
    } catch (error) {
      console.error("Error assigning user:", error);
      showToast("Unexpected error occurred", "error");
    } finally {
      setAssignLoading(false);
    }
  };

  const handleUnassignUser = async (codeId) => {
    try {
      setActionLoading((prev) => ({ ...prev, [codeId]: true }));
      await unassignReferralCode(codeId);
      showToast("User unassigned successfully", "success");
      loadData(pagination.page);
    } catch (error) {
      console.error("Error unassigning user:", error);
      showToast("Failed to unassign user", "error");
    } finally {
      setActionLoading((prev) => ({ ...prev, [codeId]: false }));
    }
  };

  const handleDelete = async (codeId) => {
    try {
      setActionLoading((prev) => ({ ...prev, [codeId]: true }));
      await deleteReferralCode(codeId);
      showToast("Referral code deleted successfully", "success");
      loadData(pagination.page);
    } catch (error) {
      console.error("Error deleting referral code:", error);
      showToast("Failed to delete referral code", "error");
    } finally {
      setActionLoading((prev) => ({ ...prev, [codeId]: false }));
    }
  };

  const columns = [
    {
      header: "Code",
      key: "code",
      render: (row) => (
        <span className="font-mono text-xs bg-gray-200 px-3 py-1 rounded-md border-none">
          {row.code}
        </span>
      ),
    },
    {
      header: "Assigned To",
      key: "assignedTo",
      render: (row) => (
        <div>
          <div className="font-medium text-sm">
            {row.assignedUser
              ? `${row.assignedUser.firstName || ""} ${
                  row.assignedUser.lastName || ""
                }`.trim() || row.assignedUser.email
              : "Admin (Unassigned)"}
          </div>
          {row.assignedUser && (
            <div className="text-xs text-gray-500">
              {row.assignedUser.email}
            </div>
          )}
        </div>
      ),
    },
    {
      header: "Status",
      key: "status",
      render: (row) => (
        <StatusBadge
          status={!row.isActive ? "Paused" : row.isUsed ? "Used" : "Active"}
          variant={!row.isActive ? "paused" : row.isUsed ? "success" : "active"}
        />
      ),
    },
    {
      header: "Created At",
      key: "createdAt",
      render: (row) => (
        <span className="text-sm">
          {row.createdAt
            ? new Date(row.createdAt).toLocaleDateString()
            : "Never"}
        </span>
      ),
    },
    {
      header: "Expires At",
      key: "expireAt",
      render: (row) => (
        <span className="text-sm">
          {row.expireAt ? new Date(row.expireAt).toLocaleDateString() : "Never"}
        </span>
      ),
    },
    {
      header: "Actions",
      key: "actions",
      render: (row) => (
        <ActionsDropdown
          isPaused={!row.isActive}
          loading={actionLoading[row.id]}
          hasAssignedUser={!!row.assignedUser}
          onPause={() => handlePause(row.id)}
          onList={() => handleViewUsage(row)}
          onAssign={() => handleAssignUser(row)}
          onUnassign={() => handleUnassignUser(row.id)}
          onDelete={() => handleDelete(row.id)}
        />
      ),
    },
  ];

  const userOptions = [
    { value: "", label: "Select a user" },
    ...users.map((user) => ({
      value: user.id.toString(),
      label:
        `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.email,
    })),
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Toast */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Referral Management</h1>
            <p className="text-gray-400">
              Create and manage referral codes for your users
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex items-center justify-between w-full">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search codes, users, emails..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none shadow-sm transition-all ease-in-out hover:shadow-lg rounded-lg text-black placeholder-gray-400 focus:ring-0 focus:outline-none focus:border-transparent"
            />
          </div>
          <button
            className="shadow-sm flex items-center px-4 py-2 rounded-xl transition-all ease-in-out cursor-pointer bg-white hover:shadow-lg"
            onClick={() => setShowCreateModal(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Code
          </button>
        </div>

        {/* Search Results Info */}
        {searchTerm && (
          <div className="mb-4 text-sm text-gray-600">
            {pagination.total === 0
              ? `No results found for "${searchTerm}"`
              : `Found ${pagination.total} result${
                  pagination.total !== 1 ? "s" : ""
                } for "${searchTerm}"`}
          </div>
        )}

        {/* Table */}
        <DataTable
          columns={columns}
          data={referralCodes}
          loading={loading}
          emptyMessage={
            searchTerm
              ? `No referral codes found matching "${searchTerm}"`
              : "No referral codes found"
          }
        />

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="mt-6 flex justify-end items-center space-x-2 ">
            <button
              onClick={() => loadData(pagination.page - 1, searchTerm)}
              disabled={pagination.page <= 1 || loading}
              className={`px-3 py-1 bg-gray-200 rounded disabled:opacity-50 shadow-md ${
                pagination.page <= 1 || loading
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => loadData(pagination.page + 1, searchTerm)}
              disabled={pagination.page >= pagination.totalPages || loading}
              className={`px-3 py-1 bg-gray-200 rounded disabled:opacity-50 shadow-md ${
                pagination.page >= pagination.totalPages || loading
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Create Modal */}
        <Modal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          title="Create Referral Code"
        >
          <div className="space-y-4">
            <Select
              label="Referral Owner"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              options={[
                { label: "Admin (Unassigned)", value: "admin" },
                ...userOptions.slice(1),
              ]}
            />

            {selectedUser === "admin" && (
              <Input
                label="How many codes to generate?"
                type="number"
                value={codeCount}
                min={1}
                max={5}
                onChange={(e) => {
                  const val = Math.min(
                    100,
                    Math.max(1, parseInt(e.target.value || 1))
                  );
                  setCodeCount(val);
                }}
              />
            )}

            <Input
              label="Description (optional)"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />

            <Input
              label="Expires At (optional)"
              type="datetime-local"
              value={expiresAt}
              onChange={(e) => setExpiresAt(e.target.value)}
            />

            <p className="text-xs text-gray-400">
              Code(s) will be auto-generated — 3 letters + 3 numbers (e.g.,
              ABC123)
            </p>
          </div>

          <div className="flex space-x-3 mt-6">
            <button
              onClick={handleCreateReferralCode}
              disabled={createLoading}
              className="flex-1 bg-gray-300 shadow-sm px-5 py-2 rounded-xl cursor-pointer disabled:opacity-50 flex items-center justify-center"
            >
              {createLoading ? (
                <>
                  <Loader className="h-4 w-4 animate-spin mr-2" />
                  Creating...
                </>
              ) : (
                `Create ${selectedUser === "admin" ? `${codeCount} ` : ""}Code${
                  selectedUser === "admin" && codeCount > 1 ? "s" : ""
                }`
              )}
            </button>
            <button
              onClick={() => {
                setShowCreateModal(false);
                resetCreateForm();
              }}
              disabled={createLoading}
              className="flex-1 shadow-sm px-5 py-2 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </Modal>

        {/* Assign User Modal */}
        <Modal
          isOpen={showAssignModal}
          onClose={() => setShowAssignModal(false)}
          title="Assign User to Referral Code"
        >
          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm font-medium text-gray-700">
                Referral Code:
              </div>
              <div className="font-mono text-xs bg-gray-200 px-2 py-1 rounded mt-1 inline-block">
                {selectedCodeForAssign?.code}
              </div>
            </div>

            <Select
              label="Select User to Assign"
              value={selectedUserForAssign}
              onChange={(e) => setSelectedUserForAssign(e.target.value)}
              options={userOptions}
            />
          </div>

          <div className="flex space-x-3 mt-6">
            <button
              onClick={handleConfirmAssign}
              disabled={assignLoading || !selectedUserForAssign}
              className="flex-1 bg-gray-300 shadow-sm px-5 py-2 rounded-xl cursor-pointer disabled:opacity-50 flex items-center justify-center"
            >
              {assignLoading ? (
                <>
                  <Loader className="h-4 w-4 animate-spin mr-2" />
                  Assigning...
                </>
              ) : (
                "Assign User"
              )}
            </button>
            <button
              onClick={() => {
                setShowAssignModal(false);
                setSelectedCodeForAssign(null);
                setSelectedUserForAssign("");
              }}
              disabled={assignLoading}
              className="flex-1 shadow-sm px-5 py-2 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </Modal>

        {/* Enhanced Usage Modal */}
        <Modal
          isOpen={showUsageModal}
          onClose={() => {
            setShowUsageModal(false);
            setSelectedCodeForUsage(null);
            setSelectedCodeUsage([]);
          }}
          title="Referral Code Usage"
          size="lg"
        >
          <div className="space-y-4">
            {/* Code Info Header */}
            {selectedCodeForUsage && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      Referral Code:
                    </div>
                    <div className="font-mono text-sm bg-gray-200 px-3 py-1 rounded inline-block">
                      {selectedCodeForUsage.code}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-700">
                      Total Usage:
                    </div>
                    <div className="text-lg font-bold text-gray-600">
                      {Array.isArray(selectedCodeUsage)
                        ? selectedCodeUsage.length
                        : 0}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Loading State */}
            {usageLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader className="h-6 w-6 animate-spin mr-2" />
                <span>Loading usage data...</span>
              </div>
            ) : !Array.isArray(selectedCodeUsage) ||
              selectedCodeUsage.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-gray-500 mb-2">
                  No usage data found for this referral code
                </div>
                <div className="text-sm text-gray-400">
                  This code hasn't been used by any users yet.
                </div>
              </div>
            ) : (
              <div className="space-y-3 h-[150px] overflow-y-scroll px-5">
                <div className="text-sm font-medium text-gray-700 mb-3">
                  Users who used this code ({selectedCodeUsage.length} total
                  uses):
                </div>
                {selectedCodeUsage.map((usage, index) => (
                  <div
                    key={usage.id || `usage-${index}`}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg "
                  >
                    <div className="">
                      <div className="font-medium text-sm max-w-[200px] break-words whitespace-normal">
                        {usage.user?.email || "No email"}
                      </div>

                      {usage.codeType && (
                        <div className="text-xs text-gray-400 mt-1 capitalize">
                          {usage.codeType} Code
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">
                        Used:{" "}
                        {usage.usedAt
                          ? new Date(usage.usedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "Unknown"}
                      </div>
                      {usage.pointsToUser && (
                        <div className="text-xs text-green-800 mt-1">
                          User: +{parseFloat(usage.pointsToUser).toFixed(1)}{" "}
                          points
                        </div>
                      )}
                      {usage.pointsToCodeOwner &&
                        parseFloat(usage.pointsToCodeOwner) > 0 && (
                          <div className="text-xs text-blue-800">
                            Owner: +
                            {parseFloat(usage.pointsToCodeOwner).toFixed(1)}{" "}
                            points
                          </div>
                        )}
                      {usage.pointsToAdmin &&
                        parseFloat(usage.pointsToAdmin) > 0 && (
                          <div className="text-xs text-purple-800">
                            Admin: +{parseFloat(usage.pointsToAdmin).toFixed(1)}{" "}
                            points
                          </div>
                        )}
                      {usage.referralLevel && (
                        <div className="text-xs text-orange-600 mt-1">
                          Level {usage.referralLevel} referral
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-6">
            <button
              onClick={() => {
                setShowUsageModal(false);
                setSelectedCodeForUsage(null);
                setSelectedCodeUsage([]);
              }}
              className="w-full bg-gray-300 shadow-sm px-5 py-2 rounded-xl cursor-pointer"
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ReferralManagement;
