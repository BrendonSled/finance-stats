import React, { Component } from "react";
import "./App.css";
import Header from "./constants/Header";
import Timer from "./constants/Timer";
import Footer from "./constants/Footer";
import Crypto from "./components/Crypto";
// import Quote from "./components/Quote";
// import Base from "./components/Base";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Timer />
        <Crypto />
        {/* <Base /> */}
        {/* <Quote /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
