import React, { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import {
  Button,
  ListGroup,
  Image,
  Form,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
function Cart() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);

  const { error, loading, userInfo } = userLogin;
  const { cartItems } = cart;
  console.log("cartItems : ", cartItems);

  useEffect(() => {
    Aos.init({ duration: 1200 });
    //depends on id
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    if (userInfo) navigate("/payment");
    else {
      navigate(`/login?redirect=${"payment"}`);
    }
  };

  return (
    <div
      className="fontt newtext"
      data-aos="fade-down"
      style={{ backgroundColor: "#f2ede1" }}
    >
      <Locatenav />
      <Container style={{ height: "850px", width: "100%" }}>
        <Container fluid style={{ textAlign: "center", marginBottom: "60px" }}>
          {/* <Row>
                <Col style={{
                fontFamily : 'monospace',
                fontSize : '30px',
            }}>
                    cart
                </Col>
            </Row> */}
          <Row>
            <Col md={8}>
              <h1
                style={{
                  fontSize: "1.8rem",
                  padding: "1rem 0",
                  // fontFamily: 'Krub',
                  fontFamily: "Bebas Neue",
                  letterSpacing: ".15em",
                  fontSize: "50px",
                }}
              >
                Shopping Cart
              </h1>
              {cartItems.length === 0 ? (
                <Message variant="info">
                  <p
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "18px",
                    }}
                  >
                    Your Cart is Emplty <Link to="/">Go Back</Link>
                  </p>
                </Message>
              ) : (
                <ListGroup
                  variant="flush"
                  style={{ backgroundColor: "#F5EBE0" }}
                >
                  {cartItems.map((item) => (
                    <ListGroup.Item
                      key={item.product}
                      style={{ backgroundColor: "#F5EBE0" }}
                    >
                      <Row>
                        <Col md={2}>
                          <Image src={item.image} fluid rounded />
                        </Col>
                        <Col
                          style={{
                            marginTop: "25px",
                          }}
                          md={3}
                        >
                          <Link
                            style={{
                              fontSize: "15px",
                              textDecoration: "none",
                              color: "black",
                            }}
                            to={`/product/${id}`}
                          >
                            {item.name}
                          </Link>
                        </Col>
                        <Col
                          style={{
                            marginTop: "25px",
                          }}
                          md={2}
                        >
                          Rs. {item.price}
                        </Col>
                        <Col
                          style={{
                            marginTop: "25px",
                          }}
                          md={3}
                        >
                          <Form.Control
                            as="select"
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                            style={{ backgroundColor: "#F5EBE0" }}
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                        <Col
                          style={{
                            marginTop: "25px",
                          }}
                          md={1}
                        >
                          {/* <Button
                            type="button"
                            variant="light"
                            onClick={() => removeFromCartHandler(item.product)}
                            style={{ backgroundColor: "#F5EBE0" }}
                          >
                            <i className="fas fa-trash" ></i>
                          </Button> */}
                          <button
                            onClick={() => removeFromCartHandler(item.product)}
                            style={{ margin: "auto" }}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Col>
            <Col md={4}>
              <Card
                style={{
                  marginLeft: "20px",
                  marginTop: "40px",
                }}
              >
                <ListGroup variant="flush">
                  <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                    <p style={{ fontWeight: "bold" }}>
                      Items in Cart:{" "}
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                    </p>
                    <p style={{ marginBottom: "40px" }}>
                      <strong>Total Amount: </strong> Rs.{" "}
                      {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(2)}{" "}
                    </p>
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                  {/* <Button
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                    className="btn btn-block spe"
                    style={{
                      width: "50%",
                      height: "35px",
                      marginBottom: "10px",
                      marginTop: "10px",
                      backgroundColor: "#2a7075",
                      color: "white",
                      borderRadius: "4px",
                      // fontWeight : 'bold',
                      // fontStyle : 'italic',
                      borderColor: "#2a7075",
                    }}
                  >
                    CHECKOUT
                  </Button> */}
                  <button
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                    style={{
                      // margin: "auto",
                      width: "50%",
                      height: "35px",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  >
                    CHECKOUT
                  </button>

                  <br></br>
                  <Link to="/shop">
                    {/* <Button
                      className="btn btn-block spe"
                      style={{
                        width: "50%",
                        height: "35px",
                        marginBottom: "10px",
                        backgroundColor: "#2a7075",
                        color: "white",
                        borderRadius: "4px",
                        // fontWeight : 'bold',
                        // fontStyle : 'italic',
                        borderColor: "#2a7075",
                      }}
                    >
                      BACK TO SHOP
                    </Button> */}
                    <button
                      style={{
                        // margin: "auto",
                        width: "50%",
                        height: "35px",
                        marginBottom: "10px",
                        marginTop: "10px",
                      }}
                    >
                      BACK TO SHOP
                    </button>
                  </Link>
                </ListGroup.Item>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <BottomBar />
    </div>
  );
}

export default Cart;
