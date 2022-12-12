import React from "react";

function DarkenLayer({ children }) {
  return <div className="h-full w-full bg-gradientLayer">{children}</div>;
}

export default DarkenLayer;
