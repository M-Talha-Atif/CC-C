// src/store/userStore.js
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      admin: null,
      isAuthenticated: false,

      setAdmin: (adminData) =>
        set({
          admin: adminData,
          isAuthenticated: true,
        }),

      clearAdmin: () =>
        set({
          admin: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "adminStorage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
