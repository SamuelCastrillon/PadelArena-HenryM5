import React from "react";

const FooterPadelCarousel = () => {
  const repeat = 20;

  const renderRepeatPadel = () => {
    const elements = [];
    for (let i = 0; i < repeat; i++) {
      elements.push(
        <h3
          key={`padel-${i}`}
          className="flex items-center justify-center w-52 px-12 py-2 mt-5 text-center text-lg uppercase text-white radhiumz"
        >
          PadelArena
        </h3>
      );
      if (i < repeat - 1) {
        elements.push(
          <h3
            key={`plus-${i}`}
            className="mx-5 my-2 text-xl mt-7 uppercase text-white radhiumz"
          >
            +
          </h3>
        );
      }
    }
    return elements;
  };

  return (
    <div className="w-full h-12">
      <div className="flex w-full animate-scroll">{renderRepeatPadel()}</div>
    </div>
  );
};

export default FooterPadelCarousel;
