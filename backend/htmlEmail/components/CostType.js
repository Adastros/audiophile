"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CostType = function CostType(_ref) {
  var costText = _ref.costText,
    costNum = _ref.costNum;
  var costNumStr = costNum.toLocaleString(undefined, {
    minimumFractionDigits: 2
  });

  // Inline Style
  var rowStyle = {
    width: "100%",
    maxWidth: "250px",
    margin: costText === "grand total" ? "12px 0 0 auto" : "0 0 0 auto"
  };
  var costStyle = {
    margin: "0",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    textTransform: "uppercase"
  };
  var numberStyle = {
    margin: 0,
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "normal",
    textAlign: "right"
  };
  return /*#__PURE__*/_react["default"].createElement(_components.Row, {
    style: rowStyle
  }, /*#__PURE__*/_react["default"].createElement(_components.Column, null, /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: costStyle
  }, costText)), /*#__PURE__*/_react["default"].createElement(_components.Column, null, /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: numberStyle
  }, "$ ".concat(costNumStr))));
};
var _default = exports["default"] = CostType;