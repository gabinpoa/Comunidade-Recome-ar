import React, { useEffect, useState } from "react";
import Image from "next/image";
import signDarken from "../../media/sign-darken.png";

function Background({ innerWidth }) {
  const [width, setWidth] = useState();

  useEffect(() => {
    if (innerWidth > 768) {
      setWidth(`${innerWidth - 512}`);
    } else {
      setWidth(innerWidth);
    }
  }, [innerWidth]);
  console.log(width);
  return (
    <>
      <Image
        style={{ width: width + "px" }}
        src={signDarken}
        height={400}
        quality={50}
        width={375}
        className={
          "min-h-full absolute -z-10 min-w-full md:h-full md:min-w-0 max-w-none "
        }
        alt="Background"
      />
    </>
  );
}

export default Background;
