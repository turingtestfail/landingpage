"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Input = require("../presentational/Input");

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormContainer = function (_Component) {
  _inherits(FormContainer, _Component);

  function FormContainer() {
    _classCallCheck(this, FormContainer);

    var _this = _possibleConstructorReturn(this, (FormContainer.__proto__ || Object.getPrototypeOf(FormContainer)).call(this));

    _this.state = {
      seo_title: ""
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(FormContainer, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.id, event.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var seo_title = this.state.seo_title;

      return _react2.default.createElement(
        "form",
        { id: "article-form" },
        _react2.default.createElement(_Input2.default, {
          text: "SEO title",
          label: "seo_title",
          type: "text",
          id: "seo_title",
          value: seo_title,
          handleChange: this.handleChange
        })
      );
    }
  }]);

  return FormContainer;
}(_react.Component);

exports.default = FormContainer;

var wrapper = document.getElementById("create-article-form");
wrapper ? _reactDom2.default.render(_react2.default.createElement(FormContainer, null), wrapper) : false;