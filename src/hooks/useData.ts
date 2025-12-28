import { useContext } from "react";
import {
  DataContext,
  type DataContextProps,
} from "../contexts/DataContext/DataContext.tsx";

/**
 * Custom hook to access the data context.
 *
 * @returns {DataContextProps} The current data context value.
 * @throws {Error} If the hook is used outside of a DataProvider.
 */
export const useData = (): DataContextProps => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be use with a DataProvider");
  return context;
};
