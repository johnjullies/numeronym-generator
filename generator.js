'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var InputForm = function (_React$Component) {
  _inherits(InputForm, _React$Component);

  function InputForm(props) {
    _classCallCheck(this, InputForm);

    var _this = _possibleConstructorReturn(this, (InputForm.__proto__ || Object.getPrototypeOf(InputForm)).call(this, props));

    _this.state = {
      value: '',
      result: ''
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(InputForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        value: event.target.value,
        result: this.handleInput(event.target.value)
      });
    }
  }, {
    key: 'handleInput',
    value: function handleInput(inputStr) {
      if (inputStr.length < 3) {
        return inputStr;
      } else {
        return '' + inputStr.charAt(0) + (inputStr.length - 2) + inputStr.charAt(inputStr.length - 1);
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'label',
          null,
          'Input:',
          React.createElement('input', { type: 'text', value: this.state.value, onChange: this.handleChange })
        ),
        React.createElement(
          'p',
          null,
          this.state.result
        )
      );
    }
  }]);

  return InputForm;
}(React.Component);

var domContainer = document.getElementById('input-box');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(InputForm, null));