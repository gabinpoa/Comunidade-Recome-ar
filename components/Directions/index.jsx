import React from "react";
import BackToHome from "./BackToHome";
import Info from "./Info";
import Map from "./Map";

function Directions() {
  return (
    <div className="pt-9 px-6 pb-2 flex flex-col w-full bg-[#DADADA] items-center gap-4">
      <Map />
      <Info />
      <BackToHome />
    </div>
  );
}

export default Directions;
