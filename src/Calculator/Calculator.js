import React, { Component } from "react";
import classes from "./Calculator.module.css";
import Display from "./Display/Display";

class Calculator extends Component {
  render() {
    return (
      <div className={classes.Calculator}>
        <Display />
      </div>
    );
  }
}

export default Calculator;
