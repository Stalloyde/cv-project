"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom/client");
var App_1 = require("./App");
var Node = document.getElementById('root');
if (Node) {
    var root = ReactDOM.createRoot(Node);
    root.render(React.createElement(React.StrictMode, null,
        React.createElement(App_1.default, null)));
}
