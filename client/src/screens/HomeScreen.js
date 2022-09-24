import React from "react";

import { Row, Col } from "react-bootstrap";

import books from "../books";
import Book from "../components/Book";
const HomeScreen = () => {
  return (
    <>
      <h1>List of Books</h1>
      <Row>
        {books.map((book) => (
          <Col sm={12} md={6} lg={4}>
            {/* <h3>{book.title}</h3> */}
            <Book book={book} key={book.id} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
