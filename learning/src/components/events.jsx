import React, { Component , useState } from "react";
import ReactDOM from "react-dom/client";

export default function Events(){
 
    
    const [inputField , setInputField] = useState({
    Name: '',
    Designation: '',
    Hobby: ''
     });
    const onKeyEvents = (event,key) => {
        let obj = { ...inputField }
        obj[key] = event.target.value
        setInputField(obj);
        
    //console.log(event.target.value);
  
    };

    

	const events = () => {
		return(
		   <div>
            <form >
                <label className="text1" /*onChange = {(e) => onKeyEvents()}*/>Name</label>
            	<input type="text" id="T1" value= {inputField['Name']} onChange = {(e) => onKeyEvents(e,'Name')} /> <br />
            	<label className="text2" /*onChange = {(e) => onKeyEvents()}*/>Desgination</label>
            	<input type="text" id="T2" value= {inputField.Designation} onChange = {(e) => onKeyEvents(e,'Designation')}/> <br />
            	<label className="text3" /*onChange = {(e) => onKeyEvents()}*/>Hobby</label>
            	<input type="text" id="T3" value= {inputField.Hobby} onChange = {(e) => onKeyEvents(e,'Hobby')}/> <br />
            </form>
          

          
            <form /*value= {inputField}*/>
                <label className="text4">Name</label>
            	<input type="text" id="T4" value= {inputField.Name}onChange = {(e) => onKeyEvents(e,'Name')} /> <br />
            	<label className="text5">Desgination</label>
            	<input type="text" id="T5" value= {inputField.Designation}onChange = {(e) => onKeyEvents(e,'Designation')}/> <br />
            	<label className="text6">Hobby</label>
            	<input type="text" id="T6" value= {inputField.Hobby}onChange = {(e) => onKeyEvents(e,'Hobby')}/> <br />
            </form>
           </div>
			);
	}
    return events();
}