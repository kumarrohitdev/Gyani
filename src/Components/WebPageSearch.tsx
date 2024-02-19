import Image from "next/image";
import Webinput from "./WebInput";
import WebHeaderItem from "./WebHeaderItem";
import Link from "next/link";

export default function WebPageSearch() {
  return (
    <header className="grid grid-cols-3 items-center gap-6 max-w-6xl mx-auto justify-between static top-0 w-full">
   <div className="flex items-center gap-6 mt-8">
    {/* <Link href={"/"}> */}
    <Image src={"/Google.png"} className="lg:h-12 md:h-8 h-6" height={100} width={100} priority alt="google" />
    {/* </Link> */}
   <Webinput />
   </div>
    <div>
        <WebHeaderItem />
    </div>
    </header>
  )
}
