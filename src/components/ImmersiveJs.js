import React from "react";

import ImmersiveShowcase from "./immersiveJsComponents/ImmersiveShowcase";
import ImmersiveJsScore from "./immersiveJsComponents/ImmersiveJsScore";
import ImmersiveProgram from "./immersiveJsComponents/ImmersiveProgram";
import Kurikulum from "./immersiveJsComponents/Kurikulum";

const ImmersiveJs = () => {
  return (
    <>
      <ImmersiveShowcase />
      <ImmersiveJsScore />
      <ImmersiveProgram />
      <Kurikulum />
    </>
  );
};

export default ImmersiveJs;
