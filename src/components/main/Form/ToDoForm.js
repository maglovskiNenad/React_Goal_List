import React, { useState } from "react";
import Button from "../UI/Button";

import "./ToDoForm.css";

const ToDoForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onAddGoal = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    } else {
      props.onAddNewGoalHandler(enteredValue);
    }
  };

  const onGoalValue = (event) => {
    setEnteredValue(event.target.value);

    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  return (
    <div className="todo-from">
      <div className="todos">
        <form onSubmit={onAddGoal}>
          <input
            type="text"
            className={`input-todo ${!isValid ? "invalid" : ""}`}
            placeholder="Enter your next goal..."
            onChange={onGoalValue}
          />
          <Button type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ToDoForm;
