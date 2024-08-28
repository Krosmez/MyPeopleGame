import "./style.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "../../components/Container";
import Header from "../../components/Header";
import Heading from "../../components/Heading";

const Person = () => {
  const [person, setPerson] = useState({});

  let { personId } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_LINK}/api/person/${personId}`, {
      headers: {
        "ngrok-skip-browser-warning": true,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPerson(data);
      });
  }, [personId]);

  const capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <main className="person">
      <Header />
      <Container>
        <Heading As="h1" className="person-heading">
          {`${person.firstname} ${person.lastname}`}
        </Heading>
        {person?.fields?.map((field, id) => (
          <div key={`personView-field-${id}`} className="person-field">
            <Heading As="h2" className="person-heading">
              {capitaliseFirstLetter(field.name)}
            </Heading>
            <p>{field.content}</p>
          </div>
        ))}
      </Container>
    </main>
  );
};

export default Person;
