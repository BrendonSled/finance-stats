import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Timer from "./components/Timer";
// import Quote from "./components/Quote";
import Crypto from "./components/Crypto";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Timer />
        {/* <Quote /> */}
        <Crypto />
        <Footer />
      </div>
    );
  }
}

export default App;
