import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const HomeIntroduction = () => (
  <Container className="my-4">
    <Card
      bg="transparent"
      className="text-white border-top-1 border-bottom-1 border-end-0 border-start-1 "
    >
      <Card.Header as="h3">Welcome</Card.Header>
      <Card.Body>
        <Card.Title as="h1">Meteo App 🌤️</Card.Title>
        <Card.Text>See the Weather in your city</Card.Text>
        <Button id="get-started-btn" variant="">
          Get Started
        </Button>
      </Card.Body>
    </Card>
  </Container>
);

export default HomeIntroduction;
