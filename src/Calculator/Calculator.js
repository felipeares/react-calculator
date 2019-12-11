import React, { Component } from "react";
import classes from "./Calculator.module.css";
import Display from "./Display/Display";

class Calculator extends Component {
  state = {
    displayValue: ""
  };

  render() {
    return (
      <div className={classes.Calculator}>
        <Display displayValue={this.state.displayValue} />
      </div>
    );
  }
}

export default Calculator;
