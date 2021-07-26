import { getRandomNumberBetween } from "./randomizer";

export const getRandomizedDelay = (from: number, to: number) => {
  return {
    animationDelay: `${getRandomNumberBetween(from, to).toFixed(0)}s`,
  };
};

export const getRandomizedDuration = (from: number, to: number) => {
  return {
    animationDuration: `${getRandomNumberBetween(from, to).toFixed(0)}s`,
  };
};
