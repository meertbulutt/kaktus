// arrows/CustomArrows.js
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className="absolute bottom-5 left-2 lg:bottom-10 lg:left-50 z-10 cursor-pointer"
      onClick={onClick}
      style={{ ...style }}
    >
      <HiOutlineArrowNarrowLeft className="text-white text-3xl" />
    </div>
  );
};

export const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className="absolute bottom-5 left-12 lg:bottom-10 lg:left-60 z-10 cursor-pointer"
      onClick={onClick}
      style={{ ...style }}
    >
      <HiOutlineArrowNarrowRight className="text-white text-3xl" />
    </div>
  );

  

  

};
