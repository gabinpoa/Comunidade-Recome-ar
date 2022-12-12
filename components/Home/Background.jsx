import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import DarkenLayer from "./DarkenLayer";
import background from "../../media/background.jpg";

function Background({ children }) {
  const [innerHeight, setInnerHeight] = useState();

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);
  return (
    <div
      style={innerHeight ? { height: innerHeight + "px" } : {}}
      className={`${
        !innerHeight ? " h-screen" : ""
      } items-center flex flex-col justify-center relative overflow-hidden`}
    >
      <Image
        src={background}
        height={700}
        quality={50}
        width={1167}
        priority
        className="h-auto min-h-full absolute -z-10 min-w-full w-auto max-w-none right-[-300px]"
      />
      <DarkenLayer>{children}</DarkenLayer>
    </div>
  );
}

export default Background;
