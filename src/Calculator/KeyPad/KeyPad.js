import React from "react";
import styles from "./KeyPad.module.css";
import PropTypes from "prop-types";

const KeyPad = () => {
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
  ].map(number => <p key={number}>{number}</p>);
  const operatorKeys = ["+", "-", "*", "/"].map(operator => (
    <p key={operator}>{operator}</p>
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
