const pageRouter = require("express").Router();
const fs = require("fs");
const path = require("path");
const helper = require("../utils/routeHelpers");

// GET route for page data
// Returns a JSON object with Cloudinary URLs
pageRouter.get("/:pageName", (request, response) => {
  const { pageName } = request.params;

  fs.readFile(
    path.join(__dirname, `../data/${pageName}.json`),
    "utf8",
    (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      const flatData = helper.flattenObj(JSON.parse(data));
      const convertedData = helper.cloudinaryUrlConverter(flatData);
      const pageData = helper.unflattenObj(convertedData);

      return response.status(200).json(pageData);
    }
  );
});

module.exports = pageRouter;
