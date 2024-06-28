import { HexCodesType } from "../utils/types";

interface SavedPalettesProps {
  savedColorPalettes: {
    paletteId: number;
    palette: HexCodesType[];
  }[];
  removePallete: (id: number) => void;
  onClickPalette: (id: number) => void;
}

const SavedPalettes = ({
  savedColorPalettes,
  removePallete,
  onClickPalette,
}: SavedPalettesProps) => {
  const savedPaletteElements = savedColorPalettes.map((palette) => (
    <div key={palette.paletteId} className="flex justify-center">
      <div
        className="flex gap-x-2 justify-center items-center my-4 cursor-pointer "
        onClick={(e) => {
          e.stopPropagation();
          onClickPalette(palette.paletteId);
        }}
      >
        {palette.palette.map((color) => (
          <div
            key={color.id}
            className="h-[40px] w-[40px] border-2 border-black"
            style={{ backgroundColor: `#${color.color}` }}
          ></div>
        ))}
      </div>
      <button
        className="text-4xl font-bold ml-6 hover:text-red-600"
        onClick={() => removePallete(palette.paletteId)}
      >
        X
      </button>
    </div>
  ));

  return (
    <section className="w-[30%] border-l-4 border-black overflow-y-auto">
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
