// Removed conflicting import of 'document' from "postcss"
import { create } from "zustand";

interface ThemeState {
  darkMode: boolean;
  toggleTheme: () => void;
}
let useTheme = create<ThemeState>((set, get) => ({
  darkMode: false,
  toggleTheme: () => {
    const newMode = !get().darkMode;
    document.documentElement.classList.toggle('dark', newMode);
    set({ darkMode: newMode });
  },

}))


type ModalType = 'login' | 'register' | null;

interface ModalStore {
  isOpen: boolean;
  type: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

 const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  type: null,
  openModal: (type) => set({ isOpen: true, type }),
  closeModal: () => set({ isOpen: false, type: null }),
}));

export { useTheme }
export { useModalStore }