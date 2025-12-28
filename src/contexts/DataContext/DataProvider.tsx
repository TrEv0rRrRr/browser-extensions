import { useEffect, useState } from "react";
import ExtensionsData from "../../data.json";
import type { Extension } from "../../types/Extension.ts";
import { DataContext } from "./DataContext.tsx";
import type { Filter } from "../../types/Filter.ts";

export default function DataProvider({ children }: { children: React.ReactNode }) {
  const [extensions, setExtensions] = useState<Extension[]>([]);
  const [filter, setFilter] = useState<Filter>("ALL");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setExtensions((ExtensionsData as Extension[]));
  }, []);

  const deleteExtension = (id: number) => {
    setExtensions((prev) => prev.filter((_, index) => index !== id));
  }

  const changeExtensionState = (id: number) => {
    setExtensions((prev) =>
      prev.map((ext, index) =>
        index === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  }

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === 'ACTIVE') return ext.isActive;
    if (filter === "INACTIVE") return !ext.isActive;
    return true;
  });

  console.log(filteredExtensions);

  const value = {
    data: filteredExtensions, deleteExtension, changeExtensionState, setFilter
  }

  return (
    <DataContext.Provider value={value}>{children}</DataContext.Provider>
  )
}