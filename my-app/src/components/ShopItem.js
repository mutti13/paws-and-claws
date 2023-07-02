import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import cards from "../cards.css";
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function ShopItem({ item }) {
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
    <Card className="my-3 p-3 fontt cards">
      {/* style={{border:"1px solid white", borderRadius:"5px", backgroundColor:'white' , width:"30%",height:"45%"}} */}

      <Link to={`/product/${item._id}`}>
        <Card.Img src={item.image} />
      </Link>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title as="div">
          <p style={{ fontWeight: "bold" }}>{item.name}</p>
        </Card.Title>
        <Card.Text as="div" style={{ color: "red", fontWeight: "bold" }}>
          {" "}
          <strong> Rs. {item.price} </strong>
        </Card.Text>
        <br></br>

        {/* <Button
          onClick={addToCartHandler}
          className="spe"
          style={{
            marginTop: 8,
            backgroundColor: "#546d64",
            height: 29,
            textAlign: "center",
            borderRadius: 0,
            borderColor: "#546d64",
            marginTop: 0,
          }}
        >
          <h6
            className="my-auto"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: 0,
              height: "100%",
            }}
          >
            Add to Cart
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

export default ShopItem;
