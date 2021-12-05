import React from "react";
import { useRecoilValue } from "recoil";
import { doubleCounter } from "../../Recoil/atoms";

const DoubleCounter = () => {
  const doubleCounterState = useRecoilValue(doubleCounter);
  return (
    <div>
      This is the selector with computed double counter {doubleCounterState}
    </div>
  );
};

export default DoubleCounter;
