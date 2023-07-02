import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../actions/userActions";
import Message from "../components/Message";
import { Row, Col, Container } from "react-grid-system";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import axios from "axios";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const mail = 1;

  const userPassword = useSelector((state) => state.userPassword);
  const { error, loading, success } = userPassword;

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <div className="newext" style={{ backgroundColor: "#f2ede1" }}>
      <Locatenav />
      {error && <Message>{error}</Message>}
      {!error && success && <Message>Email sent</Message>}
      <Container
        style={{
          backgroundColor: "#2a7075",
          borderRadius: "4px",
          margin: "auto",
          marginTop: "100px",
          width: "400px",
          height: "200px",
          paddingTop: "33px",
          marginBottom: "350px",
         
          
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group
            controlId="email"
            style={{
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
              class="fa-solid fa-envelope"
            ></i>
            <Form.Control
              style={{
                background: "none",
                borderRadius: "none",
                border: "none",
                margin: "none",
                width: "340px",
                height: "25px",
                fontSize: "15px",
                color: "white",
              }}
              required
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              borderColor:"white",
              marginBottom: "0px",
              marginTop: "20px",
            }}
          >
            <text style={{ fontWeight: "bold" }}>SEND EMAIL</text>
          </Button>
        </Form>
      </Container>
      <BottomBar />
    </div>
  );
}

export default ForgotPasswordForm;
