import CardColors from "./components/CardColors";
import SavedPalettes from "./components/SavedPalettes";
import Title from "./components/Title";

function App() {
  return (
    <main className="text-center flex">
      <section className="w-[70%] border border-red-400">
        <Title />
        <CardColors />
      </section>
      <SavedPalettes />
    </main>
  );
}

export default App;
