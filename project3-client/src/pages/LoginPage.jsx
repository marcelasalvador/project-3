// src/pages/SignupPage.js

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";


function LoginPage(props) {

  const {storeToken, authenticateUser} = useContext(AuthContext)
  
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/auth/login", {
        email,
        password
    })
    .then(axiosResponse => {
        storeToken(axiosResponse.data.authToken)
        authenticateUser()
        navigate("/")
    })
    .catch(err => console.log(err))
  };

  
  return (
    <div className="SignupPage">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />

        <label>Password:</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />


        <button type="submit">Login</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Don't have account?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  )
}

export default LoginPage;
