const serverSideRouter = require("express").Router();
const path = require("path");

// Catch-all server side route
//
// Any refreshed page that's not the home page,
// manually written URLs, or shared links to the
// website will redirect to index.html. React router
// on the client side will handle the rest of the routing.
serverSideRouter.use("/*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "../build/index.html"));
});

module.exports = serverSideRouter;
