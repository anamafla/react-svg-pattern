import React from "react";
import logo from "./logo.svg";
import "./App.css";

const HeroPattern = ({ pttrn, children }) => (
  <div className={pttrn}>{children}</div>
);

function App() {
  return (
    <div className="App">
      <HeroPattern pttrn={"tiny-checkers-pattern"}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </HeroPattern>
    </div>
  );
}

export default App;
