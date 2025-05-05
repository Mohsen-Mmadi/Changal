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


type FormData = {
  username: string;
  password: string;
  confirmPassword: string;
};

type Store = {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
};

 const useFormStore = create<Store>((set) => ({
  formData: {
    username: "",
    password: "",
    confirmPassword: "",
  },
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
}));



type ModalState = {
  isOpen: boolean;
  type: null | 'login' | 'register' | 'password';
  openModal: (type: 'login' | 'register' | 'password') => void;
  closeModal: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  type: null,
  openModal: (type) => set({ isOpen: true, type }),
  closeModal: () => set({ isOpen: false, type: null }),
}));

type UserStore = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

 const useUserStore = create<UserStore>((set) => ({
  isLoggedIn: false,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}));



export { useTheme }
export { useModalStore }
export { useUserStore }
export { useFormStore }

