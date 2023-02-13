import { create } from "zustand";

export interface IAppStore {
  isAuthenticating: boolean;
  isAuthenticated: boolean;
  setIsAuthenticating: (isAuthenticating: boolean) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const useStore = create<IAppStore>((set) => ({
  isAuthenticating: true,
  isAuthenticated: false,
  setIsAuthenticating: (isAuthenticating: boolean) => set({ isAuthenticating }),
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));

export default useStore;
