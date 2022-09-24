import React from "react";

import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import books from "../books";
import Rating from "../components/Rating";

const BookPage = ({ match }) => {
  const book = books.find((b) => b.id === match.params.id);

  return (
    <>
      <Link className="btm btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={book.imageLink} alt={book.title} />
        </Col>
      </Row>
    </>
  );
};

export default BookPage;
