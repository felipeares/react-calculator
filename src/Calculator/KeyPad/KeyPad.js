import React from "react";
import styles from "./KeyPad.module.css";
import PropTypes from "prop-types";
import Key from "../Key/Key";

const KeyPad = props => {
  const numberKeys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "0",
    "CE"
  ].map(number => {
    if (number === "CE")
      return <Key key={number} value={number} clicked={props.resetPressed} />;
    return <Key key={number} value={number} clicked={props.numberPressed} />;
  });

  const operatorKeys = ["+", "-", "*", "/"].map(operator => (
    <Key key={operator} value={operator} clicked={props.operatorPressed} />
  ));

  return (
    <div className={styles.KeyPad}>
      <div className="NumbersContainer">{numberKeys}</div>
      <div className="OperatorsContainer">{operatorKeys}</div>
    </div>
  );
};

KeyPad.propTypes = {
  numberPressed: PropTypes.func.isRequired,
  dotPressed: PropTypes.func.isRequired,
  operatorPressed: PropTypes.func.isRequired,
  resetPressed: PropTypes.func.isRequired
};

export default KeyPad;
