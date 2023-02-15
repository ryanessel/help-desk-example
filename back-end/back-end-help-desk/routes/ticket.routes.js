const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket.model")

router.get("/test", (req, res, next) => {
  res.json("[TEST]Ticket route");
});

router.get("/ticket", (req, res, next) => {
  Ticket.find()
  .then((allTickets) => res.json(allTickets));
  
});

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


module.exports = router;
