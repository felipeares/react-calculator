import React from "react";
import classes from "./Key.module.css";
import PropTypes from "prop-types";

const Key = props => (
  <div
    onClick={() => props.clicked(props.value)}
    className={[classes.Key, classes[props.keyType]].join(" ")}
  >
    <p className={classes.KeyValue}>{props.value}</p>
  </div>
);

Key.propTypes = {
  value: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired
};

export default Key;
