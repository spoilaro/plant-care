import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
  return (
    <div id="home">
      <header>
        <h1>Plant Care</h1>
        <SearchBar />
      </header>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="searchbar">
      <input type="search" name="plant" id="plant-search" />
      <AiOutlineSearch className="mag-glass" />
    </div>
  );
}
