import { atom, selector } from "recoil";

export const counter = atom({
  key: "counter",
  default: 0,
});

export const incrementCounter = atom({
  key: "incrementCounter",
  default: 0,
});

export const doubleCounter = selector({
  key: "doubleCounter",
  get: ({ get }) => {
    const getCounter = get(counter);
    return getCounter * 2;
  },
});
