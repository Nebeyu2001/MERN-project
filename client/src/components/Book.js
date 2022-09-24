import React from "react";

// import { Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Book = ({ book }) => {
  return (
    <Card className="my-3 p-3">
      <a href={`/book/${book.id}`}>
        <Card.Img src={book.imageLink} variant="top" />
      </a>
      <Card.Body>
        <a href={`/book/${book.id}`}>
          <Card.Title as="div">
            <strong>{book.title}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <Rating
            value={book.rating}
            text={` from ${book.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${book.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

export default Book;
