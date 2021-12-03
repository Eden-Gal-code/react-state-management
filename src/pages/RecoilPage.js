import React from "react";
import Decrementor from "../components/recoil/Decrementor";
import Generic from "../components/recoil/Generic";
import IncrementCounter from "../components/recoil/IncrementCounter";

import Incrementor from "../components/recoil/Incrementor";
import ShowCount from "../components/recoil/ShowCount";
const RecoilPage = () => {
  return (
    <>
      <div>
        <Generic />
      </div>
      <div>
        <ShowCount />
      </div>
      <div>
        <Incrementor />
      </div>
      <div>
        <Decrementor />
      </div>
      <IncrementCounter></IncrementCounter>
    </>
  );
};
export default RecoilPage;
