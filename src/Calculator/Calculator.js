import React, { Component } from "react";
import classes from "./Calculator.module.css";
import Display from "./Display/Display";
import KeyPad from "./KeyPad/KeyPad";

class Calculator extends Component {
  state = {
    displayValue: "",
    lastKeyTypePressed: "CE",
    currentOperator: ""
  };

  /* action handlers */
  numberPressedHandler = numberPressed => {
    console.log(numberPressed);
  };

  dotPressedHandler = () => {
    console.log("dot pressed");
  };

  operatorPressedHandler = operatorPressed => {
    console.log(operatorPressed);
  };

  resetPressedHandler = () => {
    console.log("reset pressed");
  };

  render() {
    return (
      <div className={classes.Calculator}>
        <Display displayValue={this.state.displayValue} />
        <KeyPad
          numberPressed={this.numberPressedHandler}
          dotPressed={this.dotPressedHandler}
          operatorPressed={this.operatorPressedHandler}
          resetPressed={this.resetPressedHandler}
        />
      </div>
    );
  }
}

export default Calculator;
