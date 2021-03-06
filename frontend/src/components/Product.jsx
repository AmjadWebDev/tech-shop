import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ name, image, _id, rating, numReviews, price }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as="div">
            <strong>{name} </strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={rating} text={`${numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">&euro;{price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
