import { Col, Container, Row } from "react-bootstrap";

const EpisodiRadio = () => {
  return (
    <Container>
      <h2 className=" mt-3">Nuovi Episodi Radio</h2>
      <Row className=" g-3 mt-2">
        <Col sm={4} md={4}>
          <img className="w-100" src="src/assets/images/2c.png" alt="" />
        </Col>
        <Col sm={4} md={4}>
          <img className="w-100" src="src/assets/images/2a.png" alt="" />
        </Col>
        <Col sm={4} md={4}>
          <img className="w-100" src="src/assets/images/2b.png" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default EpisodiRadio;
