import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect} from 'react';

import { useState } from 'react';


const defaultFormFields = {
  name: '',
  email: '',
  responseMessage: '',
};

export default function TicketDetails() {
    const {ticketId} = useParams();
    const API_URI = "http://localhost:5005/ticket";
    const [ targetTicket, setTargetTicket ] = useState("")
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [responseName, setResponseName] = useState("");
    const [responseEmail, setResponseEmail] = useState("");
    const { name, email, responseMessage } = formFields;
    const [successMessage, setSuccessMessage] = useState(undefined);
    const [failMessage, setFailMessage] = useState(undefined);
    const [count, setCount] = useState(2);
  
    const resetFormFields = () => {
     
      setFormFields(defaultFormFields);
    }; 


    const handleSubmit = (e) => {

    

      e.preventDefault();

      sendMessage();
      resetFormFields();

    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      console.log(value)
      setFormFields({ ...formFields, [name]: value });
  };

    const getTicketInfo = () => {

        axios
        .get(`${API_URI}/${ticketId}`)
        .then((response) => {
            console.log("PART DETIALS", response.data)
           setTargetTicket(response.data);
           setResponseName(response.data.name);
           setResponseEmail(response.data.email);
           
    
        })
        .catch(err => console.log(err))
    
    }
    
    useEffect(() => {
    getTicketInfo()
    }, [])


    const sendMessage = () => {
      if(responseMessage === "") {
        setFailMessage(<div className='bg-red-400 text-center'>Fill out response!</div>);
        setCount(0);
        return
      }

      setSuccessMessage(<div className='bg-green-400 text-center'>Ticket Sent!</div>)
      setCount(1);
      console.log({
        NAME: responseName,
        EMAIL: responseEmail,
        RESPONSE_TO_TICKET: responseMessage
      });
    }

   


  return (
          <div className='flex items-center justify-center'>


        <div className=" border border-black w-11/12 md:w-2/3  bg-base-100  text-black  xl:w-[45rem] mb-4  mt-20 sm:mt-5 md:mt-10 ">
          
          
        <figure className="px-10 pt-10 text-4xl underline">
        {/* title goes here */}
        Respond to this ticket
        </figure>
        
          
          <div className="card-body items-right text-center">
        
        
         {/* put stuff here */}
         <div className='flex justify-center'>

        
         
         <div className='sign-up-container text-left'>
                

                <form  onSubmit={handleSubmit}>

                    <input 
                    type='text' 
                    className='input-form border border-black' 
                    name='name' 
                    placeholder='Name'
                    value={targetTicket.name} 
                    
                    />
                  
                    <br/>
                    <input
                    type="text"
                    className='input-form  border border-black'
                    name='email'
                    placeholder='Email'
                    value={targetTicket.email}
                    
              
                    />
    
                    <br/>
                    <textarea 
                    type="text" 
                    className="input-form-message w-80 h-80 xl:w-96  border border-black " 
                    name="responseMessage" 
                    placeholder='Response to Ticket '
                    value={responseMessage}
                 onChange={handleChange}
                    />
                    <br/>
                       

                    <button className='btn btn-blue'  > Submit </button>
                    {(count === 0) && <h3 className="success-message rounded">{failMessage}</h3>}
                    {(count === 1) && <h3 className="success-message rounded">{successMessage}</h3>}
   
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
