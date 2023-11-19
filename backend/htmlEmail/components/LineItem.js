"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LineItem = function LineItem(_ref) {
  var imgUrl = _ref.imgUrl,
    imgAlt = _ref.imgAlt,
    displayName = _ref.displayName,
    qty = _ref.qty,
    price = _ref.price,
    itemTotal = _ref.itemTotal;
  //Inline Styles
  var rowStyle = {
    marginTop: "16px"
  };
  var columnStyle = {
    width: "27.5%"
  };
  var columnStyleImg = {
    width: "64px"
  };
  var columnStyleQty = {
    width: "75px"
  };
  var lineItemTextStyle = {
    margin: "0",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    textAlign: "right"
  };
  var lineItemTextStyleDisplayName = {
    margin: "0 0 0 16px",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    textAlign: "left"
  };
  var imgStyle = {
    backgroundColor: "#F1F1F1",
    borderRadius: "8px"
  };
  return /*#__PURE__*/_react["default"].createElement(_components.Row, {
    style: rowStyle
  }, /*#__PURE__*/_react["default"].createElement(_components.Column, null, /*#__PURE__*/_react["default"].createElement(_components.Row, null, /*#__PURE__*/_react["default"].createElement(_components.Column, {
    style: columnStyleImg
  }, /*#__PURE__*/_react["default"].createElement(_components.Img, {
    src: imgUrl,
    alt: imgAlt,
    height: "64",
    width: "64",
    style: imgStyle
  })), /*#__PURE__*/_react["default"].createElement(_components.Column, null, /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: lineItemTextStyleDisplayName
  }, displayName)))), /*#__PURE__*/_react["default"].createElement(_components.Column, {
    style: columnStyleQty
  }, /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: lineItemTextStyle
  }, qty)), /*#__PURE__*/_react["default"].createElement(_components.Column, {
    style: columnStyle
  }, /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: lineItemTextStyle
  }, "$ ".concat(price))), /*#__PURE__*/_react["default"].createElement(_components.Column, {
    style: columnStyle
  }, /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: lineItemTextStyle
  }, "$ ".concat(itemTotal))));
};
var _default = exports["default"] = LineItem;