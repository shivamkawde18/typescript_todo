import './App.css';
import * as React from 'react';
import Form from './Form';
import "./Style.css"
function App() {
  return (
    <div className="App" style={{ background: "whitesmoke", height: "98vh" }}>
       <h3>TODO</h3>
       <div className="completeDiv">
          <b className="cTask">Completed Task</b>
         
          <b className="uTask">Uncompleted Task</b>
       </div>
      <Form></Form>
    </div>
  );
}

export default App;
