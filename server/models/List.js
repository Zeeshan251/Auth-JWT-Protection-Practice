const mongoose = require("mongoose");

const ListSchema = mongoose.Schema(
  {
    title: { type: "String" },  
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const ListModel = mongoose.model('List', ListSchema);

module.exports = ListModel;
