import React,{useState}from "react";
import axios from "axios";
export default function Sample(){
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:""
  })
  const submitHandler=(e)=>{
e.preventDefault();
axios.post("http://localhost:3001/posts",formData)
.then((response)=>console.log(response))
.catch((error)=>console.log(error))
alert("submitted")
  }
  const changeHandler=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
  }
  return(
    <div>
<form onSubmit={submitHandler}> 
  <label>FirstName:</label><br/>
  <input type="text" name="firstName" value={formData.firstName} onChange={changeHandler}></input><br/>
  <label>LastName:</label><br/>
  <input type="text" name="lastName" value={formData.lastName} onChange={changeHandler}></input><br/>
  <label>Email:</label><br/>
  <input type="email" name="email" value={formData.email} onChange={changeHandler}></input><br/>
  <button type="submit">submit</button>
</form>
    </div>
  )
}