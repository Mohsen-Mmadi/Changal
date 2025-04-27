// Removed conflicting import of 'document' from "postcss"
import { create } from "zustand";

interface ThemeState {
    darkMode: boolean;
    toggleTheme: () => void;
  }
let useTheme=create<ThemeState>((set,get)=>({
    darkMode: false,
  toggleTheme: () => {
    const newMode = !get().darkMode;
    document.documentElement.classList.toggle('dark', newMode);
    set({ darkMode: newMode });
  },
        
}))
export {useTheme}