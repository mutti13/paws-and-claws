import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Button, Form } from "react-bootstrap";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartAction";
import CheckoutSteps from "../components/CheckoutSteps";
import Aos from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
function Delivery() {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  // const { deliveryAddress } = cart;

  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const dispatch = useDispatch();
  const postalCodeRegex = /^\d+$/;
  // const usernameRegex = /^[A-Za-z]+$/;
  // const usernameRegex = /^[a-zA-Z\s]+$/;
  const username_pattern = /^(?!^\s+$)[A-Za-z\s]+$/;
  const address_pattern =
    /^(?!^\s*$)[\w\s\d!@#$%^&*()-=_+~`[\]{}|:;"'<>,.?\\/]+$/;

  const cityRegex = /^(?!^\s*$)[A-Za-z\s]+$/;
  const submitHandler = (e) => {
    console.log("in submit of delivery");
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

    dispatch(saveShippingAddress({ name, address, city, postalCode }));
    navigate("/deliver");
  };
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <div
      className="fontt newtext"
      data-aos="fade-down"
      style={{ backgroundColor: "#f2ede1" }}
    >
      <Locatenav />
      <Container>
        <Container
          fluid
          style={{
            textAlign: "center",
            marginBottom: "40px",
            backgroundColor: "#f2ede1",
          }}
        >
          <Row>
            <Col
              style={{
                fontSize: "50px",
                letterSpacing: ".15em",
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
                    backgroundColor: "#2a7075",
                    color: "white",
                    borderColor: "#2a7075",
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
                    backgroundColor: "#000000",
                    borderColor: "#000000",
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
              On Delivery details
            </p>
            <img
              src="/images/deliver.jpg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
          <Col style={{ textAlign: "center", margin: " auto" }}>
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
              <Form onSubmit={submitHandler} style={{ paddingTop: "8px" }}>
                <Form.Group
                  controlId="name"
                  style={{
                    marginBottom: "5px",
                    display: "inline-flex",
                  }}
                >
                  <i
                    style={{
                      color: "#ffffff",
                      marginRight: "2px",
                    }}
                    class="fa-solid fa-user"
                  ></i>
                  <Form.Control
                    required
                    type="name"
                    value={name ? name : ""}
                    onChange={(e) => setName(e.target.value)}
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
                    placeholder="Name"
                  />
                </Form.Group>
                <hr
                  style={{
                    height: "1px",
                    borderWidth: "0",
                    color: "white",
                    backgroundColor: "white",
                    marginTop: "10px",
                  }}
                ></hr>

                <Form.Group
                  controlId="address"
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
                    class="fa-solid fa-address-card"
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
                    required
                    type="address"
                    value={address ? address : ""}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Billing Address"
                  />
                  <hr
                    style={{
                      height: "1px",
                      borderWidth: "0",
                      color: "white",
                      backgroundColor: "white",
                      marginTop: "15px",
                    }}
                  ></hr>
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
                    required
                    type="city"
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
                  controlId="number"
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
                  className="btn-block buttons newtext"
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    height: "50px",
                    fontWeight: "bold",
                    backgroundColor: "#F5EBE0",
                    color: "black",
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

export default Delivery;
