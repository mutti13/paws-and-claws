import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import Aos from "aos";
import "aos/dist/aos.css";
function Placed() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <div
      className="fontt newtext"
      data-aos="fade-down"
      style={{ backgroundColor: "#f2ede1" }}
    >
      <Locatenav />
      <Container style={{ height: "700px", backgroundColor: "#f2ede1" }}>
        <Container fluid style={{ textAlign: "center", marginBottom: "60px" }}>
          <Row>
            <Col
              style={{
                fontSize: "30px",
              }}
            >
              Order Placed
            </Col>
          </Row>
        </Container>
        <Container style={{ textAlign: "center" }}>
          <Row>
            <Col>
              <img src="/images/placed.jpg" />
            </Col>
          </Row>
        </Container>
      </Container>
      <BottomBar />
    </div>
  );
}

export default Placed;
