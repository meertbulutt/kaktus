import { HiArrowLongRight } from "react-icons/hi2";
import TextAnimation from "./TextAnimation";

const Button = ({ buttonText }) => {
  return (
    <button className="group border border-kaktus-green text-xl text-kaktus-green flex items-center space-x-1 md:space-x-2 px-2 py-1 md:px-4 md:py-2 mt-4 hover:bg-kaktus-green hover:text-white cursor-pointer duration-400">
      <>
        <TextAnimation className={"group hover:bg-kaktus-green hover:text-white duration-300"} text={buttonText} />
      </>
      <HiArrowLongRight
        size={22}
        className="group-hover:translate-x-2 transition-transform duration-400"
      />
    </button>
  );
};

export default Button;
