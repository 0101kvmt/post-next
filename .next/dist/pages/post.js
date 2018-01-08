'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, ' ', props.url.query.title, ' '), _react2.default.createElement('p', null, ' this is the content of the page '));
};

exports.default = function (props) {
  return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement(Content, { url: props.url }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiQ29udGVudCIsInByb3BzIiwidXJsIiwicXVlcnkiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFtQixBQUFuQjs7Ozs7O0FBRUEsSUFBTSxVQUFVLFNBQVYsQUFBVSxRQUFDLEFBQUQsT0FBVyxBQUN6QjtTQUNFLGdCQUFBLGNBQUEsT0FDRSxzQkFBQSxjQUFBLE1BQUEsTUFBTSxXQUFNLEFBQU4sSUFBVSxBQUFWLE1BQWdCLEFBQXRCLE9BQUEsQUFERixBQUVFLHNCQUFBLGNBQUEsS0FBQSxNQUFBLEFBRkYsQUFERixBQU1EO0FBUEQsQUFRQTs7a0JBQWUsVUFBQyxBQUFELE9BQVcsQUFDeEI7U0FDRSxnQkFBQyxBQUFELGdDQUNFLG9DQUFDLEFBQUQsV0FBUyxLQUFLLE1BQU0sQUFBcEIsQUFERixBQURGLEFBTUQ7QUFQRCIsImZpbGUiOiJwb3N0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdm5tdHJuL0Rlc2t0b3AvUHJvamVjdHMvajdfMjAxOC9wcmFjdGljZS9wb3N0L3Bvc3QtbmV4dCJ9