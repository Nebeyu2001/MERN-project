import React, { useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Book from "../components/Book";
import { listBooks } from "../actions/bookAction";
const HomePage = ({}) => {
  const dispatch = useDispatch();

  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;

  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  return (
    <>
      <h1>List of Books</h1>
      {loading ? (
        <h2>Loading ....</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {books.map((book) => (
            <Col key={book._id} sm={12} md={6} lg={4}>
              {/* <h3>{book.title}</h3> */}
              <Book book={book} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomePage;
