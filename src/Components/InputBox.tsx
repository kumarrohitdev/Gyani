// Importing required modules and components
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Corrected import statement
import { useState } from "react";

// InputBox component definition
export default function InputBox() {
  // Using Next.js router hook
  const router = useRouter();

  // State for managing the search text
  const [searchText, setSearchText] = useState("");

  // Function to handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // Function to handle form submission
  const searchFunction = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchText.trim()) return;
    router.push(`/search/web?searchTerm=${searchText}`);
  };



  //I am feeling lucky

  const luckyFeeling=async()=>{
    let response=await fetch('https://random-word-api.herokuapp.com/word')

    let word= await response.json()

    router.push(`/search/web?searchTerm=${word}`)

  }

  // Rendering JSX
  return (
    <>
      <div className="flex justify-center w-full mt-8 ">
        <form onSubmit={searchFunction}>
          <div className="bg-white rounded-full border-2 flex items-center hover:shadow-xl">
            <input
              type="text"
              className="lg:w-[40vw] md:w-[20vw] h-8 rounded-full  outline-none pl-6"
              value={searchText}
              onChange={handleInputChange}
            />
            {/* Using the Next.js Image component */}
            <Image
              className="cursor-pointer"
              src={"/mike.svg"}
              height={50}
              width={50}
              alt="mike"
            />
          </div>
        </form>
      </div>

      <div className="flex justify-center mt-6 gap-6">
        <button onClick={searchFunction} className="hover:shadow-md p-2 bg-gray-100 rounded-md">
          Google Search
        </button>
        <button
        onClick={luckyFeeling}
        className="hover:shadow-md p-2 bg-gray-100 rounded-md">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </>
  );
}
