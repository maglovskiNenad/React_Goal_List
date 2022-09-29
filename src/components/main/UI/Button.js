import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button className="btn-form" type={props.type} onClick={props.onClick}>
      Add Goal
    </button>
  );
};

export default Button;
