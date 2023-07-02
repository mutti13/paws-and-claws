import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-grid-system";
import { Button, Form } from "react-bootstrap";
import "../my.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register, getUserDetails, updateUser } from "../actions/userActions";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import { USER_UPDATE_RESET } from "../constants/UserConstants";
import Aos from "aos";
import "aos/dist/aos.css";
function UserEditScreen() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = userUpdate;
  // const errors = {}
  // const email_pattern = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  // const password_pattern = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo)\.com$/
  const email_pattern =
    /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail)\.(com|net|org)$/i;
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const usernameRegex = /^[a-zA-Z\s]+$/;

  // useEffect(() => {
  //   Aos.init({ duration: 1200 });
  //   if (successUpdate) {
  //     dispatch({
  //       type: USER_UPDATE_RESET,
  //     });
  //     navigate("/admin/userlist");
  //   } else {
  //     if (!user.name || user._id !== Number(id)) {
  //       dispatch(getUserDetails(id));
  //     } else {
  //       setName(user.name);
  //       setEmail(user.email);
  //       setIsAdmin(user.isAdmin);
  //     }
  //   }
  // }, [user, id, successUpdate, navigate, userInfo]);

  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (!userInfo) {
      navigate("/");
    }
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate("/admin/userlist");
    } else {
      if (!user || user._id !== Number(id)) {
        dispatch(getUserDetails(id));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [dispatch, id, successUpdate, navigate, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!usernameRegex.test(name)) {
      toast.error("Username should only contain characters.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    dispatch(updateUser({ _id: user._id, name, email, isAdmin }));

    //     if(!email_pattern.test(email))
    //     {
    //       toast.error('Invalid email',{
    //         position: toast.POSITION.TOP_CENTER,
    //       });
    //       console.log("invalid email")
    //       return;
    //     }
    //     else if(password != confirmPassword){
    //       toast.error('Passwords do not match',{
    //         position: toast.POSITION.TOP_CENTER,
    //       });
    //       console.log("password match")
    //       return;
    //     }
    //     else if(!password_pattern.test(password))
    //     {
    //       toast.error('Password must contain at least one digit,one lowercase letter, one uppercase letter,minimum length is 6 and maximum length is 4',{
    //         position: toast.POSITION.TOP_CENTER,
    //       });
    //       console.log("password lc,uc")
    //       return;
    //     }
    //    else{
    //     dispatch(register(name,email, password))
    //     toast.success("Registered Successfully",{
    //       position: toast.POSITION.TOP_CENTER,
    //     })
    //     }
  };

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   if(password != confirmPassword){
  //    setMessage('Passwords do not match')
  //   }
  //  else{
  //   dispatch(register(name,email, password))
  //   }
  // }
  return (
    <div
      className="hei newtext"
      data-aos="fade-down"
      style={{ backgroundColor: "#f2ede1" }}
    >
      <Locatenav />
      <Container>
        <Link to="/admin/userlist">
          <button
            class="btn  spe"
            type="submit"
            style={{
              backgroundColor: "#2a7075",
              color: "white",
            }}
          >
            GO BACK
          </button>
        </Link>
        <Row>
          <Col
            sm={12}
            xs={12}
            md={6}
            lg={6}
            // className="mx-auto"
            style={{
              textAlign: "center",
              marginTop: "3%",
              marginBottom: "30px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Container
              style={{
                backgroundColor: "#2a7075",
                borderRadius: "4px",
                width: "400px",
                height: "440px",
                paddingTop: "33px",
                // width:"500px",
                // height:"700px"
              }}
              className="mx-auto"
            >
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                <Form onSubmit={submitHandler} className="mx-auto">
                  <p
                    style={{
                      fontFamily: "Bebas Neue",
                      letterSpacing: ".15em",
                      fontSize: "50px",
                      marginBottom: "30px",
                      color: "white",
                    }}
                  >
                    Edit User
                  </p>
                  {loadingUpdate && <Loader />}
                  {errorUpdate && (
                    <Message variant="danger">{errorUpdate}</Message>
                  )}
                  <Form.Group
                    controlId="name"
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
                      class="fa-solid fa-user"
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
                      disabled
                      type="name"
                      value={name}
                      placeholder="username"
                      onChange={(e) => setName(e.target.value)}
                    />
                    {/* {err&& <p style={{color:"red"}}>{err}</p>} */}
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
                      disabled
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
                      type="email"
                      value={email}
                      placeholder="email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* {err && <p style={{color:"red"}}>{err}</p>} */}
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
                  <Form.Group
                    controlId="isAdmin"
                    style={{
                      marginBottom: "15px",
                      display: "inline-flex",
                    }}
                  >
                    <Form.Check
                      style={{
                        width: "120px",
                        height: "25px",
                        fontSize: "15px",
                        color: "white",
                      }}
                      type="checkbox"
                      checked={isAdmin}
                      label="Is Admin"
                      onChange={(e) => setIsAdmin(e.target.checked)}
                    />
                    {/* {err && <p style={{color:"red"}}>{err}</p>} */}
                  </Form.Group>

                  <Button
                    type="submit"
                    className="btn buttons"
                    style={{
                      width: "100%",
                      height: "50px",
                      // fontFamily: "times new roman",
                      backgroundColor: "#F5EBE0",
                      color: "black",
                      // fontWeight:"bold",
                      outline: "none",
                      color: "black",
                      borderColor: "#F5EBE0",
                      marginTop: "12px",
                    }}
                  >
                    <text style={{ fontWeight: "bold" }}>UPDATE</text>
                  </Button>
                </Form>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
      <BottomBar />
    </div>
  );
}

export default UserEditScreen;
