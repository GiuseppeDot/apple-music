import { Col, Container, Row } from "react-bootstrap";

const Novità = () => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <div className=" py-5 px-3">
            <h1>Novità</h1>
            <hr />
            <h4>Nuova stazione radio</h4>
            <p>
              Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill
            </p>
          </div>
        </Col>
      </Row>
      <Row className=" g-3">
        <Col sm={12} md={6}>
          <img
            className=" rounded-5 w-100"
            src="src/assets/images/1a.png"
            alt=""
          />
        </Col>
        <Col sm={12} md={6}>
          <img
            className=" rounded-5 w-100"
            src="src/assets/images/1b.png"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Novità;
