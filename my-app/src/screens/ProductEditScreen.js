import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-grid-system";
import { Button, Form } from "react-bootstrap";
import "../my.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import Aos from "aos";
import "aos/dist/aos.css";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";
import axios from "axios";

function ProductEditScreen() {
  const { id } = useParams();

  //   const productId= match.params.id

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (!userInfo) {
      navigate("/");
    }
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      navigate("/admin/productlist");
    } else {
      console.log(product._id);

      if (!product.name || product._id !== Number(id)) {
        dispatch(listProductDetails(id));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
      }
    }
  }, [dispatch, product, id, navigate, successUpdate, userInfo]);

  // const productRegex = /^[A-Za-z\s]+$/;
  const productRegex = /^(?!\s+$)[A-Za-z\s]+$/;
  const productName = /^(?!\s*$)[\w\s\d!@#$%^&*()-=_+~`[\]{}|:;"'<>,.?\\/]+$/i;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!productName.test(name)) {
      toast.error("Product name cannot be empty!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (!productRegex.test(brand)) {
      toast.error(
        "Brand name should only contain characters and cannot be empty!",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return;
    } else if (!productRegex.test(category)) {
      toast.error("Product name should only contain characters.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (price < 0 || countInStock < 0) {
      // Show an error message or handle the validation error as per your requirement

      toast.error("Enter a Positive Value of Price & Count in Stock", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    dispatch(
      updateProduct({
        _id: id,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
      })
    );
    //update product
  };

  const uploadFileHandler = async (e) => {
    console.log("upload file hhandler chal gya");
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("product_id", id);

    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        "/api/products/upload/",
        formData,
        config
      );
      console.log(image);
      console.log("hello");
      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  // const submitHandler = (e) => {
  return (
    <div
      className="hei newtext"
      style={{ height: "100%", backgroundColor: "#f2ede1" }}
      data-aos="fade-down"
    >
      <Locatenav />
      <Container style={{ backgroundColor: "#f2ede1" }}>
        <Link to="/admin/productlist">
          <button
            // class="btn  spe"
            type="submit"
            // style={{
            //   backgroundColor: "#2a7075",
            //   color: "white",
            // }}
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
                width: "480px",
                height: "925px",
                paddingTop: "33px",
                // width:"500px",
                // height:"700px"
              }}
              className="mx-auto"
            >
              <p
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  marginBottom: "30px",
                  color: "white",
                  letterSpacing: ".15em",
                }}
                className="newheading"
              >
                Edit Product
              </p>
              {loadingUpdate && <Loader />}
              {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                <Form onSubmit={submitHandler} className="mx-auto">
                  <Form.Group
                    controlId="name"
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
              ></i> */}
                    <Form.Label style={{ color: "white", fontWeight: "bold" }}>
                      Name
                    </Form.Label>
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
                      type="name"
                      value={name}
                      placeholder="Enter Product Name"
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
                    controlId="price"
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
                      {" "}
                      Price
                    </Form.Label>
                    <Form.Control
                      style={{
                        background: "none",
                        borderRadius: "none",
                        border: "none",
                        margin: "none",
                        width: "425px",
                        height: "25px",
                        fontSize: "15px",
                        color: "white",
                      }}
                      type="number"
                      value={price}
                      placeholder="Enter price"
                      onChange={(e) => setPrice(e.target.value)}
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
                      value={image}
                      placeholder="Enter image"
                      onChange={(e) => setImage(e.target.value)}
                    />
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
                  <Form.Group controlId="image-file" className="mb-3">
                    <Form.Control type="file" onChange={uploadFileHandler} />
                  </Form.Group>
                  {/* ------------------------ */}

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
                    controlId="brand"
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
                      {" "}
                      Brand
                    </Form.Label>
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
                      value={brand}
                      placeholder="Enter brand"
                      onChange={(e) => setBrand(e.target.value)}
                    />
                  </Form.Group>
                  {/* ------------- */}

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
                    controlId="countinstock"
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
              ></i> */}
                    <Form.Label style={{ color: "white", fontWeight: "bold" }}>
                      {" "}
                      Count in Stock
                    </Form.Label>
                    <Form.Control
                      style={{
                        background: "none",
                        borderRadius: "none",
                        border: "none",
                        margin: "none",
                        width: "425px",
                        height: "25px",
                        fontSize: "15px",
                        color: "white",
                      }}
                      type="number"
                      value={countInStock}
                      placeholder="Enter stock"
                      onChange={(e) => setCountInStock(e.target.value)}
                    />
                  </Form.Group>

                  {/* -------CATEGOIRY------ */}

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
                    controlId="category"
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
              ></i> */}
                    <Form.Label style={{ color: "white", fontWeight: "bold" }}>
                      {" "}
                      Category
                    </Form.Label>
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
                      type="category"
                      value={category}
                      placeholder="Enter category"
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </Form.Group>

                  {/* ------------- */}

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
                    controlId="description"
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
              ></i> */}
                    <Form.Label style={{ color: "white", fontWeight: "bold" }}>
                      Description
                    </Form.Label>
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
                      type="description"
                      value={description}
                      placeholder="Enter Description"
                      onChange={(e) => setDescription(e.target.value)}
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

export default ProductEditScreen;
