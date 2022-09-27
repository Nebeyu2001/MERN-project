import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomePage} exact />
            <Route path="/book/:id" component={BookPage} exact />
            <Route path="/cart/:id?" component={CartPage} />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
