import { useState } from "react";
import { generateHexCode } from "../utils";
import lockIcon from "../assets/locked.png";
import unlockedIcon from "../assets/unlocked.png";

export const CardColors = () => {
  const [hexCodes, setHexCodes] = useState([
    {
      id: 1,
      color: generateHexCode(),
      isLocked: false,
    },
    {
      id: 2,
      color: generateHexCode(),
      isLocked: false,
    },
    {
      id: 3,
      color: generateHexCode(),
      isLocked: false,
    },
    {
      id: 4,
      color: generateHexCode(),
      isLocked: false,
    },
    {
      id: 5,
      color: generateHexCode(),
      isLocked: false,
    },
  ]);

  const handleOnClick = () => {
    const newHexCode = hexCodes.map((card) => {
      if (card.isLocked) {
        return card;
      } else {
        return { ...card, color: generateHexCode() };
      }
    });

    setHexCodes(newHexCode);
  };

  const handleToggle = (cardId: number) => {
    const updatedCards = hexCodes.map((card) => {
      return card.id === cardId ? { ...card, isLocked: !card.isLocked } : card;
    });

    setHexCodes(updatedCards);
  };

  const cardElements = hexCodes.map((card) => (
    <div key={card.id}>
      <div
        className="h-[150px] w-[150px] border-4 border-black relative"
        style={{ backgroundColor: `#${card.color}` }}
      >
        <img
          className=" absolute bottom-2 right-2 cursor-pointer"
          src={card.isLocked ? lockIcon : unlockedIcon}
          alt="lock icon"
          width={30}
          onClick={() => handleToggle(card.id)}
        />
      </div>

      <h3 className="mt-2 font-semibold text-lg">{"#" + card.color}</h3>
    </div>
  ));

  return (
    <>
      <section className="flex justify-center gap-x-4 mt-16">
        {cardElements}
      </section>
      <div className="flex justify-center gap-x-6">
        <button
          className="bg-black text-white px-6 py-2 rounded-md text-xl mt-10"
          onClick={handleOnClick}
        >
          New Palette
        </button>
        <button className="bg-black text-white px-6 py-2 rounded-md text-xl mt-10">
          Save Palette
        </button>
      </div>
    </>
  );
};

export default CardColors;
