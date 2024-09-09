import "./style.css";

import { useEffect, useState } from "react";

import Card from "../../components/Card";
import Container from "../../components/Container";
import Header from "../../components/Header";
import localData from "../../assets/local/data.js";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // fetch(`${process.env.REACT_APP_API_LINK}/api/person/list`, {
    //   headers: {
    //     "ngrok-skip-browser-warning": true,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setData(data);
    //     setFilteredData(data);
    //   });
    setData(localData);
    setFilteredData(localData);
  }, []);

  const handleSearch = (e) => {
    setSearch(e);
    if (e === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((person) =>
          person.fullname.toLowerCase().includes(e.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      <Header searchBar onSearch={handleSearch} />
      <main>
        <Container>
          <div className="home-list">
            {filteredData.map((person, index) => (
              <Card key={index} person={person} />
            ))}
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;
