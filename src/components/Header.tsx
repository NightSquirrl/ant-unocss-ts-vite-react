import headerData from "@/data/header-data";
import "./Header.css";
import { useWindowSize } from "react-use";

export default function Header() {
  /**
   * @description: react-use
   */
  const { width, height } = useWindowSize();
  console.log(width, height);

  return (
    <div className="w-100 h-64 flex items-center fixed top-0 left-0">
      <div className="flex ">
        <div className="header-left  text-lg mx-4 uppercase font-black">
          {import.meta.env.VITE_LOGO_NAME}
        </div>
        {headerData.headerTitle.map((item, index) => {
          return (
            <div className="header-left text-lg mx-4 " key={index}>
              {item.title}
            </div>
          );
        })}
  
      </div>
    </div>
  );
}
