import "./style.css";

import { Link } from "react-router-dom";

import Heading from "../Heading";

const Card = ({ person }) => {
  return (
    <div className="card">
      <Heading As="h2" className="card-heading">
        {person.fullname}
      </Heading>
      {person.description && (
        <p className="card-description">Description: {person.description}</p>
      )}
      <Link to={`/edit/${person.id}`} className="card-edit-btn">
        Edit
      </Link>
    </div>
  );
};

export default Card;
