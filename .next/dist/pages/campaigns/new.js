'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\projects\\kickstarter-react\\pages\\campaigns\\new.js?entry';


var CampaignNewComponent = function (_Component) {
    (0, _inherits3.default)(CampaignNewComponent, _Component);

    function CampaignNewComponent() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNewComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNewComponent.__proto__ || (0, _getPrototypeOf2.default)(CampaignNewComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var minimumContribution, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });
                                _context.prev = 2;
                                minimumContribution = _this.state.minimumContribution;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return _factory2.default.methods.createCampaign(minimumContribution).send({ from: accounts[0] });

                            case 9:
                                _routes.Router.pushRoute("/");
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:
                                _this.setState({ loading: false });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNewComponent, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var paddingtop = {
                'padding-top': '20px'
            };

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }), _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('h3', { style: paddingtop, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'Add New Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, { label: 'wei', onChange: function onChange(event) {
                    _this3.setState({ minimumContribution: event.target.value });return event.target.value;
                }, labelPosition: 'right', placeholder: '100', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'Submit'), _react2.default.createElement(_semanticUiReact.Message, { error: true, negative: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Message.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'Oopss!!!'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, this.state.errorMessage)))));
        }
    }]);

    return CampaignNewComponent;
}(_react.Component);

exports.default = CampaignNewComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIklucHV0IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRm9ybSIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIkNhbXBhaWduTmV3Q29tcG9uZW50Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInBhZGRpbmd0b3AiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU8sQUFBUSxBQUFXLEFBQU07O0FBQ3pDLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJLEFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs0TyxBQUNqQjtpQ0FBUSxBQUNpQixBQUNyQjswQkFGSSxBQUVVLEFBQ2Q7cUJBSEksQUFHSyxBO0FBSEwsQUFDSixpQixBQUlKO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDt5Q0FBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBQ047c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQUssY0FGdkIsQUFFUCxBQUFjLEFBQTZCO2dEQUVuQztBQUpELHNEQUl1QixNQUFBLEFBQUssTUFKNUIsQUFJa0M7Z0RBSmxDO3VDQUtvQixjQUFBLEFBQUssSUFMekIsQUFLb0IsQUFBUzs7aUNBQTFCO0FBTEgsb0RBQUE7Z0RBQUE7dUNBTUcsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGVBQWhCLEFBQStCLHFCQUEvQixBQUFvRCxLQUFLLEVBQUUsTUFBTSxTQU5wRSxBQU1HLEFBQXlELEFBQVEsQUFBUzs7aUNBQ2hGOytDQUFBLEFBQU8sVUFQSixBQU9ILEFBQWlCO2dEQVBkO0FBQUE7O2lDQUFBO2dEQUFBO2dFQVVIOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBVjNCLEFBVUgsQUFBYyxBQUFvQjs7aUNBRXRDO3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBWlQsQUFZUCxBQUFjLEFBQVc7O2lDQVpsQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQWNGO3lCQUNMOztnQkFBSTsrQkFBSixBQUFpQixBQUNFLEFBR25CO0FBSmlCLEFBQ2I7O21DQUdJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLGFBQUEsa0JBQUssQUFBQzs7OEJBQUQ7Z0NBQUwsQUFBSyxBQUFVO0FBQVY7QUFBQSxnQ0FBVSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUFXO0FBQVg7QUFBQSwrQkFBVyxjQUFBLFFBQUksT0FBSixBQUFXOzhCQUFYO2dDQUFBO0FBQUE7ZUFBWCxBQUFXLEFBQzlCLHFDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFBWTtBQUFaO0FBQUEsK0JBQVksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVosQUFBWSxBQUFtQyx5Q0FBQSxBQUFDLHdDQUFNLE9BQVAsQUFBYSxPQUFNLFVBQVUseUJBQVMsQUFBRTsyQkFBQSxBQUFLLFNBQVMsRUFBRSxxQkFBcUIsTUFBQSxBQUFNLE9BQTNDLEFBQWMsQUFBb0MsU0FBVSxPQUFPLE1BQUEsQUFBTSxPQUFiLEFBQW9CLEFBQVE7QUFBaEksbUJBQWtJLGVBQWxJLEFBQWdKLFNBQVEsYUFBeEosQUFBb0s7OEJBQXBLO2dDQURuRCxBQUNJLEFBQStDLEFBQy9DO0FBRCtDO2lDQUMvQyxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7OEJBQUE7Z0NBQUE7QUFBQTtlQUZKLEFBRUksQUFDQSwyQkFBQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxVQUFmOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHlCQUFBLEFBQVM7OzhCQUFUO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw2QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BTnJCLEFBQVEsQUFBZSxBQUNuQixBQUdJLEFBRUksQUFBZSxBQUc5Qjs7Ozs7QUFsQzZDLEE7O2tCQUE3QixBIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9wcm9qZWN0cy9raWNrc3RhcnRlci1yZWFjdCJ9