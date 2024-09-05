import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { LuCamera } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";
import { LuGamepad2 } from "react-icons/lu";

const Categories = () => {
  return (
    <div className="flex w-full max-w-[1170px] flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-red-600 rounded"></div>
        <div className="text-red-600">Categories</div>
      </div>

      <div className="flex justify-between w-full">
        <div className="text-4xl font-semibold">Browse By Category</div>
        <div className="flex gap-2">
          <button
            // onClick={() => sliderRef.current.slickPrev()}
            className="border w-[46px] h-[46px] rounded-full flex items-center justify-center"
            aria-label="Previous Slide"
          >
            {"<"}
          </button>
          <button
            // onClick={() => sliderRef.current.slickNext()}
            className="border w-[46px] h-[46px] rounded-full flex items-center justify-center"
            aria-label="Next Slide"
          >
            {">"}
          </button>
        </div>
      </div>
      <div className="flex gap-[30px]">
        <div className="border w-[170px] h-[145px] rounded flex flex-col items-center justify-center ">
          <MdOutlinePhoneIphone className="w-[56px] h-[56px]" />
          <p>Phone</p>
        </div>

        <div className="border w-[170px] h-[145px] rounded flex flex-col items-center justify-center ">
          <RiComputerLine className="w-[56px] h-[56px]" />
          <p>Computers</p>
        </div>

        <div className="border w-[170px] h-[145px] gap-3 rounded flex flex-col items-center justify-center ">
          <BsSmartwatch className="w-[56px] h-[56px]" />
          <p>SmartWatch</p>
        </div>

        <div className="border w-[170px] h-[145px] rounded flex flex-col items-center justify-center ">
          <LuCamera className="w-[56px] h-[56px]" />
          <p>Camera</p>
        </div>

        <div className="border w-[170px] h-[145px] rounded flex flex-col items-center justify-center ">
          <FiHeadphones className="w-[56px] h-[56px]" />
          <p>HeadPhones</p>
        </div>

        <div className="border w-[170px] h-[145px] rounded flex flex-col items-center justify-center ">
          <LuGamepad2 className="w-[56px] h-[56px]" />
          <p>Gaming</p>
        </div>
      </div>
    </div>
  );
};
export default Categories;
