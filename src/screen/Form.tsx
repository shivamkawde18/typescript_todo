import * as React from "react";
import { useState, useEffect } from "react";
import { KeyboardEvent } from "react";
import { json } from "stream/consumers";
import Alltask from "../component/Alltask";
import Completetask from "../component/Completetask";
import "../Style.css";
import Uncomplete from "../component/Uncomplete";
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
  const [allTaskFlag, setAllTaskFlag] = useState(false);
  const [completeTask, setCompleteTask] = useState(false);
  const [uncompleteFlag, setUncompleteFlag] = useState(false);
  useEffect(() => {
    let temp: any[];
    let allData = localStorage.getItem("tasks");
    if (allData != null) {
      let alldataParse = JSON.parse(allData);
      temp = alldataParse;
    } else temp = [];
    localStorage.setItem("tasks", JSON.stringify(temp));
    setAllTasks(temp);
  }, []);
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
    let temp: any[];
    // temp=[...allTask];
    let allData = localStorage.getItem("tasks");
    if (allData != null) {
      let alldataParse = JSON.parse(allData);
      temp = alldataParse;
    } else temp = [];
    const myTask: task = {
      name: userName,
      content: userContent,
      check: userCheck,
      id: temp.length,
    };
    //console.log(temp);
    temp.push(myTask);
    //console.log(temp);
    localStorage.setItem("tasks", JSON.stringify(temp));
    setAllTasks(temp);
  };
  console.log(allTask);
  return (
    <div>
      <h3
        onClick={() => {
          setCompleteTask(false);
          setUncompleteFlag(false);
          setAllTaskFlag(false);
        }}
      >
        TODO
      </h3>
      <div className="completeDiv">
        <b
          className="cTask"
          onClick={() => {
            setCompleteTask(true);
            setUncompleteFlag(false);
            setAllTaskFlag(false);
          }}
        >
          Completed Task
        </b>
        <b
          className="aTask"
          onClick={() => {
            setAllTaskFlag(true);
            setUncompleteFlag(false);
            setCompleteTask(false);
          }}
        >
          {" "}
          All Task
        </b>
        <b
          className="uTask"
          onClick={() => {
            setUncompleteFlag(true);
            setCompleteTask(false);
            setAllTaskFlag(false);
          }}
        >
          Uncompleted Task
        </b>
      </div>
      {completeTask ? (
        <Completetask
          allTask={allTask}
          setAllTasks={setAllTasks}
        ></Completetask>
      ) : uncompleteFlag ? (
        <Uncomplete allTask={allTask} setAllTasks={setAllTasks}></Uncomplete>
      ) : allTaskFlag ? (
        <Alltask allTask={allTask} setAllTasks={setAllTasks}></Alltask>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
export default Form;
