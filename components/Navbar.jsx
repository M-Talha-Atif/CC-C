"use client";
import { useRouter, usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import useUserStore from "../store/userStore";
import { logout } from "../action";

const Navbar = () => {
  const { clearAdmin } = useUserStore();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await logout();
    clearAdmin();
    router.push("/login");
  };

  const navItems = [
    { label: "Dashboard", path: "/dashboard/overview" },
    { label: "Pending", path: "/dashboard/users/pending" },
    { label: "Approved", path: "/dashboard/users/approved" },
    { label: "Rejected", path: "/dashboard/users/rejected" },
    { label: "Referrals", path: "/dashboard/referrals" },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => router.push("/dashboard")}
          className="text-lg font-semibold tracking-tight text-gray-900 cursor-pointer"
        >
          CUNO COVO
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className={`text-sm transition-all px-3 py-1.5 rounded-md cursor-pointer ${
                pathname === item.path
                  ? " "
                  : "text-gray-600 hover:text-gray-900 "
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="cursor-pointer flex items-center gap-1 text-sm text-gray-500 hover:text-red-600 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
