"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(_ref) {
  var label = _ref.label,
      text = _ref.text,
      type = _ref.type,
      id = _ref.id,
      value = _ref.value,
      handleChange = _ref.handleChange;
  return _react2.default.createElement(
    "div",
    { className: "form-group" },
    _react2.default.createElement(
      "label",
      { htmlFor: label },
      text
    ),
    _react2.default.createElement("input", {
      type: type,
      className: "form-control",
      id: id,
      value: value,
      onChange: handleChange,
      required: true
    })
  );
};
Input.propTypes = {
  label: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired,
  handleChange: _propTypes2.default.func.isRequired
};
exports.default = Input;