import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Form, Button } from "react-bootstrap";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartAction";
import "../my.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const userLogin = useSelector((state) => state.userLogin);

  const { error, loading, userInfo } = userLogin;

  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (!userInfo) {
      navigate("/");
    }
  });
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const postalCodeRegex = /^\d+$/;
  // const usernameRegex = /^[A-Za-z]+$/;
  // const usernameRegex = /^[a-zA-Z\s]+$/;
  const username_pattern = /^(?!^\s+$)[A-Za-z\s]+$/;
  const address_pattern =
    /^(?!^\s*$)[\w\s\d!@#$%^&*()-=_+~`[\]{}|:;"'<>,.?\\/]+$/;

  const cityRegex = /^(?!^\s*$)[A-Za-z\s]+$/;
  const submitHandler = (e) => {
    e.preventDefault();
    if (!username_pattern.test(name)) {
      toast.error(
        "Username should only contain characters and cannot be empty!",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return;
    } else if (!address_pattern.test(address)) {
      toast.error("Address cannot be empty!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else if (!postalCodeRegex.test(postalCode) || postalCode < 0) {
      toast.error(
        "Postal code should consist of numbers only and should not be less than zero!",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return;
    } else if (!cityRegex.test(city)) {
      toast.error(
        "City name should only contain characters and cannot be empty!",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return;
    }
    if (shippingAddress) {
      localStorage.removeItem("shippingAddress");
    }

    dispatch(saveShippingAddress({ name, city, address, postalCode }));
    navigate("/final");
  };

  return (
    <div
      style={{ backgroundColor: "#f2ede1" }}
      className="fontt newtext"
      data-aos="fade-down"
    >
      <Locatenav />
      <Container style={{ backgroundColor: "#f2ede1" }}>
        <Container fluid style={{ textAlign: "center", marginBottom: "40px" }}>
          <Row>
            <Col
              style={{
                fontSize: "30px",
                letterSpacing: ".15em",
                fontSize: "50px",
              }}
              className="newheading"
            >
              Checkout
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ textAlign: "center" }}>
          <Row>
            <Col>
              <Link to="/payment">
                <Button
                  style={{
                    borderRadius: "4px",
                    fontSize: "16px",
                    width: "250px",
                    backgroundColor: "#000000",
                    color: "white",
                    borderColor: "#000000",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                  class="btn btn-sm"
                >
                  Credit Card
                </Button>
              </Link>
              <Link to="/delivery">
                <Button
                  style={{
                    borderRadius: "4px",
                    fontSize: "16px",
                    width: "250px",
                    color: "white",
                    backgroundColor: "#2a7075",
                    borderColor: "#2a7075",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                  class="btn btn-sm"
                >
                  Cash on Delivery
                </Button>
              </Link>
              <CheckoutSteps step1 step2 />
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <p
              style={{
                marginTop: "60px",
                // fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              Shipping Details
            </p>
            <img
              style={{ maxWidth: "100%", height: "auto" }}
              src="/images/card.jpg"
            />
          </Col>
          <Col style={{ textAlign: "center", margin: "auto" }}>
            <Container
              style={{
                backgroundColor: "#2a7075",
                borderRadius: "4px",
                margin: "auto",
                width: "69%",
                height: "370px",
                paddingTop: "10px",
              }}
            >
              <Form onSubmit={submitHandler} className="mx-auto">
                <Form.Group
                  controlId="name"
                  style={{
                    marginBottom: "5px",
                    display: "inline-flex",
                  }}
                >
                  <i
                    style={{
                      color: "#fcfcfc",
                      marginRight: "2px",
                    }}
                    class="fa-solid fa-user"
                  ></i>
                  <Form.Control
                    style={{
                      background: "none",
                      borderRadius: "none",
                      border: "none",
                      color: "none",
                      margin: "none",
                      width: "300px",
                      height: "20px",
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    type="text"
                    required
                    value={name ? name : ""}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </Form.Group>
                <hr
                  style={{
                    height: "1px",
                    borderWidth: "0",
                    color: "white",
                    backgroundColor: "white",
                    marginTop: "15px",
                  }}
                ></hr>
                <Form.Group
                  controlId="address"
                  style={{
                    marginBottom: "5px",
                    display: "inline-flex",
                    marginTop: "10px",
                  }}
                >
                  <i
                    style={{
                      color: "#fcfcfc",
                      marginRight: "2px",
                    }}
                    class="fa-solid fa-home"
                  ></i>
                  <Form.Control
                    style={{
                      background: "none",
                      borderRadius: "none",
                      border: "none",
                      color: "none",
                      margin: "none",
                      width: "300px",
                      height: "20px",
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    type="text"
                    required
                    value={address ? address : ""}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                  />
                </Form.Group>

                <hr
                  style={{
                    height: "1px",
                    borderWidth: "0",
                    color: "white",
                    backgroundColor: "white",
                    marginTop: "15px",
                  }}
                ></hr>
                <Form.Group
                  controlId="city"
                  style={{
                    marginBottom: "5px",
                    display: "inline-flex",
                  }}
                >
                  <i
                    style={{
                      color: "#fcfcfc",
                      marginRight: "2px",
                    }}
                    class="fa-solid fa-city"
                  ></i>
                  <Form.Control
                    style={{
                      background: "none",
                      borderRadius: "none",
                      border: "none",
                      color: "none",
                      margin: "none",
                      width: "300px",
                      height: "20px",
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    type="text"
                    required
                    value={city ? city : ""}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                  />
                </Form.Group>
                <hr
                  style={{
                    height: "1px",
                    borderWidth: "0",
                    color: "white",
                    backgroundColor: "white",
                    marginTop: "15px",
                  }}
                ></hr>
                <Form.Group
                  controlId="postalCode"
                  style={{
                    marginBottom: "5px",
                    display: "inline-flex",
                  }}
                >
                  <i
                    class="fa-solid fa-envelope"
                    style={{
                      color: "#fcfcfc",
                      marginRight: "2px",
                    }}
                  ></i>
                  <Form.Control
                    style={{
                      background: "none",
                      borderRadius: "none",
                      border: "none",
                      margin: "none",
                      width: "300px",
                      height: "20px",
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    type="text"
                    required
                    value={postalCode ? postalCode : ""}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Postal Code"
                  />
                </Form.Group>
                <hr
                  style={{
                    height: "1px",
                    borderWidth: "0",
                    color: "white",
                    backgroundColor: "white",
                    marginTop: "15px",
                  }}
                ></hr>
                <Button
                  type="submit"
                  className="btn btn-block buttons newtext"
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    height: "50px",
                    backgroundColor: "#F5EBE0",
                    color: "black",
                    fontWeight: "bold",
                    borderColor: "white",
                  }}
                >
                  CONFIRM
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
      <BottomBar />
    </div>
  );
}

export default Payment;
