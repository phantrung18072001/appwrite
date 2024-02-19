import { createContext } from "react";

interface StoreContextType {
  currentUser: any;
  setCurrentUser: (currentUser?: any) => void;
}

const StoreContext = createContext<StoreContextType>({
  currentUser: undefined,
  setCurrentUser: (currentUser) => {},
});

export { StoreContext };
