import { create } from "zustand";
import { devtools } from "zustand/middleware";
const useStore = create(
  devtools((set: any) => ({
    count: 0,
    increment: () => set((state: any) => ({ count: state.count + 1 })),
  })),
);

export default useStore;
