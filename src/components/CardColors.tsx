import lockIcon from "../assets/locked.png";
import unlockedIcon from "../assets/unlocked.png";
import { HexCodesType } from "../utils/types";

interface CardColorsProps {
  hexCodes: HexCodesType[];
  handleOnClick: () => void;
  handleToggle: (cardId: number) => void;
  addToSavedPalettes: (currentDisplayed: HexCodesType[]) => void;
}

export const CardColors = ({
  hexCodes,
  handleOnClick,
  handleToggle,
  addToSavedPalettes,
}: CardColorsProps) => {
  const cardElements = hexCodes.map((card) => (
    <div key={card.id}>
      <div
        className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] border-4 border-black relative"
        style={{ backgroundColor: `#${card.color}` }}
      >
        <img
          className=" absolute bottom-2 right-2 cursor-pointer w-[20px] sm:w-[30px]"
          src={card.isLocked ? lockIcon : unlockedIcon}
          alt="lock icon"
          onClick={() => handleToggle(card.id)}
        />
      </div>

      <h3 className="mt-2 font-semibold text-lg">{"#" + card.color}</h3>
    </div>
  ));

  return (
    <>
      <section className="flex flex-wrap justify-center gap-4 mt-10">
        {cardElements}
      </section>
      <div className="flex justify-center gap-x-6">
        <button
          className="bg-black text-white px-6 py-2 rounded-md text-xl mt-10"
          onClick={handleOnClick}
        >
          New Palette
        </button>
        <button
          className="bg-black text-white px-6 py-2 rounded-md text-xl mt-10"
          onClick={() => addToSavedPalettes(hexCodes)}
        >
          Save Palette
        </button>
      </div>
    </>
  );
};

export default CardColors;
