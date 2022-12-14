import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import DarkenLayer from "./DarkenLayer";
import background from "../../media/background.jpg";
import { ResizeListener } from "react-resize-listener";

function Background({ children }) {
  const [innerHeight, setInnerHeight] = useState();

  useEffect(() => {
    if (!innerHeight && window) {
      setInnerHeight(window.innerHeight);
    }
  }, []);

  const handleResize = () => {
    setInnerHeight(window.innerHeight);
  };
  return (
    <div
      id="home"
      style={innerHeight ? { height: innerHeight + "px" } : {}}
      className={`${
        !innerHeight ? " h-screen" : ""
      } items-center flex flex-col min-h-[500px] justify-center relative overflow-hidden`}
    >
      <ResizeListener onResize={handleResize} />
      <Image
        src={background}
        height={700}
        quality={50}
        width={1167}
        priority
        className="h-auto min-h-full absolute -z-10 min-w-full w-auto max-w-none md:right-auto right-[-300px]"
        alt="Background"
      />
      <DarkenLayer>{children}</DarkenLayer>
    </div>
  );
}

export default Background;
