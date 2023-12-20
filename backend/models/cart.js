const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  purchaseComplete: Boolean,
  cart: {
    xx99mkii: Number,
    xx99mki: Number,
    xx59: Number,
    zx9: Number,
    zx7: Number,
    yx1: Number,
  },
});

// transform data of cart document before responding to a request
cartSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id; // _id property of Mongoose is an object. Should be deleted to avoid issues with testing.
    // delete returnedObject.__v;  // _v property contains the internal revision of the document
  },
});

module.exports = mongoose.model("cart", cartSchema);
