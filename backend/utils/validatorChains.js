const { body, oneOf } = require("express-validator");

const validatorSanitizeArr = [
  body("name").exists().trim().notEmpty().isLength({ max: 100 }).escape(),
  body("email")
    .exists()
    .trim()
    .notEmpty()
    .isLength({ min: 6, max: 100 })
    .isEmail()
    .normalizeEmail(),
  body("phone")
    .exists()
    .trim()
    .notEmpty()
    .isLength({ min: 11, max: 13 })
    .isNumeric({ no_symbols: false })
    .escape(),
  body("address")
    .exists()
    .trim()
    .notEmpty()
    .isLength({ min: 3, max: 100 })
    .escape(),
  body("zipCode")
    .exists()
    .trim()
    .notEmpty()
    .isLength({ max: 10 })
    .isNumeric({ no_symbols: true })
    .escape(),
  body("city").isLength({ max: 100 }).trim().notEmpty().escape(),
  body("country").isLength({ max: 60 }).trim().notEmpty().escape(),
  body("radio")
    .exists()
    .trim()
    .notEmpty()
    .custom((value) => {
      if (value !== "cash" && value !== "eMoney") {
        throw new Error("Payment radio is not cash or eMoney");
      }

      return true;
    })
    .escape(),
  oneOf([
    body("eMoneyNumber")
      .custom((value, { req }) => {
        if (req.body.radio === "cash") {
          throw new Error(
            "Payment is cash. eMoneyNumber should not be provided."
          );
        }

        return true;
      })
      .exists()
      .trim()
      .notEmpty()
      .isLength({ min: 9, max: 9 })
      .isNumeric({ no_symbols: true })
      .escape(),
    // Without this, if the radio field is cash and eMoneyNumber
    // was not provided (which should not be provided anyway)
    // validation would fail when it should pass.
    body("eMoneyNumber")
      .custom((value, { req }) => {
        if (req.body.radio === "eMoney") {
          throw new Error(
            "Payment is eMoney. eMoneyNumber should be provided."
          );
        }
        return true;
      })
      .not()
      .exists(),
  ]),
  oneOf([
    body("eMoneyPin")
      .custom((value, { req }) => {
        if (req.body.radio === "cash") {
          throw new Error("Payment is cash. eMoneyPin should not be provided.");
        }
        return true;
      })
      .exists()
      .trim()
      .notEmpty()
      .isLength({ min: 4, max: 4 })
      .isNumeric({ no_symbols: true })
      .escape(),
    // Without this, if the radio field is cash and eMoneyPin
    // was not provided (which should not be provided anyway)
    // validation would fail when it should pass.
    body("eMoneyPin")
      .custom((value, { req }) => {
        if (req.body.radio === "eMoney") {
          throw new Error(
            "Payment is eMoney. eMoneyNumber should be provided."
          );
        }
        return true;
      })
      .not()
      .exists(),
  ]),
  body("items").exists().isObject(),
  body("items.xx99mkii")
    .optional()
    .notEmpty()
    .isInt({ allow_leading_zeroes: false, min: 0, max: 99, gt: 0, lt: 100 })
    .trim()
    .escape(),
  body("items.xx99mki")
    .optional()
    .notEmpty()
    .isInt({ allow_leading_zeroes: false, min: 0, max: 99, gt: 0, lt: 100 })
    .trim()
    .escape(),
  body("items.xx59")
    .optional()
    .notEmpty()
    .isInt({ allow_leading_zeroes: false, min: 0, max: 99, gt: 0, lt: 100 })
    .trim()
    .escape(),
  body("items.zx9")
    .optional()
    .notEmpty()
    .isInt({ allow_leading_zeroes: false, min: 0, max: 99, gt: 0, lt: 100 })
    .trim()
    .escape(),
  body("items.zx7")
    .optional()
    .notEmpty()
    .isInt({ allow_leading_zeroes: false, min: 0, max: 99, gt: 0, lt: 100 })
    .trim()
    .escape(),
  body("items.yx1")
    .optional()
    .notEmpty()
    .isInt({ allow_leading_zeroes: false, min: 0, max: 99, gt: 0, lt: 100 })
    .trim()
    .escape(),
];

module.exports = validatorSanitizeArr;
