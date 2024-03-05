import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { editApi, editSubmitApi, getFormData } from '../Services/Api';

const EditForm = () => {
//states..
const [user , setUser] = useState('');

//navigation..
const navigate = useNavigate();

//params..
const { id } = useParams();

//targeting values of form..
const onValueChange = (e) =>{
  
    setUser({...user, [e.target.name]:e.target.value})
    console.log("adduser",user)
}

//fetching api to edit data in server..
const submitEditDetails = async(e) => {
    e.preventDefault();
     await editSubmitApi(user, id);
     navigate('/all');
}

//useEffect for calling edit api..
useEffect( () => {
    editUsersData();
}, [])

//edit Api calling..
const editUsersData = async() => {
    try{
        let response = await editApi(id)
        setUser(response.data);
    }catch(error){
        console.log("error in the api while submitting the edited data.", error.message);
    }
}


  return (
    <div className="text-dark container mt-5">
      <form action="" onSubmit={submitEditDetails}>
        <div>
          <label>Name</label>
          <input className="form-control my-2" type="text" onChange={(e) => onValueChange(e)} name='name' value={user.name}/>
        </div>
        <div>
          <label>Email</label>
          <input className="form-control my-2" type="text" onChange={(e) => onValueChange(e)} name='email' value={user.email}/>
        </div>
        <div>
          <label>Contact</label>
          <input className="form-control my-2" type="text" onChange={(e) => onValueChange(e)} name='contact' value={user.contact}/>
        </div>
        <input type="checkbox" className="my-4" />agree privacy and policy.
        <div>
          <button className="btn btn-success " >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm
