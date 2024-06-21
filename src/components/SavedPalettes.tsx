import { HexCodesType } from "../utils/types";

interface SavedPalettesProps {
  savedColorPalettes: HexCodesType[] | [];
}

const SavedPalettes = ({ savedColorPalettes }: SavedPalettesProps) => {
  return (
    <section className="w-[30%] border-l-4 border-black h-screen">
      <h2 className="font-extrabold text-2xl mt-10">Saved Palettes</h2>
      {!savedColorPalettes.length && (
        <p className="mt-10">No saved palettes yet!</p>
      )}
    </section>
  );
};

export default SavedPalettes;
