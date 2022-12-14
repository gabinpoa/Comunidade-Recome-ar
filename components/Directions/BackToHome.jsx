import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function BackToHome() {
  return (
    <a href="#home" className="grid place-items-center text-[#1E354A]">
      Voltar ao Início
      <KeyboardDoubleArrowUpIcon className="w-8 h-8" />
    </a>
  );
}

export default BackToHome;
