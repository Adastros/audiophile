const checkoutFormRouter = require("express").Router();
const { validationResult, body } = require("express-validator");

const validatorSanitizeArr = [
  body("name").trim().isLength({ max: 100 }).notEmpty().escape(),
  body("email")
    .isLength({ min: 6, max: 100 })
    .isEmail()
    .trim()
    .notEmpty()
    .normalizeEmail(),
  body("phone")
    .isLength({ min: 11, max: 13 })
    .isNumeric({ no_symbols: false })
    .trim()
    .notEmpty()
    .escape(),
  body("address").isLength({ min: 3, max: 100 }).trim().notEmpty().escape(),
  body("zipCode")
    .isLength({ max: 10 })
    .isNumeric({ no_symbols: true })
    .trim()
    .notEmpty()
    .escape(),
  body("city").isLength({ max: 100 }).trim().notEmpty().escape(),
  body("country").isLength({ max: 60 }).trim().notEmpty().escape(),
  body("eMoneyNumber")
    .optional()
    .isLength({ min: 9, max: 9 })
    .isNumeric({ no_symbols: true })
    .trim()
    .escape(),
  body("eMoneyPin")
    .optional()
    .isLength({ min: 4, max: 4 })
    .isNumeric({ no_symbols: true })
    .trim()
    .escape(),
];

checkoutFormRouter.post(
  "/",
  validatorSanitizeArr,
  async (request, response) => {
    const formData = request.body;
    const result = validationResult(request);
    const errors = result.array();

    if (errors.length) return response.status(400).json(errors);

    return response.status(200).json(formData);
  }
);

module.exports = checkoutFormRouter;
