import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <div className="bg-headerGradient px-6 md:px-64 flex justify-between py-4 items-center">
      <span className="font-urbanist text-2xl">recomeçar</span>
      <MenuIcon className="text-4xl" />
    </div>
  );
}

export default Header;
