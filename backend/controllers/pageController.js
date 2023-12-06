const pageRouter = require("express").Router();
const helper = require("../utils/routeHelpers");

// GET route for page data
// Returns a JSON object with Cloudinary URLs
pageRouter.get("/:pageName", async (request, response) => {
  const { pageName } = request.params;

  const pageData = await helper.readLocalFile(pageName);

  return response.status(200).json(pageData);
});

module.exports = pageRouter;
