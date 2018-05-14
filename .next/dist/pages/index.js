"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _layout = require("../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _routes = require("../routes");

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\projects\\kickstarter-react\\pages\\index.js?entry";

var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = { campaignList: '' }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: "componentDidMount",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;

                                this.setState({ campaignList: campaigns });

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref2.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: "renderCardComponent",
        value: function renderCardComponent() {
            var campaignList = this.state.campaignList.toString().split(',');

            var items = campaignList.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, _react2.default.createElement("a", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, "View Campaigns")),
                    fluid: true
                };
            });
            return items;
        }
    }, {
        key: "render",
        value: function render() {
            var paddingtop = {
                'padding-top': '20px'
            };
            return _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }), _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement("h3", { style: paddingtop, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, "Campaign List"), _react2.default.createElement(_semanticUiReact.Grid, { style: this.props.paddingtop, stackable: true, columns: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, "      ", _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Group, { items: this.renderCardComponent(), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), "      "), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { size: "large", icon: true, labelPosition: "right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, "Add Campaign", _react2.default.createElement(_semanticUiReact.Icon, { name: "right add", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }))))))));
        }
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJJY29uIiwiQ29udGFpbmVyIiwiQ2FtcGFpZ25JbmRleCIsInN0YXRlIiwiY2FtcGFpZ25MaXN0IiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsImNhbXBhaWducyIsInNldFN0YXRlIiwidG9TdHJpbmciLCJzcGxpdCIsIml0ZW1zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJwYWRkaW5ndG9wIiwicHJvcHMiLCJyZW5kZXJDYXJkQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOztBQUNuQixBQUFTLEFBQU0sQUFBTSxBQUFPLEFBQUs7Ozs7OztJLEFBQzNCOzs7Ozs7Ozs7Ozs7Ozs4TkFDRixBLFFBQVEsRUFBRSxjLEFBQUYsQUFBZ0I7Ozs7Ozs7Ozs7Ozs7dUNBRUksa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBLEFBQXVDOztpQ0FBekQ7QSxxREFDTjs7cUNBQUEsQUFBSyxTQUFTLEVBQUUsY0FBaEIsQUFBYyxBQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUVaLEFBQ2xCO2dCQUFJLGVBQWUsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFYLEFBQXdCLFdBQXhCLEFBQW1DLE1BQXRELEFBQW1CLEFBQXlDLEFBRTVEOztnQkFBSSxxQkFBUSxBQUFhLElBQUksbUJBQVcsQUFDcEM7OzRCQUFPLEFBQ0ssQUFDWjtpREFBYyxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3NDQUEzQjt3Q0FBQSxBQUFzQztBQUF0QztxQkFBQSxrQkFBc0MsY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHVCQUY3QyxBQUVPLEFBQXNDLEFBQ2hEOzJCQUhKLEFBQU8sQUFHSSxBQUVkO0FBTFUsQUFDSDtBQUZSLEFBQVksQUFPWixhQVBZO21CQU9aLEFBQU8sQUFFVjs7OztpQ0FDUSxBQUNMO2dCQUFJOytCQUFKLEFBQWUsQUFDRyxBQUVsQjtBQUhlLEFBQ1g7bUNBRUksY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSztBQUFMO0FBQUEsYUFBQSxrQkFBSyxBQUFDOzs4QkFBRDtnQ0FBTCxBQUFLLEFBQVU7QUFBVjtBQUFBLGdDQUFVLEFBQUM7OzhCQUFEO2dDQUFBLEFBQVc7QUFBWDtBQUFBLCtCQUFXLGNBQUEsUUFBSyxPQUFMLEFBQVk7OEJBQVo7Z0NBQUE7QUFBQTtlQUFYLEFBQVcsQUFBMEMsa0NBQUEsQUFBQyx1Q0FBSyxPQUFPLEtBQUEsQUFBSyxNQUFsQixBQUF3QixZQUFhLFdBQXJDLE1BQStDLFNBQS9DLEFBQXdEOzhCQUF4RDtnQ0FBQTtBQUFBO2VBQW1FLDBCQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQy9JO0FBRCtJOzZDQUMvSSxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFPLEtBQW5CLEFBQW1CLEFBQUs7OEJBQXhCO2dDQUQrSSxBQUMvSTtBQUFBO2dCQUQ0RSxBQUFtRSxBQUUvSSwyQkFBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUF1QjtBQUF2QjsrQkFBdUIsQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFBNkI7QUFBN0I7K0JBQTZCLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUc7QUFBSDtBQUFBLCtCQUFHLEFBQUMseUNBQU8sTUFBUixBQUFhLFNBQVEsTUFBckIsTUFBMEIsZUFBMUIsQUFBd0M7OEJBQXhDO2dDQUFBO0FBQUE7ZUFFdkQsZ0NBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7OEJBQVg7Z0NBSkEsQUFBUSxBQUFlLEFBQXFELEFBRTVFLEFBQXVCLEFBQTZCLEFBQUcsQUFFdkQsQUFFSDtBQUZHOzs7Ozs7QUEzQm9CLEEsQUFnQzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L3Byb2plY3RzL2tpY2tzdGFydGVyLXJlYWN0In0=