"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Footer = function Footer() {
  var footerText = "\xA9 Copyright 2023 audiophile. All Rights Reserved.";

  // Inline Styles
  var sectionStyle = {
    height: "100px",
    padding: "16px 32px",
    backgroundColor: "black"
  };
  var textStyle = {
    margin: 0,
    color: "white",
    fontSize: "11px",
    fontWeight: "normal",
    lineHeight: "normal"
  };
  return /*#__PURE__*/_react["default"].createElement(_components.Section, {
    style: sectionStyle
  }, /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: textStyle
  }, footerText));
};
var _default = exports["default"] = Footer;