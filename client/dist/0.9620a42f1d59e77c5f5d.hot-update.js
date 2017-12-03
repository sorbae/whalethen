webpackHotUpdate(0,{

/***/ 439:
/*!***********************************!*\
  !*** ./client/src/CommentBox.jsx ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _axios = __webpack_require__(/*! axios */ 13);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _CommentList = __webpack_require__(/*! ./CommentList */ 440);\n\nvar _CommentList2 = _interopRequireDefault(_CommentList);\n\nvar _CommentForm = __webpack_require__(/*! ./CommentForm */ 442);\n\nvar _CommentForm2 = _interopRequireDefault(_CommentForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CommentBox = function (_React$Component) {\n  _inherits(CommentBox, _React$Component);\n\n  function CommentBox(props) {\n    _classCallCheck(this, CommentBox);\n\n    var _this = _possibleConstructorReturn(this, (CommentBox.__proto__ || Object.getPrototypeOf(CommentBox)).call(this, props));\n\n    _this.state = {\n      comments: []\n    };\n    _this.getComments = _this.getComments.bind(_this);\n    _this.addComment = _this.addComment.bind(_this);\n    _this.saveComment = _this.saveComment.bind(_this);\n    return _this;\n  }\n\n  _createClass(CommentBox, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.getComments();\n    }\n  }, {\n    key: 'getComments',\n    value: function getComments() {\n      var _this2 = this;\n\n      var _props = this.props,\n          event = _props.event,\n          timelineId = _props.timelineId,\n          day = _props.day,\n          getNumComments = _props.getNumComments;\n\n      _axios2.default.get('/comments/' + timelineId + '/' + day.day + '/' + event._id).then(function (comments) {\n        if (_this2.state.comments !== comments) {\n          _this2.setState({ comments: comments.data });\n        }\n      }).then(function () {\n        return getNumComments(_this2.state.comments.length);\n      }).catch(function (err) {\n        return console.error('Error retrieving comments:', err);\n      });\n    }\n  }, {\n    key: 'saveComment',\n    value: function saveComment(text) {\n      var options = {\n        eventId: this.props.event._id,\n        timelineId: this.props.timelineId,\n        day: this.props.day.day,\n        username: this.props.user.username,\n        text: text\n      };\n      return _axios2.default.post('/newComment', options);\n    }\n  }, {\n    key: 'addComment',\n    value: function addComment(e) {\n      var _this3 = this;\n\n      if (e.key === 'Enter') {\n        if (this.props.user) {\n          this.props.increment();\n          this.saveComment(e.target.value).then(function () {\n            return _this3.getComments();\n          }).catch(function (err) {\n            return console.error('Error creating a comment: ', err);\n          });\n          e.target.value = '';\n        } else {\n          e.target.value = 'Login to comment';\n        }\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'comment-box' },\n        _react2.default.createElement(_CommentList2.default, { comments: this.state.comments }),\n        _react2.default.createElement(_CommentForm2.default, { addComment: this.addComment })\n      );\n    }\n  }]);\n\n  return CommentBox;\n}(_react2.default.Component);\n\nCommentBox.propTypes = {\n  user: _propTypes2.default.object,\n  event: _propTypes2.default.object.isRequired,\n  timelineId: _propTypes2.default.string.isRequired,\n  day: _propTypes2.default.object.isRequired,\n  increment: _propTypes2.default.func.isRequired,\n  getNumComments: _propTypes2.default.func.isRequired\n};\n\nexports.default = CommentBox;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDM5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvQ29tbWVudEJveC5qc3g/Njk4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSAnLi9Db21tZW50TGlzdCc7XG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XG5cbmNsYXNzIENvbW1lbnRCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29tbWVudHM6IFtdLFxuICAgIH07XG4gICAgdGhpcy5nZXRDb21tZW50cyA9IHRoaXMuZ2V0Q29tbWVudHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZENvbW1lbnQgPSB0aGlzLmFkZENvbW1lbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNhdmVDb21tZW50ID0gdGhpcy5zYXZlQ29tbWVudC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRDb21tZW50cygpO1xuICB9XG5cbiAgZ2V0Q29tbWVudHMoKSB7XG4gICAgY29uc3QgeyBldmVudCwgdGltZWxpbmVJZCwgZGF5LCBnZXROdW1Db21tZW50cyB9ID0gdGhpcy5wcm9wcztcbiAgICBheGlvcy5nZXQoYC9jb21tZW50cy8ke3RpbWVsaW5lSWR9LyR7ZGF5LmRheX0vJHtldmVudC5faWR9YClcbiAgICAgIC50aGVuKChjb21tZW50cykgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb21tZW50cyAhPT0gY29tbWVudHMpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tbWVudHM6IGNvbW1lbnRzLmRhdGEgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiBnZXROdW1Db21tZW50cyh0aGlzLnN0YXRlLmNvbW1lbnRzLmxlbmd0aCkpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldHJpZXZpbmcgY29tbWVudHM6JywgZXJyKSk7XG4gIH1cblxuICBzYXZlQ29tbWVudCh0ZXh0KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGV2ZW50SWQ6IHRoaXMucHJvcHMuZXZlbnQuX2lkLFxuICAgICAgdGltZWxpbmVJZDogdGhpcy5wcm9wcy50aW1lbGluZUlkLFxuICAgICAgZGF5OiB0aGlzLnByb3BzLmRheS5kYXksXG4gICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lLFxuICAgICAgdGV4dCxcbiAgICB9O1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbmV3Q29tbWVudCcsIG9wdGlvbnMpXG4gIH1cblxuICBhZGRDb21tZW50KGUpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnVzZXIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5pbmNyZW1lbnQoKTtcbiAgICAgICAgdGhpcy5zYXZlQ29tbWVudChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmdldENvbW1lbnRzKCkpXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBhIGNvbW1lbnQ6ICcsIGVycikpO1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnTG9naW4gdG8gY29tbWVudCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnQtYm94XCI+XG4gICAgICAgIDxDb21tZW50TGlzdCBjb21tZW50cz17dGhpcy5zdGF0ZS5jb21tZW50c30gLz5cbiAgICAgICAgPENvbW1lbnRGb3JtIGFkZENvbW1lbnQ9e3RoaXMuYWRkQ29tbWVudH0gLz5cbiAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuQ29tbWVudEJveC5wcm9wVHlwZXMgPSB7XG4gIHVzZXI6IHByb3BUeXBlcy5vYmplY3QsXG4gIGV2ZW50OiBwcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRpbWVsaW5lSWQ6IHByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF5OiBwcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGluY3JlbWVudDogcHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0TnVtQ29tbWVudHM6IHByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRCb3g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3NyYy9Db21tZW50Qm94LmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBUEE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7OztBQTFEQTtBQUNBO0FBNERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///439\n");

/***/ })

})