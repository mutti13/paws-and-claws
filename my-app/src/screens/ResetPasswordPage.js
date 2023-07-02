import React, { useState, useEffect } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { Row, Col, Container } from "react-grid-system";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Message from "../components/Message";
import { toast } from "react-toastify";
import "../my.css";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";
const ResetPasswordPage = () => {
  // const { token } = useParams();
  // console.log(token);
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  console.log(token);
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      toast.error("Passwords do not match", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log("password match");
      return;
    } else if (!password_pattern.test(password)) {
      toast.error(
        "Password must contain at least one digit,one lowercase letter, one uppercase letter and minimum length is 8",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return;
    }
    // Extract the token from the URL query parameter
    // const urlParams = new URLSearchParams(window.location.search);
    // const token = urlParams.get("token");

    try {
      await axios.post("/api/users/reset-password/", { password, token });
      setMessage("Password updated successfully.");
    } catch (error) {
      setMessage("Error updating the password.");
    }
  };

  return (
    <div
      style={{
        height: "790px",
        fontFamily: "Montserrat",
        backgroundColor: "#f2ede1",
      }}
      data-aos="fade-down"
      className="newext"
    >
      {message && <Message>{message}</Message>}
      <h4
        style={{
          textAlign: "center",
          marginBottom: "20px",
          paddingTop: "130px",
        }}
      >
        RESET PASSWORD
      </h4>
      <Container
        style={{
          backgroundColor: "#2a7075",
          borderRadius: "4px",
          margin: "auto",
          width: "400px",
          height: "300px",
          paddingTop: "33px",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group
            controlId="password"
            style={{
              marginBottom: "25px",
              display: "inline-flex",
            }}
          >
            <i
              style={{
                color: "#ffffff",
                marginRight: "8px",
                marginTop: "3px",
              }}
              class="fa-solid fa-lock"
            ></i>
            <Form.Control
              style={{
                background: "none",
                borderRadius: "none",
                border: "none",
                margin: "none",
                width: "300px",
                height: "25px",
                fontSize: "15px",
                color: "white",
              }}
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`fa ${
                showPassword ? "fa-eye" : "fa-eye-slash"
              } password-icon`}
              style={{
                color: "white",
                marginTop: "3px",
              }}
              onClick={togglePasswordVisibility}
            ></i>
          </Form.Group>
          <hr
            style={{
              height: "1px",
              borderWidth: "0",
              color: "white",
              backgroundColor: "white",
              marginTop: "-10px",
              marginBottom: "30px",
            }}
          ></hr>
          <Form.Group
            controlId="confirmpassword"
            style={{
              marginBottom: "25px",
              display: "inline-flex",
            }}
          >
            <i
              style={{
                color: "#ffffff",
                marginRight: "8px",
                marginTop: "3px",
              }}
              class="fa-solid fa-lock"
            ></i>
            <Form.Control
              style={{
                background: "none",
                borderRadius: "none",
                border: "none",
                margin: "none",
                width: "300px",
                height: "25px",
                fontSize: "15px",
                color: "white",
              }}
              type={showPassword ? "text" : "password"}
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <i
              className={`fa ${
                showPassword ? "fa-eye" : "fa-eye-slash"
              } password-icon`}
              style={{
                color: "white",
                marginTop: "3px",
              }}
              onClick={togglePasswordVisibility}
            ></i>
          </Form.Group>
          <hr
            style={{
              height: "1px",
              borderWidth: "0",
              color: "white",
              backgroundColor: "white",
              marginTop: "-10px",
              marginBottom: "30px",
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
              marginBottom: "0px",
            }}
          >
            <text style={{ fontWeight: "bold" }}>RESET PASSWORD</text>
          </Button>
        </Form>
      </Container>
      {/* <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
      <p>{message}</p> */}
      {/* <p>{message}</p> */}
    </div>
  );
};

export default ResetPasswordPage;
