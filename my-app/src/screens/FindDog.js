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
function FindDog() {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [status, setStatus] = useState(null);
  const [area, setArea] = useState("");
  const [date, setDate] = useState(null);
  const [number, setNumber] = useState(null);
  const [tag, setTag] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [email, setEmail] = useState("");
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
    if (userInfo) navigate("/finddog");
    else {
      navigate(`/login?redirect=${"finddog"}`);
    }
  };
  const lahoreAreas = [
    "Amin Park",
    "Alpha Co Operative",
    "Allama Iqbal Medical College",
    "Allama Iqbal Town",
    "Ali Park",
    "Baghban Pura",
    "Badami Bagh",
    "Band Road",
    "Bilal Gang",
    "Burj Colony",
    "Canal Road",
    "Canal View Colony",
    "Darbar Gurreh Shah",
    "Data Nagar",
    "Engineer Cooperative Society",
    "Faruque Ganj",
    "Fc College",
    "Fortress Stadium",
    "Ghousia Colony",
    "Guldasit Colony",
    "Gulshan E Ravi",
    "Herbuns Pura",
    "Ichhra",
    "Islam Pura",
    "Ittehad Colony",
    "Jinnah Hospital",
    "Karim Park",
    "Khudad Town",
    "Mahmood Booty Ring Road",
    "Misri Shah",
    "Mughal Pura",
    "Muslim Town",
    "Muslima Bad",
    "Mustafa Bad",
    "Nabi Pura",
    "New Garden Town",
    "New PAF Colony",
    "Officers Colony",
    "PCSIR Housing Scheme",
    "PCSIR Housing Society",
    "Punjab University",
    "Punjab University Hostel",
    "Ram Garh",
    "Ravi Road",
    "Riwaz Garden",
    "Sabzazar",
    "Saidpur",
    "Samanabad",
    "Samia Town",
    "Sanat Nagar",
    "Sanda Kalan",
    "Sanda Khurd",
    "Shad Bagh",
    "Shadman Colony",
    "Shalimar Link Road",
    "Shalimar Town",
    "Star Town",
    "Suparco Colony",
    "Saidpur",
    "Samanabad",
    "Tech Society",
    "Usman Ganj",
    "Wahdat Colony",
    "Wapda Colony",
  ];

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   console.log("in submit");
  //   if (!email_pattern.test(email)) {
  //     toast.error("Invalid email", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     console.log("invalid email");
  //     return;
  //   } else if (!phone_pattern.test(number))
  //   {
  //     toast.error("Invalid phone number. Maximum and minimum length is 11",{
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //     return;
  //   }else {
  //   // const selectedDate = e.target.elements.date.value; // Assuming the input field has the name 'date'

  //   // const formattedDate = moment(selectedDate).format("YYYY-DD-MM"); // Convert the date format

  //   if (status === "Lost") {
  //     // Handle "Lost" case
  //     console.log("in submit lost");
  //     try {
  //       console.log("in submit lost try");
  //       const response = await axios.post("/api/users/find-pet/", {
  //         status,
  //         image,
  //         area,
  //         number,
  //         tag,
  //         email,
  //       });
  //       console.log(image);
  //       setMessage(response.data.message);
  //     } catch (error) {
  //       setMessage(
  //         "There is no pet with that tag number in our website. Do not lose hope, keep looking"
  //       );
  //     }
  //   } else if (status === "Found") {
  //     console.log("in submit found");
  //     // Handle "Found" case
  //     try {
  //       const response = await axios.post("/api/users/find-pet/", {
  //         status,
  //         image,
  //         area,
  //         number,
  //         tag,
  //         email,
  //       });
  //       console.log(image);
  //       setMessage(response.data.message);
  //     } catch (error) {
  //       setMessage(
  //         "There is no pet with that tag number in our website. Do not lose hope, keep looking"
  //       );
  //     }
  //   }
  // }
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!phone_pattern.test(number)) {
      toast.error(
        "Phone Number should only contain digits , minimumlength is 11 and maximum length is 11",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return;
    } else if (!tag_pattern.test(tag)) {
      toast.error("Pet Tag should only contain digits!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    console.log("in submit");
    // const selectedDate = e.target.elements.date.value; // Assuming the input field has the name 'date'

    // const formattedDate = moment(selectedDate).format("YYYY-DD-MM"); // Convert the date format

    const formData = new FormData();
    formData.append("status", status);
    formData.append("area", area);
    formData.append("date", date);
    formData.append("number", number);
    formData.append("tag", tag);
    formData.append("email", email);
    formData.append("description", description);
    formData.append("category", "Dog");
    formData.append("image", image);
    console.log(formData);
    if (status === "Lost") {
      // Handle "Lost" case
      console.log("in submit lost");
      try {
        const response = await axios.post("/api/users/find-dog/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setMessage(response.data.message);
      } catch (error) {
        setMessage(
          "There is no pet with that tag number on our website. Do not lose hope, keep looking."
        );
      }
    }
    // try {
    //   console.log("in submit lost try");
    //   const response = await axios.post("/api/users/find-pet/", {
    //     status,
    //     area,
    //     number,
    //     tag,
    //     email,
    //   });
    //   setMessage(response.data.message);
    // } catch (error) {
    //   setMessage(
    //     "There is no pet with that tag number in our website. Do not lose hope, keep looking"
    //   );
    // }
    else if (status === "Found") {
      console.log("in submit found");

      // Handle "Found" case
      // try {
      //   const response = await axios.post("/api/users/find-pet/", {
      //     status,
      //     area,
      //     number,
      //     tag,
      //     email,
      //   });
      //   setMessage(response.data.message);
      // } catch (error) {
      //   setMessage(
      //     "There is no pet with that tag number in our website. Do not lose hope, keep looking"
      //   );
      // }
      try {
        const response = await axios.post("/api/users/find-dog/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setMessage(response.data.message);
      } catch (error) {
        setMessage(
          "There is no pet with that tag number on our website. Do not lose hope, keep looking."
        );
      }
    }
  };
  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (userInfo) {
      setEmail(userInfo.email);
    }
  });

  // const uploadFileHandler = async (e) => {
  //   console.log("upload file hhandler chal gya")
  //   const file = e.target.files[0];
  //   const formData = new FormData();

  //   formData.append("image", file);

  //   setUploading(true);
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     };
  //     const { data } = await axios.post(
  //       "/api/pets/upload/",
  //       formData,
  //       config
  //     );
  //       console.log(formData);
  //     // Handle the response from the server, such as updating the UI or displaying a success message
  //     console.log("Image uploaded successfully:", data);

  //     setUploading(false);
  //   } catch (error) {
  //     // Handle the error, such as displaying an error message
  //     console.error("Error uploading image:", error);
  //     setUploading(false);
  //   }
  // };
  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   console.log('Selected file:', file); // Log the selected file

  //   const formData = new FormData();
  //   formData.append('image', file);

  //   setUploading(true);
  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     };
  //     const { data } = await axios.post('/api/pets/upload/', formData, config);

  //     setImage(data);
  //     console.log(image)
  //     console.log("hello")
  //     setUploading(false);
  //   } catch (error) {
  //     console.error('Upload error:', error);
  //     setUploading(false);
  //   }
  // };

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
      {/* <div className='text-center  my-2'> 
      <Button type='radio' className='mx-2' size="sm">found</Button> 
      <Button className='mx-2' size="sm">lost</Button>
    </div> */}
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
              height: "760px",
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
                <Col>
                  <div
                    className="text-center  my-2"
                    style={{ marginBottom: 30 }}
                  >
                    {/* <Button type='radio' className='mx-2' size="sm">found</Button> 
<Button className='mx-2' size="sm">lost</Button> */}
                    <Form.Check
                      inline
                      label="Lost"
                      name="group1"
                      type="radio"
                      value="Lost"
                      id="inline-radio-1"
                      required
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    <Form.Check
                      inline
                      label="Found"
                      name="group1"
                      type="radio"
                      value="Found"
                      id="inline-radio-2"
                      required
                      onChange={(e) => setStatus(e.target.value)}
                    />
                  </div>
                </Col>

                <Form.Group
                  controlId="image"
                  style={{
                    marginBottom: "25px",
                    // display: "inline-flex",
                  }}
                >
                  {/* <i
    style={{
      color: "#ffffff",
      marginRight: "2px",
      marginTop: "7px",
    }}
    class="fa-solid fa-user"
  ></i> */}{" "}
                  <Form.Label style={{ color: "white", fontWeight: "bold" }}>
                    Image
                  </Form.Label>
                  {/* <Form.Control
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
          type="text"
          value={image}
          // placeholder="Enter image"
          onChange={(e) => setImage(e.target.value)}
        /> */}
                  {/* image */}
                  {/* <Form.File
  id='image-file'
  label ='Choose File'
  custom
  onChange={uploadFileHandler}>

  </Form.File> */}
                  <br />
                  {uploading && <Loader />}
                </Form.Group>

                <Form.Group controlId="image">
                  {/* <Form.Label>Image</Form.Label> */}
                  <Form.Control type="file" onChange={handleImageChange} />
                     {" "}
                </Form.Group>

                {/* <Form.Group
    className="mb-3"
    controlId="area"
    style={{ marginBottom: "25px", display: "inline-flex" }}
  > */}
                {/* <Form.Label>Email address</Form.Label> */}
                {/* <i
      className="fas fa-location-pin"
      style={{
        color: "#ffffff",
        marginRight: "2px",
        marginTop: "7px",
      }}
    ></i> */}
                {/* <Form.Control
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
      type="text"
      placeholder="area"
      value={area}
      required
      onChange={(e) => setArea(e.target.value)}
    />
  </Form.Group> */}
                {/* ----------------------------- */}
                <Form.Group
                  className="mb-3"
                  controlId="area"
                  style={{ marginBottom: "25px", display: "inline-flex" }}
                >
                  <i
                    className="fas fa-location-pin"
                    style={{
                      color: "#ffffff",
                      marginRight: "2px",
                      marginTop: "7px",
                    }}
                  ></i>
                  <Form.Control
                    as="select"
                    value={area}
                    required
                    onChange={(e) => setArea(e.target.value)}
                    style={{
                      backgroundColor: "#F5EBE0",

                      // background: "none",
                      borderRadius: "none",
                      border: "none",
                      margin: "none",
                      width: "340px",
                      height: "30px",
                      fontSize: "15px",
                      color: "black",
                      marginLeft: "2px",
                    }}
                  >
                    <option value="">Select an area</option>
                    {lahoreAreas.map((areaOption) => (
                      <option key={areaOption} value={areaOption}>
                        {areaOption}
                      </option>
                    ))}
                  </Form.Control>
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
                  style={{ marginBottom: "25px", display: "inline-flex" }}
                >
                  <i
                    className="fas fa-calendar"
                    style={{
                      color: "#ffffff",
                      marginRight: "2px",
                      marginTop: "7px",
                    }}
                  ></i>
                  {/* <Form.Label>date</Form.Label> */}
                  {/* <Form.Control
      type="date"
      value={date}
      required
      onChange={(e) => setDate(e.target.value)}
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
    /> */}
                  <Form.Control
                    type="date"
                    value={date}
                    required
                    onChange={(e) => setDate(e.target.value)}
                    max={new Date().toISOString().split("T")[0]} // Set the max attribute to the current date
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
                    color: "2BB09B",
                    backgroundColor: "white",
                    marginTop: "-10px",
                  }}
                ></hr>

                <Form.Group
                  className="mb-3"
                  controlId="number"
                  style={{ marginBottom: "25px", display: "inline-flex" }}
                >
                  <i
                    className="fas fa-phone"
                    style={{
                      color: "#ffffff",
                      marginRight: "2px",
                      marginTop: "7px",
                    }}
                  ></i>
                  {/* <Form.Label>number</Form.Label> */}
                  <Form.Control
                    type="text"
                    value={number}
                    required
                    onChange={(e) => setNumber(e.target.value)}
                    //       onKeyPress={(e) => {
                    //         const keyCode = e.keyCode || e.which;
                    //         const keyValue = String.fromCharCode(keyCode);
                    //         const numericRegex = /^[0-9]+$/;
                    //         if (!numericRegex.test(keyValue)) {
                    //           e.preventDefault();
                    //         }
                    //               }}
                    placeholder="phone number (without dash)"
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

                <Form.Group
                  className="mb-3"
                  controlId="tag"
                  style={{ marginBottom: "25px", display: "inline-flex" }}
                >
                  <i
                    className="fas fa-tag"
                    style={{
                      color: "#ffffff",
                      marginRight: "2px",
                      marginTop: "7px",
                    }}
                  ></i>
                  {/* <Form.Label>tag</Form.Label> */}
                  <Form.Control
                    type="text"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    required
                    placeholder="Pet tag"
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

export default FindDog;
