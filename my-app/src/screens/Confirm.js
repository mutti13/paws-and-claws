import React, { useState, useEffect } from "react";
// import FormContainer from "../components/FormContainer";
import { Container, Row, Col } from "react-grid-system";
import { Button, ListGroup, Image, Card, ListGroupItem } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import LocateNav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import { createOrder } from "../actions/orderActions";
import { ORDER_CREATE_RESET } from "../constants/OrderConstants";
import Aos from "aos";
import "aos/dist/aos.css";
function Confirm() {
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, error, success } = orderCreate;

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const { shippingAddress } = cart;

  cart.itemsPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  cart.shippingPrice = (cart.itemsPrice > 1000 ? 0 : 100).toFixed(2);
  cart.taxPrice = Number(0.16 * cart.itemsPrice).toFixed(2);
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  if (!cart.paymentMethod) {
    navigate("/final");
  }

  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (!userInfo) {
      navigate("/");
    }
    if (success) {
      navigate(`/placed/${order._id}`);
      dispatch({
        type: ORDER_CREATE_RESET,
      });
    }
  }, [success, navigate, order, userInfo]);

  const placeOrder = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };
  return (
    <div
      className="hei newtext"
      data-aos="fade-down"
      style={{ height: "100%", backgroundColor: "#f2ede1" }}
    >
      <LocateNav />
      <Container>
        <h2
          style={{
            textAlign: "center",
            letterSpacing: ".15em",
            fontSize: "50px",
          }}
          className="newheading"
        >
          Confirming Order
        </h2>
        <CheckoutSteps step1 step2 step3 step4 />
        <Row
          style={{
            marginBottom: "50px",
          }}
        >
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                <h2>Address</h2>
                <p>
                  <strong>Shipping : </strong>
                  {cart.shippingAddress.address
                    ? cart.shippingAddress.address
                    : cart.deliveryAddress.address}
                  {"  "}
                  {cart.shippingAddress.postalCode
                    ? cart.shippingAddress.postalCode
                    : cart.deliveryAddress.city}
                </p>
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                <h2>Payment Method</h2>
                <p>
                  <strong>Method : </strong>
                  {cart.paymentMethod}
                </p>
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                <h2>Order Items</h2>
                {cartItems.length === 0 ? (
                  <Message variant="info">Your cart is empty</Message>
                ) : (
                  <ListGroup variant="flush">
                    {cartItems.map((item) => (
                      <ListGroup.Item
                        key={item.product}
                        style={{ backgroundColor: "#F5EBE0" }}
                      >
                        <Row>
                          <Col md={1}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>
                            <Link
                              style={{
                                textDecoration: "none",
                                color: "black",
                                fontSize: "18px",
                              }}
                              to={`/product/${item.product}`}
                            >
                              <p
                                style={{
                                  marginTop: "5px",
                                }}
                              >
                                {item.name}
                              </p>
                            </Link>
                          </Col>
                          <Col md={4}>
                            {item.qty} X Rs. {item.price} = Rs.{" "}
                            {(item.qty * item.price).toFixed(2)}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item
                  style={{ backgroundColor: "#F5EBE0", textAlign: "center" }}
                >
                 <h2 style={{fontWeight:'bold'}}>Order Summary</h2>
                </ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                  <Row>
                    <Col>Items: </Col>
                    <Col>Rs. {cart.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                  <Row>
                    <Col>Shipping:</Col>
                    <Col>Rs. {cart.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                  <Row>
                    <Col>Tax:</Col>
                    <Col>Rs. {cart.taxPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                  <Row>
                    <Col>Total:</Col>
                    <Col>Rs. {cart.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                  {error && <Message variant="danger">{error}</Message>}
                </ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                  <button
                    className="newtext"
                    disabled={cartItems.length === 0}
                    onClick={placeOrder}
                    style={{
                      width: "100%",
                      height: "50px",
                      marginBottom: "10px",
                      marginTop: "10px",
                      // backgroundColor: "#2a7075",
                      // color: "white",
                      // borderRadius: "4px",
                      // fontWeight: "bold",
                      // fontStyle: "italic",
                      // borderColor: "#2a7075",
                    }}
                  >
                    PLACE ORDER
                  </button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
      <BottomBar />
    </div>
  );
}

export default Confirm;
