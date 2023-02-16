const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket.model")
const mongoose = require('mongoose');

router.get("/test", (req, res, next) => {
  res.json("[TEST]Ticket route");
});




router.get("/ticket", (req, res, next) => {
  Ticket.find()
  .then((allTickets) => res.json(allTickets));
  
});


//GET ROUTE  TICKET DETAILS (ID)
router.get('/ticket/:ticketId', (req, res, next) => {
  const { ticketId } = req.params
  console.log("BACK END TICKET ID", ticketId )

  if(!mongoose.Types.ObjectId.isValid(ticketId)) {
      res.status(400).json({message: "Speficied id doesn't exist or isn't valid"})
      return;
  }

  Ticket.findById(ticketId)
      .then((details) => {
        console.log("TicketID Details" ,details)
        res.status(200).json(details)
      } )
      .catch(error => res.json(error))

})

// router.get('/test/:testId', (req, res, next))

//POST ROUTE- CREATES NEW TICKET IN THE DB PER THE INPUTS
router.post("/ticket", (req, res, next) => {
const {
  name,
  email,
  description,
  status ="New"
} = req.body;
Ticket.create({
  name,
  email,
  description,
  status})
  .then(newTicket => res.json(newTicket))
  .catch(err => res.json(err));


})

// PUT(edit)  /api/projects/:projectId  -  Updates a specific project by id
router.put("/ticket/:ticketId", (req, res, next) => {
  const { ticketId } = req.params;
// if the project id doesn't exist then you and error message is thrown.
  if(!mongoose.Types.ObjectId.isValid(ticketId)) {
      res.status(400).json({message: "Specified id is not valid (may not exist)"});
      return;
  }
//...If it the id does exist it will find and update the projcet. havint "new: true " will show the page wit hthe updated info.
  Ticket.findByIdAndUpdate(ticketId, req.body, { new: true })
  .then((updatedTicket) => res.json(updatedTicket))
  .catch(error => res.json(error));


})


module.exports = router;
