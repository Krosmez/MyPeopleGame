import "./style.css";

import { NavLink } from "react-router-dom";

import Container from "../Container";
import Heading from "../Heading";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Heading As="h1">
          <NavLink to="/">MyPeopleGame</NavLink>
        </Heading>
        <SearchBar />
      </Container>
    </header>
  );
};

export default Header;
