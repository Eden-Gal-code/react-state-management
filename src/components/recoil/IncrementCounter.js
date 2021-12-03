import React from "react";
import { useRecoilValue } from "recoil";
import { incrementCounter } from "../../Recoil/atoms";

const IncrementCounter = () => {
  const incrementCounterValue = useRecoilValue(incrementCounter);
  return (
    <div>The Increment button was clicked {incrementCounterValue} times</div>
  );
};

export default IncrementCounter;
