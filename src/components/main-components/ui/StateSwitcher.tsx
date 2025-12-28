import { useState } from "react";

type Props = {
  isActive: boolean
}

const StateSwitcher = ({ isActive }: Props) => {
  const [state, setState] = useState(isActive);

  const handleStateChange = () => setState(!state);

  const circleStyle = state ? "translate-x-5" : "translate-x-0";

  const buttonColorStyle = state ? "bg-red-500 hover:bg-red-400 dark:hover:bg-red-700" : "bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-600  dark:hover:bg-neutral-700";

  return (
    <button className={`${buttonColorStyle} cursor-pointer transition-all duration-75 rounded-xl h-6 w-11 px-1 focus:outline focus:outline-red-500 focus:outline-offset-2`} onClick={handleStateChange}>
      <div className={`h-4 w-4 rounded-full bg-neutral transition-all duration-75 ${circleStyle}`} />
    </button>
  )
}

export default StateSwitcher