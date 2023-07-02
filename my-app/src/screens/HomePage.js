import React from "react";
import { useEffect } from "react";
// import Topbar from "../components/Topbar";
// import products from "../products";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import Products from "../components/Products";
import BottomBar from "../components/BottomBar";
import Reviews from "../components/Reviews";
import reviews from "../reviews";
import Locatenav from "../components/Locatenav";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
//import axios from 'axios'
import Aos from "aos";
import "aos/dist/aos.css";
import "../my.css";
function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  //const [products, setProducts] = useState([])

  //useEffect get triggers everytime the component is loaded or when state is updated
  useEffect(() => {
    Aos.init({ duration: 1200 });
    dispatch(listProducts());
    // async function fetchProducts(){
    //   const {data} = await axios.get('/api/products/')
    //   setProducts(data)
    // }
    // fetchProducts()
    //in order to use await wrap the entire function in async
  }, [dispatch]);
  //bracket at end means we only want useEffect to get triggered when componenet is loaded not when state is updated
  // function gotoOne() {
  //   navigate("/findpet");
  // }
  return (
    <div data-aos="fade-down" style={{ backgroundColor: "#f2ede1" }}>
      <div className="bg1" style={{ position: "relative" }}>
        <Locatenav />
        <div className="paws">
          <p
            style={{
              fontFamily: "Bebas Neue",
              letterSpacing: ".15em",
              fontSize: "60px",
            }}
          >
            Paws & Claws
          </p>
          <br />
          <p
            style={{
              fontSize: "30px",
              fontFamily: "Montserrat",
              fontWeight: "bold",
            }}
          >
            Making your pet, a SuperHero!
          </p>
        </div>
        <Container>
          <div
            style={{
              backgroundColor: "#f2ede1",
              width: "90%",
              margin: "auto",
              posiiton: "relative",
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "30px",
                fontFamily: "Montserrat",
              }}
              className="pt-3"
            >
              FEATURED ITEMS
            </p>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <Row className="px-5">
                {products.slice(4, 8).map((items) => (
                  <Col key={items._id} sm={12} md={6} lg={4} xl={3}>
                    <Products item={items} />
                  </Col>
                ))}

                <Link
                  to="/shop"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    bottom: "0",
                    left: "1150px",
                    position: "absolute",
                    fontSize: "20px",
                    marginTop: "20px",
                    fontFamily: "Montserrat",
                  }}
                >
                  {/* view all products */}
                  <i
  // style={{
  //   color: "#ffffff",
  //   // marginRight: "8px",
  //   // marginTop: "3px",
  // }}
  class="fas fa-long-arrow-alt-right"
></i>
                </Link>
              </Row>
            )}
          </div>
        </Container>
      </div>

      <div className="my-5 fontt">
        <Container className="newcolor">
          <div
            // style={{ backgroundColor: "#877B72", width: "90%", margin: "auto" }}
            style={{ width: "90%", margin: "auto" }}
            className="newcolor"
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bold",
                color: "white",
              }}
              className="pt-3 newtext"
            >
              R E V I E W S
            </p>
            <Row className="px-5">
              {reviews.map((review) => (
                <Col sm={12} md={6} lg={4} xl={4}>
                  <Reviews review={review} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        <div
          style={{
            marginTop: "100px",
            color: "white",
            marginBottom: "100px",
          }}
          className="text-center newcolor"
        >
          <Container className="newtext newcolor">
            <img
              src={require("../65.png")}
              className="img-fluid shadow-4 justify-content-center"
              alt="..."
              style={{
                // borderRadius: "50%",
                height: "20%",
                width: "15%",
                // marginTop: "40px",
                paddingTop: "30px",
              }}
            />
            <p
              className="text-center font2"
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "25px",
              }}
            >
              Welcome to PAWS&CLAWS!
            </p>
            <p
              style={{
                // fontFamily: "Krub",
                textAlign: "center",
                fontSize: "18px",
                paddingBottom: "30px",
              }}
            >
              Paws&Claws lets your pet relish the ultimate experience of leading
              a healthy life! With an enormous number of brand associations,
              varied range of pet food and essentials, we are here to sort it
              all. Paws&Claws has tured out to be a leading cats and dog food
              retailer in Pakistan. We get extremely delighted to see the
              healthy paws bow - down in excitement! We are proud to be the
              choice of millions and do all that it takes to continue to be!
            </p>
          </Container>
        </div>
      </div>
      <Container style={{ marginBottom: "100px" }}>
        {/* <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src={require("../hey.jpg")}
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src={require("../hey.jpg")}
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src={require("../hey.jpg")}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div> */}

        <Carousel fade className="caro" data-aos="fade-up">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../hey4.jpg")}
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5
                style={{
                  // fontFamily: "Krub",
                  fontSize: "60px",
                  fontWeight: "italic",
                }}
              >
                FIND PET
              </h5>
              <p style={{ fontSize: "30px" }}>
                Pets are a great blessing in anyone's life. They are the only
                ones who love us unconditionally. Pets always offer us
                everything they have without asking for anything in return.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../heyedit.jpg")}
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5
                style={{
                  fontSize: "60px",
                  fontWeight: "italic",
                }}
              >
                SHOP
              </h5>
              <p style={{ fontSize: "35px" }}>
                Keep your pet's coat healthy and shiny, strengthen the immune
                system, keep the digestive system working properly, that can
                help your pet maintain a healthier lifestyle.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../abcd.jpg")}
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5
                style={{
                  fontSize: "60px",
                  fontWeight: "italic",
                }}
              >
                LOCATE CLINICS & GROOMERS
              </h5>
              <p style={{ fontSize: "35px" }}>
                Find clinics and groomers for your pet! Brushing your pet's
                ventilates their coat, helping them grow healthy and strong and
                takes away old and damaged hair.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
      <div>
        <BottomBar />
      </div>
    </div>
  );
}

export default HomePage;
