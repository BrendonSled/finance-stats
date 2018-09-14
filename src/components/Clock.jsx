import React from "react";

function tick() {
  const Clock = (
    <div>
      <p>It is {new Date().toLocaleTimeString()}</p>
    </div>
  );
  ReactDOM.render(Clock, document.getElementById("root"));
}
setInterval(tick, 1000);
