import { useEffect, useState } from "react";
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
        alert("Error fetching cities");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cities[0].lat}&lon=${cities[0].lon}&appid=34c6980fa47e80410952d0cf568636d2`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        alert("error fetching weather");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather();
    // handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities]);

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
          <div className="border border-warning rounded px-2 mt-2 d-flex align-items-center div-city">
            {cities.length > 0 && (
              <>
                <p className="text-white fw-bold my-1">
                  {cities[0].name},{cities[0].state}
                  {cities[0].country} |
                </p>
                <p className="text-white  my-1 ms-auto">
                  La temperatura è:
                  {weather.main.temp},umidità {weather.main.humidity},
                  pressione:
                  {weather.main.pressure}
                </p>
              </>
            )}
            {/* {weather.length > 0 && (
              <p className="text-white">{weather.main.temp}djdjdj</p>
            )} */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
