"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@react-email/components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Header = function Header() {
  var baseUrl = process.env.REACT_APP_CLOUDINARY_BASE_URL;

  // Inline Style
  var sectionStyle = {
    height: "100px",
    backgroundColor: "black"
  };
  var imgStyle = {
    paddingLeft: "2rem",
    verticalAlign: "middle"
  };
  return /*#__PURE__*/_react["default"].createElement(_components.Section, {
    style: sectionStyle
  }, /*#__PURE__*/_react["default"].createElement(_components.Link, {
    href: "#",
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_components.Img, {
    src: "".concat(baseUrl, "assets/email/logo"),
    alt: "audiophile logo",
    style: imgStyle,
    height: "25",
    width: "143"
  })));
};
var _default = exports["default"] = Header;