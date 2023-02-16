import React from 'react'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';



const API_URI = "http://localhost:5005/ticket";

const defaultFormFields = {
    name: '',
    email: '',
    description: '',
  };



export default function TicketSubmitForm(props) {

    const ticketForm = useRef(null);

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { name, email, description } = formFields;
    const [successMessage, setSuccessMessage] = useState(undefined);
    const [failMessage, setFailMessage] = useState(undefined);
    const [messageSwitch, setMessageSwitch] = useState("")


    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(value)
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      }; 


    const handleContactSubmit = (event) => {
        event.preventDefault();
        const requestBody = { name, email, description, status : "New" };

        console.log("REQUEST BODY", requestBody)

        if(requestBody.name === "" || requestBody.email === "" || requestBody.description === "" ) {
            setFailMessage(<div className='bg-red-400 text-center'>Fill out all forms please!</div>);
            return;
        }

        axios.post(`${API_URI}`, requestBody)
        .then((response) => {
        
            setMessageSwitch(response.data);
            console.log("EMAIL RESPONSE!!!!", response)
            setSuccessMessage(<div className='bg-green-400 text-center'>Ticket Sent!</div>);
            resetFormFields();
        })
        .catch((error) => {
          
            console.log(error);
        })
        
    } 



    
    return (
       





        <div className='flex items-center justify-center'>


        <div className="center border border-black w-11/12 md:w-2/3  bg-base-100  text-black  xl:w-[45rem] mb-4  mt-20 sm:mt-5 md:mt-10 ">
          
          
        <figure className="px-10 pt-10 text-4xl underline">
        {/* title goes here */}
        Please Submit Your Issue
        </figure>
        
          
          <div className="card-body items-right text-center">
        
        
         {/* put stuff here */}
         <div className='flex justify-center'>

        
         
         <div className='sign-up-container text-left'>
                

                <form ref={ticketForm} onSubmit={handleContactSubmit}>

                    <input 
                    type='text' 
                    className='input-form border border-black' 
                    name='name' 
                    placeholder='Name'
                    value={name} 
                    onChange={handleChange}
                    />
                    <br/>
                    <input
                    type="text"
                    className='input-form  border border-black'
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={handleChange}
                    />
    
                    <br/>
                    <textarea 
                    type="text" 
                    className="input-form-message w-80 h-80 xl:w-96  border border-black " 
                    name="description" 
                    placeholder='Description of Issue '
                    value={description} 
                    onChange={handleChange}
                    />
                    <br/>
                       

                    <button className='btn btn-blue' > Submit </button>

                    { messageSwitch && <h3 className="success-message rounded">{successMessage}</h3> }
                    { !messageSwitch && <h3 className="success-message rounded">{failMessage}</h3> }
                </form>
    

            </div>
            </div>
            <div className="card-actions">
            
            </div>
          </div>
        </div>
        
        
                
                
                
            </div>
        
       

    

  )
}
