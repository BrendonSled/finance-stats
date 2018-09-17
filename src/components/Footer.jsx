import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <footer className="App-Footer">
          <ul className="Footer-nav">
            <li>
              <a href="/" alt="">
                Some Link
              </a>
            </li>
            <li>
              <a href="/home/" alt="">
                Another Link
              </a>
            </li>
            <li>
              <a href="/about/" alt="">
                This is Garbage
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
