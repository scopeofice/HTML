import React, { useState } from "react";
import userData from "./UserData";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const nav=useNavigate();

  const handleSubmit = (event) => {
    if (!email || !pass) {
      setError("Please enter email and password");

      return;
    }
    const user = userData.find(
      (user) => user.email === email && user.pass === pass
    );
    console.log(user);
    if (user === undefined) {
      setError("Invalid email or password");
    }
    setEmail("");
    setPass("");
    setError("");
    if(user){
        nav("/")
    }
    
  };


  return (
    <div>
      <form>
      {error && <div className="error">{error}</div>}

      
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={pass}
            onChange={(event)=>setPass(event.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
    
  );
  
};

export default Login;
