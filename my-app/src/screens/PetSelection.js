import React, { useEffect } from "react";
import { Row, Col } from "react-grid-system";
// import { Container } from "react-bootstrap";
// import Topbar from "../components/Topbar";
import BottomBar from "../components/BottomBar";
import Locatenav from "../components/Locatenav";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import "../my.css";
import "../newcards.css";
function PetSelection() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <div
      className="fontt newtext"
      data-aos="fade-down"
      style={{ backgroundColor: "#f2ede1", height: "100%" }}
    >
      <Locatenav />
      <Container style={{ marginBottom: "80px", marginTop: "50px" }}>
        <p
          style={{
            fontSize: "30px",
            // fontWeight: "bold",
            marginBottom: "40px",
            color: "#222324",
            fontFamily: "Bebas Neue",
            letterSpacing: ".15em",
            textAlign: "center",
          }}
        >
          Find your cat or dog by tag matching as well as by image matching
        </p>
        <Row>
          <Col md={3} style={{ marginTop: "10px", marginBottom: "10px" }}>
            {" "}
            <Link
              to="/findpet"
              style={{ textDecoration: "none", color: "white" }}
              aria-current="page"
            >
              <div
                class="flip-card"
                style={{
                  margin: "auto",
                }}
              >
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <p class="title">FIND CAT</p>
                    {/* <p>Hover Me</p> */}
                  </div>
                  <div class="flip-card-back">
                    <p class="title">FIND YOUR CAT BY TAG MATCHING</p>
                    {/* <p>Leave Me</p> */}
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={3} style={{ marginTop: "10px", marginBottom: "10px" }}>
            <Link
              to="/finddog"
              style={{ textDecoration: "none", color: "white" }}
              aria-current="page"
            >
              <div
                class="flip-card1"
                style={{
                  margin: "auto",
                }}
              >
                <div class="flip-card-inner1">
                  <div class="flip-card-front1">
                    <p class="title" style={{ fontSize: "20px" }}>
                      FIND DOG
                    </p>
                    {/* <p>Hover Me</p> */}
                  </div>
                  <div class="flip-card-back1">
                    <p class="title1">FIND YOUR DOG BY TAG MATCHING</p>
                    {/* <p>Leave Me</p> */}
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={3} style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Link
              to="/findcat"
              style={{ textDecoration: "none", color: "white" }}
              aria-current="page"
            >
            <div
              class="flip-card2"
              style={{
                margin: "auto",
              }}
            >
              <div class="flip-card-inner2">
                <div class="flip-card-front2">
                  <p class="title2">FIND CAT BY IMAGE PROCESSING</p>
                  {/* <p>Hover Me</p> */}
                </div>
                <div class="flip-card-back2">
                  <p class="title2">FIND YOUR CAT BY IMAGE MATCHING</p>
                  {/* <p>Leave Me</p> */}
                </div>
              </div>
            </div>
            </Link>
          </Col>

          <Col md={3} style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Link
              to="/finddogimage"
              style={{ textDecoration: "none", color: "white" }}
              aria-current="page"
            >
            <div
              class="flip-card2"
              style={{
                margin: "auto",
              }}
            >
              <div class="flip-card-inner2">
                <div class="flip-card-front2">
                  <p class="title2">FIND DOG BY IMAGE PROCESSING</p>
                  {/* <p>Hover Me</p> */}
                </div>
                <div class="flip-card-back2">
                  <p class="title2">FIND YOUR DOG BY IMAGE MATCHING</p>
                  {/* <p>Leave Me</p> */}
                </div>
              </div>
            </div>
            </Link>
          </Col>
        </Row>
        {/* <Row>
        <Col className="ab">
          <Locatenav />
          <p
            style={{
              textAlign: "center",
              fontFamily: "Bebas Neue",
              letterSpacing: ".15em",
              fontSize: "50px",
            }}
          >
            Find Your Pet
          </p>
          <div style={{ float: "right", width: "60%" }}>
            <Link
              to="/findpet"
              style={{ textDecoration: "none", color: "white" }}
              aria-current="page"
            >
              <Button
                className="btn buttonsss spe"
                style={{
                  width: "32%",
                  height: "100px",
                  // fontFamily: "times new roman",
                  backgroundColor: "#546d64",
                  color: "white",
                  // fontWeight:"bold",
                  outline: "none",
                  borderColor: "#546d64",
                  fontSize: "33px",
                  marginRight: "15%",
                  marginTop: "11%",
                  marginLeft: "30%",
                  marginBottom: "5%",
                }}
              >
                <text>Cats</text>
              </Button>
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
        <Col className="ab1">
          <div style={{ float: "left", width: "60%", marginTop: "12%" }}>
            <Link
              to="/finddog"
              style={{ textDecoration: "none", color: "white" }}
              aria-current="page"
            >
              <Button
                className="btn buttonsss  spe"
                style={{
                  width: "280px",
                  height: "100px",
                  // fontFamily: "times new roman",
                  backgroundColor: "#546d64",
                  color: "white",
                  // fontWeight:"bold",
                  outline: "none",
                  borderColor: "#546d64",
                  fontSize: "33px",
                  marginRight: "15%",
                  marginTop: "11%",
                  marginLeft: "30%",
                  marginBottom: "5%",
                }}
              >
                <text>Dogs</text>
              </Button>
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
      </Row> */}
      </Container>
      <BottomBar />
    </div>
  );
}

export default PetSelection;
