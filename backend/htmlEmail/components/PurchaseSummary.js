"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
var _PurchaseSummaryTableHeading = _interopRequireDefault(require("./PurchaseSummaryTableHeading"));
var _LineItem = _interopRequireDefault(require("./LineItem"));
var _LineBreak = _interopRequireDefault(require("./LineBreak"));
var _header = _interopRequireDefault(require("../../data/header.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PurchaseSummary = function PurchaseSummary(_ref) {
  var items = _ref.items;
  var baseUrl = process.env.REACT_APP_CLOUDINARY_BASE_URL;

  // Inline styles
  var summaryStyle = {
    padding: "24px 0"
  };
  // Component Generators
  var createLineItems = function createLineItems() {
    return Object.entries(items).map(function (item) {
      var itemName = item[0];
      var itemQty = item[1];

      // If items list contains undefined or zero quantity, do not return a list item component.
      if (!itemQty) return null;
      var imgUrl = "".concat(baseUrl).concat(_header["default"].image[itemName].path);
      var imgAlt = "".concat(baseUrl).concat(_header["default"].image[itemName].alt);
      var displayName = _header["default"].cart[itemName].displayName;
      var price = _header["default"].cart[itemName].price;
      var itemTotal = price * itemQty;
      return /*#__PURE__*/_react["default"].createElement(_LineItem["default"], {
        key: "".concat(itemName, "LineItem"),
        imgUrl: imgUrl,
        imgAlt: imgAlt,
        displayName: displayName,
        qty: itemQty,
        price: price,
        itemTotal: itemTotal
      });
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_components.Section, {
    style: summaryStyle
  }, /*#__PURE__*/_react["default"].createElement(_PurchaseSummaryTableHeading["default"], null), /*#__PURE__*/_react["default"].createElement(_LineBreak["default"], null), createLineItems());
};
var _default = exports["default"] = PurchaseSummary;