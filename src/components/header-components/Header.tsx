import { useTheme } from "../../hooks/useTheme.ts";
import Logo from "./ui/Logo.tsx";
import ToggleThemeButton from "./ui/ToggleThemeButton.tsx";

const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className="bg-neutral dark:bg-neutral-800 rounded-xl shadow-md">
      <div className="flex justify-between p-2.5 px-3">
        <Logo />
        <button onClick={toggleTheme} className="bg-neutral-100 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 cursor-pointer rounded-md p-2 focus:outline focus:outline-red-500 focus:outline-offset-2" aria-label="Change color theme" title="Change color theme">
          <ToggleThemeButton />
        </button>
      </div>
    </header>
  )
}

export default Header