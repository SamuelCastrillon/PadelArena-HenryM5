import React from "react";

const FooterPadelCarousel = () => {
  const repeat = 20;

  const renderRepeatPadel = () => {
    const elements = [];
    for (let i = 0; i < repeat; i++) {
      elements.push(
        <h3
          key={`padel-${i}`}
          className="flex items-center justify-center w-52 px-12 py-2 border-2 border-white rounded-2xl text-center text-lg uppercase text-white"
        >
          PadelArena
        </h3>
      );
      if (i < repeat - 1) {
        elements.push(
          <h3
            key={`plus-${i}`}
            className="mx-5 my-2 text-xl uppercase text-white"
          >
            +
          </h3>
        );
      }
    }
    return elements;
  };

  return (
    <div className="absolute bottom-0 w-full h-12 overflow-hidden">
      <div className="flex w-full animate-scroll">{renderRepeatPadel()}</div>
    </div>
  );
};

export default FooterPadelCarousel;
