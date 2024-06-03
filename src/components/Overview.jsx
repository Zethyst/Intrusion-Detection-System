import React from "react";
import data from "../data.json";

function Overview() {
  const eventTypeCounts = {};
  data.forEach((event) => {
    const eventType = event.event_type;
    if (!eventTypeCounts[eventType]) {
      eventTypeCounts[eventType] = 1;
    } else {
      eventTypeCounts[eventType]++;
    }
  });

  return (
    <div className="flex justify-end mx-3 items-center gap-2 w-full">
      <div
        className="p-9 w-72 flex flex-col justify-center items-center gap-5 bg-[#202c44c0] text-white"
        style={{ borderTop: "3px solid red" }}
      >
        <div className="p-7 rounded-full flex justify-center items-center bg-[#303c5c]">
          <i className="fa-regular fa-bell scale-150"></i>
        </div>
        <p className="text-3xl  font-bold">{eventTypeCounts["alert"]}</p>
        <p className="text-2xl font-semibold text-[#cccccc88] uppercase">Alerts</p>
      </div>
      <div
        className="p-9 w-72 flex flex-col justify-center items-center gap-5 bg-[#202c44c0] text-white"
        style={{ borderTop: "3px solid orange" }}
      >
        <div className="p-6 rounded-full flex justify-center items-center bg-[#303c5c]">
        <span class="material-symbols-outlined">destruction</span>
        </div>
        <p className="text-3xl font-bold">{eventTypeCounts["ssh"]}</p>
        <p className="text-2xl font-semibold text-[#ccc8] uppercase">SSH Attack</p>
      </div>
      <div
        className="p-9 w-72 flex flex-col justify-center items-center gap-5 bg-[#202c44c0] text-white"
        style={{ borderTop: "3px solid yellow" }}
      >
        <div className="p-6 rounded-full flex justify-center items-center bg-[#303c5c]">
        <span class="material-symbols-outlined">dns</span>
        </div>
        <p className="text-3xl font-bold">{eventTypeCounts["dns"]}</p>
        <p className="text-2xl font-semibold text-[#cccccc88] uppercase">Unusal DNS</p>
      </div>
      <div
        className="p-9 w-72 flex flex-col justify-center items-center gap-5 bg-[#202c44c0] text-white"
        style={{ borderTop: "3px solid green" }}
      >
        <div className="p-6 rounded-full flex justify-center items-center bg-[#303c5c]">
        <span class="material-symbols-outlined">sync_alt</span>
        </div>
        <p className="text-3xl font-bold">{eventTypeCounts["http"]}</p>
        <p className="text-2xl font-semibold text-[#ccc8] uppercase">HTTP Events</p>
      </div>
    </div>
  );
}

export default Overview;
