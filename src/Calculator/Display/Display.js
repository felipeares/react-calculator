import React from "react";
import styles from "./Display.module.css";
import PropTypes from "prop-types";

const Display = props => (
  <div className={styles.Display}>{props.displayValue}</div>
);

Display.propTypes = { displayValue: PropTypes.string.isRequired };

export default Display;
