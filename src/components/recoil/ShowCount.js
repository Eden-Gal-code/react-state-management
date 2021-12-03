import React from "react";
import { useRecoilValue } from "recoil";
import { counter } from "../../Recoil/atoms";

const ShowCount = () => {
  const counterValue = useRecoilValue(counter);
  return <h3 color="blue">{counterValue}</h3>;
};

export default ShowCount;
