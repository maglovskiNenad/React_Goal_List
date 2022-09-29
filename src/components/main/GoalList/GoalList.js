import React from "react";
import GoalItem from "./GoalItem";

import "./GoalList.css";

const GoalList = (props) => {
  return (
    <ul className="goals">
      {props.goals.map((el) => (
        <GoalItem
          text={el.text}
          key={el.id}
          id={el.id}
          onDelete={props.onDeleteOneGoal}
        />
      ))}
    </ul>
  );
};

export default GoalList;
