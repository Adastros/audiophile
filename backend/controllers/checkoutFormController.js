const checkoutFormRouter = require("express").Router();
const { validationResult, matchedData } = require("express-validator");
const purchaseOrder = require("../models/purchaseOrder");
const logger = require("../utils/logger");
const helper = require("../utils/routeHelpers");
const validatorSanitizeArr = require("../utils/validatorChains");

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
    const costBreakDown = helper.getCostBreakdown(data.items);

    const newPurchaseOrder = new purchaseOrder({
      ...data,
      costs: costBreakDown,
    });

    newPurchaseOrder.save().then(() => {
      logger.info(`${JSON.stringify(data)} successfully added to MongoDB.`);
      return response.status(200).json(formData);
    });
    // .catch((error) => next(error));
  }
);

module.exports = checkoutFormRouter;
