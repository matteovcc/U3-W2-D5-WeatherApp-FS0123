import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

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
        `https://api.openweathermap.org/data/2.5/weather?lat=${cities[0].lat}&lon=${cities[0].lon}&appid=34c6980fa47e80410952d0cf568636d2&units=metric`
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
                {/* <p className="text-white fw-bold my-1">
                  {cities[0].name},{cities[0].state}
                  {cities[0].country} |
                </p>
                <p className="text-white  my-1 ms-auto">
                  La temperatura è:
                  {weather.main.temp},umidità {weather.main.humidity},
                  pressione:
                  {weather.main.pressure}
                </p> */}
                <Container className="d-flex justify-content-between p-1 text-white mt-2">
                  <div className="">
                    <h2 className="text-white fw-bold my-1">
                      {cities[0].name}{" "}
                    </h2>
                    <span className="fs-6">{weather.weather[0].main}</span>
                    <p className="fw-bold mb-0">{cities[0].country}</p>
                    <p className="fw-bold">{cities[0].state}</p>
                    <h3 className="text-white fw-bold my-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        className="bi bi-thermometer-low me-0"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585a1.5 1.5 0 0 1 1 1.415z" />
                        <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
                      </svg>
                      {weather.main.temp} °
                    </h3>
                  </div>
                  <div className="text-center">
                    <p className="fw-bold mb-0">Humidity</p>
                    <p className="fw-semibold text-center">
                      {weather.main.humidity} %
                    </p>
                    <p className="fw-bold mb-0">Pressure</p>
                    <p className="fw-semibold text-center">
                      {weather.main.pressure} Pa
                    </p>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        className="bi bi-wind me-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                      </svg>
                      Wind
                    </h3>
                    <div className="d-flex justify-content-evenly">
                      <p className="fw-semibold">
                        {weather.wind.speed}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-speedometer2 mx-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                          <path
                            fill-rule="evenodd"
                            d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                          />
                        </svg>
                      </p>
                      <p className="fw-semibold mx-1">{weather.wind.deg} °</p>
                      <p className="fw-semibold">
                        {weather.wind.gust}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-tropical-storm mx-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                          <path d="M9.5 2c-.9 0-1.75.216-2.501.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0 .5.5 0 0 1 1 0 5.5 5.5 0 0 0 8.001 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0 .5.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2zM8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </Container>
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
