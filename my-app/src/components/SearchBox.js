import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { HistoryRouterProps } from "react-router-dom";
import { Location } from "react-router-dom";

function SearchBox() {
  const location = useLocation();

  const [keyword, setKeyword] = useState("");

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/shop/?keyword=${keyword}&page=1`);
    } else {
      navigate(location.pathname);
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
        style={{ marginRight: "15px", height: "42px" , borderRadius:'0px' , }}
      ></Form.Control>
      <button
        // onClick={console.log("pteess")}
        type="submit"
        // variant='outline-success'
        className="p-2 "
        // style={{
        //   borderColor: "#2a7075",
        //   fontFamily: "Montserrat",
        //   backgroundColor: "#2a7075",
        //   borderRadius: 0,
        // }}
      >
        SEARCH
      </button>
    </Form>
  );
}

export default SearchBox;
