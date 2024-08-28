import "./style.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "../../components/Container";
import Fields from "../../components/Fields";
import Header from "../../components/Header";

const Edit = () => {
  const [person, setPerson] = useState({});
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

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

  useEffect(() => {
    if (!person) return;
    setFirstname(person.firstname);
    setLastname(person.lastname);
  }, [person]);

  const capitaliseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <main className="edit">
      <Header />
      <Container>
        <Container className="edit-person-name">
          <div className="firstname-input">
            <label
              htmlFor={firstname}
              className="label-name screen-reader-text"
            >
              Firstname
            </label>
            <input
              id={firstname}
              type="text"
              value={firstname}
              onChange={() => {}}
            />
          </div>
          <div className="lastName-input">
            <label htmlFor={lastname} className="label-name screen-reader-text">
              Lastname
            </label>
            <input
              id={lastname}
              type="text"
              value={lastname}
              onChange={() => {}}
            />
          </div>
        </Container>
        {person?.fields?.map((field, index) => (
          <Fields
            key={`field-${index}`}
            id={field.name}
            label={field.name}
            personId={personId}
            initialInputValue={field.name}
            initialContent={field.content}
          />
        ))}
      </Container>
    </main>
  );
};

export default Edit;
