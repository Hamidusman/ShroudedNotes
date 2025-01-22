import { useState } from "react";


export default function Features({title, description, icons}) {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div
      onClick={handleActive}
      className={`cursor-pointer flex flex-col gap-6 p-4 w-[280px] h-[340px] rounded-xl 
            transition duration-500 transform hover:scale-105 
            ${!active ? "bg-accent" : "bg-soft"} shadow-lg hover:shadow-xl`}
    >
      <h2 className="text-2xl font-semibold text-center">{title}</h2>
      {active ? (
            <p
            className={`${
            active ? "flex text-[14px] opacity-100 animate-fade-in" : "hidden opacity-0"
            } transition-opacity duration-500`}
        >
            {description}
        </p>
      ):
      (
        <div className="text-5xl animate-pulse mx-auto">{icons}</div>
      )}
    </div>
  );
}
