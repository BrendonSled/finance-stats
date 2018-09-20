import React, { Component } from "react";
import axios from "axios";

/**
 *  This page also fills the table with an array
 *  but I am not able to map it to the table or
 *  shape it in anyway. This version does not
 *  attempt to use props at all
 */

export default class Base extends Component {
  constructor() {
    super();
    this.state = {
      symbol: []
    };
  }

  componentDidMount() {
    axios
      .get(`/stock/market/batch?`, {
        params: {
          symbols: `dis,msft,goog`,
          types: `quote`
        },
        baseURL: `https://api.iextrading.com/1.0`
        /**
         *  I think this is where things are
         *  going wrong. I want to return the
         *  data as a string instead of an array
         */
      })
      .then(res => {
        this.setState({ symbol: res });
        console.log(res.data);
        console.group([res.data], { label: "quote" });
      });
  }

  render() {
    return (
      <div className="PageWrapper">
        <div className="Container">
          <table id="Table">
            <thead>
              <tr>
                <td> Symbol </td>
                <td> Price / USD </td>
                <td> Change % </td>
                <td> Open </td>
                <td> High </td>
                <td> Low </td>
                <td> Close </td>
              </tr>
            </thead>
            <tbody>
              <tr key={this.state.symbol.data}>
                <td>{this.state.symbol.data}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
