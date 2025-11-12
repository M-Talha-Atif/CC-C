"use client";
import { useState } from "react";
import { Search } from "lucide-react";

const OverviewPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-[80vh]  flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">


        <div className="relative">
          <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search users, referral codes, or anything..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-full focus:ring-0 focus:outline-none  shadow-sm transition-all ease-in-out hover:shadow-lg bg-white"
          />
        </div>

        {searchTerm && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-sm border">
            <p className="text-sm text-gray-600">
              AI search functionality will be integrated here for: "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OverviewPage;