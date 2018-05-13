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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\kickstarter-test\\pages\\campaigns\\show.js?entry';


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
                    lineNumber: 49
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
                    lineNumber: 60
                }
            }, _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }), _react2.default.createElement(_semanticUiReact.Container, { style: paddingtop, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Campaign Details'), ' ', _react2.default.createElement(_semanticUiReact.Grid, { stackable: true, columns: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_contributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYXJkIiwiQ29udGFpbmVyIiwiR3JpZCIsIkNhbXBhaWduIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwibWV0YSIsInN0eWxlIiwidXRpbHMiLCJmcm9tV2VpIiwicGFkZGluZ3RvcCIsIm1hcmdpbnRvcCIsImNvbnNvbGUiLCJsb2ciLCJhZGRyZXNzIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQVc7O0FBQzFCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7Ozs7Ozs7O0lBQ3JCLEE7Ozs7Ozs7Ozs7O3NDQWFZO3lCQUN1RSxLQUR2RSxBQUM0RTtnQkFENUUsQUFDRiw2QkFERSxBQUNGO2dCQURFLEFBQ21CLGlCQURuQixBQUNtQjtnQkFEbkIsQUFDNEIsdUJBRDVCLEFBQzRCO2dCQUQ1QixBQUMyQyx3QkFEM0MsQUFDMkM7Z0JBRDNDLEFBQzJELGlCQUQzRCxBQUMyRCxBQUNyRTs7Z0JBQU07d0JBQVMsQUFDSCxBQUNSOzZCQUZXLEFBRUUsQUFDYjtzQkFIVyxBQUdMLEFBQ047dUJBQU8sRUFBRSxnQkFKQyxBQUFDLEFBSUosQUFBa0I7QUFKZCxBQUNYLGFBRFU7d0JBS1gsQUFDUyxBQUNSOzZCQUZELEFBRWMsQUFDYjtzQkFIRCxBQUdPLEFBQ047dUJBQU8sRUFBRSxnQkFUQyxBQUtYLEFBSVEsQUFBa0I7QUFKMUIsQUFDQzt3QkFJRCxBQUNTLEFBQ1I7NkJBRkQsQUFFYyxBQUNiO3NCQUhELEFBR08sQUFDTjt1QkFBTyxFQUFFLGdCQWRDLEFBVVgsQUFJUSxBQUFrQjtBQUoxQixBQUNDO3dCQUlELEFBQ1MsQUFDUjs2QkFGRCxBQUVjLEFBQ2I7c0JBSEQsQUFHTyxBQUNOO3VCQUFPLEVBQUUsZ0JBbkJDLEFBZVgsQUFJUSxBQUFrQjtBQUoxQixBQUNDO3dCQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ1QixBQUNTLEFBQTRCLEFBQ3BDOzZCQUZELEFBRWMsQUFDYjtzQkFIRCxBQUdPLEFBQ047dUJBQU8sRUFBRSxnQkF4QmIsQUFBYyxBQW9CWCxBQUlRLEFBQWtCLEFBRzdCO0FBUEcsQUFDQztpREFNRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBRVY7QUFGVTthQUFBOzs7O2lDQUdGLEFBQ0w7Z0JBQUk7K0JBQUosQUFBaUIsQUFDRSxBQUVuQjtBQUhpQixBQUNiO2dCQUVBOzhCQUFKLEFBQWdCLEFBQ0UsQUFFbEI7QUFIZ0IsQUFDWjtvQkFFSixBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO21DQUFRLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLGFBQUEsa0JBQUssQUFBQzs7OEJBQUQ7Z0NBQUwsQUFBSyxBQUFpQjtBQUFqQjtBQUFBLGdDQUFpQixBQUFDLDRDQUFVLE9BQVgsQUFBa0I7OEJBQWxCO2dDQUFBLEFBQThCO0FBQTlCOytCQUE4QixjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBOUIsQUFBOEIscUJBQTBCLHFCQUFBLEFBQUMsdUNBQUssV0FBTixNQUFnQixTQUFoQixBQUF5Qjs4QkFBekI7Z0NBQUEsQUFBOEI7QUFBOUI7K0JBQStCLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQXlCO0FBQXpCO29CQUE5QixBQUE4QixBQUF5QixBQUFLLEFBQTRCLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQXVCO0FBQXZCOytCQUF1QixBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FBck0sQUFBUSxBQUFzQixBQUF3RCxBQUF3RixBQUF1QixBQUN4TTtBQUR3TTs7Ozs7O2lILEFBcEQ1Szs7Ozs7aUNBQ25CO0EsMkNBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQTs7dUNBQ2hCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCLEE7O2lDQUE5QztBOzs2Q0FFTyxNQUFBLEFBQU0sTUFEWixBQUNrQixBQUNyQjt5REFBcUIsUUFGbEIsQUFFa0IsQUFBUSxBQUM3Qjs2Q0FBUyxRQUhOLEFBR00sQUFBUSxBQUNqQjttREFBZSxRQUpaLEFBSVksQUFBUSxBQUN2QjtvREFBZ0IsUUFMYixBQUthLEFBQVEsQUFDeEI7NkNBQVMsUUFOTixBQU1NLEFBQVEsQTtBQU5kLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMZSxBLEFBd0QzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L3Byb2plY3RzL2tpY2tzdGFydGVyLXRlc3QifQ==