import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./Login";
import Swal from "sweetalert2";
import axios from "axios";

const Registration = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


//   const handleRegistration = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users1")) || [];
//     const newUser = { userName, password };
//     users.push(newUser);
//     localStorage.setItem("users1", JSON.stringify(users));
//     console.log(newUser);
//     setUserName("");
//     setPassword("");
//     Swal.fire({
//         title: "Registered..",
//         text: "Succesfully Registered..",
//         icon: "success"
//     });
//     navigate('/login');
//   };

const handleRegistration = async(e) => {
    e.preventDefault();
    try{
        await axios.post('http://localhost:3002/user' , {userName ,email, password});
        setUserName('');
        setPassword('');
        setEmail('');
        Swal.fire({
            title: "Registered Successfully.",
            text: "Registered..",
            icon: "success",
          });
          navigate('/login');
    }catch(error){
        console.error('error registration.', error.message)
    }
}

  return (
    <>
      <form
        onSubmit={handleRegistration}
        className="form form-control container mt-5 bg-dark text-light"
      >
        <h2 className="text-center mt-4">SignUp</h2>
        <div className="my-4">
          <label>Username : </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
            name="username"
            value={userName}
            required
          />
        </div>
        <div className="my-4">
          <label>Email : </label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
            required
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
            required
          />
        </div>
        <div className=" mt-4 text-end">
          <a href="" style={{ textDecoration: "none" }}>
            Forgot Password ?
          </a>
          <br />
          <a href="/login" style={{ textDecoration: "none" }}>
            Login
          </a>
        </div>
          <button type="submit" className="btn btn-primary container my-4">
            SignUp
          </button>
      </form>
    </>
  );
};

export default Registration;
