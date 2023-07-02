import React, { useEffect } from "react";
// import Topbar from '../components/Topbar'
import BottomBar from "../components/BottomBar";
import { Container } from "react-bootstrap";
import Locatenav from "../components/Locatenav";
import Aos from "aos";
import "aos/dist/aos.css";
function Aboutus() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <div
      style={{ backgroundColor: "#f2ede1", height: "100%" }}
      className="fontt hei"
      data-aos="fade-down"
    >
      <Locatenav />
      <Container style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "50px",
            // fontWeight: "bold",
            marginBottom: "90px",
            color: "#222324",
            fontFamily: "Bebas Neue",
            letterSpacing: ".15em",
          }}
        >
          About Us
        </p>
        <p
          style={{
            fontSize: "30px",
            marginBottom: "28px",
            color: "#222324",
            fontFamily: "Montserrat",
          }}
        >
          Welcome to Paws & Claws
        </p>
        <p
          style={{
            fontSize: "20px",
            marginBottom: "110px",
            color: "#222324",
            fontFamily: "Montserrat",
          }}
        >
          Paws & Claws is a professional pet shop platform. Here we will provide
          you only interesting content, which you will like very much. We're
          dedicated to providing you the best of pet shop, with a focus on
          dependability and e-commerce, ai . We're working to turn our passion
          for pet shop into a booming online website. We hope you enjoy our pet
          shop as much as we enjoy offering them to you.
        </p>
        <p
          style={{
            fontSize: "30px",
            marginBottom: "28px",
            color: "#222324",
            fontFamily: "Montserrat",
          }}
        >
          Terms & Conditions
        </p>
        <p
          style={{
            fontSize: "20px",
            marginBottom: "0px",
            color: "#222324",
            fontFamily: "Montserrat",
          }}
        >
          THE ORDERS YOU PLACE ARE NON REFUNDABLE!
        </p>
        <p
          style={{
            fontSize: "20px",
            marginBottom: "110px",
            color: "#222324",
            fontFamily: "Montserrat",
          }}
        >
          Our site uses cookies to improve the overall user experience with our
          services. Moreover for pictures we might need an access to the device
          storage.
        </p>
      </Container>
      <BottomBar />
    </div>
  );
}

export default Aboutus;
