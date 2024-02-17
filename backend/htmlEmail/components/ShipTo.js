"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ShipTo = function ShipTo(_ref) {
  var name = _ref.name,
    address = _ref.address,
    city = _ref.city,
    stateProvince = _ref.stateProvince,
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
  var wordWrapStyle = _objectSpread(_objectSpread({}, bodyStyle), {}, {
    wordBreak: "break-word"
  });
  return /*#__PURE__*/_react["default"].createElement(_components.Column, null, /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: headingStyle
  }, heading), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: bodyStyle
  }, name), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: bodyStyle
  }, address), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: wordWrapStyle
  }, "".concat(city, ", ").concat(stateProvince, " ").concat(zipCode)), /*#__PURE__*/_react["default"].createElement(_components.Text, {
    style: bodyStyle
  }, country));
};
var _default = exports["default"] = ShipTo;