import * as React from "react";
import { useState } from "react";
import { KeyboardEvent } from "react";
import { json } from "stream/consumers";
import Alltask from "./Alltask";
import "./Style.css";
export interface task {
  name: string;
  content: string;
  check: boolean;
  id: number;
}
interface props {
  alltask: task;
}
function Form() {
  const [userName, setName] = useState("");
  const [userContent, setContent] = useState("");
  const [userCheck, setCheck] = useState(false);
  const [allTask, setAllTasks] = useState([] as any);
  const checkFLag = () => {
    if (userCheck) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

  const taskInput = (e: any): void => {
    console.log(e.target.value);
    setContent(e.target.value);
  };

  const nameInput = (e: any): void => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const createTodo = () => {
    console.log(allTask.length);

    const myTask: task = {
      name: userName,
      content: userContent,
      check: userCheck,
      id: allTask.length,
    };
    //console.log(myTask);
    let temp: any[];
    // temp=[...allTask];
    let allData = localStorage.getItem("tasks");

    if (allData != null) {
      let alldataParse = JSON.parse(allData);
      temp = alldataParse;
    } else temp = [];

    //console.log(temp);
    temp.push(myTask);
    //console.log(temp);
    localStorage.setItem("tasks", JSON.stringify(temp));
    setAllTasks(temp);
  };
  console.log(allTask);

  return (
    <div>
      <div className="mainDiv">
        <input
          type="checkbox"
          className="check"
          onChange={() => {
            checkFLag();
          }}
        />
        <input
          className="name"
          placeholder="Enter your name"
          onKeyUp={nameInput}
        ></input>
        <input
          className="content"
          placeholder="what is your task ? "
          onKeyUp={taskInput}
        />
        <button className="addTask" onClick={createTodo}>
          Add task
        </button>
      </div>

      <Alltask allTask={allTask}></Alltask>
    </div>
  );
}
export default Form;
