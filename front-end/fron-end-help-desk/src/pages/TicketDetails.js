import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';

export default function TicketDetails() {
    const {ticketId} = useParams();
    const API_URI = "http://localhost:5005/ticket";

    const getTicketInfo = () => {

        axios
        .get(`${API_URI}/${ticketId}`)
        .then((response) => {
            console.log("PART DETIALS", response.data)
           
           
    
        })
        .catch(err => console.log(err))
    
    }
    
    useEffect(() => {
    getTicketInfo()
    }, [])

  return (
    <div>TicketDetails




    </div>
  )
}
