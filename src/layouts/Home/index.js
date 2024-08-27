import "./style.css";

import { useEffect, useState } from "react";

import Card from "../../components/Card";
import Container from "../../components/Container";
import Header from "../../components/Header";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_LINK}/api/person/list`, {
      headers: {
        "ngrok-skip-browser-warning": true,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="home-list">
          {data?.map((person, index) => (
            <Card key={index} person={person} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
