import React from "react";
import classes from "./Key.module.css";
import PropTypes from "prop-types";

const Key = props => <button className={classes.Key}>b</button>;

Key.propTypes = {
  value: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired
};

export default Key;
