import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import "../assets/css/Product.css";

const Product = ({ product }) => {
  console.log(product)
  return (
    <Card className="img_card my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" className="img" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name.slice(0,18)}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">{product.price}tk</Card.Text>
        

        <div className="offer">
          <span class="">10% off</span>
      
        {/* <div className="offer">
          <span class="">${product.discoutPrice}</span>
        </div> */}
        </div>

      </Card.Body>
    </Card>
  )
};

export default Product;
