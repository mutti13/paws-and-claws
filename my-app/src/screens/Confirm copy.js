import React, { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Button, Form } from "react-bootstrap";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import Aos from "aos";
import "aos/dist/aos.css";
function Delivery() {
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
      <Container>
        <Container fluid style={{ textAlign: "center", marginBottom: "40px" }}>
          <Row>
            <Col
              style={{
                fontFamily: "monospace",
                fontSize: "30px",
              }}
            >
              Confirm Order
            </Col>
          </Row>
        </Container>

        <Row>
          <Col>
            <p
              style={{
                marginTop: "60px",
                fontFamily: "jost",
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              On Delivery details
            </p>
            <img
              src="/images/confirm.jpg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              <p
                style={{
                  fontFamily: "jost",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                edit details
              </p>
            </a>
          </Col>
          <Col style={{ textAlign: "center", margin: "130px auto" }}>
            <Container
              style={{
                backgroundColor: "#33292A",
                borderRadius: "4px",
                margin: "auto",
                width: "68%",
                height: "370px",
                paddingTop: "10px",
              }}
            >
              <Form style={{ paddingTop: "10px" }}>
                <Form.Group
                  style={{
                    marginBottom: "5px",
                    display: "inline-flex",
                  }}
                >
                  <i
                    style={{
                      color: "#ffffff",
                      marginRight: "2px",
                    }}
                    class="fa-solid fa-credit-card"
                  ></i>
                  <Form.Control
                    style={{
                      background: "none",
                      borderRadius: "none",
                      border: "none",
                      color: "none",
                      margin: "none",
                      width: "300px",
                      height: "12px",
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    type="text"
                    placeholder="Name"
                  />
                </Form.Group>
                <hr
                  style={{
                    height: "2px",
                    borderWidth: "0",
                    color: "#2BB09B",
                    backgroundColor: "#2BB09B",
                    marginBottom: "30px",
                  }}
                ></hr>

                <Form.Group
                  style={{
                    marginBottom: "5px",
                    display: "inline-flex",
                  }}
                >
                  <i
                    style={{
                      color: "#fcfcfc",
                      marginRight: "2px",
                    }}
                    class="fa-solid fa-address-card"
                  ></i>
                  <Form.Control
                    style={{
                      background: "none",
                      borderRadius: "none",
                      border: "none",
                      color: "none",
                      margin: "none",
                      width: "300px",
                      height: "12px",
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    type="text"
                    placeholder="Billing Address"
                  />
                </Form.Group>
                <hr
                  style={{
                    height: "2px",
                    borderWidth: "0",
                    color: "#2BB09B",
                    backgroundColor: "#2BB09B",
                    marginBottom: "30px",
                  }}
                ></hr>

                <Form.Group
                  style={{
                    marginBottom: "5px",
                    display: "inline-flex",
                  }}
                >
                  <i
                    style={{
                      color: "#fafafa",
                      marginRight: "2px",
                    }}
                    class="fa-solid fa-phone"
                  ></i>
                  <Form.Control
                    style={{
                      background: "none",
                      borderRadius: "none",
                      border: "none",
                      margin: "none",
                      width: "300px",
                      height: "12px",
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    type="text"
                    placeholder="Phone Number"
                  />
                </Form.Group>
                <hr
                  style={{
                    height: "2px",
                    borderWidth: "0",
                    color: "#2BB09B",
                    backgroundColor: "#2BB09B",
                    marginBottom: "30px",
                  }}
                ></hr>
                <Button
                  className="btn btn-block"
                  style={{
                    width: "100%",
                    height: "50px",
                    fontWeight: "bold",
                    backgroundColor: "#F5EBE0",
                    color: "black",
                    borderColor: "black",
                  }}
                >
                  Confirm details
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
      <BottomBar />
    </div>
  );
}

export default Delivery;
