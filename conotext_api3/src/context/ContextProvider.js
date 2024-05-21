import { createContext, useContext } from "react";

export const context = createContext({ user: null, setUser: () => {} });

export const ContextProvider = context.Provider;

export default function useContextProvider() {
  return useContext(context);
}
