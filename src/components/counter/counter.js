"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            count: 0
        };
        _this.increment = function () {
            var num = _this.state.count + 1;
            _this.setState({
                count: num
            });
        };
        _this.decrement = function () {
            _this.setState({
                count: _this.state.count - 1
            });
        };
        return _this;
    }
    Counter.prototype.render = function () {
        var count = this.state.count;
        return (React.createElement("div", null,
            React.createElement("h2", null, count),
            React.createElement("button", { onClick: this.increment }, "Increment"),
            React.createElement("button", { onClick: this.decrement }, "Decrement")));
    };
    return Counter;
}(React.Component));
exports["default"] = Counter;
