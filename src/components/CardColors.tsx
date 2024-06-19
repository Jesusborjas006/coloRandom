import { useState } from "react";
import { generateHexCode } from "../utils";

export const CardColors = () => {
  const [hexCodes, setHexCodes] = useState({
    card1: generateHexCode(),
    card2: generateHexCode(),
    card3: generateHexCode(),
    card4: generateHexCode(),
    card5: generateHexCode(),
  });

  const handleOnClick = () => {
    setHexCodes({
      card1: generateHexCode(),
      card2: generateHexCode(),
      card3: generateHexCode(),
      card4: generateHexCode(),
      card5: generateHexCode(),
    });
  };

  const cardElements = Object.entries(hexCodes).map(([key, value]) => (
    <div key={key}>
      <div
        className="h-[150px] w-[150px] border-4 border-black"
        style={{ backgroundColor: `#${value}` }}
      ></div>
      <h3 className="mt-2 font-semibold text-lg">{"#" + value}</h3>
    </div>
  ));

  return (
    <>
      <section className="flex justify-center gap-x-4 mt-16">
        {cardElements}
      </section>
      <button
        className="bg-black text-white px-6 py-2 rounded-md text-xl mt-10"
        onClick={handleOnClick}
      >
        New Palette
      </button>
    </>
  );
};

export default CardColors;
