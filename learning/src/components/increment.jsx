import React, { useState } from "react";
//import ReactDom from "react-dom";

export default function Increment(){

    const[count,setCount] = useState(0);   
    const incrementCount = (decrease) => {
    	//setCount(count + 1);
        decrease();
    };
    const increment = () => {
    	setCount(count + 1);
        
    };
    const decrementCount = () => {
    	setCount(count - 1);
    };
    return(
    	<div className="App">

    	{count}
    		<button onClick={() =>incrementCount(increment)} >Increment</button>
    		<button onClick={decrementCount} >Decrement</button>
    	</div>
    );
} 