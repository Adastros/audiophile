const checkoutFormRouter = require("express").Router();
const { validationResult, matchedData } = require("express-validator");
const purchaseOrder = require("../models/purchaseOrder");
const helper = require("../utils/routeHelpers");
const sendEmail = require("../utils/emailHelper.js").default;
const validatorSanitizeArr = require("../utils/validatorChains");

checkoutFormRouter.post(
  "/",
  validatorSanitizeArr,
  async (request, response) => {
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

    newPurchaseOrder.save().then(async () => {
      const emailResponse = await sendEmail(newPurchaseOrder);
      return response.status(200).json(emailResponse);
    });
  }
);

module.exports = checkoutFormRouter;
