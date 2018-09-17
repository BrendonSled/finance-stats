import React, { Component } from "react";
import "./App.css";
import CryptoList from "./components/CryptoList";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CryptoList />
        <Footer />
      </div>
    );
  }
}

export default App;
