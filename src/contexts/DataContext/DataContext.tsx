import { createContext } from "react";
import type { Extension } from "../../types/Extension.ts";
import type { Filter } from "../../types/Filter.ts";

export type DataContextProps = {
  data: Extension[];
  deleteExtension: (id: number) => void;
  changeExtensionState: (id: number) => void;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export const DataContext = createContext<DataContextProps | undefined>(undefined);