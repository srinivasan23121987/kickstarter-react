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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _contributeForm = require('../../components/contributeForm');

var _contributeForm2 = _interopRequireDefault(_contributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\projects\\kickstarter-react\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                minimumContribution = _props.minimumContribution,
                balance = _props.balance,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount,
                manager = _props.manager;

            var items = [{
                header: manager,
                description: 'Address of manager',
                meta: 'The manager created this campaign and can create request to withdraw money',
                style: { 'overflowWrap': 'break-word' }
            }, {
                header: minimumContribution,
                description: 'Minimum Contribution (wei)',
                meta: 'You must contribute atleast this much wei to become a approver',
                style: { 'overflowWrap': 'break-word' }
            }, {
                header: requestsCount,
                description: 'Request Count',
                meta: 'Request to withdraw money, No of request created by Manager to withdraw money',
                style: { 'overflowWrap': 'break-word' }
            }, {
                header: approversCount,
                description: 'Approvers Count',
                meta: 'Approvers who have approve the money request',
                style: { 'overflowWrap': 'break-word' }
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                description: 'Campaign Balance',
                meta: 'Balance money required to spend this campaign',
                style: { 'overflowWrap': 'break-word' }
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var paddingtop = {
                'padding-top': '20px'
            };
            var margintop = {
                'margin-top': '10px'
            };
            console.log(this.props.address);
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }), _react2.default.createElement(_semanticUiReact.Container, { style: paddingtop, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Campaign Details'), ' ', _react2.default.createElement(_semanticUiReact.Grid, { stackable: true, columns: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, this.renderCards(), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { style: margintop, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'View Request'))))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement(_contributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            })))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYXJkIiwiQ29udGFpbmVyIiwiR3JpZCIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwiaXRlbXMiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJzdHlsZSIsInV0aWxzIiwiZnJvbVdlaSIsInBhZGRpbmd0b3AiLCJtYXJnaW50b3AiLCJjb25zb2xlIiwibG9nIiwiYWRkcmVzcyIsInJlbmRlckNhcmRzIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFXLEFBQU07O0FBQ2hDLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUNmOzs7Ozs7Ozs7OztzQ0FhWTt5QkFDdUUsS0FEdkUsQUFDNEU7Z0JBRDVFLEFBQ0YsNkJBREUsQUFDRjtnQkFERSxBQUNtQixpQkFEbkIsQUFDbUI7Z0JBRG5CLEFBQzRCLHVCQUQ1QixBQUM0QjtnQkFENUIsQUFDMkMsd0JBRDNDLEFBQzJDO2dCQUQzQyxBQUMyRCxpQkFEM0QsQUFDMkQsQUFDckU7O2dCQUFNO3dCQUFTLEFBQ0gsQUFDUjs2QkFGVyxBQUVFLEFBQ2I7c0JBSFcsQUFHTCxBQUNOO3VCQUFPLEVBQUUsZ0JBSkMsQUFBQyxBQUlK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