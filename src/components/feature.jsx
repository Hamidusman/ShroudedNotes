import { useState } from "react";
import Scroll from "./animations/scrollIn";


export default function Features({title, description, icons}) {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <Scroll>
      
    <div
      onClick={handleActive}
      className={`cursor-pointer flex flex-col gap-3 p-4 w-full sm:w-[420px] h-[200px] rounded-xl 
            transition duration-500 transform hover:scale-105 
            ${!active ? "bg-accent" : "bg-soft"} shadow-lg hover:shadow-xl`}
    >
      <div className="text-3xl animate-pulse mx-auto">{icons}</div>
      <h2 className="text-2xl font-semibold text-center">{title}</h2>
      
      
      {active && (
            <p
            className={`${
            active ? "flex text-[18px] text-center opacity-100 animate-fade-in" : "hidden opacity-0"
            } transition-opacity duration-500`}
        >
            {description}
        </p>
      )}
    </div>
    </Scroll>
  );
}
