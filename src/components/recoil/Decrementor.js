import React from "react";
import { useRecoilState } from "recoil";
import { counter } from "../../Recoil/atoms";
const Decrementor = () => {
  const [count, setCount] = useRecoilState(counter);
  return (
    <>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Dencrement
      </button>
    </>
  );
};
export default Decrementor;
