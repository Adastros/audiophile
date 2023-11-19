"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ShipTo = function ShipTo(_ref) {
  var name = _ref.name,
    address = _ref.address,
    city = _ref.city,
    country = _ref.country,
    zipCode = _ref.zipCode,
    method = _ref.method;
  var heading = method === "cash" ? "Deliver To:" : "Ship To:";

  // Inline Styles
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
    lineHeight: "normal",
    letterSpacing: "-0.214px"
  };
  return /*#__PURE__*/_react["default"].createElement(_components.Column, null, /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: headingStyle
  }, heading), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: bodyStyle
  }, name), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: bodyStyle
  }, address), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: bodyStyle
  }, "".concat(city, " ").concat(zipCode)), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: bodyStyle
  }, country));
};
var _default = exports["default"] = ShipTo;