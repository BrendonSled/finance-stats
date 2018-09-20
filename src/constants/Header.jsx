import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <header className="App-Header">
          <h1 className="App-title">Finance Stats</h1>
          <ul className="Header-Nav">
            <li>
              <a href="/" alt="">
                Home
              </a>
            </li>
            {/** 
              <li><a href="/" alt="">Home</a></li>
              <li><a href="/" alt="">Home</a></li>
              <li><a href="/" alt="">Home</a></li>
              <li><a href="/" alt="">Home</a></li>*/}
          </ul>
        </header>
      </div>
    );
  }
}
