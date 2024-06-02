import React, { useState } from "react";

function Dual() {
  const [active, setActive] = useState("status");
  const handleClick = (name)=>{
    setActive(name)
  }
  return (
    <>
      <div className="p-4 bg-[#202c44c0]  translate-x-32  text-[#4babd447] shadow-md rounded-2xl flex justify-center items-center gap-3 mx-auto">
        <div
          onClick={()=>{handleClick("status")}}
          className={`p-3 cursor-pointer  font-bold w-72 text-center ${active==="status"?"active":""}`}
          style={{ borderBottom: "4px solid #4babd447" }}
        >
          <p className="">Status</p>
        </div>
        <div
         onClick={()=>{handleClick("details")}}
          className={`p-3 cursor-pointer  font-bold w-72 text-center ${active==="details"?"active":""}`}
          style={{ borderBottom: "4px solid #4babd447" }}
        >
          <p className="">Protocol</p>
        </div>
      </div>
    </>
  );
}

export default Dual;
