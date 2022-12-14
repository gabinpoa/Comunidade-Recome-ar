import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import Button from "../Button";

function UtilityButtons() {
  return (
    <div className="w-full grid gap-4">
      <Button
        text="Ligar Agora"
        Icon={LocalPhoneOutlinedIcon}
        gap="gap-2"
        href="tel:5134791138"
        iconSize="w-6 h-6"
      />
      <Button
        text="Ver Rotas"
        Icon={ForkRightIcon}
        gap="gap-3"
        href="https://goo.gl/maps/XgXG26iwdegB5nJz6"
        iconSize="w-7 h-7"
      />
    </div>
  );
}

export default UtilityButtons;
