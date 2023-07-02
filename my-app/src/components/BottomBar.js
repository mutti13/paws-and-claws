import React from "react";
import { Row, Col, Container } from "react-grid-system";
import { Link } from "react-router-dom";
function BottomBar() {
  return (
    <div className="foot stick newtext">
      <Container style={{ paddingTop: "15px" }}>
        <Row>
          <Col style={{ marginTop: "10px", fontWeight: "bold" }} className="a">
            Resources
            <br />
            <Link
              to="/aboutus"
              style={{ textDecoration: "none", color: "white" }}
              class="nav-link active"
              aria-current="page"
            >
              <text className="light">About Us</text>
            </Link>
          </Col>
          <Col style={{ marginTop: "10px", fontWeight: "bold" }} className="a">
            Services
            <br />
            <Link
              to="/shop"
              style={{ textDecoration: "none", color: "white" }}
              aria-current="page"
            >
              <text className="light">Shop</text>
            </Link>
            <br />
            <Link
              to="/locate"
              style={{ textDecoration: "none", color: "white" }}
              aria-current="page"
            >
              <text className="light">Locate</text>
            </Link>
            <br />
            <Link
              to="/petselect"
              style={{ textDecoration: "none", color: "white" }}
              aria-current="page"
            >
              <text className="light">Find Pet</text>
            </Link>
          </Col>
          <Col className="a" style={{ marginTop: "10px", fontWeight: "bold" }}>
            Email
            <br />
            <text className="light">paws&claws@gmail.com</text>
            <br />
            Address
            <br />
            <text className="light">21B-Bakers Street</text>
          </Col>
          <Col className="a" style={{ marginTop: "10px", fontWeight: "bold" }}>
            Contact Us
            <br />
            <text className="light">+92 302 2233111</text>
          </Col>
          <Col className="a" style={{ marginTop: "10px", fontWeight: "bold" }}>
            Follow Us
            <br />
            <Link to="https://www.instagram.com">
              <i
                class="fa-brands fa-instagram px-1"
                style={{ color: "white" }}
              ></i>
            </Link>
            <Link to="https://www.facebook.com">
              <i
                class="fa-brands fa-square-facebook px-1"
                style={{ color: "white" }}
              ></i>
            </Link>
            <Link to="https://www.twitter.com">
              <i
                class="fa-brands fa-square-twitter px-1"
                style={{ color: "white" }}
              ></i>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr
              style={{
                // width: "100%",
                // height: "1px",
                // display: "inline-flex",
                // marginTop: "20px",
                border: "none",
                height: "1px",
                background: "white",
                marginTop: "60px",
              }}
            />
          </Col>
          <Col
            style={{
              textAlign: "center",
              fontWeight: "bold",
              paddingTop: "55px",
              paddingBottom: "15px",
            }}
          >
            <text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copyright @2023</text>
          </Col>
          <Col>
            <hr
              style={{
                // width: "100%",
                // height: "1px",
                // display: "inline-flex",
                // marginTop: "20px",
                border: "none",
                height: "1px",
                background: "white",
                marginTop: "60px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BottomBar;
