'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\projects\\kickstarter-react\\components\\header.js';


var MenuExampleStackable = function (_Component) {
    (0, _inherits3.default)(MenuExampleStackable, _Component);

    function MenuExampleStackable() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, MenuExampleStackable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuExampleStackable.__proto__ || (0, _getPrototypeOf2.default)(MenuExampleStackable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleItemClick = function (e, _ref2) {
            var name = _ref2.name;
            return _this.setState({ activeItem: name });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MenuExampleStackable, [{
        key: 'render',
        value: function render() {
            var activeItem = this.state.activeItem;

            return _react2.default.createElement(_semanticUiReact.Menu, { stackable: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement('a', { className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement('img', { src: 'https://react.semantic-ui.com/logo.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }), ' \xA0\xA0', _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, 'Kickstarter'))), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, 'Campaign')), _react2.default.createElement(_semanticUiReact.Menu.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, '+'))));
        }
    }]);

    return MenuExampleStackable;
}(_react.Component);

exports.default = MenuExampleStackable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJMaW5rIiwiTWVudUV4YW1wbGVTdGFja2FibGUiLCJzdGF0ZSIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJuYW1lIiwic2V0U3RhdGUiLCJhY3RpdmVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQVMsQUFBWTs7Ozs7OztJQUNBLEE7Ozs7Ozs7Ozs7Ozs7OzRPQUNqQixBLFEsQUFBUSxVLEFBRVIsa0JBQWtCLFVBQUEsQUFBQyxVQUFEO2dCQUFBLEFBQU0sYUFBTixBQUFNO21CQUFXLE1BQUEsQUFBSyxTQUFTLEVBQUUsWUFBakMsQUFBaUIsQUFBYyxBQUFjO0E7Ozs7O2lDQUV0RDtnQkFBQSxBQUNHLGFBQWUsS0FEbEIsQUFDdUIsTUFEdkIsQUFDRyxBQUVSOzttQ0FDSSxBQUFDLHVDQUFLLFdBQU47OEJBQUE7Z0NBQUEsQUFFSTtBQUZKO2FBQUEsa0JBRUksQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWE7OEJBQWI7Z0NBQUEsQUFDSTtBQURKO3NEQUNTLEtBQUwsQUFBUzs4QkFBVDtnQ0FESixBQUNJO0FBQUE7Z0JBQWlFLDZCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUo3RSxBQUVJLEFBQ0ksQUFDcUUsQUFLekUsa0NBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUE7QUFBQTtlQUZSLEFBQ0ksQUFDSSxBQUlKLDhCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUE7QUFBQTtlQWpCaEIsQUFDSSxBQVNJLEFBTUksQUFDSSxBQU9uQjs7Ozs7QUFoQzZDLEE7O2tCQUE3QixBIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9qZWN0cy9raWNrc3RhcnRlci1yZWFjdCJ9