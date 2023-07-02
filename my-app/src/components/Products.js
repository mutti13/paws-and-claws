import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "../buttoncss.css";

// import { Card } from 'react-bootstrap'
// import { useParams } from 'react-router-dom'
// function Products({product}) {
//     // const {id} = useParams()
//   return (
//     <Card className="my-3 p-3 rounded">
//       <a href={`/products/${product._id}`}>
//         <Card.Img src={product.image} />
//       </a>
//       <Card.Body>
//         <a href={`/products/${product._id}`}>
//           <Card.Title as='div'>
//             <strong>
//                 {product.name}
//             </strong>
//           </Card.Title>
//         </a>
//         <Card.Text as='div'>
//             <div className='my-3'>
//                 {product.rating}
//             </div>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Rating from "./Rating";
function Products({ item }) {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  // const {id} = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(item._id));
  }, [dispatch, item._id]);
  const addToCartHandler = () => {
    navigate(`/cart/${item._id}?qty=${qty}`);
  };
  return (
    //    <Container fluid>
    //     <a href={`/products/${product._id}`} style={{ textDecoration: "none" }}>
    //       <Card style={{ width: "5 rem"}}>
    //         <Card.Img variant="top" src={product.image} />
    //         <Card.Body>
    //           <Card.Title>{product.name}</Card.Title>
    //           <Card.Text>{product.rating}</Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </a>
    // </Container>
    <Card className="my-4 p-3 newtext cards">
      {/* style={{border:"1px solid white", borderRadius:"5px", backgroundColor:'white' , width:"30%",height:"45%"}} */}

      <Link to={`/product/${item._id}`}>
        <Card.Img src={item.image} />
      </Link>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title as="div">
          <p style={{ fontWeight: "bold" }}>{item.name.substring(0, 13)}</p>
        </Card.Title>
        <Card.Text as="div" style={{ color: "red", fontWeight: "bold" }}>
          {" "}
          Rs. {item.price}
        </Card.Text>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={item.rating}
              text={`${item.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>
        <br></br>

        {/* <Button
          onClick={addToCartHandler}
          className="spe"
          style={{
            marginTop: 8,
            height: 29,
            textAlign: "center",
            borderRadius: 0,
            backgroundColor:"#2a7075",
            borderColor: "#2a7075",
            marginTop: 0,
          }}
        >
          <h6
            className="my-auto newtext"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: 0,
              height: "100%",
            }}
          >
            Add to cart
          </h6>
        </Button> */}
        <button onClick={addToCartHandler} style={{ margin: "auto" }}>
          {" "}
          ADD TO CART
        </button>
      </Card.Body>
    </Card>
  );
}

export default Products;
