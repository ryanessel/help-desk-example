import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TicketListViewAdmin(props) {
  const [tickets, setAllTickets] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  const API_URI = "http://localhost:5005/ticket";

  function getAllTickets() {
    axios.get(API_URI)
      .then((response) => {
        setAllTickets(response.data);
        const initialSelectedOptions = response.data.reduce(
          (acc, ticket) => ({ ...acc, [ticket._id]: ticket.status }),
          {}
        );
        setSelectedOptions(initialSelectedOptions);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(getAllTickets, []);

  const handleOptionChange = (event, id) => {
    const newOption = event.target.value;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [id]: newOption,
    }));
    axios.put(`${API_URI}/${id}`, { status: newOption })
      .then(response => {
        getAllTickets()
        console.log('Data updated:', response.data);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "New":
        return { backgroundColor: "red", color: "white" };
      case "In Progress":
        return { backgroundColor: "yellow", color: "black" };
      case "Resolved":
        return { backgroundColor: "green", color: "white" };
      default:
        return {};
    }
  };

  return (
    <div className="text-xl">
      <h1 className='text-3xl underline font-bold mb-5'>Ticket List View (Admin Only)</h1>
      <table className='center'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Status</th>
            <th>Respond</th>
          </tr>
        </thead>
        <tbody>

          {tickets.map((theTicket) => (
            <tr key={theTicket._id}>
              <td>{theTicket.name}</td>
              <td>{theTicket.email}</td>
              <td>{theTicket.description}</td>
              <td style={getStatusStyle(selectedOptions[theTicket._id])}>

                <select style={getStatusStyle(selectedOptions[theTicket._id])}
                  value={selectedOptions[theTicket._id]}
                  onChange={(event) => handleOptionChange(event, theTicket._id)}
                  className={`status-${selectedOptions[theTicket._id].toLowerCase()}`}
                >
                  <option  value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
                
              </td>

              <td>

                <Link to={`/ticket/${theTicket._id}`}>
                  Details
                </Link>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}