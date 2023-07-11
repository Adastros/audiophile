const pageRouter = require("express").Router();
const fs = require("fs");
const path = require("path");
const helper = require("../utils/routeHelpers");

// GET route for page data
// Returns a JSON object with Cloudinary URLs
pageRouter.get("/:pageName", async (request, response) => {
  const { pageName } = request.params;

  const headerData = await helper.readLocalFile("header");
  const pageBodyData = await helper.readLocalFile(pageName);
  const footerData = await helper.readLocalFile("footer");

  const pageData = await Promise.all([headerData, pageBodyData, footerData]);

  return response.status(200).json(pageData);
});

module.exports = pageRouter;
