const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const ticketSchema = new Schema(
  {
    name: {
        type: String,
        required: [true, "Name is required."],
      },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Ticket descripion is required"],
    },

    status: {
        type: String,
        defaultOption: 'New',
        required: [true, "Ticket descripion is required"],
      },

  },

);

const Ticket = model("Ticket", ticketSchema);

module.exports = Ticket;
