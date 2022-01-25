import * as React from "react";
import { task } from "./Form";
function Alltask(props: any) {
  return (
    <>
      {props.allTask.map((e: task ,i:number) => {
        return (
          <div key={i}>
            <div className="mainDiv">
              <input type="checkbox" className="check" checked={e.check} />
              <input
                className="name"
                placeholder="Enter your name"
                value={e.name}
              ></input>
              <input
                className="content"
                placeholder="what is your task ? "
                value={e.content}
              />
              <button className="addTask">delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Alltask;
