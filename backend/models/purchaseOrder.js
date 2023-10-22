const mongoose = require("mongoose");

const purchaseOrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  zipCode: Number,
  city: String,
  country: String,
  radio: String,
  eMoneyNumber: Number,
  eMoneyPin: Number,
});

// transform data of blog document before responding to a request
purchaseOrderSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id; // _id property of Mongoose is an object. Should be deleted to avoid issues with testing.
    // delete returnedObject.__v;  // _v property contains the internal revision of the document
  },
});

module.exports = mongoose.model("purchaseOrder", purchaseOrderSchema);
