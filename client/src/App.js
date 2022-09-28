import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/login" component={LoginPage} />

            <Route path="/register" component={RegisterPage} />

            <Route path="/book/:id" component={BookPage} exact />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/" component={HomePage} exact />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
