import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import Button from "./Button";

function UtilityButtons() {
  const call = () => {
    console.log("call");
  };
  const searchRoute = () => {
    console.log("search");
  };
  return (
    <div className="w-full grid gap-4">
      <Button
        text="Ligar Agora"
        Icon={LocalPhoneOutlinedIcon}
        gap="gap-2"
        handleClick={call}
        iconSize="w-6 h-6"
      />
      <Button
        text="Ver Rotas"
        Icon={ForkRightIcon}
        gap="gap-3"
        handleClick={searchRoute}
        iconSize="w-7 h-7"
      />
    </div>
  );
}

export default UtilityButtons;
