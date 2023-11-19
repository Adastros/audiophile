"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
var _CostType = _interopRequireDefault(require("./CostType"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CostSummary = function CostSummary(_ref) {
  var costs = _ref.costs;
  // Inline styles
  var summaryStyle = {
    padding: "24px 0",
    paddingLeft: "18px"
  };
  var columnStyleSpacing = {
    width: "24%"
  };
  var columnStyleCostList = {
    width: "75%"
  };

  // Component Generators
  var createCostList = function createCostList() {
    return Object.entries(costs).map(function (costType) {
      if (costType[0] === "grandTotal") {
        return /*#__PURE__*/_react["default"].createElement(_CostType["default"], {
          key: "".concat(costType[0], "CostList"),
          costText: "grand total",
          costNum: costType[1]
        });
      }
      return /*#__PURE__*/_react["default"].createElement(_CostType["default"], {
        key: "".concat(costType[0], "CostList"),
        costText: costType[0],
        costNum: costType[1]
      });
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_components.Section, {
    style: summaryStyle
  }, /*#__PURE__*/_react["default"].createElement(_components.Row, null, /*#__PURE__*/_react["default"].createElement(_components.Column, {
    style: columnStyleSpacing
  }), /*#__PURE__*/_react["default"].createElement(_components.Column, {
    style: columnStyleCostList
  }, createCostList())));
};
var _default = exports["default"] = CostSummary;