import { CiSettings } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
export default function WebHeaderItem() {
  return (
    <div className="flex absolute lg:right-12 md:right-4   right-2 items-center justify-center md:gap-4 gap-5 lg:gap-6">
      <CiSettings
        className="rounded-full shadow-gray-50  shadow-sm hover:bg-gray-400 lg:size-6 md:size-4 size-2"
      
      />

      <TbGridDots className="lg:size-6 md:size-4 size-2" />
      <button className="bg-blue-500 md:text-sm text-[8px] lg:text-xl pr-2  text-white p-1  rounded-lg hover:brightness-90 active:brightness-50">
        Sign in
      </button>
    </div>
  );
}
