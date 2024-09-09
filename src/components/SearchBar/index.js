import "./style.css";

import { ReactComponent as SearchIcon } from "../../assets/svg/loupe.svg";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
