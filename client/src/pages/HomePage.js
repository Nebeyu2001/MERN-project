import React from "react";

import { Row, Col } from "react-bootstrap";

import books from "../books";
import Book from "../components/Book";
const HomePage = () => {
  return (
    <>
      <h1>List of Books</h1>
      <Row>
        {books.map((book) => (
          <Col key={book.id} sm={12} md={6} lg={4}>
            {/* <h3>{book.title}</h3> */}
            <Book book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
