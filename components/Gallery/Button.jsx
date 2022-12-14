import React from "react";
import Link from "next/link";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";

function Button({ setModalIsOpen }) {
  const handleClick = () => {
    setModalIsOpen(true);
  };
  return (
    <div className="px-6 md:px-64 py-9 h-full w-full flex flex-col-reverse">
      <button
        onClick={handleClick}
        type="button"
        className="text-white w-full py-3 flex gap-3 justify-center items-center rounded-full bg-[rgb(0,0,0,0.9)] text-xl font-medium"
      >
        <PhotoOutlinedIcon className="w-6 h-6" />
        Galeria
      </button>
    </div>
  );
}

export default Button;
