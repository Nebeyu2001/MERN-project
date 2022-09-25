import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import axios from "axios";

import Book from "../components/Book";
const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await axios.get("/books");

      setBooks(data);
    };

    fetchBooks();
  }, []);

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
