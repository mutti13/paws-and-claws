import React from "react";
// import {Card} from "react-bootstrap"
function Reviews({ review }) {
  return (
    <div className="newtext">
      {/* <Card className="my-3 mx-3">
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title as="div">
            <p style={{ fontWeight: "bold" }}>{review.description}</p>
          </Card.Title>
          <Card.Text as="div" style={{ color: "red", fontWeight: "bold" }}>
            {review.name}
          </Card.Text>
        </Card.Body>
      </Card> */}
      <div
        style={{
          backgroundColor: "white",
          width: "250px",
          height: "200px",
          margin: "auto",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <p className="py-4 px-4"> {review.description}</p>

        <br />
        <p style={{ fontWeight: "bold" }}>{review.name}</p>
      </div>
    </div>
  );
}

export default Reviews;
