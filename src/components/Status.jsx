import React from "react";
import Dual from "./Dual";
import Overview from "./Overview";
import Time from "./Time";
import Protocol from "./Protocol";
import SourceIP from "./SourceIP";
import DestIP from "./DestIP";


function Status() {
  return (
    <div className="flex flex-col justify-center items-end gap-10 w-full ">
      <Dual />
      <Overview/>
      <div className="flex justify-end items-center gap-5 w-full relative z-0">
        <Time/>
        <Protocol/>
      </div>
      <div className="flex justify-end items-center gap-5 w-full relative  z-0">
        <SourceIP/>
        <DestIP/>
      </div>
    </div>
  );
}

export default Status;
