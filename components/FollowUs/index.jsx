import React from "react";
import Button from "../Button.jsx";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

function FollowUs() {
  return (
    <div className="bg-[#c9b57a] px-6 md:px-64 py-8 flex flex-col items-center gap-6">
      <h3 className="text-black text-xl">Siga nossas redes!</h3>
      <Button
        type={1}
        text="Instagram"
        iconSize="w-6 h-6"
        gap="gap-3"
        href="https://www.instagram.com/ctrecomecar/"
        Icon={InstagramIcon}
      />
      <Button
        type={1}
        text="Facebook"
        iconSize="w-6 h-6"
        gap="gap-3"
        href="https://www.facebook.com/profile.php?id=100083517383164"
        Icon={FacebookOutlinedIcon}
      />
      <div className="w-8 border border-black"></div>
    </div>
  );
}

export default FollowUs;
