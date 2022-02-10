import React from "react";
import ReactDOM from "react-dom";
import Cars from "./cars";

const githubRepo = "https://github.com/main0Server/destructuring-assignment-es6";

const [ honda, tesla ] = Cars;

const {
  dimensions: [hondaLength, hondaWidth, hondaHeight],
  speedStats: {topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty}
} = honda;

const {
  dimensions: [teslaLength, teslaWidth, teslaHeight],
  speedStats: {topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty}
} = tesla;

ReactDOM.render(
  <div>
    <div className="container">
      <h2>ES6 Destructuring Assignment</h2>
      <table>
        <tbody>
          <tr>
            <th>Brand</th>
            <th>Speed</th>
            <th>Zero to Sixty</th>
            <th>Dimensions</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaZeroToSixty}</td>
            <td>{teslaLength + teslaWidth + teslaHeight}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaZeroToSixty}</td>
            <td>{hondaLength + hondaWidth + hondaHeight}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <a href={githubRepo} rel="noreferrer" target="_blank">GitHub Repository</a>
  </div>,
  document.getElementById("root")
);
