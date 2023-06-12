import './App.css';
import React, {useEffect, useState} from "react";

const App = () => {
  
  const APP_ID = "49232923";
  const APP_KEY =  "e16747f4be302d30570263db45b71025";

  const  exampleReq = `{APP_ID}&{APP_KEY}`;

  const [counter, setCounter] = useState(0);


  useEffect (() =>{
    console.log("Use Effect has been run");
  });

  return (
    <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text" />
          <button className="search-button" type="submit">Search
          </button>
        </form>
        <h1 onClick = {() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  )
}


export default App;
