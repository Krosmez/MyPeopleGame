import "./style.css";

import { Link } from "react-router-dom";

import Container from "../Container";
import Heading from "../Heading";

const Card = ({ person }) => {
  return (
    <div className="card">
      <Heading As="h2" className="card-heading card-name">
        {person.fullname}
      </Heading>
      {person.description && (
        <Container className="card-description-container">
          <Heading As="h3" className="card-heading">
            Description:
          </Heading>
          <p className="card-description">{person.description}</p>
        </Container>
      )}
      <Container className="card-btn">
        <Link to={`/edit/${person.id}`} className="card-edit-btn">
          Editer
        </Link>
        <Link to={`/view/${person.id}`} className="card-edit-btn">
          Voir plus
        </Link>
      </Container>
    </div>
  );
};

export default Card;
