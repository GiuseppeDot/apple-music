import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Novità from "./components/Novità";
import NuoveUscite from "./components/NuoveUscite";
import EpisodiRadio from "./components/EpisodiRadio";

function App() {
  return (
    <div className="background-custom-body text-white">
      <header>
        <CustomNavbar />
      </header>
      <main>
        <Container>
          <Row>
            <Col>
              <Novità />
            </Col>
            <Col sm={12}>
              <EpisodiRadio />
            </Col>
          </Row>
          <Row className=" g-3 mt-3">
            <Col sm={4} md={4}>
              <NuoveUscite />
            </Col>
          </Row>
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
