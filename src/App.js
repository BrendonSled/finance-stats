import React, { Component } from "react";
import "./App.css";
import CryptoList from "./components/CryptoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React & Axios</h1>
        </header>
        <CryptoList />
        <footer className="App-Footer">
          <ul className="Footer-nav">
            <li>
              <a href="/" alt="some-link">
                Some Link
              </a>
            </li>
            <li>
              <a href="/home/" alt="another-link">
                Another Link
              </a>
            </li>
            <li>
              <a href="/about/" alt="this-is-some-garbage">
                This is Garbage
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
