import React from 'react'

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const API_URL="http://localhost:5005"



export default function AdminAddUser() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [checkRes, setCheckRes] = useState("");
    const [successMessage, setSuccessMessage] = useState(undefined);
   

    const handleEmail = (e) => {setEmail(e.target.value)};
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);


   

   


    const handleSignupSubmit = (e) => {
        e.preventDefault();
        

        const requestBody = {
            email,
            password,
            name
        }

        axios
        .post(`${API_URL}/auth/signup`, requestBody)
        .then((response) => {
        setCheckRes(response);
        setSuccessMessage(<div className='bg-green-400 text-center'>User Succesfully added</div>);
           
        })
        .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription)
        })



    };

  return (


    <div>
              <h1>Add New Admin User</h1>
 
 <form onSubmit={handleSignupSubmit}>
   <label className="signUpLabel">Email:</label>
   <input className='border border-black'
     type="email"
     name="email"
     value={email}
     onChange={handleEmail}
   />

   <label>Password:</label>
   <input className='border border-black'
     type="password"
     name="password"
     value={password}
     onChange={handlePassword}
   />

   <label>Name:</label>
   <input className='border border-black'
     type="text"
     name="name"
     value={name}
     onChange={handleName}
   />

   <button type="submit">Sign Up</button>
 </form>
 {checkRes && <h3 className="success-message rounded">{successMessage}</h3> }
 { errorMessage && <p className="error-message">{errorMessage}</p> }




    </div>


  )
}
