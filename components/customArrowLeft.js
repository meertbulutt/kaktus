// arrows/CustomArrows.js
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const PrevArrowLeft = ({ className, style, onClick }) => {
  return (
    <div
      className="absolute bottom-5 left-5 z-10 cursor-pointer"
      onClick={onClick}
      style={{ ...style }}
    >
      <HiOutlineArrowNarrowLeft className="text-white text-3xl" />
    </div>
  );
};

export const NextArrowLeft = ({ className, style, onClick }) => {
  return (
    <div
      className="absolute bottom-5 left-15 z-10 cursor-pointer"
      onClick={onClick}
      style={{ ...style }}
    >
      <HiOutlineArrowNarrowRight className="text-white text-3xl" />
    </div>
  );

  

  

};
