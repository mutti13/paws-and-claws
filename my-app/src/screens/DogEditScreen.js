import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-grid-system";
import { Button, Form } from "react-bootstrap";
import "../my.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import { USER_UPDATE_RESET } from "../constants/UserConstants";
import { getDogDetails, updateDog } from "../actions/petActions";
import Aos from "aos";
import "aos/dist/aos.css";
function DogEditScreen() {
  const { id } = useParams();
  const [tag, setTag] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [phone, setPhone] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const dogDetails = useSelector((state) => state.dogDetails);
  const { error, loading, dog } = dogDetails;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

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
  const phone_pattern = /^\d{11}$/;
  const tag_pattern = /^\d+$/;
  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (!userInfo) {
      navigate("/");
    }
    console.log(id);
    if (successUpdate) {
      dispatch({
        type: USER_UPDATE_RESET,
      });
      navigate("/admin/userlist");
    } else {
      if (!dog.pTag || dog._id !== Number(id)) {
        dispatch(getDogDetails(id));
      } else {
        setArea(dog.area);
        setEmail(dog.email);
        setTag(dog.pTag);
        setPhone(dog.number);
      }
    }
  }, [dog, id, successUpdate, navigate, userInfo]);
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

  const submitHandler = (e) => {
    e.preventDefault();
    if (!tag_pattern.test(tag)) {
      toast.error("Pet Tag should only contain Numbers !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else if (!phone_pattern.test(phone)) {
      toast.error(
        "Phone Number should only contain digits , minimumlength is 11 and maximum length is 11",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return;
    }

    console.log(id);
    console.log(dog._id);
    dispatch(updateDog({ _id: dog._id, area, email, tag, phone }));
    navigate("/admin/petslist");
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
        <Link to="/admin/petslist">
          <button
            class="btn  spe"
            type="submit"
            style={{
              backgroundColor: "#2a7075",
              color: "white",
            }}
          >
            Go Back
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
                    Edit dog
                  </p>
                  {loadingUpdate && <Loader />}
                  {errorUpdate && (
                    <Message variant="danger">{errorUpdate}</Message>
                  )}
                  <Form.Group
                    controlId="tag"
                    style={{
                      marginBottom: "25px",
                      display: "inline-flex",
                    }}
                  >
                    <i
                      className="fas fa-tag"
                      style={{
                        color: "#ffffff",
                        marginRight: "2px",
                        marginTop: "7px",
                      }}
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
                      type="text"
                      value={tag}
                      placeholder="Tag"
                      onChange={(e) => setTag(e.target.value)}
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
                  {/* <Form.Group
                    controlId="area"
                    style={{
                      marginBottom: "25px",
                      display: "inline-flex",
                    }}
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
                      value={area}
                      placeholder="Area where found"
                      onChange={(e) => setArea(e.target.value)}
                    />
                   
                  </Form.Group> */}
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
                    controlId="phone"
                    style={{
                      marginBottom: "25px",
                      display: "inline-flex",
                    }}
                  >
                    <i
                      className="fas fa-phone"
                      style={{
                        color: "#ffffff",
                        marginRight: "2px",
                        marginTop: "7px",
                      }}
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
                      type="text"
                      value={phone}
                      placeholder="Phone Number"
                      onChange={(e) => setPhone(e.target.value)}
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
                      backgroundColor: "#F5EBE0",
                      borderColor: "white",
                      marginTop: "12px",
                    }}
                  >
                    <text style={{ fontWeight: "bold" }}>Update</text>
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

export default DogEditScreen;
