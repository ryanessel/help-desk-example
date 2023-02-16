import React from 'react'
import TicketSubmitForm from '../components/TicketSubmitForm'

export default function IssueATicket() {


// form body etc will go here. must access the create routes


  return (
    <div>
    <h1>Issue a Ticket</h1>
    <h3>Use the form below to issue a ticket</h3>
    
   <div className='content center'>
   <TicketSubmitForm/>
    
    </div> 



    </div>
  )
}
