import * as React from "react";
import { task } from "../screen/Form";
import {useState} from "react";
function Alltask(props: any) {
  return (
    <>
      {props.allTask.map((e: task ,i:number) => {
        return (
          <div key={i}>
            <div className="mainDiv">
              <input type="checkbox" className="check" checked={e.check} onChange={()=>{
                console.log(e);
                let temp: any[];
                let alldataStore=localStorage.getItem("tasks");
                if(alldataStore!=null)
                {
                    let alldataParse=JSON.parse(alldataStore);
                    temp=alldataParse;
                }
                else
                {
                  temp=[]
                }
              console.log(temp);
            for(let i=0;i<temp.length;i++)
            {
              if(e.id==temp[i].id)
              {
                if(temp[i].check===true)
                {
                  temp[i].check=false;
                }
                else{
                  temp[i].check=true;
                }
              }
            }
              console.log(temp);
              localStorage.setItem("tasks",JSON.stringify(temp))
              props.setAllTasks(temp);


                
              }} />
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
              <button className="addTask" onClick={()=>{
                console.log(e);
                let temp: any[];
                let alldataStore=localStorage.getItem("tasks");
                if(alldataStore!=null)
                {
                    let alldataParse=JSON.parse(alldataStore);
                    temp=alldataParse;
                }
                else
                {
                  temp=[]
                }
              console.log(temp);
             let finalArr =temp.filter((ele)=>{
               
                 return ele.id!==e.id;
               }

             )
              console.log(finalArr);
              localStorage.setItem("tasks",JSON.stringify(finalArr))
              props.setAllTasks(finalArr);
              }}>delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Alltask;
