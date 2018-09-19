import React from "react";
import axios from "axios";

export default class Quote extends React.Component {
  state = {
    Tkr: []
  };

  componentDidMount() {
    let sym = `goog,msft`;
    let types = `quote`;
    let range = `1m`;
    let last = `5`;
    axios
      .get(
        `https://api.iextrading.com/1.0/stock/market/batch?symbols=${sym}&types=${types}&range=${range}&last=${last}`
      )
      .then(res => {
        console.log(res.data.sym.quote);
        this.setState({ Tkr: res.data });
      });
  }

  render() {
    return (
      <div className="PageWrapper">
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

            {this.state.Tkr.map(Tkr => (
              <tr key={Tkr.quote.companyName}>
                <td>{Tkr.quote.companyName}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}
