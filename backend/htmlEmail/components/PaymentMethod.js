"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PaymentMethod = function PaymentMethod(_ref) {
  var method = _ref.method;
  // Inline Styles
  var columnStyle = {
    verticalAlign: "top"
  };
  var headingStyle = {
    margin: "0",
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "-0.214px"
  };
  var bodyStyle = {
    margin: "0",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "-0.214px",
    textTransform: method === "eMoney" ? "none" : "capitalize"
  };

  // Methods
  var paymentMethod = method === "eMoney" ? "e-Money" : method;
  return /*#__PURE__*/_react["default"].createElement(_components.Column, {
    style: columnStyle
  }, /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: headingStyle
  }, "Payment Method:"), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: bodyStyle
  }, paymentMethod));
};
var _default = exports["default"] = PaymentMethod;