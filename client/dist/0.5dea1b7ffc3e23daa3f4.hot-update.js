webpackHotUpdate(0,{

/***/ 80:
/*!****************************!*\
  !*** ./client/src/App.jsx ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ 13);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _moment = __webpack_require__(/*! moment */ 0);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _shortid = __webpack_require__(/*! shortid */ 287);\n\nvar _shortid2 = _interopRequireDefault(_shortid);\n\nvar _reactDnd = __webpack_require__(/*! react-dnd */ 200);\n\nvar _reactDndHtml5Backend = __webpack_require__(/*! react-dnd-html5-backend */ 380);\n\nvar _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 42);\n\nvar _Search = __webpack_require__(/*! ./Search */ 408);\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nvar _Timeline = __webpack_require__(/*! ./Timeline */ 413);\n\nvar _Timeline2 = _interopRequireDefault(_Timeline);\n\nvar _TimelineInputBox = __webpack_require__(/*! ./TimelineInputBox */ 418);\n\nvar _TimelineInputBox2 = _interopRequireDefault(_TimelineInputBox);\n\nvar _TimelineLookup = __webpack_require__(/*! ./TimelineLookup */ 419);\n\nvar _TimelineLookup2 = _interopRequireDefault(_TimelineLookup);\n\nvar _StartDateBox = __webpack_require__(/*! ./StartDateBox */ 420);\n\nvar _StartDateBox2 = _interopRequireDefault(_StartDateBox);\n\nvar _EndDateBox = __webpack_require__(/*! ./EndDateBox */ 421);\n\nvar _EndDateBox2 = _interopRequireDefault(_EndDateBox);\n\nvar _CreateEventBox = __webpack_require__(/*! ./CreateEventBox */ 227);\n\nvar _CreateEventBox2 = _interopRequireDefault(_CreateEventBox);\n\nvar _MapView = __webpack_require__(/*! ./MapView */ 422);\n\nvar _MapView2 = _interopRequireDefault(_MapView);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n    _this.state = {\n      isLoggedIn: false,\n      userInfo: '',\n      timelineData: [],\n      timelineName: '', // temp until we get some more data built up\n      startDate: '',\n      endDate: '',\n      numberOfDays: 0,\n      timelineId: '', // temp until we get a way to produce these\n      newEvent: '',\n      newEventAddress: '',\n      today: '',\n      view: 'default'\n    };\n\n    _this.checkAuth = _this.checkAuth.bind(_this);\n    _this.onInputChange = _this.onInputChange.bind(_this);\n    _this.onEnter = _this.onEnter.bind(_this);\n    _this.addNewEvent = _this.addNewEvent.bind(_this);\n    _this.getTrip = _this.getTrip.bind(_this);\n    _this.handleId = _this.handleId.bind(_this);\n    _this.handleName = _this.handleName.bind(_this);\n    _this.onLookupEnter = _this.onLookupEnter.bind(_this);\n    _this.onCreateEnter = _this.onCreateEnter.bind(_this);\n    _this.handleNewEvent = _this.handleNewEvent.bind(_this);\n    _this.handleNewAddress = _this.handleNewAddress.bind(_this);\n    _this.createEvent = _this.createEvent.bind(_this);\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      // on init function to make get request to server\n      // temp using 1234 as the timelineId and test as timelineName\n      // this.getTrip();\n      this.checkAuth();\n      this.setDate();\n    }\n  }, {\n    key: 'onInputChange',\n    value: function onInputChange(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'onSubmit',\n    value: function onSubmit() {\n      var _this2 = this;\n\n      this.setState({ timelineId: _shortid2.default.generate() }, function () {\n        var start = (0, _moment2.default)(_this2.state.startDate);\n        var end = (0, _moment2.default)(_this2.state.endDate);\n        _this2.setState({ numberOfDays: end.diff(start, 'days') }, function () {\n          _axios2.default.post('/timeline', {\n            timelineId: _this2.state.timelineId,\n            timelineName: _this2.state.timelineName,\n            numberOfDays: _this2.state.numberOfDays\n          }).then(function () {\n            return _this2.getTrip();\n          }).catch(function (err) {\n            return console.error('error in submit ', err);\n          });\n        });\n      });\n    }\n  }, {\n    key: 'onToggleView',\n    value: function onToggleView() {\n      if (this.state.view === 'default') {\n        this.setState({\n          view: 'mapview'\n        });\n      } else if (this.state.view === 'mapview') {\n        this.setState({\n          view: 'default'\n        });\n      }\n    }\n  }, {\n    key: 'onEnter',\n    value: function onEnter(event) {\n      if (event.key === 'Enter') {\n        this.onSubmit();\n      }\n    }\n  }, {\n    key: 'onCreateEnter',\n    value: function onCreateEnter(event) {\n      if (event.key === 'Enter') {\n        this.createEvent();\n      }\n    }\n  }, {\n    key: 'onLookupEnter',\n    value: function onLookupEnter(event) {\n      if (event.key === 'Enter') {\n        this.getTrip();\n      }\n    }\n  }, {\n    key: 'setDate',\n    value: function setDate() {\n      var today = (0, _moment2.default)().format('L').split('/');\n      today = today[2] + '-' + today[0] + '-' + today[1];\n      this.setState({\n        today: today\n      });\n    }\n  }, {\n    key: 'getTrip',\n    value: function getTrip() {\n      var _this3 = this;\n\n      _axios2.default.get('/timeline/' + this.state.timelineName + '/' + this.state.timelineId).then(function (_ref) {\n        var data = _ref.data;\n\n        _this3.setState({\n          timelineData: data,\n          numberOfDays: data.length,\n          timelineId: data[0].timelineId,\n          timelineName: data[0].timelineName\n        });\n      }).catch(function (err) {\n        return console.error('Error getting trips ->', err);\n      });\n    }\n  }, {\n    key: 'checkAuth',\n    value: function checkAuth() {\n      var _this4 = this;\n\n      _axios2.default.get('/auth/checkAuth').then(function (_ref2) {\n        var data = _ref2.data;\n\n        _this4.setState({ isLoggedIn: data.isLoggedIn, userInfo: data.user });\n      });\n    }\n  }, {\n    key: 'handleId',\n    value: function handleId(e) {\n      this.setState({\n        timelineId: e.target.value\n      });\n    }\n  }, {\n    key: 'handleName',\n    value: function handleName(e) {\n      this.setState({\n        timelineName: e.target.value\n      });\n    }\n  }, {\n    key: 'handleNewEvent',\n    value: function handleNewEvent(e) {\n      this.setState({\n        newEvent: e.target.value\n      });\n    }\n  }, {\n    key: 'handleNewAddress',\n    value: function handleNewAddress(e) {\n      this.setState({\n        newEventAddress: e.target.value\n      });\n    }\n  }, {\n    key: 'addNewEvent',\n    value: function addNewEvent(event, selectedDay) {\n      var _this5 = this;\n\n      var day = Number(selectedDay);\n      _axios2.default.post('/entry', {\n        event: event,\n        timelineId: this.state.timelineId,\n        day: day,\n        timelineName: this.state.timelineId\n      }).then(function () {\n        return _this5.getTrip();\n      }).catch(function (err) {\n        return console.error('add event error: ', err);\n      });\n    }\n  }, {\n    key: 'createEvent',\n    value: function createEvent(day) {\n      var eventObj = {\n        name: this.state.newEvent,\n        address: this.state.newEventAddress,\n        votes: 0\n      };\n      this.addNewEvent(eventObj, day);\n    }\n  }, {\n    key: 'renderView',\n    value: function renderView() {\n      if (this.state.view === 'default') {\n        return _react2.default.createElement(_Timeline2.default, {\n          timelineData: this.state.timelineData,\n          timelineId: this.state.timelineId,\n          timelineName: this.state.timelineNamce,\n          onCreateEnter: this.onCreateEnter,\n          handleNewEvent: this.handleNewEvent,\n          handleNewAddress: this.handleNewAddress,\n          createEvent: this.createEvent,\n          getTrip: this.getTrip,\n          user: this.state.userInfo\n        });\n      } else if (this.state.view === 'mapview') {\n        return _react2.default.createElement(_MapView2.default, {\n          timelineId: this.state.timelineId\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this6 = this;\n\n      var buttonName = void 0;\n      if (this.state.view === 'default') {\n        buttonName = 'Map View';\n      } else {\n        buttonName = 'Day View';\n      }\n      return _react2.default.createElement(\n        'div',\n        { className: 'App' },\n        this.state.isLoggedIn ? _react2.default.createElement(\n          'div',\n          { className: 'nav-links' },\n          _react2.default.createElement('img', { src: this.state.userInfo.thumbnail, alt: 'user-thumbnail' }),\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/profile' },\n            this.state.userInfo.username\n          ),\n          _react2.default.createElement(\n            'a',\n            { href: '/auth/logout' },\n            'Logout'\n          )\n        ) : _react2.default.createElement(\n          'div',\n          { className: 'nav-links' },\n          _react2.default.createElement(\n            'a',\n            { href: '/auth/login' },\n            'Login'\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'title' },\n          'Whale Then..'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'timeline-background' },\n          _react2.default.createElement(\n            'div',\n            { className: 'container timelineParams' },\n            _react2.default.createElement(_TimelineInputBox2.default, {\n              onInput: this.onInputChange,\n              onEnter: this.onEnter\n            }),\n            _react2.default.createElement(_StartDateBox2.default, {\n              onInput: this.onInputChange,\n              onEnter: this.onEnter,\n              today: this.state.today\n            }),\n            _react2.default.createElement(_EndDateBox2.default, {\n              onInput: this.onInputChange,\n              onEnter: this.onEnter,\n              startDate: this.state.startDate\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'timeline-buttons' },\n              _react2.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                    return _this6.onSubmit();\n                  } },\n                'New Schedule'\n              ),\n              _react2.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                    return _this6.onToggleView();\n                  } },\n                buttonName\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          this.renderView()\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(_TimelineLookup2.default, {\n            handleId: this.handleId,\n            handleName: this.handleName,\n            getTrip: this.getTrip,\n            onLookupEnter: this.onLookupEnter\n          })\n        ),\n        _react2.default.createElement(_Search2.default, {\n          numberOfDays: this.state.numberOfDays,\n          addNewEvent: this.addNewEvent\n        })\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L3NyYy9BcHAuanN4P2EyZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgSFRNTDVCYWNrZW5kIGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vVGltZWxpbmUnO1xuaW1wb3J0IFRpbWVsaW5lSW5wdXRCb3ggZnJvbSAnLi9UaW1lbGluZUlucHV0Qm94JztcbmltcG9ydCBUaW1lbGluZUxvb2t1cCBmcm9tICcuL1RpbWVsaW5lTG9va3VwJztcbmltcG9ydCBTdGFydERhdGVCb3ggZnJvbSAnLi9TdGFydERhdGVCb3gnO1xuaW1wb3J0IEVuZERhdGVCb3ggZnJvbSAnLi9FbmREYXRlQm94JztcbmltcG9ydCBDcmVhdGVFdmVudEJveCBmcm9tICcuL0NyZWF0ZUV2ZW50Qm94JztcbmltcG9ydCBNYXBWaWV3IGZyb20gJy4vTWFwVmlldyc7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICB1c2VySW5mbzogJycsXG4gICAgICB0aW1lbGluZURhdGE6IFtdLFxuICAgICAgdGltZWxpbmVOYW1lOiAnJywgLy8gdGVtcCB1bnRpbCB3ZSBnZXQgc29tZSBtb3JlIGRhdGEgYnVpbHQgdXBcbiAgICAgIHN0YXJ0RGF0ZTogJycsXG4gICAgICBlbmREYXRlOiAnJyxcbiAgICAgIG51bWJlck9mRGF5czogMCxcbiAgICAgIHRpbWVsaW5lSWQ6ICcnLCAvLyB0ZW1wIHVudGlsIHdlIGdldCBhIHdheSB0byBwcm9kdWNlIHRoZXNlXG4gICAgICBuZXdFdmVudDogJycsXG4gICAgICBuZXdFdmVudEFkZHJlc3M6ICcnLFxuICAgICAgdG9kYXk6ICcnLFxuICAgICAgdmlldzogJ2RlZmF1bHQnLFxuICAgIH07XG5cbiAgICB0aGlzLmNoZWNrQXV0aCA9IHRoaXMuY2hlY2tBdXRoLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkVudGVyID0gdGhpcy5vbkVudGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGROZXdFdmVudCA9IHRoaXMuYWRkTmV3RXZlbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFRyaXAgPSB0aGlzLmdldFRyaXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUlkID0gdGhpcy5oYW5kbGVJZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTmFtZSA9IHRoaXMuaGFuZGxlTmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Mb29rdXBFbnRlciA9IHRoaXMub25Mb29rdXBFbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DcmVhdGVFbnRlciA9IHRoaXMub25DcmVhdGVFbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTmV3RXZlbnQgPSB0aGlzLmhhbmRsZU5ld0V2ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVOZXdBZGRyZXNzID0gdGhpcy5oYW5kbGVOZXdBZGRyZXNzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVFdmVudCA9IHRoaXMuY3JlYXRlRXZlbnQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIG9uIGluaXQgZnVuY3Rpb24gdG8gbWFrZSBnZXQgcmVxdWVzdCB0byBzZXJ2ZXJcbiAgICAvLyB0ZW1wIHVzaW5nIDEyMzQgYXMgdGhlIHRpbWVsaW5lSWQgYW5kIHRlc3QgYXMgdGltZWxpbmVOYW1lXG4gICAgLy8gdGhpcy5nZXRUcmlwKCk7XG4gICAgdGhpcy5jaGVja0F1dGgoKTtcbiAgICB0aGlzLnNldERhdGUoKTtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lbGluZUlkOiBzaG9ydGlkLmdlbmVyYXRlKCkgfSwgKCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnQgPSBtb21lbnQodGhpcy5zdGF0ZS5zdGFydERhdGUpO1xuICAgICAgY29uc3QgZW5kID0gbW9tZW50KHRoaXMuc3RhdGUuZW5kRGF0ZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbnVtYmVyT2ZEYXlzOiBlbmQuZGlmZihzdGFydCwgJ2RheXMnKSB9LCAoKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QoJy90aW1lbGluZScsIHtcbiAgICAgICAgICB0aW1lbGluZUlkOiB0aGlzLnN0YXRlLnRpbWVsaW5lSWQsXG4gICAgICAgICAgdGltZWxpbmVOYW1lOiB0aGlzLnN0YXRlLnRpbWVsaW5lTmFtZSxcbiAgICAgICAgICBudW1iZXJPZkRheXM6IHRoaXMuc3RhdGUubnVtYmVyT2ZEYXlzLFxuICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuZ2V0VHJpcCgpKVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3IgaW4gc3VibWl0ICcsIGVycikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvblRvZ2dsZVZpZXcoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudmlldyA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlldzogJ21hcHZpZXcnLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnZpZXcgPT09ICdtYXB2aWV3Jykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpZXc6ICdkZWZhdWx0JyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRW50ZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLm9uU3VibWl0KCk7XG4gICAgfVxuICB9XG5cbiAgb25DcmVhdGVFbnRlcihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuY3JlYXRlRXZlbnQoKTtcbiAgICB9XG4gIH1cblxuICBvbkxvb2t1cEVudGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5nZXRUcmlwKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RGF0ZSgpIHtcbiAgICBsZXQgdG9kYXkgPSBtb21lbnQoKS5mb3JtYXQoJ0wnKS5zcGxpdCgnLycpO1xuICAgIHRvZGF5ID0gYCR7dG9kYXlbMl19LSR7dG9kYXlbMF19LSR7dG9kYXlbMV19YDtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvZGF5LFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VHJpcCgpIHtcbiAgICBheGlvcy5nZXQoYC90aW1lbGluZS8ke3RoaXMuc3RhdGUudGltZWxpbmVOYW1lfS8ke3RoaXMuc3RhdGUudGltZWxpbmVJZH1gKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRpbWVsaW5lRGF0YTogZGF0YSxcbiAgICAgICAgICBudW1iZXJPZkRheXM6IGRhdGEubGVuZ3RoLFxuICAgICAgICAgIHRpbWVsaW5lSWQ6IGRhdGFbMF0udGltZWxpbmVJZCxcbiAgICAgICAgICB0aW1lbGluZU5hbWU6IGRhdGFbMF0udGltZWxpbmVOYW1lLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgdHJpcHMgLT4nLCBlcnIpKTtcbiAgfVxuXG4gIGNoZWNrQXV0aCgpIHtcbiAgICBheGlvcy5nZXQoJy9hdXRoL2NoZWNrQXV0aCcpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9nZ2VkSW46IGRhdGEuaXNMb2dnZWRJbiwgdXNlckluZm86IGRhdGEudXNlciB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlSWQoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGltZWxpbmVJZDogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVOYW1lKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRpbWVsaW5lTmFtZTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVOZXdFdmVudChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuZXdFdmVudDogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVOZXdBZGRyZXNzKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld0V2ZW50QWRkcmVzczogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBhZGROZXdFdmVudChldmVudCwgc2VsZWN0ZWREYXkpIHtcbiAgICBjb25zdCBkYXkgPSBOdW1iZXIoc2VsZWN0ZWREYXkpO1xuICAgIGF4aW9zLnBvc3QoJy9lbnRyeScsIHtcbiAgICAgIGV2ZW50LFxuICAgICAgdGltZWxpbmVJZDogdGhpcy5zdGF0ZS50aW1lbGluZUlkLFxuICAgICAgZGF5LFxuICAgICAgdGltZWxpbmVOYW1lOiB0aGlzLnN0YXRlLnRpbWVsaW5lSWQsXG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZ2V0VHJpcCgpKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdhZGQgZXZlbnQgZXJyb3I6ICcsIGVycikpO1xuICB9XG5cbiAgY3JlYXRlRXZlbnQoZGF5KSB7XG4gICAgY29uc3QgZXZlbnRPYmogPSB7XG4gICAgICBuYW1lOiB0aGlzLnN0YXRlLm5ld0V2ZW50LFxuICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS5uZXdFdmVudEFkZHJlc3MsXG4gICAgICB2b3RlczogMCxcbiAgICB9O1xuICAgIHRoaXMuYWRkTmV3RXZlbnQoZXZlbnRPYmosIGRheSk7XG4gIH1cblxuICByZW5kZXJWaWV3KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnZpZXcgPT09ICdkZWZhdWx0Jykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRpbWVsaW5lXG4gICAgICAgICAgdGltZWxpbmVEYXRhPXt0aGlzLnN0YXRlLnRpbWVsaW5lRGF0YX1cbiAgICAgICAgICB0aW1lbGluZUlkPXt0aGlzLnN0YXRlLnRpbWVsaW5lSWR9XG4gICAgICAgICAgdGltZWxpbmVOYW1lPXt0aGlzLnN0YXRlLnRpbWVsaW5lTmFtY2V9XG4gICAgICAgICAgb25DcmVhdGVFbnRlcj17dGhpcy5vbkNyZWF0ZUVudGVyfVxuICAgICAgICAgIGhhbmRsZU5ld0V2ZW50PXt0aGlzLmhhbmRsZU5ld0V2ZW50fVxuICAgICAgICAgIGhhbmRsZU5ld0FkZHJlc3M9e3RoaXMuaGFuZGxlTmV3QWRkcmVzc31cbiAgICAgICAgICBjcmVhdGVFdmVudD17dGhpcy5jcmVhdGVFdmVudH1cbiAgICAgICAgICBnZXRUcmlwPXt0aGlzLmdldFRyaXB9XG4gICAgICAgICAgdXNlcj17dGhpcy5zdGF0ZS51c2VySW5mb31cbiAgICAgICAgLz4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS52aWV3ID09PSAnbWFwdmlldycpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxNYXBWaWV3XG4gICAgICAgICAgdGltZWxpbmVJZD17dGhpcy5zdGF0ZS50aW1lbGluZUlkfVxuICAgICAgICAvPik7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBidXR0b25OYW1lO1xuICAgIGlmICh0aGlzLnN0YXRlLnZpZXcgPT09ICdkZWZhdWx0Jykge1xuICAgICAgYnV0dG9uTmFtZSA9ICdNYXAgVmlldyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbk5hbWUgPSAnRGF5IFZpZXcnO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAge3RoaXMuc3RhdGUuaXNMb2dnZWRJbiA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUudXNlckluZm8udGh1bWJuYWlsfSBhbHQ9XCJ1c2VyLXRodW1ibmFpbFwiIC8+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9wcm9maWxlXCI+e3RoaXMuc3RhdGUudXNlckluZm8udXNlcm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9hdXRoL2xvZ291dFwiPkxvZ291dDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9hdXRoL2xvZ2luXCI+TG9naW48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5XaGFsZSBUaGVuLi48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGltZWxpbmVQYXJhbXNcIj5cbiAgICAgICAgICAgIDxUaW1lbGluZUlucHV0Qm94XG4gICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMub25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgb25FbnRlcj17dGhpcy5vbkVudGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTdGFydERhdGVCb3hcbiAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICBvbkVudGVyPXt0aGlzLm9uRW50ZXJ9XG4gICAgICAgICAgICAgIHRvZGF5PXt0aGlzLnN0YXRlLnRvZGF5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFbmREYXRlQm94XG4gICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMub25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgb25FbnRlcj17dGhpcy5vbkVudGVyfVxuICAgICAgICAgICAgICBzdGFydERhdGU9e3RoaXMuc3RhdGUuc3RhcnREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmUtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMub25TdWJtaXQoKX0+TmV3IFNjaGVkdWxlPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5vblRvZ2dsZVZpZXcoKX0+e2J1dHRvbk5hbWV9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+e3RoaXMucmVuZGVyVmlldygpfTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUaW1lbGluZUxvb2t1cFxuICAgICAgICAgICAgaGFuZGxlSWQ9e3RoaXMuaGFuZGxlSWR9XG4gICAgICAgICAgICBoYW5kbGVOYW1lPXt0aGlzLmhhbmRsZU5hbWV9XG4gICAgICAgICAgICBnZXRUcmlwPXt0aGlzLmdldFRyaXB9XG4gICAgICAgICAgICBvbkxvb2t1cEVudGVyPXt0aGlzLm9uTG9va3VwRW50ZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZWFyY2hcbiAgICAgICAgICBudW1iZXJPZkRheXM9e3RoaXMuc3RhdGUubnVtYmVyT2ZEYXlzfVxuICAgICAgICAgIGFkZE5ld0V2ZW50PXt0aGlzLmFkZE5ld0V2ZW50fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnRHJvcENvbnRleHQoSFRNTDVCYWNrZW5kKShBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvQXBwLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVCQTtBQTZCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBRUE7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQWZBO0FBREE7QUFzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBRkE7QUE1Q0E7QUFrREE7Ozs7QUFyUEE7QUFDQTtBQXVQQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///80\n");

/***/ })

})