import React, { useEffect } from "react";
import { Row, Col, FormGroup, Image } from "react-bootstrap";
import BottomBar from "../components/BottomBar";
import Locatenav from "../components/Locatenav";
// import {GoogleMap,useLoadScript, Marker} from '@react-google-maps/api'
import Aos from "aos";
import "aos/dist/aos.css";
function Groomers() {
  // const{} = useLoadScript({googleMapsApiKey: " "})
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <div
      className="fontt newtext"
      style={{ width: "100%", backgroundColor: "#f2ede1" }}
      data-aos="fade-down"
    >
      <Locatenav />
      <div style={{ backgroundColor: "#f2ede1" }}>
        <Row>
          <Col
            style={{
              marginLeft: "50px",
              marginTop: "50px",
              marginBottom: "186px",
            }}
            md={6}
          >
            {/* <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1OuHmk8zTbTO3S1Mam0XTbbKxcp8MAv4&ehbc=2E312F"
              width="640"
              height="480"
            ></iframe> */}
            {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1OuHmk8zTbTO3S1Mam0XTbbKxcp8MAv4&ehbc=2E312F" width="640" height="480"></iframe> */}
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1OuHmk8zTbTO3S1Mam0XTbbKxcp8MAv4&ehbc=2E312F"
              width="640"
              height="480"
            ></iframe>
          </Col>
          <Col>
            <h1
              style={{ marginTop: 130, fontSize: 53, textAlign: "center" , fontFamily:'"Bebas Neue"' , letterSpacing: ".15em",
              fontSize: "50px" }}
              md={6}
            >
              G r o o m e r s
            </h1>
            <p
              style={{
                marginTop: 70,
                marginLeft: 120,
                marginRight: 160,
                fontSize: 25,
                textAlign: "center",
              }}
            >
              Make your pet significantly beautiful!
            </p>
          </Col>
        </Row>
      </div>
      <BottomBar />
    </div>
  );
}

export default Groomers;
