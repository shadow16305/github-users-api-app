import { useState } from "react";

import search_icon from "../assets/Shape 2.svg";

const SearchBox = ({ value }) => {
  const [inputValue, setInputValue] = useState("");
  const { isDark, setSearchValue } = value;

  const searchChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchValue(inputValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchValue(inputValue);
    }
  };

  return (
    <div
      className={`flex justify-between items-center w-full px-3 py-3 rounded-2xl mt-9 shadow-md ${
        isDark ? "text-white bg-[#1E2A47] " : "text-[#222731] bg-[#FEFEFE]"
      }`}
    >
      <div className="flex gap-3 w-2/3">
        <img src={search_icon} alt="search icon" className="w-5 lg:w-6" />
        <input
          type="text"
          value={inputValue}
          onChange={searchChangeHandler}
          onKeyPress={handleKeyPress}
          placeholder="Search GitHub username…"
          className={`bg-transparent w-full focus:outline-none text-xs lg:text-lg ${
            isDark ? "placeholder:text-white" : "placeholder:text-[#4B6A9B]"
          }`}
        />
      </div>
      <button
        type="submit"
        onClick={handleSearch}
        className="bg-[#0079FF] text-white rounded-[10px] px-6 py-3 text-sm lg:text-base hover:bg-[#60ABFF] transition duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
