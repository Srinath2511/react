import React, {useState ,useContext ,useEffect, useRef} from "react";
import ReactDOM from "react-dom";

import './App.css';

const TimeContext =React.createContext();  
function App()
{
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(null);
  const [lap, setLap] = useState([]);
  

  useInterval(() => setCounter((c) => c + 1), delay);
  
   let setTimeValue = (param) => {
     if(param === "start"){
      setDelay(1000)
     }else    if(param === "pause"){
      setDelay(null)
     }else    if(param === "reset"){
      setDelay(null)
      setCounter(0)
      setLap([])
     }else    if(param === "lap"){
      setLap([...lap ,counter]) 
     }
   }
  return (
    <div className="App">
      <h2>Counter: {counter}</h2>
      
      {lap.map((e,i)=>{
        return (
          <div>
            lap {" "+(i+1)}<br />
            {e}
          </div>
        )
      })}
      <button
        type="button"
        onClick={() => setDelay(1000)}
      >
        Start
      </button>
      <TimeContext.Provider value={setTimeValue} >
    <Reset />
  </TimeContext.Provider>
    </div>
    
  );
  
}

function Reset(){
  const reset = useContext(TimeContext);
 // const [count, setCount] = useState(0);
  
  return(
    <div>
  <button type="button" onClick={() => reset("reset")}>
  Reset
  </button>
  <Pause />
  </div>
);
}

function Pause(){
  const pause = useContext(TimeContext);
  return(
    <div>
  <button type="button" onClick={() => pause("pause") }>
  Pause
  </button>
  <Lap />
  </div>
);
}
function Lap(){
  const lap = useContext(TimeContext);
 // const [count, setCount] = useState(0);
  
  return(
    <div>
  <button type="button" onClick={() => lap("lap")}>
  Lap
  </button>
  
  </div>
);
}
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    let id;
    if (delay) {
      id = setInterval(savedCallback.current, delay);
    }
    return () => clearInterval(id);
  }, [delay]);
}

export default App;
