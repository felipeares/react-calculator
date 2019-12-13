import React, { Component } from "react";
import classes from "./Calculator.module.css";
import Display from "./Display/Display";
import KeyPad from "./KeyPad/KeyPad";

class Calculator extends Component {
  state = {
    displayValue: "",
    firstNumber: "",
    firstOperator: "",
    secondNumber: ""
  };

  /* action handlers */
  numberPressedHandler = numberPressed => {
    // check which number to change
    // case no first operator
    if (this.state.firstOperator === "") {
      // change fist number
      const newFirstNumber = this.state.firstNumber + numberPressed.toString();
      this.setState({
        displayValue: newFirstNumber,
        firstNumber: newFirstNumber
      });
    }

    // case with first operaor
    else {
      // change second number
      const newSecondNumber =
        this.state.secondNumber + numberPressed.toString();
      this.setState({
        displayValue: newSecondNumber,
        secondNumber: newSecondNumber
      });
    }
  };

  operatorPressedHandler = operatorPressed => {
    // check state of calculator
    // case if no first number set yet. then do nothing
    if (this.state.firstNumber === "") return;

    // case if no second number set
    if (this.state.secondNumber === "") {
      // update de inner operator (first operator)
      this.setState({
        firstOperator: operatorPressed
      });
    }

    // case second number set, then it is time to update all
    if (this.state.secondNumber !== "") {
      // get the numbers parsed
      const firstNumberFloat = parseFloat(this.state.firstNumber);
      const secondNumberFloat = parseFloat(this.state.secondNumber);

      // build a mapped function
      const firstOperatorFunction = (a, b, operator) => {
        switch (operator) {
          case "+":
            return a + b;
          case "-":
            return a - b;
          case "*":
            return a * b;
          case "/":
            return a / b;
          case "=":
            return b;
          default:
            return b;
        }
      };

      // calculate new numbers and operators
      const newFirstNumber = firstOperatorFunction(
        firstNumberFloat,
        secondNumberFloat,
        this.state.firstOperator
      ).toString();

      const newFirstOperator = operatorPressed;
      const newSecondNumber = "";

      // set
      this.setState({
        displayValue: newFirstNumber,
        firstNumber: newFirstNumber,
        firstOperator: newFirstOperator,
        secondNumber: newSecondNumber
      });
    }
  };

  resetPressedHandler = () => {
    // back to initial state
    this.setState({
      displayValue: "",
      firstNumber: "",
      firstOperator: "",
      secondNumber: ""
    });
  };

  render() {
    return (
      <div className={classes.Calculator}>
        <Display displayValue={this.state.displayValue} />
        <KeyPad
          numberPressed={this.numberPressedHandler}
          operatorPressed={this.operatorPressedHandler}
          resetPressed={this.resetPressedHandler}
        />
      </div>
    );
  }
}

export default Calculator;
