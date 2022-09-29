import React from "react";

import "./GoalItem.css";

const GoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li className="goal" onClick={deleteHandler}>
      {props.text}
    </li>
  );
};

export default GoalItem;
