import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className="p-10 bg-gradient-to-br from-orange-500 to-orange-800 flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold">Content Generator</h2>
      <p>What you want to create ?</p>
      <div className="w-full flex justify-center">
        <div className="w-[30%] flex gap-2 items-center p-2 border rounded-md bg-orange-50 my-5">
          <Search className="text-primary" />
          <input
            placeholder="Search"
            type="text"
            onChange={(e)=>onSearchInput(e.target.value)}
            className="bg-transparent w-full outline-none text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
