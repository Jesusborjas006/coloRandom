import { useState } from "react";
import CardColors from "./components/CardColors";
import SavedPalettes from "./components/SavedPalettes";
import Title from "./components/Title";
import { generateHexCode } from "./utils";
import { HexCodesType } from "./utils/types";

function App() {
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
  const [savedColorPalettes, setSavedColorPalettes] = useState<
    {
      paletteId: number;
      palette: HexCodesType[];
    }[]
  >([]);

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

  const addToSavedPalettes = (currentDisplayed: HexCodesType[]) => {
    setSavedColorPalettes([
      ...savedColorPalettes,
      { paletteId: Date.now(), palette: currentDisplayed },
    ]);
  };

  const removePallete = (id: number) => {
    const filteredSaved = savedColorPalettes.filter((palette) => {
      return palette.paletteId !== id;
    });
    setSavedColorPalettes(filteredSaved);
  };

  return (
    <main className="text-center flex">
      <section className="w-[70%] border border-red-400">
        <Title />
        <CardColors
          hexCodes={hexCodes}
          handleOnClick={handleOnClick}
          handleToggle={handleToggle}
          addToSavedPalettes={addToSavedPalettes}
        />
      </section>
      <SavedPalettes
        savedColorPalettes={savedColorPalettes}
        removePallete={removePallete}
      />
    </main>
  );
}

export default App;
