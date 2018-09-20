import React, { Component } from "react";
import axios from "axios";
/**
 *  This page returns an array of the info
 *  but I am not able to map them into a table
 *  like I was able to in /components/crypto
 */
export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  componentDidMount() {
    axios
      .get(`/stock/market/batch?`, {
        baseURL: `https://api.iextrading.com/1.0`,
        params: {
          symbols: `symbols=goog,aapl,msft`,
          types: `chart`,
          range: `1m`
        },
        transformResponse: [
          function(data) {
            return [data];
          }
        ]
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          props: [res.data]
        });
      });
  }

  render() {
    return (
      <div className="PageWrapper">
        <div className="Container">
          <table>
            <thead>
              <tr>
                <td> Props </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.props}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
