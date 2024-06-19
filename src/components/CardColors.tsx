import { useState } from "react";
import { generateHexCode } from "../utils";

export const CardColors = () => {
  const [hexCode, setHexCode] = useState(generateHexCode());

  return (
    <>
      <section className="flex justify-center gap-x-4 mt-16">
        <div>
          <div
            className="h-[150px] w-[150px] border-4 border-black"
            style={{ backgroundColor: `#${hexCode}` }}
          ></div>
          <h3 className="mt-2 font-semibold text-lg">{"#" + hexCode}</h3>
        </div>
      </section>
      <button
        className="bg-black text-white px-6 py-2 rounded-md text-xl mt-10"
        onClick={() => setHexCode(generateHexCode())}
      >
        New Palette
      </button>
    </>
  );
};

export default CardColors;
