import "./style.css";

import { NavLink } from "react-router-dom";

import Container from "../Container";
import Heading from "../Heading";
import SearchBar from "../SearchBar";

const Header = ({ searchBar, onSearch }) => {
  return (
    <header className="header">
      <Container>
        <Heading As="h1" className="header-title">
          <NavLink to="/">MyPeopleGame</NavLink>
        </Heading>
        {searchBar && <SearchBar onSearch={onSearch} />}
      </Container>
    </header>
  );
};

export default Header;
