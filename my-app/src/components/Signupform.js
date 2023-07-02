import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-grid-system";
import { Button, Form } from "react-bootstrap";
import "../my.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
function Signupform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;
  // const errors = {}
  // const email_pattern = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  // const password_pattern = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo)\.com$/
  // const email_pattern =
  //   /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail)\.(com|net|org)$/i;
  // const email_pattern = /^[\w\.]+@(gmail|yahoo|hotmail)\.(com|org|net)$/;
  // const email_pattern =
  //   /^(?!^\d+\.?$|^_+\.?$|^[._]$)(?!.*[._]{2})[A-Za-z\d]+([._][A-Za-z\d]+)*@(gmail|yahoo|hotmail)\.(com|org|net)$/;
  // const email_pattern =
  //   /^(?!^\d+\.?$|^_+\.?$|^[._]$)(?!.*[._]{2})[A-Za-z][A-Za-z\d]*(?:[._][A-Za-z\d]+)*@(gmail|yahoo|hotmail)\.(com|org|net)$/;
  // const email_pattern =
  //   /^(?!^\d|\d$|^\.\.?$|^__?$|\._|\._\.|\._$|^_\.|\._\.|\._$|^[\s.]+)(?!.*[._]$)[A-Za-z\d]+([._][A-Za-z\d]+)*@(gmail|yahoo|hotmail)\.(com|org|net)$/;
  const email_pattern =
    /^(?!^\d|\d$|^\.\.?$|^__?$|^[\s._]|[\s._]$|\._|\._\.|\._$|^_\.|\._\.|\._$)[A-Za-z\d]+([._][A-Za-z\d]+)*@(gmail|yahoo|hotmail)\.(com|org|net)$/;

  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const username_pattern = /^(?!^\s+$)[A-Za-z\s]+$/;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (!email_pattern.test(email)) {
  //     toast.error("Invalid email", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     console.log("invalid email");
  //     return;
  //   } else if (password != confirmPassword) {
  //     toast.error("Passwords do not match", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     console.log("password match");
  //     return;
  //   } else if (!password_pattern.test(password)) {
  //     toast.error(
  //       "Password must contain at least one digit,one lowercase letter, one uppercase letter and minimum length is 8",
  //       {
  //         position: toast.POSITION.TOP_CENTER,
  //       }
  //     );
  //     console.log("password lc,uc");
  //     return;
  //   } else {
  //     dispatch(register(name, email, password));
  //     console.log(response)
  //     if(response.error){
  //       navigate('/signup')
  //     }
  //     else{
  //     navigate("/login");
  //     toast.success("Registered Successfully", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   }
  // }
  // };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!username_pattern.test(name)) {
      toast.error(
        "Username can only accept characters and white spaces. But input cannot be empty!",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return;
    } else if (!email_pattern.test(email)) {
      toast.error("Invalid email", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log("invalid email");
      return;
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log("password match");
      return;
    } else if (!password_pattern.test(password)) {
      toast.error(
        "Password must contain at least one digit, one lowercase letter, one uppercase letter, and have a minimum length of 8",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      console.log("password lc,uc");
      return;
    } else {
      try {
        const response = await dispatch(register(name, email, password));
        console.log(response.data); // Access response data
        if (response && response.data && response.data.error) {
          toast.error(response.data.error, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          navigate("/verify");
          toast.info("We have sent you a vefirication code", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   if (!email_pattern.test(email)) {
  //     toast.error("Invalid email", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     console.log("invalid email");
  //     return;
  //   } else if (password !== confirmPassword) {
  //     toast.error("Passwords do not match", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     console.log("password match");
  //     return;
  //   } else if (!password_pattern.test(password)) {
  //     toast.error(
  //       "Password must contain at least one digit, one lowercase letter, one uppercase letter, and have a minimum length of 8",
  //       {
  //         position: toast.POSITION.TOP_CENTER,
  //       }
  //     );
  //     console.log("password lc,uc");
  //     return;
  //   } else {
  //     try {
  //       const response = await dispatch(register(name, email, password));
  //       console.log(response);
  //       if (response && response.payload && response.payload.error) {
  //         toast.error(response.payload.error, {
  //           position: toast.POSITION.TOP_CENTER,
  //         });
  //       } else {
  //         navigate("/login");
  //         toast.success("Registered Successfully", {
  //           position: toast.POSITION.TOP_CENTER,
  //         });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   //   try {
  //   //     const response = await dispatch(register(name, email, password));
  //   //     console.log(response);
  //   //     if (response && response.payload && response.payload.error) {
  //   //       toast.error(response.payload.error, {
  //   //         position: toast.POSITION.TOP_CENTER,
  //   //       });
  //   //     } else {
  //   //       navigate("/login");
  //   //       toast.success("Registered Successfully", {
  //   //         position: toast.POSITION.TOP_CENTER,
  //   //       });
  //   //     }
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   }
  //   // }

  // };

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   if (!email_pattern.test(email)) {
  //     toast.error("Invalid email", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     console.log("invalid email");
  //     return;
  //   } else if (password !== confirmPassword) {
  //     toast.error("Passwords do not match", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     console.log("password match");
  //     return;
  //   } else if (!password_pattern.test(password)) {
  //     toast.error(
  //       "Password must contain at least one digit, one lowercase letter, one uppercase letter, and have a minimum length of 8",
  //       {
  //         position: toast.POSITION.TOP_CENTER,
  //       }
  //     );
  //     console.log("password lc,uc");
  //     return;
  //   } else {
  //     try {
  //       dispatch(register(name, email, password))
  //         .then((response) => {
  //           console.log(response);
  //           if (response && response.payload && response.payload.error) {
  //             navigate('/signup');
  //           } else {
  //             navigate("/login");
  //             toast.success("Registered Successfully", {
  //               position: toast.POSITION.TOP_CENTER,
  //             });
  //           }
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };
  //     try {
  //       const response = await dispatch(register(name, email, password));
  //       console.log(response);
  //       // if (response.error) {
  //       //   navigate('/signup');
  //       // }
  //       // else if(!response.error) {
  //       //   navigate('/login');
  //       //   toast.success("Registered Successfully", {
  //       //     position: toast.POSITION.TOP_CENTER,
  //       //   });
  //       // }
  //       if (response.hasOwnProperty("detail")) {
  //         console.log("Error occurred. Navigating to signup page.");
  //         navigate('/signup');
  //       } else {
  //         console.log("Registration successful. Navigating to login page.");
  //         navigate("/login");
  //         toast.success("Registered Successfully", {
  //           position: toast.POSITION.TOP_CENTER,
  //         });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

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
    <Container className="newext">
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
            {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler} className="mx-auto">
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
                  required
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
                  required
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
                controlId="password"
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
                  class="fa-solid fa-lock"
                ></i>
                <Form.Control
                  required
                  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    margin: "none",
                    width: "320px",
                    height: "25px",
                    fontSize: "15px",
                    color: "white",
                  }}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
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
                {/* {err && <p style={{color:"red"}}>{err}</p>} */}
              </Form.Group>
              <hr
                style={{
                  height: "1px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "-10px",
                }}
              ></hr>
              <Form.Group
                controlId="passwordConfirm"
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
                  class="fa-solid fa-lock"
                ></i>
                <Form.Control
                  required
                  style={{
                    background: "none",
                    borderRadius: "none",
                    border: "none",
                    margin: "none",
                    width: "320px",
                    height: "25px",
                    fontSize: "15px",
                    color: "white",
                  }}
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  placeholder="confirm password"
                  onChange={(e) => setconfirmPassword(e.target.value)}
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
                {/* {err && <p style={{color:"red"}}>{err}</p>} */}
              </Form.Group>
              <hr
                style={{
                  height: "1px",
                  borderWidth: "0",
                  color: "white",
                  backgroundColor: "white",
                  marginTop: "-10px",
                }}
              ></hr>

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
                  backgroundColor: "#F5EBE0",
                  borderColor: "#F5EBE0",
                  marginTop: "12px",
                }}
              >
                <text style={{ fontWeight: "bold" }}>Create Account</text>
              </Button>
              <br />
              <div>
                <br />
                <text
                  style={{
                    color: "white",
                    // fontStyle: "italic",
                    fontWeight: "lighter",
                    fontSize: "15px",
                  }}
                >
                  Already have an account?{" "}
                  {/* <a>
                    <text style={{ fontSize: "18px", fontWeight: "bold" }}>
                      SIGN UP
                    </text>
                  </a> */}
                  &nbsp;
                  <Link
                    to={redirect ? `/login?redirect=${redirect}` : "/login"}
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    SIGN IN
                  </Link>
                </text>
              </div>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Signupform;
