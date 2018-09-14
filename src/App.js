import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      companyName: "",
      symbol: "",
      latestPrice: ""
    };
    // `this` gets binded to the button being clicked
    this.handleClick = this.handleClick.bind(this);
  }
  /** This tells axios what url to `GET` then sets the state
   *  to be the response that it receives for the username object
   */
  handleClick() {
    axios
      .get("https://api.iextrading.com/1.0/stock/msft/quote")
      .then(response =>
        this.setState({
          companyName: response.data.companyName,
          symbol: response.data.symbol,
          latestPrice: response.data.latestPrice
        })
      );
  }

  render() {
    return (
      <div className="button__container">
        <button className="button" onClick={this.handleClick}>
          Click Me!
        </button>
        <div className="returnContainer">
          <p className="companyName">{this.state.companyName}</p>
          <p className="stockSymbol">{this.state.symbol}</p>
          <p className="latestPrice">{this.state.latestPrice}</p>
        </div>
      </div>
    );
  }
}

export default App;
