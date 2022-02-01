import * as React from "react";
import { useState, useEffect } from "react";
import { KeyboardEvent } from "react";
import { json } from "stream/consumers";
import Alltask from "../Alltask/Alltask";
import Completetask from "../../component/CompleteTask/Completetask";
import "/Users/shivamkawde/rectjs/todotype/src/Style.css";
import Uncomplete from "../../component/CompleteTask/Uncomplete";
//import Addbtn from "../../component/Addbtn";
import Button from "../../component/Button/Button";
import Checkbox from "../../component/task/Checkbox";
import Name from "../../component/task/Name";
import Content from "../../component/task/Content";
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
            <Checkbox checkFlag={checkFLag} check={userCheck} flag="form" />
            <Name setName={setName} flag="form"/>
            <Content flag="from" setContent={setContent}/>
            <Button createTodo={createTodo} flag={"Add"}/>
          </div>
        </>
      )}
    </div>
  );
}
export default Form;
