import React from "react";
import { Link, useLocation } from "react-router-dom";


function Sidebar({setTitle}) {
    const location=useLocation();
  return (
    <div className="fixed top-0  z-50 left-0 w-72 h-full flex flex-col justify-center items-start  bg-[#202c44] uppercase">
      <ul className="flex flex-col  justify-start w-full items-start text-white tracking-wider text-sm">
          <Link to='/' onClick={()=>{setTitle("Dashboard")}} className={`w-full p-6  cursor-pointer ${location.pathname==='/'?'Active-menu text-sky-500':''} hover:bg-[#595ef712] flex justify-start items-start gap-10 text-start`}>
          <span class="material-symbols-outlined">dashboard</span>
          <p className="font-bold ">Dashboard</p>
          </Link>
        <Link to='/' onClick={()=>{setTitle("Analytics")}} className={`w-full p-6  cursor-pointer ${location.pathname==='/details'?'Active-menu text-sky-500':''} hover:bg-[#595ef712] flex justify-start items-start gap-10 text-start`}>
          <span class="material-symbols-outlined ">
            monitoring
          </span>
          <p className="font-bold ">Details</p>
        </Link>
        <li className="w-full p-6  cursor-pointer hover:bg-[#595ef712] flex justify-start items-start gap-10 text-start">
          <span class="material-symbols-outlined">
            developer_guide
          </span>
          <p className="font-bold ">Regulations</p>
        </li>
        <li className="w-full p-6  cursor-pointer hover:bg-[#595ef712] flex justify-start items-start gap-10">
          <span class="material-symbols-outlined">
            person_edit
          </span>
          <p className="font-bold">Personalization</p>
        </li>
      </ul>

    </div>
  );
}

export default Sidebar;
