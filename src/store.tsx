import { create } from "zustand";

interface BaseStore {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useBoxStore = create<BaseStore>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
