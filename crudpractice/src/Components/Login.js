// {import { useState } from "react";

// const LoginForm = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleLogin = () => {
//       const users = JSON.parse(localStorage.getItem('users')) || [];
//       const user = users.find((user) => user.username === username && user.password === password);

//       if (user) {
//         setIsLoggedIn(true);
//         setErrorMessage('');
//       } else {
//         setErrorMessage('Invalid username or password');
//       }
//     };

//     const handleRegister = () => {
//       const users = JSON.parse(localStorage.getItem('users')) || [];
//       const newUser = { username, password };
//       users.push(newUser);
//       localStorage.setItem('users', JSON.stringify(users));
//       setUsername('');
//       setPassword('');
//     };

//     const handleLogout = () => {
//       setIsLoggedIn(false);
//       setUsername('');
//       setPassword('');
//     };

//     return (
//       <div>
//         {isLoggedIn ? (
//           <div>
//             <h2>Welcome, {username}!</h2>
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//         ) : (
//           <div>
//             <h2>Login</h2>
//             <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button onClick={handleLogin}>Login</button>
//             <p>{errorMessage}</p>
//             <h2>Register</h2>
//             <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button onClick={handleRegister}>Register</button>
//           </div>
//         )}
//       </div>
//     );
//   };

//   export default LoginForm;

// }

import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const loginSubmit = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users1")) || [];
//     const user = users.find(
//       (user) => user.userName === userName && user.password === password
//     );
//     console.log(user);

//     if (user) {
//       setIsLoggedIn(true);
//       Swal.fire({
//         title: "Logged In..",
//         text: "Succesfully Login..",
//         icon: "success",
//       });
//     } else {
//       alert("check the username or password and try again.");
//     }
//   };

const loginSubmit = async (e) => {
    e.preventDefault();
  
    try{
    const response = await axios.get(`http://localhost:3002/user?userName=${userName}&password=${password}`);
    if(response.data.length > 0) {
        setIsLoggedIn(true);
        Swal.fire({
                    title: "Logged In..",
                    text: "Succesfully Login..",
                    icon: "success",
                  });
    }else{
        Swal.fire({
            title: "Invalid Username or Password..?",
            text: "Invalid..",
            icon: "warning",
          });
    }
}catch(error){
    Swal.fire({
        title: "Error..?",
        text: "Not able to loged in..",
        icon: "warning",
      });
}
}

  const logOut = () => {
    setIsLoggedIn(false);
    setUserName("");
    setPassword("");
    Swal.fire({
      title: "Logged Out..",
      text: "Succesfully Loged Out..",
      icon: "question",
    });
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome {userName}</h1>
          <button className="btn btn-primary" onClick={logOut}>
            Logout
          </button>
        </>
      ) : (
        <form
          onSubmit={loginSubmit}
          className="form form-control container mt-5 bg-dark text-light"
        >
          <h2 className="text-center mt-4">Login</h2>
          <div className="my-4">
            <label>Username : </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUserName(e.target.value)}
              name="username"
              value={userName}
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
            />
          </div>
          <div className=" mt-4 text-end">
            <a href="" style={{ textDecoration: "none" }}>
              Forgot Password ?
            </a>
            <br />
            <a href="/signup" style={{ textDecoration: "none" }}>
              Sign Up
            </a>
          </div>
          <button type="submit" className="btn btn-primary container my-4">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
