// OwnerEmailModal.jsx
import { useState, useEffect } from "react";
import Modal from "../../referrals/components/Modal";
import { Loader} from "lucide-react";// your loader component

export default function OwnerEmailModal({ isOpen, onClose, owner }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      // Optional: simulate a delay or fetch if needed
      const timer = setTimeout(() => setLoading(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Referral Code Owner`}
      size="sm"
    >
      <div className="space-y-4">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader className="h-6 w-6 animate-spin mr-2" />
            <span>Loading owner info...</span>
          </div>
        ) : (
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-sm text-gray-500 mb-1">Owner Type</div>
            <div className="font-medium text-gray-900 mb-2">
              {owner?.type === "admin" ? "Admin" : "User"}
            </div>

            {owner?.type === "user" && (
              <>
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <div className="font-medium text-gray-900 break-words">
                  {owner?.email || "N/A"}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="mt-6">
        <button
          onClick={onClose}
          className="w-full bg-gray-300 hover:bg-gray-400 shadow-sm px-5 py-2 rounded-xl cursor-pointer transition-colors"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
