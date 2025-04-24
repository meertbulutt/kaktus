// arrows/CustomArrows.js
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const PrevArrow2 = ({ className, style, onClick }) => {
  return (
    <div
      className="absolute bottom-4 right-16 z-10 cursor-pointer"
      onClick={onClick}
      style={{ ...style }}
    >
      <HiOutlineArrowNarrowLeft className="text-white text-3xl" />
    </div>
  );
};

export const NextArrow2 = ({ className, style, onClick }) => {
  return (
    <div
      className="absolute bottom-4 right-4 z-10 cursor-pointer"
      onClick={onClick}
      style={{ ...style }}
    >
      <HiOutlineArrowNarrowRight className="text-white text-3xl" />
    </div>
  );

  

  

};
