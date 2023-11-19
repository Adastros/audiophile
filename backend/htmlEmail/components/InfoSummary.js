"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
var _ShipTo = _interopRequireDefault(require("./ShipTo"));
var _PaymentMethod = _interopRequireDefault(require("./PaymentMethod"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var InfoSummary = function InfoSummary(_ref) {
  var name = _ref.name,
    address = _ref.address,
    city = _ref.city,
    country = _ref.country,
    zipCode = _ref.zipCode,
    method = _ref.method;
  // Inline Styles
  var sectionStyle = {
    padding: "24px 0"
  };
  return /*#__PURE__*/_react["default"].createElement(_components.Section, {
    style: sectionStyle
  }, /*#__PURE__*/_react["default"].createElement(_components.Row, null, /*#__PURE__*/_react["default"].createElement(_ShipTo["default"], {
    name: name,
    address: address,
    city: city,
    country: country,
    zipCode: zipCode,
    method: method
  }), /*#__PURE__*/_react["default"].createElement(_PaymentMethod["default"], {
    method: method
  })));
};
var _default = exports["default"] = InfoSummary;