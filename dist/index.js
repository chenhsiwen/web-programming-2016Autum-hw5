"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React;
var Component = _React.Component;

var Countdisplay = function (_Component) {
  _inherits(Countdisplay, _Component);

  function Countdisplay() {
    _classCallCheck(this, Countdisplay);

    return _possibleConstructorReturn(this, (Countdisplay.__proto__ || Object.getPrototypeOf(Countdisplay)).apply(this, arguments));
  }

  _createClass(Countdisplay, [{
    key: "render",
    value: function render() {
      var count = this.props.count;

      return React.createElement(
        "div",
        null,
        "item: ",
        count
        
      );
    }
  }]);

  return Countdisplay;
}(Component);

var TodoItem = function (_Component2) {
  _inherits(TodoItem, _Component2);

  function TodoItem() {
    _classCallCheck(this, TodoItem);

    return _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).apply(this, arguments));
  }

  _createClass(TodoItem, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var index = _props.index;
      var title = _props.title;
      var isCompleted = _props.isCompleted;
      var _onChange = _props.onChange;

      return React.createElement(
        "li",
        null,
        React.createElement(
          "div",
          { className: "view" },
          React.createElement("input", {
            className: "toggle",
            type: "checkbox",
            checked: isCompleted,
            onChange: function onChange(event) {
              return _onChange(event, index);
            }
          }),
          React.createElement(
            "label",
            null,
            title
          )
        )
      );
    }
  }]);

  return TodoItem;
}(Component);

var TodoApp = function (_Component3) {
  _inherits(TodoApp, _Component3);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this3 = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this3.state = { newlist: '', lists: [] };
    return _this3;
  }

  _createClass(TodoApp, [{
    key: "handleinput",
    value: function handleinput(event) {
      this.setState({ newlist: event.target.value });
    }
  }, {
    key: "handlesubmit",
    value: function handlesubmit(event) {
      var inputValue = event.target.value;
      if (event.keyCode == 13 && inputValue !== '') {
        var _state = this.state;
        var lists = _state.lists;
        var newlist = _state.newlist;

        var temp = { title: newlist, isCompleted: false };
        this.setState({
          newlist: '',
          lists: lists.concat({ title: inputValue, isCompleted: false })
        });
      }
    }
  }, {
    key: "handlecomplete",
    value: function handlecomplete(event, i) {
      var lists = this.state.lists;

      lists[i].isCompleted = event.target.checked;
      this.setState({
        lists: lists
      });
    }
  }, {
    key: "handleselectall",
    value: function handleselectall(event) {
      var select = event.target.checked;
      var lists = this.state.lists;

      for (var i = 0; i < lists.length; i++) {
        lists[i].isCompleted = select;
      }
      event.target.checked = false;
      this.setState({
        lists: lists
      });
    }
  }, {
    key: "handleclear",
    value: function handleclear(event) {
      var lists = this.state.lists;
      ;
      for (var i = 0; i < lists.length; i++) {

        if (lists[i].isCompleted === true) {
          console.log(i);
          console.log(lists.length);
          lists.splice(i, 1);
          i--;
        }
      }
      this.setState({
        lists: lists
      });
    }
  }, {
    key: "handlecount",
    value: function handlecount() {
      var lists = this.state.lists;

      var count = 0;
      for (var i = 0; i < lists.length; i++) {
        if (lists[i].isCompleted === false) count++;
      }
      return count;
    }
  }, {
    key: "renderTodoItem",
    value: function renderTodoItem(item, i) {
      return React.createElement(TodoItem, {
        index: i,
        title: item.title,
        isCompleted: item.isCompleted,
        onChange: this.handlecomplete.bind(this)
      });
    }
  }, {
    key: "renderTodoItem",
    value: function renderTodoItem(item, i) {
      return React.createElement(TodoItem, {
        index: i,
        title: item.title,
        isCompleted: item.isCompleted,
        onChange: this.handlecomplete.bind(this)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state2 = this.state;
      var newlist = _state2.newlist;
      var lists = _state2.lists;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "section",
          { className: "todoapp" },
          React.createElement(
            "header",
            { "class": "header" },
            React.createElement(
              "h1",
              null,
              "todos"
            ),
            React.createElement("input", {
              className: "new-todo",
              placeholder: "What needs to be done?",
              autofocus: true,
              value: newlist,
              onChange: this.handleinput.bind(this),
              onKeyDown: this.handlesubmit.bind(this)
            })
          ),
          React.createElement(
            "section",
            { className: "main" },
            React.createElement("input", { className: "toggle-all", type: "checkbox", onClick: this.handleselectall.bind(this) }),
            React.createElement(
              "label",
              { htmlFor: "toggle-all" },
              "Mark all as complete"
            ),
            React.createElement(
              "ul",
              { className: "todo-list" },
              lists.map(this.renderTodoItem, this)
            )
          ),
          React.createElement(
            "footer",
            { className: "footer" },
            React.createElement(
              "span",
              { className: "todo-count" },
              React.createElement(Countdisplay, { count: this.handlecount() })
            ),
            React.createElement(
              "button",
              { className: "clear-completed", onClick: this.handleclear.bind(this) },
              "Clear completed"
            )
          )
        ),
        React.createElement(
          "footer",
          { className: "info" },
          React.createElement(
            "p",
            null,
            "Part of ",
            React.createElement(
              "a",
              { href: "http://todomvc.com" },
              "TodoMVC"
            )
          )
        )
      );
    }
  }]);

  return TodoApp;
}(Component);

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('root'));
