import { atom } from "recoil";

export const counter = atom({
  key: "counter",
  default: 0,
});

export const incrementCounter = atom({
  key: "incrementCounter",
  default: 0,
});
