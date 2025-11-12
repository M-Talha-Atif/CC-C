"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import useUserStore from "@/store/userStore";

export default function SessionManager({ children }) {
  const router = useRouter();
  const { setAdmin, clearAdmin, isAuthenticated } = useUserStore();
  const refreshTimerRef = useRef(null);

  // Check session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data } = await axiosInstance.get("api/auth/me");
        if (data.success) {
          setAdmin(data.data.user);
        }
      } catch (error) {
        console.error("Session check failed:", error);
        clearAdmin();
      }
    };

    checkSession();
  }, [setAdmin, clearAdmin]);

  // Proactive token refresh - every 10 minutes
  useEffect(() => {
    if (!isAuthenticated) return;

    const startRefreshTimer = () => {
      refreshTimerRef.current = setInterval(
        async () => {
          try {
            await axiosInstance.post("api/auth/refresh-token");
            console.log("Token refreshed proactively");
          } catch (error) {
            console.error("Proactive refresh failed:", error);
            clearAdmin();
            router.push("/login");
          }
        },
        10 * 60 * 1000
      ); // 10 minutes
    };

    startRefreshTimer();

    return () => {
      if (refreshTimerRef.current) {
        clearInterval(refreshTimerRef.current);
      }
    };
  }, [isAuthenticated, clearAdmin, router]);

  // Handle app visibility changes (mobile background/foreground)
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === "visible" && isAuthenticated) {
        try {
          await axiosInstance.post("api/auth/refresh-token");
          console.log("Token refreshed on app resume");
        } catch (error) {
          console.error("Resume refresh failed:", error);
          clearAdmin();
          router.push("/login");
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isAuthenticated, clearAdmin, router]);

  return children;
}