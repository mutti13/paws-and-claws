import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-grid-system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import { savePaymentMethod } from "../actions/cartAction";
import "../my.css";
import Aos from "aos";
import "aos/dist/aos.css";
function PaymentMethod() {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);

  const { error, loading, userInfo } = userLogin;

  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  if (!shippingAddress.address) {
    navigate("/payment");
    //course /shipping
    //here /payment
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/confirm");
  };
  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (!userInfo) {
      navigate("/");
    }
  });
  return (
    <div
      className="hei newtext"
      data-aos="fade-down"
      style={{ backgroundColor: "#f2ede1" }}
    >
      <div
        style={{
          display: "grid",
          height: "530px",
        }}
      >
        <Locatenav />
        <p
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: ".15em",
          }}
          className="newheading"
        >
          Your Preference
        </p>
        <CheckoutSteps step1 step2 step3 />
        <Container>
          <Row>
            <Col>
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label as="legend" style={{ marginBottom: "15px" }}>
                    Selected Payment Method
                  </Form.Label>
                  <Form.Check
                    type="radio"
                    label="Credit Card"
                    id="card"
                    name="paymentMethod"
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    style={{ marginBottom: "15px" }}
                  ></Form.Check>
                  <p style={{ marginBottom: "15px" }}>
                    Your Selected Payment method is shown above
                  </p>
                </Form.Group>
                <Button
                  className="btn btn-block buttons spe"
                  style={{
                    marginTop: "20px",
                    width: "40%",
                    height: "50px",
                    // fontWeight : 'bold',
                    backgroundColor: "#2a7075",
                    color: "white",
                    borderColor: "#2a7075",
                    margin: "auto",
                    marginLeft: "100px",
                  }}
                  type="submit"
                >
                  CONTINUE
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <BottomBar />
    </div>
  );
}

export default PaymentMethod;
