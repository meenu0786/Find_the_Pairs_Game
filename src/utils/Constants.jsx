import birdImg from "../assets/bird.jpg";
import catImg from "../assets/cat.jpg";
import chameleonImg from "../assets/chameleon.jpg";
import dogImg from "../assets/dog.jpg";
import lionImg from "../assets/lion.jpg";
import eagleImg from "../assets/eagle.jpg";
import waterfallImg from "../assets/waterfall.jpg";
import forestImg from "../assets/forest.jpg";
import greenHeartImg from "../assets/green.jpg";
import lakeImg from "../assets/lake.jpg";
import lilyImg from "../assets/lily.jpg";
import lotusImg from "../assets/lotus.jpg";
import minionImg from "../assets/minion.jpg";
import natureImg from "../assets/nature.jpg";
import puppiesImg from "../assets/puppies.jpg";
import roseImg from "../assets/rose.jpg";
import skullImg from "../assets/skull.jpg";
import sunflowerImg from "../assets/sunflower.jpg";
import thunderImg from "../assets/thunder.jpg";
import wolfImg from "../assets/wolf.jpg";
import valleyImg from "../assets/valley.jpg";

export const cardsArray = [
  { type: "Bird", image: birdImg },
  { type: "cat", image: catImg },
  { type: "Chameleon", image: chameleonImg },
  { type: "Dog", image: dogImg },
  { type: "Lion", image: lionImg },
  { type: "Eagle", image: eagleImg },
  { type: "Waterfall", image: waterfallImg },
  { type: "Forest", image: forestImg },
  { type: "Heart", image: greenHeartImg },
  { type: "Lake", image: lakeImg },
  { type: "Lily", image: lilyImg },
  { type: "Lotus", image: lotusImg },
  { type: "Minion", image: minionImg },
  { type: "Nature", image: natureImg },
  { type: "Puppies", image: puppiesImg },
  { type: "Rose", image: roseImg },
  { type: "Skull", image: skullImg },
  { type: "Sunflower", image: sunflowerImg },
  { type: "Thunder", image: thunderImg },
  { type: "Wolf", image: wolfImg },
  { type: "Valley", image: valleyImg },
];

export const pairOptions = [
  { value: 8, label: "8 pairs" },
  { value: 10, label: "10 pairs" },
  { value: 12, label: "12 pairs" },
  { value: 14, label: "14 pairs" },
  { value: 16, label: "16 pairs" },
  { value: 18, label: "18 pairs" },
  { value: 21, label: "21 pairs" },
];

export const shuffleCards = (array) => {
  const length = array.length;
  for (let i = length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    if (randomIndex !== i) {
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
  }
  return array;
};

export const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(var(--col), 1fr)",
  gridTemplateRows: "repeat(var(--row), 1fr)",
  gap: "1rem",
};

export const getColItem = (cardLength) => {
  switch (cardLength) {
    case 30:
    case 36:
    case 42:
      return 6;
    default:
      return 4;
  }
};

export const getRowItem = (cardLength) => {
  switch (cardLength) {
    case 30:
      return 5;
    case 36:
      return 6;
    case 42:
      return 7;
    default:
      return 5;
  }
};
