import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TicketListViewAdmin() {
    const [tickets, setAllTickets] = useState("")
    const API_URI = "http://localhost:5005/ticket";


 function getAllTickets() {
   


    axios
    .get(API_URI)
    .then((response) => {
        console.log("TICKET LIST",response.data)
        setAllTickets(response.data);
    })
 }

useEffect (()=> {
getAllTickets();

}, [])


  return (
    <div className="text-xl"> 

    <h1 className='text-3xl underline font-bold mb-5'>Ticket List View (Admin Only)</h1>
    


<table className='center'>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
      <th>Respond</th>
    </tr>
  </thead>
  <tbody>
  {tickets.length > 0 && tickets.map((theTicket) =>{
return(

    <tr>
      <td>{theTicket.name}</td>
      <td>{theTicket.email}</td>
      <td>{theTicket.status}</td>

      <Link to={`/ticket/${tickets._id}`}>
      <td>Details</td>
    </Link>
     
    </tr>

)


  })

  }
  </tbody>
</table>





    </div>
  )
}
