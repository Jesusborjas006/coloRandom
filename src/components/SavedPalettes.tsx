import { HexCodesType } from "../utils/types";

interface SavedPalettesProps {
  savedColorPalettes: HexCodesType[][];
}

const SavedPalettes = ({ savedColorPalettes }: SavedPalettesProps) => {
  const savedPaletteElements = savedColorPalettes.map(
    (palette, paletteIndex) => (
      <div key={paletteIndex} className="flex gap-x-2 justify-center my-6">
        {palette.map((color, colorIndex) => (
          <div
            key={colorIndex}
            className="h-[50px] w-[50px] border-2 border-black"
            style={{ backgroundColor: `#${color.color}` }}
          ></div>
        ))}
      </div>
    )
  );

  return (
    <section className="w-[30%] border-l-4 border-black h-screen">
      <h2 className="font-extrabold text-2xl mt-10">Saved Palettes</h2>
      {!savedColorPalettes.length ? (
        <p className="mt-10">No saved palettes yet!</p>
      ) : (
        savedPaletteElements
      )}
    </section>
  );
};

export default SavedPalettes;
