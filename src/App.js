import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      symbol: "",
      companyName: "",
      primaryExchange: "",
      sector: "",
      calculationPrice: "",
      open: "",
      openTime: "",
      close: "",
      closeTime: "",
      high: "",
      low: "",
      latestPrice: "",
      latestSource: "",
      latestTime: "",
      latestUpdate: "",
      latestVolume: "",
      iexRealtimePrice: "",
      iexRealtimeSize: "",
      iexLastUpdated: "",
      delayedPrice: "",
      delayedPriceTime: "",
      extendedPrice: "",
      extendedChange: "",
      extendedChangePercent: "",
      extendedPriceTime: "",
      previousClose: "",
      change: "",
      changePercent: "",
      iexMarketPercent: "",
      iexVolume: "",
      avgTotalVolume: "",
      iexBidPrice: "",
      iexBidSize: "",
      iexAskPrice: "",
      iexAskSize: "",
      marketCap: "",
      peRatio: "",
      week52High: "",
      week52Low: "",
      ytdChange: ""
    }; // `this` gets binded to the button being clicked

    this.handleClick = this.handleClick.bind(this);
  }
  /** This tells axios what url to `GET` then sets the state
   *  to be the response that it receives for the username object
   */
  handleClick() {
    let symbol = "aapl";
    axios
      .get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
      .then(response =>
        this.setState({
          symbol: response.data.symbol,
          companyName: response.data.companyName,
          primaryExchange: response.data.primaryExchange,
          sector: response.data.sector,
          calculationPrice: response.data.calculationPrice,
          open: response.data.open,
          openTime: response.data.openTime,
          close: response.data.close,
          closeTime: response.data.closeTime,
          high: response.data.high,
          low: response.data.low,
          latestPrice: response.data.latestPrice,
          latestSource: response.data.latestSource,
          latestTime: response.data.latestTime,
          latestUpdate: response.data.latestUpdate,
          latestVolume: response.data.latestVolume,
          iexRealtimePrice: response.data.iexRealtimePrice,
          iexRealtimeSize: response.data.iexRealtimeSize,
          iexLastUpdated: response.data.iexLastUpdated,
          delayedPrice: response.data.delayedPrice,
          delayedPriceTime: response.data.delayedPriceTime,
          extendedPrice: response.data.extendedPrice,
          extendedChange: response.data.extendedChange,
          extendedChangePercent: response.data.extendedChangePercent,
          extendedPriceTime: response.data.extendedPriceTime,
          previousClose: response.data.previousClose,
          change: response.data.change,
          changePercent: response.data.changePercent,
          iexMarketPercent: response.data.iexMarketPercent,
          iexVolume: response.data.iexVolume,
          avgTotalVolume: response.data.avgTotalVolume,
          iexBidPrice: response.data.iexBidPrice,
          iexBidSize: response.data.iexBidSize,
          iexAskPrice: response.data.iexAskPrice,
          iexAskSize: response.data.iexAskSize,
          marketCap: response.data.marketCap,
          peRatio: response.data.peRatio,
          week52High: response.data.week52High,
          week52Low: response.data.week52Low,
          ytdChange: response.data.ytdChange
        })
      );
  }

  render() {
    return (
      <div className="button__container">
        <button className="button" onClick={this.handleClick}>
          Click Me!
        </button>

        <div className="ResponseContainer">
          <p>Symbol: {this.state.symbol}</p>
          <p>Company Name: {this.state.companyName}</p>
          <p>Primary Exchange: {this.state.primaryExchange}</p>
          <p>Sector: {this.state.sector}</p>
          <p>Open: {this.state.open}</p>
          <p>High: {this.state.high}</p>
          <p>Low: {this.state.low}</p>
          <p>Close: {this.state.close}</p>
        </div>
      </div>
    );
  }
}

export default App;
/**
 * render(){
 * return(
 * <div>
 * <div>Items:</div>
 * { this.state.items.map(item=> { return <div>{http://item.name}</div>}) }
 * </div>
 * );
 * }}
 * */
