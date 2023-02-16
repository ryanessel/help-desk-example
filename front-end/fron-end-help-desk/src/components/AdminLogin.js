import React, { useState, useContext} from 'react';
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from '../context/auth.context';


const API_URL="http://localhost:5005";

 function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const nav = useNavigate();

    const { storeToken, authenticateUser } =useContext(AuthContext);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const requestBody={ email, password };

        axios
        .post(`${API_URL}/auth/login`, requestBody)
        .then((response) => {
            console.log(response.data.authToken);
            //storeToken is a function we made in the auth.context.js file
            //we make it accesable above in the const where we deconstruct it!
            storeToken(response.data.authToken)
            
            //verify the token by ending a request
            //to the server's jwt vaidation endpoint
            authenticateUser();

      
          // nav(`/parts`);          
                    
        })
        .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
        })


    };
    


  return (
    <div className='LoginPage'>
        <h1>Admin Login</h1>

        <form onSubmit={handleLoginSubmit}>
        <label>Email </label>
        <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
        />

        <label>Password: </label>
        <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
        />



        <button type="submit">Login</button>

        </form>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}

  
    </div>
  )
}



export default AdminLogin;