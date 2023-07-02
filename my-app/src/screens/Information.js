// import React from 'react'
// import { useState,useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {Container,Row,Col} from 'react-grid-system'
// import { Image,ListGroup,Button, Card , Form} from 'react-bootstrap'
// import StarRating from '../components/StarRating'
// import Rating from '../components/Rating'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import Locatenav from '../components/Locatenav'
// import BottomBar from '../components/BottomBar'
// import {listProductDetails , createProductReview} from '../actions/productActions'
// // import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
// import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
// import { Link } from 'react-router-dom'
// function Information() {

//     const [qty, setQty] = useState(1)
//     const [rating, setRating] = useState(0)
//     const [comment, setComment] = useState('')

//     const navigate = useNavigate()

//     const {id} = useParams();
//     const dispatch = useDispatch()

//     const productDetails = useSelector(state => state.productDetails)
//     const {loading, error, product} = productDetails

//     const userLogin = useSelector(state => state.userLogin)
//     const {userInfo} = userLogin

//      const productReviewCreate = useSelector(state => state.productReviewCreate)
//      const {loading:loadingProductReview, error:errorProductReview, success:successProductReview} = productReviewCreate

//     useEffect(() => {

//         if(successProductReview){
//         setRating(0)
//         setComment('')
//         dispatch({type:PRODUCT_CREATE_REVIEW_RESET})

//         }

//         dispatch(listProductDetails(id)) },

//         [dispatch, id , successProductReview])

//     const addToCartHandler = () => {
//       navigate(`/cart/${id}?qty=${qty}`)
//     }

//     const submitHandler = (e) => {
//         e.preventDefault()
//         dispatch(createProductReview
//          ( id,
//           rating,
//           comment)

//           )
//          }

//   return (

//     <div  className='fontt'>
//         <Locatenav/>
//     <Container style={{ height : '100%'}}>
//         <Container fluid style={{textAlign  : 'center', marginBottom : '60px'}}>
//             <Row>
//                 <Col style={{
//                 fontSize : '35px',
//             }}>
//                     Product Information
//                 </Col>
//             </Row>
//         </Container>
//         <Container>
//             {loading ?
//                 <Loader/>
//                 : error
//                 ? <Message variant='danger'>{error}</Message>
//                 :
//                 (
//             //     <Row>
//             //     <Col lg={4} sm={12} md={6}>
//             //       <img src={product.image}
//             //       style={{borderBlockColor : 'black',
//             //     border: '5px solid',
//             //     borderWidth : 'thin',
//             //     padding : '5px',
//             //     margin : '5px',
//             //     height  : '90%',
//             //     width : '90%'
//             //     }}
//             //       />
//             //     <p>{product.rating} reviews</p>
//             //     </Col>
//             //     <Col lg={8} sm={12} md={6}>
//             //        <p style={{textAlign : 'left', fontFamily : 'initial', fontSize : '30px', fontStyle : 'italic'}}>
//             //         {product.name}
//             //        </p>
//             //        <hr style={{height:'3px',borderWidth: '0',color: 'black' , backgroundColor: 'black', width : '55px', marginRight : '700px'}}></hr>
//             //        <p style={{fontFamily : 'sans-serif', fontSize : '20px'}}><b style={{textDecorationLine : 'line-through'}}>Rs. 3000 only</b> Rs. {product.price}</p>
//             //        <p style={{fontFamily : 'monospace', fontSize : '18px'}}>{product.description}</p>
//             //        <div style={{marginLeft : '7px', marginTop : '35px'}} class="btn-group mr-2" role="group" aria-label="Second group">
//             //                 <button style={{ width : '50px', height : '35px', borderColor : 'black', borderRadius : '3px', background : '#33292A', color : 'white', fontFamily : 'cursive'}}
//             //                 type="button" class="btn btn-secondary">-</button>
//             //                 <button style={{ width : '50px', height : '35px', borderColor : 'black', borderRadius : '3px', background : '#33292A', color : 'white', fontFamily : 'cursive'}}
//             //                 type="button" class="btn btn-secondary">1</button>
//             //                <button style={{ marginRight : '15px' ,width : '50px', height : '35px', borderColor : 'black', borderRadius : '3px', background : '#33292A', color : 'white', fontFamily : 'cursive'}}
//             //                 type="button" class="btn btn-secondary">+</button>
//             //                    <button style={{ width : '150px', height : '35px', borderColor : 'black', borderRadius : '3px', background : '#33292A', color : 'white', fontFamily : 'cursive'}}
//             //                 type="button" class="btn btn-secondary">add to cart</button>
//             //         </div>

//             //         <p style={{ marginTop : '20px',fontFamily : 'cursive', fontStyle : 'italic'}}>Add a review below, We appreciate your feedback</p>
//             //         <StarRating/>
//             //     </Col>
//             // </Row>
//             <Row>
//             <Col md={3}>
//               <Image  style={{borderBlockColor : 'black',
//                 // border: '5px solid',
//                 borderWidth : 'thin',
//                 height  : '80%',
//                 width : '90%',
//                 display: "block",
//                 margin: "auto"
//             }} src={product.image} alt={product.name} fluid   />
//             <div style={{textAlign:'center'}}>
//             <StarRating/>
//             </div>
//             </Col>
//             <Col md={6} className='mx-auto'>
//               <ListGroup variant='flush'>
//                 <ListGroup.Item style={{
//                     backgroundColor : '#F5EBE0'
//                 }}>
//                   <h3 style={{textAlign : 'left',  marginTop : '20px' , fontWeight:'bold' , fontSize:'26px'}}>
//                     {product.name}
//                   </h3>
//                 </ListGroup.Item>

//                 <ListGroup.Item  style={{
//                     backgroundColor : '#F5EBE0',
//                     fontSize : '18px'
//                 }}>
//                  <strong>Description:</strong>  {product.description}
//                 </ListGroup.Item>

//                 {/* -------------------PRICE OF PRODUCT ???????? */}

//                 <ListGroup.Item  style={{
//                     backgroundColor : '#F5EBE0',
//                     fontSize : '18px'
//                 }}>
//                  <strong> Price: Rs. </strong>{product.price}
//                 </ListGroup.Item>

//                 {/* ---------------------RATING---------------------- */}
//                 <ListGroup.Item  style={{
//                     backgroundColor : '#F5EBE0',
//                     fontSize : '20px'

//                 }} className='my-3'>

//                 <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
//                 </ListGroup.Item>

//               </ListGroup>

//             </Col>
//             <Col md={3} className='my-auto'>
//             <Card>
//                 <ListGroup variant='flush'>
//                   {/* <ListGroup.Item  style={{
//                     backgroundColor : '#F5EBE0'
//                 }}>
//                     <Row>
//                       <Col>
//                          Price:
//                       </Col>
//                       <Col>
//                           <strong>
//                             Rs. {product.price}
//                           </strong>
//                       </Col>
//                     </Row>
//                   </ListGroup.Item>
//    */}
//                   <ListGroup.Item  style={{
//                     backgroundColor : '#F5EBE0'
//                 }}>
//                     <Row>
//                       <Col>
//                          Status:
//                       </Col>
//                       <Col>
//                           <strong>
//                             {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
//                           </strong>
//                       </Col>
//                     </Row>
//                   </ListGroup.Item>

//                   {product.countInStock > 0 && (
//                     <ListGroup.Item style={{
//                       backgroundColor : '#F5EBE0'
//                     }}>
//                       <Row>
//                         <Col>Qty</Col>
//                         <Col xs='auto' className='my-1'>
//                            <Form.Control
//                            as='select'
//                            value={qty}
//                            onChange={(e) => setQty(e.target.value)}
//                            style={{backgroundColor:'#F5EBE0'}}
//                            >

//                             {

//                               [...Array(product.countInStock).keys()].map((x) => (
//                                 <option key={x + 1} value={x + 1}>
//                                   {x + 1}
//                                 </option>
//                               ))
//                             }

//                            </Form.Control>
//                         </Col>
//                       </Row>
//                     </ListGroup.Item>
//                   )}

//                   <ListGroup.Item  style={{
//                     backgroundColor : '#F5EBE0'
//                 }}>
//                      <Button
//                     onClick={addToCartHandler}
//                     style={{
//                     width: "100%",
//                     height: "50px",
//                     // fontFamily: "times new roman",
//                     backgroundColor: "#33292A",
//                     color: "white",
//                     // fontWeight:"bold",
//                     outline: "none",
//                     borderColor: "black",
//                     marginBottom: "12px",
//                   }} className='btn-block spe' disabled={product.countInStock === 0} type='button'>Add to Cart</Button>
//                   </ListGroup.Item>
//                 </ListGroup>
//               </Card>
//             </Col>
//         </Row>
//                 )

//             }

//         </Container>

//               {/* ----------------------------------------- */}

//         {/* <Container style={{marginTop : '40px'}}>
//             <Row>
//                 <Col>
//                  <div style={{
//                     height : '200px',
//                     padding : '5px',
//                     width:"100%",
//                     marginBottom:"10px"
//                 }} className='abcd'>
//                     <h2 style={{marginLeft : '30px',
//                                 marginTop : '20px'}}>review</h2>
//                     <p style={{marginLeft : '30px', fontSize : '15px'}}>No reviews in yet</p>
//                     <input placeholder='Only logged in customers can add a review' style={{border : 'solid thin', width : '60%', marginBottom : '10px', marginLeft : '30px', height : '40px', backgroundColor : '#E4D5DB', borderColor  : 'black', borderRadius : '3px', padding : '15px',
//                  fontSize : '15px',  }}>

//                     </input>
//                     <Button className=' spe' style={{
//                         marginBottom : '5px',

//                         marginLeft : '30px',
//                         width : '150px',
//                         backgroundColor: "#33292A",
//                         color : 'white',
//                         borderRadius : '3px',
//                         borderColor : 'black',
//                         // fontWeight : 'bold',
//                         fontFamily:'krub'
//                     }}

//                      type='submit'>Submit</Button>
//                 </div>

//                 </Col>
//             </Row>
//         </Container> */}

//         {/* review container ending */}
//         <Row>
//           <Col md={6}>
//             <h4>Reviews</h4>
//             {product.reviews.length === 0 && <Message variant='info'>No Reviews</Message>}

//             <ListGroup variant='flush'>
//               {product.reviews.map((review) => (
//                 <ListGroup.Item key={review._id}>
//                   <strong>{review.name}</strong>
//                   <Rating value={review.rating} color='#f8e825'/>

//                   <p>{review.createdAt.substring(0 , 10)}</p>
//                   <p>{review.comment}</p>

//                 </ListGroup.Item>
//               ) )}

//               <ListGroup.Item>
//               {/* -----------RATING FORM------------ */}
//               <h3> Write a review</h3>

//               {loadingProductReview && <Loader/>}
//               {successProductReview && <Message variant='green' >Review Submitted</Message>}
//               {errorProductReview && <Message variant='danger' >{errorProductReview}</Message>}

//               {userInfo ? (
//                 <Form onSubmit={submitHandler}>

//                   <Form.Group controlId='rating'>
//                     <Form.Label>Rating</Form.Label>
//                     <Form.Control
//                     as='select'
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}>
//                     <option value=''> Select... </option>
//                     <option value='1'> 1 - Poor </option>
//                     <option value='2'> 2 - Fair </option>
//                     <option value='3'> 3 - Good </option>
//                     <option value='4'> 4 - Very Good </option>
//                     <option value='5'> 5 - Excellent </option>
//                     </Form.Control>
//                   </Form.Group>

//                   <Form.Group controlId='comment'>
//                   <Form.Label>Review</Form.Label>
//                   <Form.Control
//                   as='textarea'
//                   row='3'
//                   value= {comment}
//                   onChange={(e) => setComment(e.target.value)}

//                   ></Form.Control>

//                   </Form.Group>
//                   <Button
//                     disabled={loadingProductReview}
//                     type='submit'
//                     variant='primary'
//                   >  Submit </Button>

//                 </Form>
//               ): (
//                 <Message variant='info'> <Link to='/login'>Please LOGIN to write a review</Link></Message>

//               )
//             }

//             <ListGroup.Item>

//             </ListGroup.Item>

//             </ListGroup.Item>
//             </ListGroup>

//           </Col>

//         </Row>
//     </Container>
//     <BottomBar/>
//     </div>
//   )
// }

// export default Information

import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-grid-system";
import { Image, ListGroup, Button, Card, Form } from "react-bootstrap";
import StarRating from "../components/StarRating";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";
// import axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Information() {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingProductReview,
    error: errorProductReview,
    success: successProductReview,
  } = productReviewCreate;

  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (successProductReview) {
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }

    dispatch(listProductDetails(id));
  }, [dispatch, id, successProductReview]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(id, {
        rating,
        comment,
      })
    );
  };

  return (
    <div
      className="fontt newtext"
      data-aos="fade-down"
      style={{ backgroundColor: "#f2ede1" }}
    >
      <Locatenav />
      <Container style={{ height: "100%", backgroundColor: "#f2ede1" }}>
        <Container fluid style={{ textAlign: "center", marginBottom: "60px" }}>
          <Row>
            <Col
              style={{
                fontSize: "50px",
                letterSpacing: ".15em",
              }}
              className="newheading"
            >
              PRODUCT INFORMATION
            </Col>
          </Row>
        </Container>
        <Container>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            //     <Row>
            //     <Col lg={4} sm={12} md={6}>
            //       <img src={product.image}
            //       style={{borderBlockColor : 'black',
            //     border: '5px solid',
            //     borderWidth : 'thin',
            //     padding : '5px',
            //     margin : '5px',
            //     height  : '90%',
            //     width : '90%'
            //     }}
            //       />
            //     <p>{product.rating} reviews</p>
            //     </Col>
            //     <Col lg={8} sm={12} md={6}>
            //        <p style={{textAlign : 'left', fontFamily : 'initial', fontSize : '30px', fontStyle : 'italic'}}>
            //         {product.name}
            //        </p>
            //        <hr style={{height:'3px',borderWidth: '0',color: 'black' , backgroundColor: 'black', width : '55px', marginRight : '700px'}}></hr>
            //        <p style={{fontFamily : 'sans-serif', fontSize : '20px'}}><b style={{textDecorationLine : 'line-through'}}>Rs. 3000 only</b> Rs. {product.price}</p>
            //        <p style={{fontFamily : 'monospace', fontSize : '18px'}}>{product.description}</p>
            //        <div style={{marginLeft : '7px', marginTop : '35px'}} class="btn-group mr-2" role="group" aria-label="Second group">
            //                 <button style={{ width : '50px', height : '35px', borderColor : 'black', borderRadius : '3px', background : '#33292A', color : 'white', fontFamily : 'cursive'}}
            //                 type="button" class="btn btn-secondary">-</button>
            //                 <button style={{ width : '50px', height : '35px', borderColor : 'black', borderRadius : '3px', background : '#33292A', color : 'white', fontFamily : 'cursive'}}
            //                 type="button" class="btn btn-secondary">1</button>
            //                <button style={{ marginRight : '15px' ,width : '50px', height : '35px', borderColor : 'black', borderRadius : '3px', background : '#33292A', color : 'white', fontFamily : 'cursive'}}
            //                 type="button" class="btn btn-secondary">+</button>
            //                    <button style={{ width : '150px', height : '35px', borderColor : 'black', borderRadius : '3px', background : '#33292A', color : 'white', fontFamily : 'cursive'}}
            //                 type="button" class="btn btn-secondary">add to cart</button>
            //         </div>

            //         <p style={{ marginTop : '20px',fontFamily : 'cursive', fontStyle : 'italic'}}>Add a review below, We appreciate your feedback</p>
            //         <StarRating/>
            //     </Col>
            // </Row>
            <div>
              <Row>
                <Col md={3}>
                  <Image
                    style={{
                      borderBlockColor: "black",
                      // border: '5px solid',
                      borderWidth: "thin",
                      height: "80%",
                      width: "90%",
                      display: "block",
                      margin: "auto",
                    }}
                    src={product.image}
                    alt={product.name}
                    fluid
                  />
                  {/* <div style={{ textAlign: "center" }}>
                    <StarRating />
                  </div> */}
                </Col>
                <Col md={6} className="mx-auto">
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      style={{
                        backgroundColor: "#F5EBE0",
                      }}
                    >
                      <h3
                        style={{
                          textAlign: "left",
                          marginTop: "20px",
                          fontWeight: "bold",
                          fontSize: "26px",
                        }}
                      >
                        {product.name}
                      </h3>
                    </ListGroup.Item>

                    <ListGroup.Item
                      style={{
                        backgroundColor: "#F5EBE0",
                        fontSize: "18px",
                      }}
                    >
                      <strong>Description:</strong> {product.description}
                    </ListGroup.Item>

                    {/* -------------------PRICE OF PRODUCT ???????? */}

                    <ListGroup.Item
                      style={{
                        backgroundColor: "#F5EBE0",
                        fontSize: "18px",
                      }}
                    >
                      <strong> Price: Rs. </strong>
                      {product.price}
                    </ListGroup.Item>

                    {/* ---------------------RATING---------------------- */}
                    <ListGroup.Item
                      style={{
                        backgroundColor: "#F5EBE0",
                        fontSize: "20px",
                      }}
                      className="my-3"
                    >
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                        color={"#f8e825"}
                      />
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={3} className="my-auto">
                  <Card>
                    <ListGroup variant="flush">
                      {/* <ListGroup.Item  style={{
                    backgroundColor : '#F5EBE0'
                }}>
                    <Row>
                      <Col>
                         Price:
                      </Col>
                      <Col>
                          <strong>
                            Rs. {product.price}
                          </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
   */}
                      <ListGroup.Item
                        style={{
                          backgroundColor: "#F5EBE0",
                        }}
                      >
                        <Row>
                          <Col>Status:</Col>
                          <Col>
                            <strong>
                              {product.countInStock > 0
                                ? "In Stock"
                                : "Out of Stock"}
                            </strong>
                          </Col>
                        </Row>
                      </ListGroup.Item>

                      {product.countInStock > 0 && (
                        <ListGroup.Item
                          style={{
                            backgroundColor: "#F5EBE0",
                          }}
                        >
                          <Row>
                            <Col>Qty</Col>
                            <Col xs="auto" className="my-1">
                              <Form.Control
                                as="select"
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                                style={{ backgroundColor: "#F5EBE0" }}
                              >
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </Form.Control>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      )}

                      <ListGroup.Item
                        style={{
                          backgroundColor: "#F5EBE0",
                        }}
                      >
                        <button
                          onClick={addToCartHandler}
                          style={{
                            width: "100%",
                            height: "50px",
                            // fontFamily: "times new roman",
                            // backgroundColor: "#2a7075",
                            // color: "white",
                            // // fontWeight:"bold",
                            // outline: "none",
                            // borderColor: "#2a7075",
                            marginBottom: "12px",
                          }}
                          // className="btn-block spe"
                          disabled={product.countInStock === 0}
                          type="button"
                        >
                          Add to Cart
                        </button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
              <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
              <Row>
                <Col md={6}>
                  <ListGroup variant="flush">
                    <ListGroup.Item style={{ backgroundColor: "#F5EBE0" }}>
                      {/* -----------RATING FORM------------ */}
                      <h4
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "23px",
                        }}
                      >
                        {" "}
                        Write a review
                      </h4>

                      {loadingProductReview && <Loader />}
                      {successProductReview && (
                        <Message variant="success">Review Submitted</Message>
                      )}
                      {errorProductReview && (
                        <Message variant="danger">{errorProductReview}</Message>
                      )}

                      {userInfo ? (
                        <Form onSubmit={submitHandler}>
                          <Form.Group controlId="rating">
                            <Form.Label style={{ fontWeight: "bold" }}>
                              Rating
                            </Form.Label>
                            <Form.Control
                              as="select"
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                            >
                              <option value=""> Select... </option>
                              <option value="1"> 1 - Poor </option>
                              <option value="2"> 2 - Fair </option>
                              <option value="3"> 3 - Good </option>
                              <option value="4"> 4 - Very Good </option>
                              <option value="5"> 5 - Excellent </option>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group controlId="comment">
                            <Form.Label
                              style={{ marginTop: "10px", fontWeight: "bold" }}
                            >
                              Review
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              row="3"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            ></Form.Control>
                          </Form.Group>
                          <button
                            disabled={loadingProductReview}
                            type="submit"
                            // variant="primary"
                            // className="spe "
                            style={{
                              // backgroundColor: "#2a7075",
                              // color: "white",
                              // borderRadius: "4px",
                              // fontWeight: "bold",
                              // fontStyle: "italic",
                              // borderColor: "#546d64",
                              marginTop: "20px",
                            }}
                          >
                            {" "}
                            Submit{" "}
                          </button>
                        </Form>
                      ) : (
                        <Message variant="info">
                          {" "}
                          <Link
                            to="/login"
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontSize: "20px",
                            }}
                          >
                            Please LOGIN to write a review
                          </Link>
                        </Message>
                      )}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <h4
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "23px",
                    }}
                  >
                    Reviews
                  </h4>
                  {product.reviews.length === 0 && (
                    <Message variant="info">
                      <p
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontSize: "20px",
                        }}
                      >
                        No Reviews
                      </p>
                    </Message>
                  )}

                  <ListGroup variant="flush">
                    {product.reviews.map((review) => (
                      <ListGroup.Item
                        key={review._id}
                        style={{ backgroundColor: "#F5EBE0" }}
                      >
                        <strong>{review.name}</strong>
                        <Rating value={review.rating} color="#f8e825" />

                        <p>{review.createdAt.substring(0, 10)}</p>
                        <p>{review.comment}</p>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </Row>
            </div>
          )}
        </Container>

        {/* ----------------------------------------- */}

        {/* <Container style={{marginTop : '40px'}}>
            <Row>
                <Col>
                 <div style={{
                    height : '200px',
                    padding : '5px',
                    width:"100%",
                    marginBottom:"10px"
                }} className='abcd'>
                    <h2 style={{marginLeft : '30px',
                                marginTop : '20px'}}>review</h2>
                    <p style={{marginLeft : '30px', fontSize : '15px'}}>No reviews in yet</p>
                    <input placeholder='Only logged in customers can add a review' style={{border : 'solid thin', width : '60%', marginBottom : '10px', marginLeft : '30px', height : '40px', backgroundColor : '#E4D5DB', borderColor  : 'black', borderRadius : '3px', padding : '15px',
                 fontSize : '15px',  }}>
                        
                    </input>
                    <Button className=' spe' style={{
                        marginBottom : '5px',
                        
                        marginLeft : '30px',
                        width : '150px',
                        backgroundColor: "#33292A",
                        color : 'white',
                        borderRadius : '3px',
                        borderColor : 'black',
                        // fontWeight : 'bold',
                        fontFamily:'krub'
                    }}

                     type='submit'>Submit</Button>
                </div>
                  
                </Col>
            </Row>
        </Container> */}

        {/* review container ending */}
      </Container>
      <BottomBar />
    </div>
  );
}

export default Information;
