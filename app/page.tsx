"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/userStore";

export default function Home() {
  const { user, isAuthenticated } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (!user && !isAuthenticated) {
      router.replace("/login");
    }
  }, [router, user, isAuthenticated]);

  return null;
}
