export const hexCodes = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const generateRandomCode = (arr: string[]) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return randomNumber;
};

export const generateHexCode = () => {
  const hexCode =
    hexCodes[generateRandomCode(hexCodes)] +
    hexCodes[generateRandomCode(hexCodes)] +
    hexCodes[generateRandomCode(hexCodes)] +
    hexCodes[generateRandomCode(hexCodes)] +
    hexCodes[generateRandomCode(hexCodes)] +
    hexCodes[generateRandomCode(hexCodes)];
  return hexCode;
};
