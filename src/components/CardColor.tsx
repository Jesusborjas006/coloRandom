interface CardColorProps {
  color: string;
}

const CardColor = ({ color }: CardColorProps) => {
  return (
    <>
      <div
        className="h-[150px] w-[150px] border-4 border-black"
        style={{ backgroundColor: `#${color}` }}
      ></div>
      <h3 className="mt-2 font-semibold text-lg">{"#" + color}</h3>
    </>
  );
};

export default CardColor;
