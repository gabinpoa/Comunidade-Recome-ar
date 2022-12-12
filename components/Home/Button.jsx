import React from "react";

function Button({ handleClick, Icon, iconSize, type, text, gap }) {
  const buttonStyle = () => {
    if (type === 1) {
      return "font-light border-[1px] border-black border-solid";
    } else if (type === undefined) {
      return " bg-green1";
    }
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        buttonStyle() +
        " text-xl w-full flex justify-center items-center py-3 h-min " +
        gap
      }
    >
      <Icon className={iconSize} />
      {text}
    </button>
  );
}

export default Button;
