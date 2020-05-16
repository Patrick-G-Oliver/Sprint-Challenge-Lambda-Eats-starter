import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home.js";
import OrderForm from "./Components/OrderForm.js";

const App = () => {
  return (
    <div>
      <nav>
        <h1>It's Practically Pizza!</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/OrderForm">Place your order</Link>
        </div>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/OrderForm" component={OrderForm} />
    </div>
  );
};
export default App;
