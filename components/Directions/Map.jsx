import React, { useState, useEffect } from "react";
import { ResizeListener } from "react-resize-listener";

function Map() {
  const [innerWidth, setInnerWidth] = useState();

  const imageWidth = () => {
    if (innerWidth && innerWidth < 768) {
      return innerWidth - 48;
    } else if (!innerWidth) {
      return 310;
    } else {
      return innerWidth - 512;
    }
  };

  useEffect(() => {
    if (!innerWidth && window) {
      setInnerWidth(window.innerWidth);
    }
  }, []);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  return (
    <>
      <ResizeListener onResize={handleResize} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d110710.01431808532!2d-51.36155217609173!3d-29.873272019147787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9519633ffe70f9ad%3A0x557ddb3402859404!2sComunidade%20Terap%C3%AAutica%20Recome%C3%A7ar%20-%20Av.%20do%20Passito%2C%20746%20-%20Calif%C3%B3rnia%20II%2C%20Nova%20Santa%20Rita%20-%20RS%2C%2092480-000!3m2!1d-29.8732875!2d-51.2913448!5e0!3m2!1sen!2sbr!4v1671000838222!5m2!1sen!2sbr"
        width={imageWidth()}
        height="250"
        className="border-2 border-black"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Map;
