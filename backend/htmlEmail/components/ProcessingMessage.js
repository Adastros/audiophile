"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ProcessingMessage = function ProcessingMessage(_ref) {
  var method = _ref.method;
  var processingMsgShipping = "We are currently processing your order. You will receive a shipping confirmation with your tracking number once your order ships.";
  var processingMsgDelivery = "We are currently processing your order. You will receive a delivery confirmation once your order is ready to be delivered.";
  var processingMsg = method === "cash" ? processingMsgDelivery : processingMsgShipping;
  var audiophileUrl = "https://audiophile.fan";

  //Inline Styles
  var sectionStyle = {
    padding: "24px 0"
  };
  var thankMessageStyle = {
    margin: "0 0 16px 0",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "-0.214px"
  };
  var processingMessageStyle = {
    margin: "0",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "-0.214px"
  };
  return /*#__PURE__*/_react["default"].createElement(_components.Section, {
    style: sectionStyle
  }, /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: thankMessageStyle
  }, "Thank you for shopping at", " ", /*#__PURE__*/_react["default"].createElement(_components.Link, {
    href: audiophileUrl,
    target: "_blank"
  }, "audiophile.")), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: processingMessageStyle
  }, processingMsg));
};
var _default = exports["default"] = ProcessingMessage;