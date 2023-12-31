"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
var _Header = _interopRequireDefault(require("./components/Header"));
var _ProcessingMessage = _interopRequireDefault(require("./components/ProcessingMessage"));
var _InfoSummary = _interopRequireDefault(require("./components/InfoSummary"));
var _PurchaseSummary = _interopRequireDefault(require("./components/PurchaseSummary"));
var _CostSummary = _interopRequireDefault(require("./components/CostSummary"));
var _Footer = _interopRequireDefault(require("./components/Footer"));
var _LineBreak = _interopRequireDefault(require("./components/LineBreak"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var OrderConfirmation = function OrderConfirmation(_ref) {
  var data = _ref.data;
  var previewMessage = "audiophile order confirmation";
  return /*#__PURE__*/_react["default"].createElement(_components.Html, null, /*#__PURE__*/_react["default"].createElement(_components.Head, null, /*#__PURE__*/_react["default"].createElement(_components.Font, {
    fontFamily: "Manrope",
    fallbackFontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    webFont: {
      url: "https://fonts.googleapis.com/css2?family=Manrope",
      format: "woff2"
    }
  })), /*#__PURE__*/_react["default"].createElement(_components.Preview, null, previewMessage), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: "#FFF"
    }
  }, /*#__PURE__*/_react["default"].createElement(_components.Container, {
    style: {
      backgroundColor: "#FAFAFA"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement(_components.Section, {
    style: {
      padding: "0 2rem"
    }
  }, /*#__PURE__*/_react["default"].createElement(_ProcessingMessage["default"], {
    method: data.radio
  }), /*#__PURE__*/_react["default"].createElement(_LineBreak["default"], null), /*#__PURE__*/_react["default"].createElement(_InfoSummary["default"], {
    name: data.name,
    address: data.address,
    city: data.city,
    stateProvince: data.stateProvince,
    country: data.country,
    zipCode: data.zipCode,
    method: data.radio
  }), /*#__PURE__*/_react["default"].createElement(_LineBreak["default"], null), /*#__PURE__*/_react["default"].createElement(_PurchaseSummary["default"], {
    items: data.items
  }), /*#__PURE__*/_react["default"].createElement(_LineBreak["default"], null), /*#__PURE__*/_react["default"].createElement(_CostSummary["default"], {
    costs: data.costs
  })), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null))));
};
var _default = exports["default"] = OrderConfirmation;