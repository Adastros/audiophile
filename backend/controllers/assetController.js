const assetRouter = require("express").Router();
const cloudinary = require("cloudinary").v2;

// GET route for images related to the checkout, cart, or favicon
assetRouter.get(
  "/:checkoutOrCartOrFavicon/:imgNameAndExtension",
  (request, response) => {
    const { checkoutOrCartOrFavicon, imgNameAndExtension } = request.params;
    const imgPath = `assets/${checkoutOrCartOrFavicon}/${imgNameAndExtension}`;

    const imgUrl = cloudinary.url(imgPath, { secure: true });

    return response.status(200).json(imgUrl);
  }
);

// GET route for all other image assets
assetRouter.get(
  "/:productOrPageOrShared/:browserView/:imgNameAndExtension",
  (request, response) => {
    const { productOrPageOrShared, browserView, imgNameAndExtension } =
      request.params;
    const imgPath = `assets/${productOrPageOrShared}/${browserView}/${imgNameAndExtension}`;

    const imgUrl = cloudinary.url(imgPath, { secure: true });

    return response.status(200).json(imgUrl);
  }
);

module.exports = assetRouter;
