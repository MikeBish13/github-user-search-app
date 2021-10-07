import React from "react";
import {ReactComponent as SearchIcon} from '../images/icon-search.svg';

export default function SearchBar({ setUser, error }) {
  const setSearchTerm = (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById("search-term").value;
    setUser(searchTerm);
  };

  return (
    <section className="search-bar container">
      <SearchIcon />
      <input className="search-bar__input" type="text" placeholder="Search GitHub username..." id="search-term"></input>
      {error && <span className="search-bar__error">No results</span>}
      <input className="search-bar__submit btn btn--primary" type="submit" onClick={setSearchTerm} value="Search"></input>
    </section>
  );
}
