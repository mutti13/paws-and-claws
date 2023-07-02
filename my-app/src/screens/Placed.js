import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { Container, Row, Col } from "react-grid-system";
import { Button, ListGroup, Image, Card, ListGroupItem } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import LocateNav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import { getOrderDetails } from "../actions/orderActions";
import Aos from "aos";
import "aos/dist/aos.css";
function Placed() {
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  const API_URL = "http://localhost:8000";
  console.log({ order });
  const { id } = useParams();
  const dispatch = useDispatch();

  if (!loading && !error) {
    order.itemsPrice = order.orderItems
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2);
  }

  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (!userInfo) {
      navigate("/");
    }
    if (!order || order._id !== Number(id)) {
      dispatch(getOrderDetails(id));
    }
  }, [order, id, dispatch, userInfo]);
  // console.log(order.DeliveredAt);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">
      <p
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "20px",
        }}
      >
        {error}
      </p>
    </Message>
  ) : (
    <div
      data-aos="fade-down"
      className="newtext"
      style={{ backgroundColor: "#f2ede1" }}
    >
      <LocateNav />
      <Container style={{ backgroundColor: "#f2ede1" }}>
        <h1
          style={{
            textAlign: "center",
            letterSpacing: ".15em",
            fontSize: "50px",
            backgroundColor:"#2a7075",
            color:"white"
          }}
          className="newheading"
        >
          Order : {id}
        </h1>
        <Row
          style={{
            marginBottom: "50px",
          }}
        >
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                <h2 style={{fontWeight:"bold"}}>Customer Details</h2>
                <p>
                  <strong>Name : </strong> {order.user.name}
                </p>
                <p>
                  <strong>Email : </strong>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                    href={`mailto:${order.user.email}`}
                  >
                    {order.user.email}
                  </a>
                </p>
                <p>
                  <strong>Shipping : </strong>
                  {order.shippingAddress.address
                    ? order.shippingAddress.address
                    : order.deliveryAddress.address}
                  {"  "}
                  {order.shippingAddress.postalCode
                    ? order.shippingAddress.postalCode
                    : order.deliveryAddress.city}
                </p>
                {order.isDelivered ? (
                  <Message variant="success">
                    <p
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                    >
                      Delivered on : {order.deliveredAt}
                    </p>
                  </Message>
                ) : (
                  <Message variant="warning">
                    <p
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                    >
                      Not Delivered
                    </p>
                  </Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                <h2 style={{fontWeight:"bold"}}>Payment Method</h2>
                <p>
                  <strong>Method : </strong>
                  {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <Message variant="success">
                    <p
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                    >
                      Paid on : {order.paidAt}
                    </p>
                  </Message>
                ) : (
                  <Message variant="warning">
                    <p
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                    >
                      Not Paid
                    </p>
                  </Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                <h2 style={{fontWeight:"bold"}}>Ordered Items</h2>
                {order.orderItems.length === 0 ? (
                  <Message variant="info">Order is empty</Message>
                ) : (
                  <ListGroup variant="flush">
                    {order.orderItems.map((item) => (
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
                <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                  <h2 style={{fontWeight:"bold", textAlign:'center'}}>Order Summary</h2>
                </ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                  <Row>
                    <Col>Items: </Col>
                    <Col>Rs. {order.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                  <Row>
                    <Col>Shipping:</Col>
                    <Col>Rs. {order.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                  <Row>
                    <Col>Tax:</Col>
                    <Col>Rs. {order.taxPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                  <Row>
                    <Col>Total:</Col>
                    <Col>Rs. {order.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>
                {order.paymentMethod === "Credit Card" && !order.isPaid ? (
                  <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                    <form
                      action={`${API_URL}/api/checkout/create-checkout-session/${order._id}/`}
                      method="POST"
                    >
                      <Button
                        style={{
                          width: "100%",
                          height: "50px",
                          marginBottom: "10px",
                          marginTop: "10px",
                          backgroundColor: "#2a7075",
                          color: "white",
                          borderRadius: "4px",
                          // fontWeight: "bold",
                          // fontStyle: "italic",
                          borderColor: "#2a7075",
                        }}
                        className="spe newtext"
                        type="submit"
                      >
                        PAYMENT
                      </Button>
                    </form>
                  </ListGroup.Item>
                ) : (
                  <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                    <p
                      style={{
                        fontSize: "15px",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      Order details will be updated on delivery
                    </p>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
      <BottomBar />
    </div>
  );
}

export default Placed;
