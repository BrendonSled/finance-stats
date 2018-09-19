import React from "react";
import axios from "axios";

export default class Crypto extends React.Component {
  state = {
    symbol: []
  };

  componentDidMount() {
    axios
      .get(`https://api.iextrading.com/1.0/stock/market/crypto`)
      .then(res => {
        console.log(res);
        this.setState({ symbol: res.data });
      });
  }

  render() {
    return (
      <div className="PageWrapper">
        <div className="CryptoContainer">
          <table id="CryptoTable">
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
      </div>
    );
  }
}
