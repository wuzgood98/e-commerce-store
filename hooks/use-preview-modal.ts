import { create } from "zustand";

import { Product } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  open: (data: Product) => void;
  close: () => void;
}

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  open: (data: Product) => set({ isOpen: true, data }),
  close: () => set({ isOpen: false }),
}));
