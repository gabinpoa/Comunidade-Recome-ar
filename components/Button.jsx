import React from "react";

function Button({ href, Icon, iconSize, type, text, gap }) {
  const buttonStyle = () => {
    if (type === 1) {
      return "font-light border-[1px] text-black rounded-full border-black border-solid";
    } else if (type === undefined) {
      return " bg-green1";
    }
  };
  return (
    <a
      target="_blank"
      href={href}
      className={
        buttonStyle() +
        " text-xl w-full flex justify-center items-center py-3 h-min " +
        gap
      }
    >
      <Icon className={iconSize} />
      {text}
    </a>
  );
}

export default Button;
