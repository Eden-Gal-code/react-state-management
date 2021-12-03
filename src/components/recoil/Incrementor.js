import React from "react";
import { useRecoilState } from "recoil";
import { counter, incrementCounter } from "../../Recoil/atoms";
const Incrementor = () => {
  const [count, setCount] = useRecoilState(counter);
  const [incrementCount, setIncrementValue] = useRecoilState(incrementCounter);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
          setIncrementValue(incrementCount + 1);
        }}
      >
        increment
      </button>
    </>
  );
};
export default Incrementor;
