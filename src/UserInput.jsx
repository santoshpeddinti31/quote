import React, { Fragment, useState } from "react";
import classes from "./userinput.module.css";
import { AiOutlineDelete, AiOutlineClear } from "react-icons/ai";
const UserInput = () => {
  //states
  const [user, setUser] = useState([]); //for store the values
  const [todo, setTodo] = useState(""); //for input values

  //input values given from the todo app

  const inputGivenHandler = (event) => {
    setTodo(event.target.value);
  };

  //store the values from previous state to present state

  const givenVlaues = (task) => {
    setUser((prev) => {
      const data = {
        text: task,
        id: Math.random().toString(),
        date: new Date().toLocaleString(),
      };
      return [...prev, data];
    });
  };

  // form submit the data values
  const sumitHandler = (event) => {
    event.preventDefault();

    //if the input value is not given isn't submitted the below condition
    if (todo.trim().length > 0) {
      givenVlaues(todo);
    }
    setTodo("");
  };

  //delete the todo tasks
  const deleteHandler = (msg) => {
    setUser((list) => list.filter((item) => item !== msg));
  };

  //clear the all todo tasks from the list

  const clearHandler = () => {
    setUser([]);
  };

  return (
    <Fragment>
      {/* ______________________for add the input todo tasks */}

      <div className={classes.cont}>
        <form onSubmit={sumitHandler}>
          <input
            type="text"
            autoFocus
            placeholder="add here...."
            value={todo}
            onChange={inputGivenHandler}
          />
          <button type="submit">Add</button>
        </form>
      </div>

      {/*  ______________________for display the tasks in the list */}

      <div className={classes.list}>
        <ul>
          {user.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <span>{todo.date}</span>
              <AiOutlineDelete
                className={classes.del}
                onClick={() => deleteHandler(todo)}
              />
              {/* <button onClick={() => deleteHandler(todo)}> */}
              {/* </button> */}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.btn}>
        <button onClick={clearHandler}>
          clear
          <AiOutlineClear className={classes.clean} />
        </button>
      </div>
    </Fragment>
  );
};
export default UserInput;
