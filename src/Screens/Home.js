import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import PlantCard from "../Components/PlantCard";

export default function Home() {
  const plantList = ["Bonsai", "Sunflower", "Rose", "Cactus", "Baby"];

  const plants = plantList.map((item, index) => (
    <li>
      <PlantCard />
    </li>
  ));

  return (
    <div id="home">
      <header>
        <h1>Plant Care</h1>
        <SearchBar />
      </header>

      <ul className="plant-grid">{plants}</ul>
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
