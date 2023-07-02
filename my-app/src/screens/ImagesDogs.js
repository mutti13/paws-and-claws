import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col, FormGroup, Container } from "react-bootstrap";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import Message from "../components/Message";
import axios from "axios";
import Aos from "aos";
import Loader from "../components/Loader";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
function ImagesDogs() {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("Dog");
  const [uploading, setUploading] = useState(false);
  const email_pattern =
    /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail)\.(com|net|org)$/i;
  const phone_pattern = /^\d{11}$/;
  const tag_pattern = /^\d+$/;
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  console.log(category);
  console.log(description);

  const checkoutHandler = () => {
    if (userInfo) navigate("/finddogimage");
    else {
      navigate(`/login?redirect=${"finddogimage"}`);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("in submit");


    const formData = new FormData();
    formData.append("description", description);
    formData.append("category", "Dog");
    formData.append("image", image);
    formData.append("email", email);
    console.log(formData);
      console.log("in submit lost");
      try {
        const response = await axios.post("/api/users/dog-image/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response)
        setMessage(response.data.results[0].similarity);
      } catch (error) {
        console.log(error)
        setMessage(
          "There is no pet in our records with such features. Do not lose hope, keep looking."
        );
      }
  
    }

    
  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (userInfo) {
        setEmail(userInfo.email);
      }
  });

 

  return (
    <div
      style={{ backgroundColor: "#f2ede1", height: "100%" }}
      className="fontt hei newtext"
      data-aos="fade-down"
    >
      <Locatenav />

      <h2
        className="text-center"
        style={{
          paddingTop: 30,
          marginBottom: "60px",
          fontFamily: "Bebas Neue",
          letterSpacing: ".15em",
          fontSize: "50px",
        }}
      >
        {" "}
        Find your Dog
      </h2>
    
      <Row>
        <Col>
          <p
            className="my-4"
            style={{
              marginTop: "100px",
              marginRight: 200,
              marginLeft: 80,
              fontSize: 30,
            }}
          >
            Our feature matching algorithm will help you unite with your beloved
            animal, don’t lose hope
          </p>
          {message && (
            <p
              style={{
                marginLeft: "10px",
              }}
            >
              <Message>{message}</Message>
            </p>
          )}
          <p
            style={{
              marginTop: 200,
              marginRight: 220,
              marginLeft: 80,
              fontSize: 14,
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            *you will be notified vial text and email if our system finds an
            animal with similar features as your pet
          </p>
        </Col>

        <Col>
          <Container
            style={{
              backgroundColor: "#2a7075",
              borderRadius: "4px",
              width: "500px",
              height: "500px",
              paddingTop: "33px",
              color: "white",
              marginLeft: "180",
              marginBottom: "50px",
              // width:"500px",
              // height:"700px"
            }}
            className="mx-auto"
          >
            {userInfo ? (
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
                  controlId="email"
                  style={{ marginBottom: "25px", display: "inline-flex" }}
                >
                  {/* <Form.Label>Email address</Form.Label> */}
                  <i
                    className="fa-solid fa-envelope"
                    style={{
                      color: "#ffffff",
                      marginRight: "2px",
                      marginTop: "7px",
                    }}
                  ></i>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    value={userInfo.email}
                    required
                    onChange={(e) => setEmail(userInfo.email)}
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

                <Form.Group
                  controlId="image"
                  style={{
                    marginBottom: "25px",
                    // display: "inline-flex",
                  }}
                >
                  <Form.Label style={{ color: "white", fontWeight: "bold" }}>
                    Image
                  </Form.Label>

                  <br />
                  {uploading && <Loader />}
                </Form.Group>

                <Form.Group controlId="image">
                  {/* <Form.Label>Image</Form.Label> */}
                  <Form.Control type="file" onChange={handleImageChange} />
                     {" "}
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
                  className="mb-3"
                  controlId="category"
                  style={{ marginBottom: "25px", display: "inline-flex" }}
                >
                  {/* <Form.Label>Email address</Form.Label> */}
                  <i
                    className="fa-solid fa-dog"
                    style={{
                      color: "#ffffff",
                      marginRight: "2px",
                      marginTop: "7px",
                    }}
                  ></i>
                  <Form.Control
                    type="text"
                    placeholder="category"
                    value={"Dog"}
                    required
                    onChange={(e) => setCategory(e.target.value)}
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
                  }}
                ></hr>

                <Form.Group controlId="description">
                  <Form.Label style={{ marginTop: "10px", fontWeight: "bold" }}>
                    Tell us something about your Dog
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    row="3"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                {/* <Button variant="primary" type="submit">
Submit
</Button> */}
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
                    borderColor: "white",
                    marginTop: "15%",
                  }}
                >
                  <text style={{ fontWeight: "bold" }}>Submit</text>
                </Button>
              </Form>
            ) : (
              <Message variant="info">
                {" "}
                <a
                  onClick={checkoutHandler}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  Please LOGIN to enter information
                </a>
              </Message>
            )}
          </Container>
        </Col>
      </Row>
      <BottomBar />
    </div>
  );
}

export default ImagesDogs;
