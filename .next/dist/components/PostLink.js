'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostLink = function PostLink(props) {
  return _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/post?title=' + props.title }, _react2.default.createElement('a', null, props.title)));
};

exports.default = PostLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdExpbmsuanMiXSwibmFtZXMiOlsiTGluayIsIlBvc3RMaW5rIiwicHJvcHMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBTSxXQUFXLFNBQVgsQUFBVyxTQUFDLEFBQUQsT0FBVyxBQUMxQjtTQUNFLGdCQUFBLGNBQUEsTUFDRSxzQkFBQyxBQUFELGdDQUFNLE1BQU0saUJBQWdCLE1BQU0sQUFBbEMsQUFDRSx5QkFBQSxjQUFBLEtBQUksWUFBTSxBQUFWLEFBREYsQUFERixBQURGLEFBU0Q7QUFWRCxBQVlBOztrQkFBZSxBQUFmIiwiZmlsZSI6IlBvc3RMaW5rLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdm5tdHJuL0Rlc2t0b3AvUHJvamVjdHMvajdfMjAxOC9wcmFjdGljZS9wb3N0L3Bvc3QtbmV4dCJ9