import { useState } from "react";
import CardColors from "./components/CardColors";
import SavedPalettes from "./components/SavedPalettes";
import Title from "./components/Title";
import { generateHexCode } from "./utils";

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
  const [savedColorPalettes, setSavedColorPalettes] = useState([]);

  console.log(hexCodes);

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

  return (
    <main className="text-center flex">
      <section className="w-[70%] border border-red-400">
        <Title />
        <CardColors
          hexCodes={hexCodes}
          handleOnClick={handleOnClick}
          handleToggle={handleToggle}
        />
      </section>
      <SavedPalettes savedColorPalettes={savedColorPalettes} />
    </main>
  );
}

export default App;
