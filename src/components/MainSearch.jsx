import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
// import City from "./City";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=34c6980fa47e80410952d0cf568636d2`
      );
      if (response.ok) {
        const data = await response.json();

        setCities(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="text-white">Cerca il meteo nella tua città</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Milano,Londra,Roma,Tokyo...."
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {cities.length > 0 && (
            <div className="border border-warning rounded px-2 mt-2 d-flex align-items-center div-city">
              <p className="text-white fw-bold my-1">
                {cities[0].name},{cities[0].country}
              </p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
