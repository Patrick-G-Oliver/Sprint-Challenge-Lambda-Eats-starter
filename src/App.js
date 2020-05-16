import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Home from "./Components/Home.js";
import OrderForm from "./Components/OrderForm.js";

const StyledContatinerDiv = styled.div`
  text-align: center;
`;

const RedH1 = styled.h1`
  color: firebrick;
  font-size: 2rem;
`;

const SpacedLinkDivs = styled.div`
  display: inline-block;
  padding: 0 20px;
`;

const App = () => {
  return (
    <StyledContatinerDiv>
      <nav>
        <RedH1>It's Practically Pizza!</RedH1>
          <SpacedLinkDivs>
            <Link to="/">Home</Link>
          </SpacedLinkDivs>
          <SpacedLinkDivs>
            <Link to="/OrderForm">Place your order</Link>
          </SpacedLinkDivs>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/OrderForm" component={OrderForm} />
    </StyledContatinerDiv>
  );
};
export default App;
