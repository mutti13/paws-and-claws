import React from "react";
import { Container, Row, Col } from "react-grid-system";
// import card from "../images/card.png";
import { Form, Button } from "react-bootstrap";
// import credit from "../images/credit.png";

function Payment() {
  return (
    <Container style={{ backgroundColor: "#E4D5DB" }} className="newext">
      <Container fluid style={{ textAlign: "center", marginBottom: "40px" }}>
        <Row>
          <Col
            style={{
              fontFamily: "cursive",
              fontSize: "30px",
            }}
          >
            payment
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ textAlign: "center" }}>
        <Row>
          <Col>
            <Button
              style={{
                borderRadius: "4px",
                fontSize: "16px",
                width: "250px",
                backgroundColor: "#000000",
                color: "white",
                fontFamily: "jost",
                borderColor: "#000000",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              class="btn btn-sm"
            >
              credit card
            </Button>
            <Button
              style={{
                borderRadius: "4px",
                fontSize: "16px",
                width: "250px",
                color: "white",
                fontFamily: "jost",
                backgroundColor: "#C1DAD6",
                borderColor: "#C1DAD6",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              class="btn btn-sm"
            >
              on delivery
            </Button>
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
            Card Details
          </p>
          {/* <img src={card} /> */}
        </Col>
        <Col style={{ textAlign: "center", margin: "200px auto" }}>
          <Container
            style={{
              backgroundColor: "#33292A",
              borderRadius: "4px",
              margin: "auto",
              width: "400px",
              height: "430px",
              paddingTop: "10px",
            }}
          >
            <Form>
              <Form.Group
                style={{
                  marginBottom: "25px",
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
                    width: "340px",
                    height: "12px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                  type="text"
                  placeholder="Credit Card Number"
                />
                <hr
                  style={{
                    height: "2px",
                    borderWidth: "0",
                    color: "#2BB09B",
                    backgroundColor: "#2BB09B",
                  }}
                ></hr>
              </Form.Group>

              <Form.Group
                style={{
                  marginBottom: "25px",
                }}
              >
                <i
                  style={{
                    color: "#ffffff",
                    marginRight: "2px",
                  }}
                  class="fa-solid fa-calendar-days"
                ></i>
                <Form.Control
                  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    color: "none",
                    margin: "none",
                    width: "340px",
                    height: "12px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                  type="text"
                  placeholder="Card expiry date"
                />
                <hr
                  style={{
                    height: "2px",
                    borderWidth: "0",
                    color: "#2BB09B",
                    backgroundColor: "#2BB09B",
                  }}
                ></hr>
              </Form.Group>

              <Form.Group
                style={{
                  marginBottom: "25px",
                }}
              >
                <i
                  style={{
                    color: "#fcfcfc",
                    marginRight: "2px",
                  }}
                  class="fa-solid fa-lock"
                ></i>
                <Form.Control
                  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    color: "none",
                    margin: "none",
                    width: "340px",
                    height: "12px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                  type="text"
                  placeholder="CVV"
                />
                <hr
                  style={{
                    height: "2px",
                    borderWidth: "0",
                    color: "#2BB09B",
                    backgroundColor: "#2BB09B",
                  }}
                ></hr>
              </Form.Group>

              <Form.Group
                style={{
                  marginBottom: "25px",
                }}
              >
                <i
                  style={{ color: "#eeeff1", marginRight: "2px" }}
                  class="fa-solid fa-user"
                ></i>
                <Form.Control
                  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    color: "none",
                    margin: "none",
                    width: "340px",
                    height: "12px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                  type="text"
                  placeholder="Card Holder's Name"
                />
                <hr
                  style={{
                    height: "2px",
                    borderWidth: "0",
                    color: "#2BB09B",
                    backgroundColor: "#2BB09B",
                  }}
                ></hr>
              </Form.Group>

              <Form.Group
                style={{
                  marginBottom: "25px",
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
                    width: "340px",
                    height: "12px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                  type="text"
                  placeholder="Billing Address"
                />
                <hr
                  style={{
                    height: "2px",
                    borderWidth: "0",
                    color: "#2BB09B",
                    backgroundColor: "#2BB09B",
                  }}
                ></hr>
              </Form.Group>

              <Form.Group
                style={{
                  marginBottom: "25px",
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
                    color: "none",
                    margin: "none",
                    width: "340px",
                    height: "12px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                  type="text"
                  placeholder="Phone Number"
                />
                <hr
                  style={{
                    height: "2px",
                    borderWidth: "0",
                    color: "#2BB09B",
                    backgroundColor: "#2BB09B",
                  }}
                ></hr>
              </Form.Group>
              <Button
                className="btn btn-block"
                style={{
                  width: "100%",
                  height: "35px",
                  fontFamily: "cursive",
                }}
              >
                Confirm
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Payment;
