import React from "react";
import axios from "axios";

export default class httpTemplate extends React.Component {
  state = {
    symbol: []
  };

  componentDidMount() {
    let symbols = `{goog,msft,amzn}`;
    let types = `{quote,news,range}`;
    let range = `{1m}`;
    let last = `{5}`;
    axios
      .get(
        `https://api.iextrading.com/1.0/stock/market/batch
      ?symbols=${symbols}
      &types=${types}
      &range=${range}
      &last=${last}
      `
      )
      .then(res => {
        console.log(res);
        this.setState({ symbol: res.data });
      });
  }

  render() {
    return (
      <div>
        <table id="batchTable">
          <tr>
            <th> Symbol </th>
            <th> Price / USD </th>
            <th> Change % </th>
            <th> Open </th>
            <th> High </th>
            <th> Low </th>
            <th> Close </th>
          </tr>
          {this.state.symbol.map(symbol => (
            <tr key={symbol.companyName}>
              <td>{symbol.companyName}</td>
              <td>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(symbol.latestPrice)}
              </td>
              <td>
                {new Intl.NumberFormat("en-US", {
                  style: "percent",
                  minimumFractionDigits: 4,
                  maximumFractionDigits: 4
                }).format(symbol.changePercent)}
              </td>
              <td>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(symbol.open)}
              </td>
              <td>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(symbol.high)}
              </td>
              <td>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(symbol.low)}
              </td>
              <td>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(symbol.close)}
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

/*
import React from "react";
import axios from "axios";
import Timer from "./Timer";

export default class Quote extends React.Component {
  state = {
    symbol: []
  };

  componentDidMount() {
    axios
      .get(`https://api.iextrading.com/1.0/stock/market/quote`)
      .then(res => {
        console.log(res);
        this.setState({ symbol: res.data });
      });
  }

  render() {
    return (
      <div className="PageWrapper">
        <Timer />
        <div className="QuoteContainer">
          <table id="QuoteTable">
            <tr>
              <th> Symbol </th>
              <th> Price / USD </th>
              <th> Change % </th>
              <th> Open </th>
              <th> High </th>
              <th> Low </th>
              <th> Close </th>
            </tr>
            {this.state.symbol.map(symbol => (
              <tr key={symbol.companyName}>
                <td>{symbol.companyName}</td>
                <td>/** Latest Price *
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }).format(symbol.latestPrice)}
                </td>
                <td>{/** Change Percent *
                  {new Intl.NumberFormat("en-US", {
                    style: "percent",
                    minimumFractionDigits: 4,
                    maximumFractionDigits: 4
                  }).format(symbol.changePercent)}
                </td>
                <td>{/** Open *
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }).format(symbol.open)}
                </td>
                <td>{/** High *
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }).format(symbol.high)}
                </td>
                <td>{/** Low *
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }).format(symbol.low)}
                </td>
                <td>{/** Close *
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }).format(symbol.close)}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}
*/
