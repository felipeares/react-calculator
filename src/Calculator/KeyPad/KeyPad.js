import React from "react";
import styles from "./KeyPad.module.css";
import PropTypes from "prop-types";

const KeyPad = () => {
  return <div className={styles.KeyPad}></div>;
};

KeyPad.propTypes = {
  numberPressed: PropTypes.func.isRequired,
  dotPressed: PropTypes.func.isRequired,
  operatorPressed: PropTypes.func.isRequired,
  resetPressed: PropTypes.func.isRequired
};

export default KeyPad;
