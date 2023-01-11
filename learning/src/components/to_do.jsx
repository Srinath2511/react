import React, { Component , useState } from "react";
import ReactDOM from "react-dom/client";

export default function TODO(){
    const [columns , setColumns ] =useState([{message:'',id:1,name:"first"}]);
    const [values , setValues ] =useState('');
    const listApp = (e,key) =>{
          let list = [...columns]
          list[key].message = e.target.value;
          list[key].id = 1;
          setColumns(list);
    }
    const handleSubmit = (e) => {
      /* e.preventDefault();*/
       let obj = [...columns]
       obj.push({message:values,id:1})
       setColumns(obj);
       setValues('');
 
   }
	return(
        <div>
        	<h1>TODO List</h1>
        	<p>A Simple React TODO List App</p>
        	<label>NEW ToDo</label> <br/>
        	<input type="text"  value={values} onChange={(val) => 
          {
           setValues( val.target.value)}}placeholder="New TODO" />
          {columns.map((e,index)=> <div key={index}>{
            e.id==1?e.message:"null"
          }</div>
           
           
          
          )}
        	<button onClick={handleSubmit} >ADD TODO</button>
        </div>

		);
 
  
}