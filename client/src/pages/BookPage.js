import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Rating from "../components/Rating";
import { listBookDetails } from "../actions/bookAction";

const BookPage = ({ history, match }) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  const bookDetails = useSelector((state) => state.bookDetails);
  const { loading, error, book } = bookDetails;

  useEffect(() => {
    dispatch(listBookDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <h2>loading</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={book.image} alt={book.title} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2> {book.title} </h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={book.rating}
                  text={`${book.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item> Author : {book.author}</ListGroup.Item>
              <ListGroup.Item>price: ${book.price}</ListGroup.Item>
              <ListGroup.Item>about: {book.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={2}>
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
                {book.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(book.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
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
      )}
    </>
  );
};

export default BookPage;
