// Importing required modules and components
"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation"; // Corrected import statement
import { useState } from "react";

// InputBox component definition
export default function Webinput() {
  // Using Next.js router hook
  const router = useRouter();
  const serchData=useSearchParams().get('searchTerm');
  
  const [searchText, setSearchText] = useState(serchData || "");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const searchFunction = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchText.trim()) return;
    router.push(`/search/web?searchTerm=${searchText}`);
  };

  return (
    <div className="max-w-5xl mx-auto">
    <form onSubmit={searchFunction}>
      <div className="bg-white flex items-center lg:h-12 md:h-8 h-6 gap-8 rounded-md lg:w-[30rem] md:w-[16rem] w-[8rem] border-[1px] ">
        <input
          type="text"
          className="lg:w-[30rem] md:w-[16rem] w-[4rem]  outline-none pl-2 lg:h-8 md:h-6 h-4"
          value={searchText}
          onChange={handleInputChange}
        />
        <Image
          className="cursor-pointer lg:h-8 md:h-6 h-2 "
          src={"/mike.svg"}
          height={40}
          width={40}
          alt="mike"
          priority
        />
      </div>
    </form>
    </div>
  );
}
