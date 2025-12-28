import { useData } from "../../hooks/useData.ts";
import StateSwitcher from "./ui/StateSwitcher.tsx";

type Props = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  id: number;
}

const ExtensionCard = ({ logo, name, description, isActive, id }: Props) => {
  const { deleteExtension } = useData();

  return (
    <div className="bg-neutral dark:bg-neutral-800 shadow-xl flex flex-col justify-between p-4 py-5 rounded-2xl gap-8">
      <div className="flex items-start gap-4">
        <img src={logo} alt={`${name} logo`} className="" />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-[1.125rem] dark:text-neutral">{name}</h3>
          <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="rounded-xl border border-neutral-300 px-3 py-1 cursor-pointer text-[.9rem] dark:text-neutral hover:bg-red-500 hover:text-neutral dark:hover:text-neutral-800 transition-all duration-75 focus:outline focus:outline-red-500 focus:outline-offset-2" onClick={() => deleteExtension(id)}>Remove</button>
        <StateSwitcher isActive={isActive} id={id} />
      </div>
    </div>
  )
}

export default ExtensionCard