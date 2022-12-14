import React, { useEffect, useState } from "react";
import Background from "./Background";
import Button from "./Button";
import GalleryModal from "./GalleryModal";
import { ResizeListener } from "react-resize-listener";

function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    if (window) {
      setInnerWidth(window.innerWidth);
    }
  }, []);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    setHeight(`${Math.floor(innerWidth - 512 * 1.064)}px`);
  }, [innerWidth]);

  console.log(height);

  const styles = () => {
    if (innerWidth > 768) {
      return { height: height };
    } else {
      return { height: "450px" };
    }
  };

  return (
    <div
      style={styles()}
      className={`${
        innerWidth < 768 ? "h-[400px]" : ""
      } items-center flex flex-col justify-center relative overflow-hidden`}
    >
      <ResizeListener onResize={handleResize} />
      {modalIsOpen ? <GalleryModal setModalIsOpen={setModalIsOpen} /> : null}
      <Background innerWidth={innerWidth} />
      <Button setModalIsOpen={setModalIsOpen} />
    </div>
  );
}

export default Gallery;
