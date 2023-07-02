import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Image, Tab, Table } from "react-bootstrap";
import { Container, Row, Col } from "react-grid-system";
import { LinkContainer } from "react-router-bootstrap";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listMyOrders } from "../actions/orderActions";
import { listMyLostFound } from "../actions/lostFoundAction";
import { userCatReducer } from "../reducers/petReducers";
import { USER_UPDATE_PROFILE_RESET } from "../constants/UserConstants";
import "react-toastify/dist/ReactToastify.css";
// import { listMyLostFound } from "../actions/lostFoundAction";
import axios from "axios";
import { toast } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
import { listUserCats, listUserDogs } from "../actions/petActions";
function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email_pattern =
    /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail)\.(com|net|org)$/i;
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const username_pattern = /^(?!^\s+$)[A-Za-z\s]+$/;
  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  // const lostFound = useSelector((state) => state.lostFound);
  // const { loading: loadingLF, error: errorLF, lfs } = lostFound;
  const listMyCats = useSelector((state) => state.myUserCats);
  const {
    loading: loadingUserCats,
    error: errorUserCats,
    userCats,
  } = listMyCats;

  const listMyDogs = useSelector((state) => state.myUserDogs);
  const {
    loading: loadingUserDogs,
    error: errorUserDogs,
    userDogs,
  } = listMyDogs;
  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (!userInfo) {
      navigate("/");
    } else {
      setEmail(userInfo.email);
    }
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({
          type: USER_UPDATE_PROFILE_RESET,
        });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
        dispatch(listUserCats());
        dispatch(listUserDogs());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [navigate, userInfo, dispatch, user, success]);

  const submitHandler = (e) => {
    console.log("in submit");
    e.preventDefault();
    if (!username_pattern.test(name)) {
      toast.error(
        "Username can only accept characters and white spaces. But input cannot be empty!",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return;
    }
    if (!email_pattern.test(email)) {
      toast.error("Invalid email", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log("invalid email");
      return;
    } else if (password != confirmPassword) {
      toast.error("Passwords do not match", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log("password match");
      return;
    } else if (!password_pattern.test(password)) {
      toast.error(
        "Password must contain at least one digit,one lowercase letter, one uppercase letter,minimum length is 8",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      console.log("password lc,uc");
      return;
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name: name,
          email: email,
          password: password,
        })
      );
    }
  };

  return (
    <div
      className="fontt newtext"
      data-aos="fade-down"
      style={{ backgroundColor: "#f2ede1" }}
    >
      <Locatenav />
      <div style={{ backgroundColor: "#f2ede1" }}>
        <h2
          className="text-center"
          style={{
            fontFamily: "Bebas Neue",
            letterSpacing: ".15em",
            fontSize: "50px",
            paddingTop: 30,
          }}
        >
          {" "}
          Profile Information
        </h2>
        {message && <Message variant="danger">{error}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}

        <Container>
          <Row>
            <Container
              style={{
                marginTop: "40px",
                backgroundColor: "#2a7075",
                borderRadius: "4px",
                width: "500px",
                height: "480px",
                paddingTop: "33px",
                color: "white",
                marginBottom: "50px",
              }}
              className="mx-auto"
            >
              <Form
                onSubmit={submitHandler}
                style={{
                  width: "80%",
                  margin: "auto",
                  marginTop: 20,
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <Form.Group
                  className="mb-3"
                  controlId="name"
                  style={{ marginBottom: "25px", display: "inline-flex" }}
                >
                  <i
                    class="fa-solid fa-file-signature"
                    style={{
                      color: "#ffffff",
                      marginRight: "2px",
                      marginTop: "7px",
                    }}
                  ></i>
                  <Form.Control
                    required
                    type="name"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      background: "none",
                      borderRadius: "none",
                      border: "none",
                      margin: "none",
                      width: "340px",
                      height: "25px",
                      fontSize: "15px",
                      color: "white",

                      fontWeight: "bold",
                    }}
                  />
                  <i
                    className="fas fa-edit"
                    style={{
                      color: "#ffffff",
                      marginLeft: "0px",
                      marginTop: "7px",
                    }}
                  ></i>
                </Form.Group>
                <hr
                  style={{
                    height: "1.5px",
                    borderWidth: "0",
                    color: "white",
                    backgroundColor: "white",
                    marginTop: "-10px",

                    // marginLeft:159,
                    marginBottom: 30,
                  }}
                ></hr>

                <Form.Group
                  className="mb-3"
                  controlId="email"
                  style={{ marginBottom: "25px", display: "inline-flex" }}
                >
                  <i
                    className="fa-solid fa-envelope"
                    style={{
                      color: "#ffffff",
                      marginRight: "2px",
                      marginTop: "7px",
                    }}
                  ></i>
                  <Form.Control
                    required
                    type="email"
                    placeholder="email"
                    value={email}
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
                  />
                </Form.Group>
                <hr
                  style={{
                    height: "1.5px",
                    borderWidth: "0",
                    color: "white",
                    backgroundColor: "white",
                    marginTop: "-10px",
                    marginBottom: 30,
                  }}
                ></hr>
                <Form.Group
                  className="mb-3"
                  controlId="password"
                  style={{ marginBottom: "25px", display: "inline-flex" }}
                >
                  <i
                    style={{
                      color: "#ffffff",
                      marginRight: "2px",
                      marginTop: "7px",
                    }}
                    class="fa-solid fa-lock"
                  ></i>

                  <Form.Control
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  />
                </Form.Group>
                <i
                  className="fas fa-edit"
                  style={{
                    color: "#ffffff",
                    marginLeft: "0px",
                    marginTop: "7px",
                  }}
                ></i>
                <hr
                  style={{
                    height: "1.5px",
                    borderWidth: "0",
                    color: "white",
                    backgroundColor: "white",
                    marginTop: "-10px",
                    marginBottom: 30,
                  }}
                ></hr>

                <Form.Group
                  className="mb-3"
                  controlId="passwordConfirm"
                  style={{ marginBottom: "25px", display: "inline-flex" }}
                >
                  <i
                    style={{
                      color: "#ffffff",
                      marginRight: "2px",
                      marginTop: "7px",
                    }}
                    class="fa-solid fa-lock"
                  ></i>

                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
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
                  />
                </Form.Group>
                <i
                  className="fas fa-edit"
                  style={{
                    color: "#ffffff",
                    marginLeft: "0px",
                    marginTop: "7px",
                  }}
                ></i>
                <hr
                  style={{
                    height: "1.5px",
                    borderWidth: "0",
                    color: "white",
                    backgroundColor: "white",
                    marginTop: "-10px",
                    marginBottom: 30,
                  }}
                ></hr>

                <Button
                  className="btn buttons"
                  type="submit"
                  style={{
                    width: "100%",
                    height: "50px",
                    backgroundColor: "#F5EBE0",
                    color: "black",
                    outline: "none",
                    color: "black",
                    backgroundColor: "#F5EBE0",
                    borderColor: "#F5EBE0",
                    marginTop: "18%",
                  }}
                >
                  <text style={{ fontWeight: "bold", fontSize: 20 }}>
                    Update
                  </text>
                </Button>
              </Form>
            </Container>
          </Row>
          <Row>
            <Col md={6}>
              {/* <Container
                style={{
                  marginTop: "40px",
                  backgroundColor: "#546d64",
                  borderRadius: "4px",
                  width: "500px",
                  height: "480px",
                  paddingTop: "33px",
                  color: "white",
                  marginBottom: "50px",

                }}
                className="mx-auto"
              >
                <Form
                  onSubmit={submitHandler}
                  style={{
                    width: "80%",
                    margin: "auto",
                    marginTop: 20,
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="name"
                    style={{ marginBottom: "25px", display: "inline-flex" }}
                  >
                    <i
                      class="fa-solid fa-file-signature"
                      style={{
                        color: "#ffffff",
                        marginRight: "2px",
                        marginTop: "7px",
                      }}
                    ></i>
                    <Form.Control
                      required
                      type="name"
                      placeholder="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        background: "none",
                        borderRadius: "none",
                        border: "none",
                        margin: "none",
                        width: "340px",
                        height: "25px",
                        fontSize: "15px",
                        color: "white",

                        fontWeight: "bold",
                      }}
                    />
                    <i
                      className="fas fa-edit"
                      style={{
                        color: "#ffffff",
                        marginLeft: "0px",
                        marginTop: "7px",
                      }}
                    ></i>
                  </Form.Group>
                  <hr
                    style={{
                      height: "1.5px",
                      borderWidth: "0",
                      color: "white",
                      backgroundColor: "white",
                      marginTop: "-10px",

                      // marginLeft:159,
                      marginBottom: 30,
                    }}
                  ></hr>

                  <Form.Group
                    className="mb-3"
                    controlId="email"
                    style={{ marginBottom: "25px", display: "inline-flex" }}
                  >

                    <i
                      className="fa-solid fa-envelope"
                      style={{
                        color: "#ffffff",
                        marginRight: "2px",
                        marginTop: "7px",
                      }}
                    ></i>
                    <Form.Control
                      required
                      type="email"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                    />
                    <i
                      className="fas fa-edit"
                      style={{
                        color: "#ffffff",
                        marginLeft: "0px",
                        marginTop: "7px",
                      }}
                    ></i>
                  </Form.Group>
                  <hr
                    style={{
                      height: "1.5px",
                      borderWidth: "0",
                      color: "white",
                      backgroundColor: "white",
                      marginTop: "-10px",
                      marginBottom: 30,
                    }}
                  ></hr>
                  <Form.Group
                    className="mb-3"
                    controlId="password"
                    style={{ marginBottom: "25px", display: "inline-flex" }}
                  >
                    <i
                      style={{
                        color: "#ffffff",
                        marginRight: "2px",
                        marginTop: "7px",
                      }}
                      class="fa-solid fa-lock"
                    ></i>


                    <Form.Control
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    />
                  </Form.Group>
                  <i
                    className="fas fa-edit"
                    style={{
                      color: "#ffffff",
                      marginLeft: "0px",
                      marginTop: "7px",
                    }}
                  ></i>
                  <hr
                    style={{
                      height: "1.5px",
                      borderWidth: "0",
                      color: "white",
                      backgroundColor: "white",
                      marginTop: "-10px",
                      marginBottom: 30,
                    }}
                  ></hr>

                  <Form.Group
                    className="mb-3"
                    controlId="passwordConfirm"
                    style={{ marginBottom: "25px", display: "inline-flex" }}
                  >
                    <i
                      style={{
                        color: "#ffffff",
                        marginRight: "2px",
                        marginTop: "7px",
                      }}
                      class="fa-solid fa-lock"
                    ></i>

                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setconfirmPassword(e.target.value)}
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
                    />
                  </Form.Group>
                  <i
                    className="fas fa-edit"
                    style={{
                      color: "#ffffff",
                      marginLeft: "0px",
                      marginTop: "7px",
                    }}
                  ></i>
                  <hr
                    style={{
                      height: "1.5px",
                      borderWidth: "0",
                      color: "white",
                      backgroundColor: "white",
                      marginTop: "-10px",
                      marginBottom: 30,
                    }}
                  ></hr>

                  <Button
                    className="btn buttons"
                    type="submit"
                    style={{
                      width: "100%",
                      height: "50px",
                      backgroundColor: "#F5EBE0",
                      color: "black",
                      outline: "none",
                      color: "black",
                      backgroundColor: "#F5EBE0",
                      borderColor: "#F5EBE0",
                      marginTop: "18%",
                    }}
                  >
                    <text style={{ fontWeight: "bold", fontSize: 20 }}>
                      Update
                    </text>
                  </Button>
                </Form>
              </Container> */}
              <Row>
                <h2>My Cat Requests</h2>
              </Row>
              <Row style={{ textAlign: "center" }}>
                {loadingUserCats ? (
                  <Loader />
                ) : errorUserCats ? (
                  <Message variant="danger">{errorUserCats}</Message>
                ) : (
                  <Table striped responsive className="table-sm">
                    <thead>
                      <tr>
                        <th>IMAGE</th>
                        <th>EMAIL</th>
                        <th>STATUS</th>
                        <th>NUMBER</th>
                        <th>AREA</th>
                        <th>TAG</th>
                        <th>DESCRIPTION</th>
                        <th>CATEGORY</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {userCats.map((cats) => (
                        <tr key={cats._id}>
                          <td>
                            <img
                              src={cats.image}
                              style={{ width: "100px", height: "100px" }}
                            ></img>
                          </td>
                          <td>{cats.email}</td>
                          <td>{cats.status}</td>
                          <td>{cats.number}</td>
                          <td>{cats.area}</td>
                          <td>{cats.pTag}</td>
                          <td>{cats.description}</td>
                          <td>{cats.category}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Row>
              <Row style={{ textAlign: "center" }}>
                <h2>My Dog Requests</h2>
                {loadingUserDogs ? (
                  <Loader />
                ) : errorUserDogs ? (
                  <Message variant="danger">{errorUserDogs}</Message>
                ) : (
                  <Table striped responsive className="table-sm">
                    <thead>
                      <tr>
                        <th>IMAGE</th>
                        <th>EMAIL</th>
                        <th>STATUS</th>
                        <th>NUMBER</th>
                        <th>AREA</th>
                        <th>TAG</th>
                        <th>DESCRIPTION</th>
                        <th>CATEGORY</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {userDogs.map((dogs) => (
                        <tr key={dogs._id}>
                          <td>
                            <img
                              src={dogs.image}
                              style={{ width: "100px", height: "100px" }}
                            ></img>
                          </td>
                          <td>{dogs.email}</td>
                          <td>{dogs.status}</td>
                          <td>{dogs.number}</td>
                          <td>{dogs.area}</td>
                          <td>{dogs.pTag}</td>
                          <td>{dogs.description}</td>
                          <td>{dogs.category}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Row>
            </Col>
            <Col
              style={{
                marginTop: "10px",
              }}
              md={6}
            >
              <h2>My orders</h2>
              {loadingOrders ? (
                <Loader />
              ) : errorOrders ? (
                <Message variant="danger">{errorOrders}</Message>
              ) : (
                <Table striped responsive className="table-sm">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Paid</th>
                      <th>Delivered</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.createdAt.substring(0, 10)}</td>
                        <td>Rs .{order.totalPrice}</td>
                        <td>
                          {order.isPaid ? (
                            order.paidAt.substring(0, 10)
                          ) : (
                            <i
                              className="fas fa-times"
                              style={{
                                color: "red",
                              }}
                            ></i>
                          )}
                        </td>
                        <td>
                          <LinkContainer to={`/placed/${order._id}`}>
                            <Button
                              className="btn btn-sm"
                              style={{ backgroundColor: "#546d64" }}
                            >
                              Details
                            </Button>
                          </LinkContainer>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Col>
          </Row>
          {/* <Row>
          <h2>My Requests</h2>
          </Row>
          <Row style={{textAlign:"center"}}>
              {loadingLF ? (
                <Loader />
              ) : errorLF ? (
                <Message variant="danger">{errorOrders}</Message>
              ) : (
                 <Table striped responsive className="table-sm">
                  <thead>
                    <tr>
                      <th>EMAIL</th>
                      <th>STATUS</th>
                      <th>NUMBER</th>
                      <th>AREA</th>
                      <th>TAG</th>
                      <th>DESCRIPTION</th>
                      <th>CATEGORY</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {lfs.map((lf) => (
                      <tr>
                        <td>{lf.email}</td>
                        <td>{lf.status}</td>
                        <td>{lf.number}</td>
                        <td>{lf.area}</td>
                        <td>{lf.tag}</td>
                        <td>{lf.description}</td>
                        <td>{lf.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
          </Row> */}
        </Container>
      </div>
      <BottomBar />
    </div>
  );
}

export default UserProfile;
