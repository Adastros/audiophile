const cartRouter = require("express").Router();
const cart = require("../models/cart");
const { emptyCart, createNewCart } = require("../utils/routeHelpers");

cartRouter.get("/new-cart", async (request, response) => {
  const newCartId = await createNewCart();
  return response.status(200).send({ cartId: newCartId });
});

cartRouter.post("/session", async (request, response) => {
  const cartId = request.body.cartId;

  // If cartId doesn't exist, create new entry in cart collection.
  // Return new cartId to client to store in localStorage.
  if (!cartId) {
    const newCartId = await createNewCart();
    return response.status(200).send({ cartId: newCartId });
  }
  
  // If cartId is given with request, check if cartId exists in cart
  // collection. If the ID exists, grab the guest cart information.
  // Return the cart information without Mongoose's version key.
  const cartDocument = await cart.findById(cartId).select("-__v");

  if (!cartDocument) {
    return response.status(400).send(`cartId does not exist.`);
  }

  return response.status(200).send(cartDocument);
});

cartRouter.post("/increase-item-quantity", async (request, response) => {
  const cartId = request.body.cartId;
  const cartItem = request.body.cartItem;
  const quantity = request.body.quantity;
  const cartDocument = await cart.findById(cartId);

  if (cartDocument.cart[cartItem] < 99) {
    cartDocument.cart[cartItem] += quantity;
    cartDocument.save();
  }

  return response.status(200).end();
});

cartRouter.post("/decrease-item-quantity", async (request, response) => {
  const cartId = request.body.cartId;
  const cartItem = request.body.cartItem;
  const quantity = request.body.quantity;
  const cartDocument = await cart.findById(cartId);

  if (cartDocument.cart[cartItem] > 0) {
    cartDocument.cart[cartItem] -= quantity;
    cartDocument.save();
  }

  return response.status(200).end();
});

cartRouter.post("/clear-cart", async (request, response) => {
  const cartId = request.body.cartId;
  const cartDocument = await cart.findById(cartId);

  cartDocument.cart = emptyCart.cart;
  cartDocument.save();

  return response.status(200).end();
});

cartRouter.post("/purchase-complete", async (request, response) => {
  const cartId = request.body.cartId;
  const cartDocument = await cart.findById(cartId);

  cartDocument.purchaseComplete = true;
  cartDocument.save();

  return response.status(200).end();
});

module.exports = cartRouter;
