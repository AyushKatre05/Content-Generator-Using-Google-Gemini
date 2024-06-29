import { Home, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className="p-6 md:p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col md:flex-row justify-between items-center text-white">
      <div className="flex items-center gap-4">
        <Link href="/">
        <h2 className="text-2xl md:text-3xl font-bold">Content Generator</h2>
        </Link>
        
      </div>
      <div className="w-full md:w-[30%] flex items-center justify-center mt-4 md:mt-0">
        <div className="w-full max-w-md flex gap-2 items-center p-2 border rounded-md bg-orange-50">
          <Search className="text-primary" />
          <input
            placeholder="Search"
            type="text"
            onChange={(e) => onSearchInput(e.target.value)}
            className="bg-transparent w-full outline-none text-black placeholder-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
