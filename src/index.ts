import "./styles/index.css";

const hex: (string | number)[] = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const btn: HTMLElement | null = document.getElementById("btn");
const color: HTMLElement | null = document.getElementById("color");

btn.addEventListener("click", () => {
  let hexColor: string = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandom()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

const getRandom = (): number => {
  return Math.floor(Math.random() * hex.length);
};
