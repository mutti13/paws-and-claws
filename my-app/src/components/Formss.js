// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Row, Col, Container } from "react-grid-system";
// import { Button, Form } from "react-bootstrap";
// import "../my.css";
// import { login } from "../actions/userActions";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Message from "./Message";
// import Loader from "./Loader";
// import { toast } from "react-toastify";
// function Formss() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const location = useLocation();
//   const { search } = useLocation();
//   const navigate = useNavigate();

//   const dispatch = useDispatch();

//   const redirect = location.search ? location.search.split("=")[1] : "/";
//   const email_pattern =
//     /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail)\.(com|net|org)$/i;
//   const userLogin = useSelector((state) => state.userLogin);
//   const { error, loading, userInfo } = userLogin;

//   // useEffect(() => {
//   //   if(userInfo){
//   //         navigate(redirect)
//   //   }
//   // }, [navigate, userInfo, redirect])

//   // const submitHandler = (e) => {
//   //   e.preventDefault()
//   //   if(!email_pattern.test(email))
//   //   {
//   //     toast.error('Invalid email',{
//   //       position: toast.POSITION.TOP_CENTER,
//   //     });
//   //     console.log("invalid email")
//   //     return;
//   //   }
//   //   dispatch(login(email, password))
//   //   const params = new URLSearchParams(search)
//   //   const redirect = params.get('redirect')
//   //   if(redirect === 'payment'){
//   //     navigate('/payment')
//   //     toast.success("Logged in successfully")
//   //   }else{
//   //     if (error == '')
//   //     {
//   //     navigate('/')
//   //     // toast.success("Logged in successfully")
//   //     console.log("success")
//   //     }else {
//   //       navigate('/login')
//   //       // toast.error("No active account found on given credentials")
//   //       console.log("err")
//   //     }
//   //   }
//   // }
//   useEffect(() => {
//     if (userInfo) {
//       const params = new URLSearchParams(search);
//       const redirect = params.get("redirect");
//       if (redirect === "payment") {
//         navigate("/payment");
//         toast.success("Logged in successfully");
//       } else if (redirect === "finddog") {
//         navigate("/finddog");
//       } else if (redirect === "findpet") {
//         navigate("/findpet");
//       } else {
//         navigate("/");
//       }

//       if (error) {
//         navigate("/login");
//         toast.error("Invalid email or password");
//       }
//       // navigate(redirect);
//     }
//   }, [navigate, userInfo, redirect, error]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (!email_pattern.test(email)) {
//       toast.error("Invalid email", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//       console.log("invalid email");
//       return;
//     }
//     dispatch(login(email, password));
//     // if (!email_pattern.test(email)) {
//     //   toast.error("Invalid email", {
//     //     position: toast.POSITION.TOP_CENTER,
//     //   });
//     //   console.log("invalid email");
//     //   return;
//     // }
//     // dispatch(login(email, password));
//     // const params = new URLSearchParams(search);
//     // const redirect = params.get("redirect");
//     // if (redirect === "payment") {
//     //   navigate("/payment");
//     //   toast.success("Logged in successfully");
//     // } else {
//     //   if (error == "") {
//     //     navigate("/");
//     //     // toast.success("Logged in successfully")
//     //     console.log("success");
//     //   } else {
//     //     navigate("/login");
//     //     // toast.error("No active account found on given credentials")
//     //     console.log("err");
//     //   }
//     // }
//   };

//   return (
//     <div style={{ height: "100%" }}>
//       <Container>
//         <Row>
//           <Col
//             sm={12}
//             xs={12}
//             md={6}
//             lg={6}
//             style={{
//               textAlign: "center",
//               marginTop: "25px",
//               marginBottom: "30px",
//               marginLeft: "auto",
//               marginRight: "auto",
//             }}
//           >
//             <Container
//               style={{
//                 backgroundColor: "#546d64",
//                 borderRadius: "4px",
//                 margin: "auto",
//                 width: "400px",
//                 height: "350px",
//                 paddingTop: "33px",
//               }}
//             >
//               {error && <Message variant="danger">{error}</Message>}
//               {loading && <Loader />}
//               <Form onSubmit={submitHandler}>
//                 <Form.Group
//                   controlId="email"
//                   style={{
//                     marginBottom: "25px",
//                     display: "inline-flex",
//                   }}
//                 >
//                   <i
//                     style={{
//                       color: "#ffffff",
//                       marginRight: "2px",
//                       marginTop: "7px",
//                     }}
//                     class="fa-solid fa-envelope"
//                   ></i>
//                   <Form.Control
//                     className="form-control"
//                     style={{
//                       background: "none",
//                       borderRadius: "none",
//                       border: "none",
//                       margin: "none",
//                       width: "340px",
//                       height: "25px",
//                       fontSize: "15px",
//                       fontFamily: "Krub",
//                     }}
//                     type="email"
//                     placeholder="email address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </Form.Group>
//                 <hr
//                   style={{
//                     height: "1.5px",
//                     borderWidth: "0",
//                     color: "white",
//                     backgroundColor: "white",
//                     marginTop: "-10px",
//                   }}
//                 ></hr>
//                 <Form.Group
//                   controlId="password"
//                   style={{
//                     marginBottom: "25px",
//                     display: "inline-flex",
//                   }}
//                 >
//                   <i
//                     style={{
//                       color: "#ffffff",
//                       marginRight: "2px",
//                       marginTop: "7px",
//                     }}
//                     class="fa-solid fa-lock"
//                   ></i>
//                   <Form.Control
//                     style={{
//                       background: "none",
//                       borderRadius: "none",
//                       border: "none",
//                       margin: "none",
//                       width: "340px",
//                       height: "25px",
//                       fontSize: "15px",
//                       color: "white",
//                     }}
//                     type="password"
//                     placeholder="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </Form.Group>
//                 <hr
//                   style={{
//                     height: "1px",
//                     borderWidth: "0",
//                     color: "white",
//                     backgroundColor: "white",
//                     marginTop: "-10px",
//                     marginBottom: "30px",
//                   }}
//                 ></hr>
//                 <div style={{ textAlign: "left", marginBottom: "9px" }}>
//                   <text
//                     style={{
//                       color: "white",
//                       // fontStyle: "italic",
//                       fontWeight: "lighter",
//                       fontSize: "15px",
//                     }}
//                   >
//                     having trouble signing in?
//                     <Link
//                       to="/forgot"
//                       style={{
//                         color: "white",
//                         // fontStyle: "italic",
//                         fontWeight: "lighter",
//                         fontSize: "15px",
//                         textDecoration: "none",
//                         fontWeight: "bold",
//                         marginLeft: "5px",
//                       }}
//                     >
//                       forgot password
//                     </Link>
//                   </text>
//                 </div>
//                 <Button
//                   className="btn buttons"
//                   type="submit"
//                   style={{
//                     width: "100%",
//                     height: "50px",
//                     // fontFamily: "times new roman",
//                     backgroundColor: "#F5EBE0",
//                     color: "black",
//                     // fontWeight:"bold",
//                     outline: "none",
//                     color: "black",
//                     backgroundColor: "#F5EBE0",
//                     borderColor: "#F5EBE0",
//                     marginBottom: "0px",
//                   }}
//                 >
//                   <text style={{ fontWeight: "bold" }}>SIGN IN</text>
//                 </Button>
//                 <br />
//                 <div style={{ marginTop: "12px" }}>
//                   {/* <Button
//                   className="btn buttonsss me-4"
//                   style={{
//                     width: "40%",
//                     height: "50px",
//                     // fontFamily: "times new roman",
//                     backgroundColor: "black",
//                     color: "white",
//                     // fontWeight:"bold",
//                     outline: "none",
//                     backgroundColor: "black",
//                     borderColor: "black",
//                     marginBottom: "12px",
//                   }}
//                 >
//                   <i class="fa-brands fa-google"></i>
//                   &nbsp; &nbsp;
//                   <text>google</text>
//                 </Button>
//                 <Button
//                   className="btn buttonsss"
//                   style={{
//                     width: "40%",
//                     height: "50px",
//                     // fontFamily: "times new roman",
//                     backgroundColor: "black",
//                     color: "white",
//                     // fontWeight:"bold",
//                     outline: "none",
//                     borderColor: "black",
//                     marginBottom: "12px",
//                   }}
//                 >
//                   <i class="fa-brands fa-facebook-f"></i>
//                   &nbsp; &nbsp;
//                   <text>facebook</text>
//                 </Button> */}
//                   <br />
//                   <p
//                     style={{
//                       color: "white",
//                       // fontStyle: "italic",
//                       fontWeight: "lighter",
//                       fontSize: "15px",
//                     }}
//                   >
//                     don't have an account?{" "}
//                     {/* <a>
//                     <text style={{ fontSize: "18px", fontWeight: "bold" }}>
//                       SIGN UP
//                     </text>
//                   </a> */}
//                     &nbsp;
//                     <Link
//                       to={redirect ? `/signup?redirect=${redirect}` : "/signup"}
//                       style={{
//                         fontSize: "18px",
//                         fontWeight: "bold",
//                         textDecoration: "none",
//                         color: "white",
//                       }}
//                     >
//                       SIGN UP
//                     </Link>
//                   </p>
//                 </div>
//               </Form>
//             </Container>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Formss;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-grid-system";
import { Button, Form } from "react-bootstrap";
import "../my.css";
import { login } from "../actions/userActions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Message from "./Message";
import Loader from "./Loader";
import { toast } from "react-toastify";

function Formss() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const { search } = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const email_pattern =
    /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail)\.(com|net|org)$/i;
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      const params = new URLSearchParams(search);
      const redirect = params.get("redirect");
      if (redirect === "payment") {
        navigate("/payment");
        toast.success("Logged in successfully");
      } else if (redirect === "finddog") {
        navigate("/finddog");
      } else if (redirect === "findpet") {
        navigate("/findpet");
      } else {
        navigate("/");
      }

      if (error) {
        navigate("/login");
        toast.error("Invalid email or password");
      }
    }
  }, [navigate, userInfo, redirect, error]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email_pattern.test(email)) {
      toast.error("Invalid email", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log("invalid email");
      return;
    }
    dispatch(login(email, password));
  };

  return (
    <div style={{ height: "100%" }} className="newtext">
      <Container>
        <Row>
          <Col
            sm={12}
            xs={12}
            md={6}
            lg={6}
            style={{
              textAlign: "center",
              marginTop: "25px",
              marginBottom: "30px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Container
              style={{
                backgroundColor: "#2a7075",
                borderRadius: "4px",
                margin: "auto",
                width: "400px",
                height: "350px",
                paddingTop: "33px",
              }}
            >
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
              <Form onSubmit={submitHandler}>
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
                    className="fa-solid fa-envelope"
                  ></i>
                  <Form.Control
                    className="form-control"
                    style={{
                      background: "none",
                      borderRadius: "none",
                      border: "none",
                      margin: "none",
                      width: "340px",
                      height: "25px",
                      fontSize: "15px",
                    }}
                    type="email"
                    placeholder="email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                    className="fa-solid fa-lock"
                  ></i>
                  <Form.Control
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
                <div style={{ textAlign: "left", marginBottom: "9px" }}>
                  <text
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                      fontSize: "15px",
                    }}
                  >
                    having trouble signing in?
                    <Link
                      to="/forgot"
                      style={{
                        color: "white",
                        fontWeight: "lighter",
                        fontSize: "15px",
                        textDecoration: "none",
                        fontWeight: "bold",
                        marginLeft: "5px",
                      }}
                    >
                      forgot password
                    </Link>
                  </text>
                </div>
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
                    marginBottom: "0px",
                  }}
                >
                  <text style={{ fontWeight: "bold" }}>SIGN IN</text>
                </Button>
                <br />
                <div style={{ marginTop: "12px" }}>
                  <br />
                  <p
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                      fontSize: "15px",
                    }}
                  >
                    don't have an account?{" "}
                    <Link
                      to={redirect ? `/signup?redirect=${redirect}` : "/signup"}
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      SIGN UP
                    </Link>
                  </p>
                </div>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Formss;
