import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
// import {GoogleMap,useLoadScript, Marker} from '@react-google-maps/api'
import Aos from "aos";
import "aos/dist/aos.css";
function Clinics() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  // const{} = useLoadScript({googleMapsApiKey: " "})
  return (
    <div
      className="fontt newtext"
      data-aos="fade-down"
      style={{ width: "100%", backgroundColor: "#f2ede1" }}
    >
      <Locatenav />
      <div style={{ backgroundColor: "#f2ede1" }}>
        <Row>
          <Col>
            <h1
              style={{
                marginTop: 130,
                marginLeft: 70,
                fontSize: 53,
                textAlign: "center",fontFamily:'"Bebas Neue"' , letterSpacing: ".15em",
                fontSize: "50px"
              }}
            >
              C l i n i c s
            </h1>
            <p
              style={{
                marginTop: 70,
                marginLeft: 70,
                marginRight: 190,
                fontSize: 25,
                textAlign: "center",
              }}
              className="mx-auto"
            >
              Find the nearest clinics for your animal
            </p>
          </Col>
          <Col
            style={{
              marginTop: "50px",
              marginLeft: "10px",
              marginBottom: "186px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=18Gf502SOJiM4UhRr48CY5XUjVykBAss&ehbc=2E312F"
              width="640"
              height="480"
            ></iframe>
          </Col>
        </Row>
      </div>
      <BottomBar />
    </div>
  );
}

export default Clinics;
