import React from "react";
import Decrementor from "../components/recoil/Decrementor";
import DoubleCounter from "../components/recoil/DoubleCounter";
import Generic from "../components/recoil/Generic";
import IncrementCounter from "../components/recoil/IncrementCounter";

import Incrementor from "../components/recoil/Incrementor";
import ShowCount from "../components/recoil/ShowCount";
const RecoilPage = () => {
  return (
    <>
      <Generic />
      <ShowCount />
      <Incrementor />
      <Decrementor />
      <IncrementCounter />
      <DoubleCounter />
    </>
  );
};
export default RecoilPage;
