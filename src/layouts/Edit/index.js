import "./style.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AutoResizeTextarea from "../../components/TextArea";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Input from "../../components/Input";

const Edit = () => {
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

  //   const changeValue = (e) => {
  //     const newFields = [...person.fields];
  //     newFields[e.target.id].name = e.target.value;
  //     setPerson({ ...person, fields: newFields });
  //   };

  return (
    <main className="edit">
      <Header />
      <Container>
        <Heading As="h2" className="edit-person-name">{`${person.firstname} ${
          person.lastname ? person.lastname : ""
        }`}</Heading>
        {person?.fields?.map((field, index) => (
          <div key={index}>
            <Input id={index} label={`t-${index}`} value={field.name} />
            <Heading As="h3" className="edit-field-title">
              {capitaliseFirstLetter(field.name)}
            </Heading>
            <AutoResizeTextarea initialContent={field.content} />
          </div>
        ))}
      </Container>
    </main>
  );
};

export default Edit;
