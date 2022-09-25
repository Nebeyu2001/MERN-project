import React from "react";

import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import books from "../books";
import Rating from "../components/Rating";

const BookPage = ({ match }) => {
  const book = books.find((b) => b.id === match.params.id);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={book.imageLink} alt={book.title} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2> {book.title} </h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={book.rating} text={`${book.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item> Author : {book.author}</ListGroup.Item>
            <ListGroup.Item>price: ${book.price}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${book.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {book.countInStock > 0 ? "In Stock " : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={book.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BookPage;
