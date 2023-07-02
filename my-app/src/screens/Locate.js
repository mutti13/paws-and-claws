import React, { useEffect } from "react";
import { Row, Col } from "react-grid-system";
// import { Container } from "react-bootstrap";
// import Topbar from "../components/Topbar";
import BottomBar from "../components/BottomBar";
import Locatenav from "../components/Locatenav";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "../my.css";
function Locate() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <div className="fontt newtext" data-aos="fade-down">
      <Row>
        <Col className="c5">
          <Locatenav />
          <p
            style={{
              textAlign: "center",
              fontFamily: "Bebas Neue",
              letterSpacing: ".15em",
              fontSize: "50px",
            }}
          >
            Locate
          </p>
          <div style={{ float: "right", width: "60%" }}>
            <Link
              to="/clinics"
              style={{ textDecoration: "none", color: "white" }}
              aria-current="page"
            >
              <button
                // className="btn buttonsss "
                style={{
                  width: "32%",
                  height: "100px",
                  // fontFamily: "times new roman",
                  // backgroundColor: "#2a7075",
                  // color: "white",
                  fontWeight:"bold",
                  // outline: "none",
                  // borderColor: "white",
                  fontSize: "33px",
                  marginRight: "15%",
                  marginTop: "11%",
                  marginLeft: "30%",
                  marginBottom: "5%",
                }}
              >
                Clinics
              </button>
            </Link>
            <p
              style={{
                color: "white",
                fontSize: "35px",
                marginLeft: "16%",
              }}
            >
              Providing the best and fastest medical care for your pet!
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="c6">
          <div style={{ float: "left", width: "60%", marginTop: "12%" }}>
            <Link
              to="/groomers"
              style={{ textDecoration: "none", color: "white" }}
              aria-current="page"
            >
              <button
                // className="btn buttonsss  spe"
                style={{
                  width: "280px",
                  height: "100px",
                  // fontFamily: "times new roman",
                  // backgroundColor: "#2a7075",
                  // color: "white",
                  // fontWeight:"bold",
                  // outline: "none",
                  // borderColor: "white",
                  fontSize: "33px",
                  marginRight: "15%",
                  marginTop: "11%",
                  marginLeft: "30%",
                  marginBottom: "5%",   fontWeight:"bold",

                }}
              >
                <text>Groomers</text>
              </button>
            </Link>
            <p
              style={{
                color: "white",
                fontSize: "35px",
                marginLeft: "16%",
              }}
            >
              Best Grooming centres to keep your pet and house clean!
            </p>
          </div>
        </Col>
      </Row>
      <BottomBar />
    </div>
  );
}

export default Locate;
