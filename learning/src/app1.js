import React, {useState ,useContext} from "react";

import './App.css';

const TimeContext =React.createContext();  
function Start() {
   const [seconds,setSeconds] = useState(0)

   const startTimer = () => {
    setInterval(() => {
      setSeconds(seconds => seconds + 1)
  }, 1000)
   }

   const stopTimer = () => {
       clearInterval(setSeconds(0))
        document.querySelector('#counter').remove()
   }
  return (
    <main className="container">
      <div id="counter">{seconds}</div>
      <div>
        <button className = "start_Button" onClick ={startTimer}>Start</button>     
      </div>
    </main>  
  );
}

function Stop(){
  const stopTimer = () => {
    clearInterval(setSeconds(0))
     document.querySelector('#counter').remove()
}

return(
  <main className="stop"></main>
);
}


export default Start;
