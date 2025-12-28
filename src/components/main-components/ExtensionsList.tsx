import { useData } from "../../hooks/useData.ts";
import ExtensionCard from "./ExtensionCard.tsx";

const ExtensionsList = () => {
  const { data } = useData();

  return (
    <div className="grid grid-cols-3 gap-3">
      {
        data.map(({ name, logo, isActive, description }, index) => (
          <ExtensionCard name={name} logo={logo} isActive={isActive} description={description} key={index} id={index} />
        ))
      }
    </div>
  )
}

export default ExtensionsList