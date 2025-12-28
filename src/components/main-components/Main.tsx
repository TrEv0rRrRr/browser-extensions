import { useState } from "react";
import { useData } from "../../hooks/useData.ts";
import type { Filter } from "../../types/Filter.ts";
import ExtensionsList from "./ExtensionsList.tsx";

const Main = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { setFilter } = useData();

  const handleButtonSelection = (index: number, filter: Filter) => {
    setSelectedIndex(index);
    setFilter(filter);
  }

  const buttonStyle = `rounded-2xl px-4 py-2 cursor-pointer transition-all duration-100 focus:outline focus:outline-red-500 focus:outline-offset-2`;

  return (
    <main className="flex flex-col gap-5">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <h1 className="text-3xl font-bold dark:text-neutral">Extensions List</h1>
        <div className="flex gap-4">
          {
            (["All", "Active", "Inactive"] as Filter[]).map((element, currentIndex) => (
              <button key={currentIndex} className={`${buttonStyle} ${currentIndex !== selectedIndex ? "bg-neutral dark:bg-neutral-800 dark:text-neutral hover:bg-neutral-100 hover:text-neutral-600 hover:dark:text-neutral hover:dark:bg-neutral-600" : "bg-red-500 text-neutral dark:text-neutral-800"}`} onClick={() => handleButtonSelection(currentIndex, element.toUpperCase())}>
                {element}
              </button>
            ))
          }
        </div>
      </div>
      <ExtensionsList />
    </main>
  )
}

export default Main