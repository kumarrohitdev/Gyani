import Link from "next/link";
import { TbGridDots } from "react-icons/tb"
export default function HomeHeader() {
  return (
    <div className="flex text-xs justify-end items-center">
      <div className="flex gap-8  p-4 max-w-8xl">
        <Link href={"https://mail.google.com"}>
             <p className="hover:underline">Gmail</p> 
        </Link>
      
        <Link href={"/"}>
             <p className="hover:underline">Images</p> 
        </Link>
      </div>

      <div className="flex p-4 gap-8 items-center">
        <span className="p-2 hover:bg-gray-100 rounded-full cursor-pointer active:brightness-90"><TbGridDots size={24} /></span>
      
      <button className="bg-blue-500 text-xl pr-2 pt-1 pb-1 text-white pl-2 rounded-lg hover:brightness-90 active:brightness-50">Sign in</button>
      </div>
    </div>
  );
}
