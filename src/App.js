import "./App.css";

import React, { useState } from "react";
import ToDoForm from "./components/main/Form/ToDoForm";
import GoalList from "./components/main/GoalList/GoalList";
import Footer from "./components/footer/Footer";

function App() {
  const [goal, setGoal] = useState([
    {
      id: "t1",
      text: "Stay focused!",
    },
    {
      id: "t2",
      text: "You will win!",
    },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setGoal((enteredGoals) => {
      const updatedList = [...enteredGoals];
      updatedList.unshift({
        id: Math.floor(Math.random() * 100).toString(),
        text: newGoal,
      });
      return updatedList;
    });
  };

  const removeOneGoalHendler = (goalId) => {
    setGoal((enteredGoal) => {
      let updatedGoalsList = enteredGoal.filter((el) => el.id !== goalId);
      return updatedGoalsList;
    });
  };

  return (
    <div className="App">
      <ToDoForm onAddNewGoalHandler={addNewGoalHandler} />
      <GoalList goals={goal} onDeleteOneGoal={removeOneGoalHendler} />
      <Footer />
    </div>
  );
}

export default App;
