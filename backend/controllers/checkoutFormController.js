const checkoutFormRouter = require("express").Router();
const {
  validationResult,
  matchedData,
  body,
  oneOf,
} = require("express-validator");
const purchaseOrder = require("../models/purchaseOrder");
const logger = require("../utils/logger");

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
];

checkoutFormRouter.post(
  "/",
  validatorSanitizeArr,
  async (request, response) => {
    const formData = request.body;
    const result = validationResult(request);
    const errors = result.array();

    if (errors.length) return response.status(400).json(errors);

    // automatically collects all validated and sanitized data
    const data = matchedData(request);

    const newPurchaseOrder = new purchaseOrder({
      ...data,
    });

    newPurchaseOrder.save().then(() => {
      logger.info(`${JSON.stringify(data)} successfully added to MongoDB.`);
      return response.status(200).json(formData);
    });
    // .catch((error) => next(error));
  }
);

module.exports = checkoutFormRouter;
