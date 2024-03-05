import React, { useState } from "react";
import { getFormData } from "../Services/Api";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {

//states..
const [user , setUser] = useState('');

//navigation
const navigate = useNavigate();

//targeting values of form..
const onValueChange = (e) =>{
    setUser({...user, [e.target.name]:e.target.value})
    console.log("adduser",user)
}

//fetching api to store data in server..
const addUserDetails = async(e) => {
    e.preventDefault();
     await getFormData(user);
     navigate('/all');
}

  return (
    <div className="text-dark container mt-5">
      <form action="" onSubmit={addUserDetails}>
        <div>
          <label>Name</label>
          <input className="form-control my-2" type="text" onChange={(e) => onValueChange(e)} name='name'/>
        </div>
        <div>
          <label>Email</label>
          <input className="form-control my-2" type="text" onChange={(e) => onValueChange(e)} name='email'/>
        </div>
        <div>
          <label>Contact</label>
          <input className="form-control my-2" type="text" onChange={(e) => onValueChange(e)} name='contact'/>
        </div>
        <input type="checkbox" className="my-4" />agree privacy and policy.
        <div>
          <button className="btn btn-success " >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddUsers;
