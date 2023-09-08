import { create } from "zustand";
import { createThemeSlice } from "./themeSlice";
import { createJSONStorage, persist } from "zustand/middleware";

export const useBoundStore = create(
  persist(
    (...a) => ({
      ...createThemeSlice(...a),
    }),
    {
      name: "bound-store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
