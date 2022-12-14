import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import gallery from "../../media";

function GalleryModal({ setModalIsOpen }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const handleNextPhoto = () => {
    if (photoIndex === gallery.length - 1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  };
  const handlePreviousPhoto = () => {
    if (photoIndex === 0) {
      setPhotoIndex(gallery.length - 1);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  };

  return (
    <div className="fixed right-0 top-0 left-0 bottom-0 bg-[rgb(0,0,0,0.85)] grid place-items-center h-auto w-auto p-3">
      <div className="grid grid-cols-[15%_70%_15%] place-items-center w-full ">
        <CloseIcon
          onClick={handleCloseModal}
          className="w-10 h-10 fixed right-6 top-6"
        />
        <button onClick={handlePreviousPhoto} type="button">
          <ArrowBackIosIcon className="w-7 h-7 text-white" />
        </button>
        {mounted
          ? gallery.map((imageUrl, index) => {
              return (
                <Image
                  width={250}
                  height={250}
                  quality={50}
                  key={index}
                  alt="Imagens da galeria"
                  src={imageUrl}
                  className={`max-w-full w-auto md:max-w-720 h-auto ${
                    photoIndex === index ? null : "hidden"
                  }`}
                />
              );
            })
          : null}
        <button onClick={handleNextPhoto} type="button">
          <ArrowForwardIosIcon className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
}

export default GalleryModal;
