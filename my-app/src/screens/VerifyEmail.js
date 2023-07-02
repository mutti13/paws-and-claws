import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-grid-system";
import { Button, Form } from "react-bootstrap";
import "../my.css";
import { login } from "../actions/userActions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import Message from "../components/Message";

import { toast } from "react-toastify";

function VerifyEmail() {
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post("/api/users/verify/", { code });
    // setMessage("Account Verified");
    console.log(response.data);
    if (response.data === true) {
      toast.success("Account verified");
      navigate("/login");
    } else {
      toast.error("Account not verified");
      setMessage("Invalid account");
    }
    // try {
    //     await axios.post("/api/users/reset-password/", { password, token });
    //     setMessage("Password updated successfully.");
    // } catch (error) {
    //     setMessage("Error updating the password.");
    //   }
  };
  return (
    <div
      className="hei newtext"
      style={{
        backgroundColor: "#f2ede1",
        height: "800px",
       
      }}
    >
      <h3 style={{ textAlign: "center", paddingTop: 50, fontWeight: "bold" }}>
        Verify Email
      </h3>
      <h5 style={{ textAlign: "center", marginTop: 30,  }}>
        Please enter the verification code we just sent on your email
      </h5>
      <Container
        style={{
          height: "100%",
          backgroundColor: "#2a7075",
          width: "350px",
          height: "240px",
        }}
      >
        <Form
          onSubmit={submitHandler}
          style={{ marginTop: "50%", paddingBottom: "100%" }}
          className="mx-auto"
        >
          <Form.Group
            controlId="code"
            style={{
              marginTop: 30,
              marginBottom: "25px",
              display: "inline-flex",
            }}
          >
            <i
              style={{
                color: "#ffffff",
                marginRight: "2px",
                marginTop: "7px",
              }}
              class="fa-solid fa-key"
            ></i>
            <Form.Control
              className="form-control"
              style={{
                background: "none",
                borderRadius: "none",
                border: "none",
                margin: "none",
                width: "300px",
                height: "25px",
                fontSize: "15px",
                fontFamily: "Montserrat",
                color: "white",
              }}
              type="text"
              placeholder="verification code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </Form.Group>
          <hr
            style={{
              height: "1.5px",
              borderWidth: "0",
              color: "white",
              backgroundColor: "white",
              marginTop: "-10px",
            }}
          ></hr>
          <Button
            className="btn buttons"
            type="submit"
            style={{
              width: "100%",
              height: "50px",
              // fontFamily: "times new roman",
              backgroundColor: "#F5EBE0",
              color: "black",
              // fontWeight:"bold",
              outline: "none",
              color: "black",
              backgroundColor: "#F5EBE0",
              borderColor: "white",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            <text style={{ fontWeight: "bold" , borderColor:"white" }}>VERIFY</text>
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default VerifyEmail;
