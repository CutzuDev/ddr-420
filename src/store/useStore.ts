// src/store/useStore.ts
import { create } from "zustand";

// Define the store's state interface
interface StoreState {
  text: string;
  count: number;
  setText: (newText: string) => void;
  clearText: () => void;
}

const useStore = create<StoreState>()((set) => ({
  // State variables
  text: "",
  count: 0,

  // Actions
  setText: (newText: string) => set({ text: newText }),
  clearText: () => set({ text: "" }),
}));

export default useStore;
