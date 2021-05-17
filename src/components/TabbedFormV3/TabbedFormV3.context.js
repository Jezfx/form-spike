import { createContext, useContext } from "react";
export const TabbedFormContext = createContext();

export const TabbedFormProvider = TabbedFormContext.Provider;
export const useTabbedFormContext = () => {
  return useContext(TabbedFormContext);
};
