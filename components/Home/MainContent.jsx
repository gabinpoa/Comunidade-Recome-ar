import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UtilityButtons from "./UtilityButtons";
import Titles from "./Titles";

function MainContent() {
  return (
    <div className="px-6 md:px-64 flex flex-col justify-around md:items-center h-[calc(100%-60px)]">
      <Titles />
      <UtilityButtons />
      <ExpandMoreIcon className="w-[50px] h-[50px] absolute bottom-3 left-0 right-0 ml-auto mr-auto" />
    </div>
  );
}

export default MainContent;
