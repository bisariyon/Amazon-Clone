import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="flex-1 hidden sm:flex items-center rounded-full bg-white bg-opacity-10 mr-5">
      <SearchIcon className="h-6 w-6 text-gray-400 ml-4" />
      <input 
        type="text"
        className="flex-1 h-full p-2 bg-transparent outline-none text-white placeholder-gray-400"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
