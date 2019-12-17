/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Ball.ts":
/*!*********************!*\
  !*** ./src/Ball.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\nvar Ball = /** @class */ (function () {\r\n    function Ball() {\r\n        this.x = Math.round(Math.random() * (_settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size - 1));\r\n        this.y = Math.round(Math.random() * (_settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size - 1));\r\n        this.colorId = Math.round(Math.random() * 6);\r\n        this.color = _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].colors[this.colorId];\r\n    }\r\n    Ball.prototype.checkEmptyField = function () {\r\n        var x = 0;\r\n        _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].board.map(function (item, index) { return _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].board[index].map(function (item) { return item == 0 ? x++ : null; }); });\r\n        return x;\r\n    };\r\n    Ball.prototype.create = function () {\r\n        var board = __spreadArrays(_settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].board);\r\n        while (board[this.y][this.x] != 0 && this.checkEmptyField() != 0) {\r\n            console.log('w');\r\n            this.x = Math.round(Math.random() * (_settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size - 1));\r\n            this.y = Math.round(Math.random() * (_settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size - 1));\r\n        }\r\n        board[this.y][this.x] = \"X\" + this.colorId;\r\n        Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"set\"])('board', __spreadArrays(board));\r\n        var ball = document.createElement('div');\r\n        var id = this.x + \",\" + this.y;\r\n        ball.setAttribute('class', 'ball');\r\n        ball.setAttribute('name', id);\r\n        ball.style.background = this.color;\r\n        document.getElementById(id).appendChild(ball);\r\n    };\r\n    return Ball;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\r\n\n\n//# sourceURL=webpack:///./src/Ball.ts?");

/***/ }),

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\nvar board = function () {\r\n    var mainDiv = document.createElement('div');\r\n    var x = _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size;\r\n    var board = [];\r\n    for (var i = 0; i < x; i++) {\r\n        var row = [];\r\n        for (var j = 0; j < x; j++) {\r\n            var div = document.createElement('div');\r\n            div.setAttribute('id', j + ',' + i);\r\n            div.setAttribute('class', 'field');\r\n            div.style.top = (i * 50) + 'px';\r\n            div.style.left = (j * 50) + 'px';\r\n            mainDiv.appendChild(div);\r\n            row.push(0);\r\n        }\r\n        board.push(row);\r\n    }\r\n    Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"set\"])('board', __spreadArrays(board));\r\n    return mainDiv;\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (board);\r\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.ts\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\n\r\nvar Game = /** @class */ (function () {\r\n    function Game() {\r\n        this.startTime = new Date();\r\n    }\r\n    Game.prototype.create3Balls = function () {\r\n        var ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        var x = ball.checkEmptyField() >= 3 ? 21 : ball.checkEmptyField();\r\n        for (var i = 0; i < x; i++) {\r\n            ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n            ball.create();\r\n        }\r\n    };\r\n    Game.prototype.startGame = function () {\r\n        this.create3Balls();\r\n        this.clickBall();\r\n    };\r\n    Game.prototype.clickBall = function () {\r\n        var clickField = this.clickField.bind(this);\r\n        document.querySelectorAll('.ball').forEach(function (item) {\r\n            item.addEventListener('click', function (e) {\r\n                document.querySelector('.clickedBall') ? document.querySelector('.clickedBall').setAttribute('class', 'ball') : null;\r\n                this.setAttribute('class', 'clickedBall');\r\n                var id = this.getAttribute('name');\r\n                Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('ballId', id);\r\n                e.stopPropagation();\r\n                clickField();\r\n            });\r\n        });\r\n    };\r\n    Game.prototype.clickField = function () {\r\n        if (this.fClickField)\r\n            return 0;\r\n        this.fClickField = true;\r\n        var searchPath = this.searchPath.bind(this);\r\n        var moveBall = this.moveBall.bind(this);\r\n        document.querySelectorAll('.field').forEach(function (item) {\r\n            item.addEventListener('mouseover', function () {\r\n                try {\r\n                    if (this.children.length == 0) {\r\n                        document.querySelector('.hoverField') ? document.querySelector('.hoverField').setAttribute('class', 'field') : null;\r\n                        this.setAttribute('class', 'field hoverField');\r\n                        Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('fieldId', this.id);\r\n                        searchPath();\r\n                    }\r\n                }\r\n                catch (_a) {\r\n                    item.setAttribute('class', 'field');\r\n                }\r\n            });\r\n            item.addEventListener('mouseout', function () {\r\n                document.querySelectorAll('.path').forEach(function (item) {\r\n                    item.setAttribute('class', 'field');\r\n                });\r\n            });\r\n            item.addEventListener('click', function () {\r\n                if (this.children.length == 0) {\r\n                    Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('fieldId', this.id);\r\n                    if (searchPath())\r\n                        moveBall();\r\n                    else\r\n                        console.log('nothing');\r\n                }\r\n            });\r\n        });\r\n        return 1;\r\n    };\r\n    Game.prototype.searchPath = function () {\r\n        this.board = JSON.parse(JSON.stringify(_settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board));\r\n        var _a = _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].ballId.split(','), xBall = _a[0], yBall = _a[1];\r\n        var _b = _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].fieldId.split(','), xField = _b[0], yField = _b[1];\r\n        var neighboursBall = this.getNeighbours(eval(xBall), eval(yBall));\r\n        var currentField = xBall + \",\" + yBall;\r\n        var i = 1;\r\n        var j = 1;\r\n        var key = 0;\r\n        var neighboursBase = __spreadArrays(neighboursBall);\r\n        for (var _i = 0, neighboursBall_1 = neighboursBall; _i < neighboursBall_1.length; _i++) {\r\n            var item = neighboursBall_1[_i];\r\n            var _c = item.split(','), x_1 = _c[0], y_1 = _c[1];\r\n            this.board[eval(y_1)][eval(x_1)] = j;\r\n            currentField = x_1 + \",\" + y_1;\r\n            if (currentField == xField + \",\" + yField)\r\n                break;\r\n            var neighbours = this.getNeighbours(eval(x_1), eval(y_1));\r\n            for (var _d = 0, neighbours_1 = neighbours; _d < neighbours_1.length; _d++) {\r\n                var item2 = neighbours_1[_d];\r\n                if (neighboursBall.indexOf(item2) == -1)\r\n                    neighboursBall.push(item2);\r\n                if (currentField == xField + \",\" + yField)\r\n                    break;\r\n            }\r\n            if (neighboursBase.length / i == 1) {\r\n                key += i;\r\n                neighboursBase = neighboursBall.slice(key);\r\n                j++;\r\n                i = 1;\r\n            }\r\n            else\r\n                i++;\r\n        }\r\n        var path = [[], []];\r\n        var x = eval(xField);\r\n        var y = eval(yField);\r\n        var val = j;\r\n        for (var i_1 = 0;; i_1++) {\r\n            var neighbours = this.getNeighbours(x, y, true);\r\n            var index = 0;\r\n            if (val == 1)\r\n                break;\r\n            for (var _e = 0, neighbours_2 = neighbours; _e < neighbours_2.length; _e++) {\r\n                var item = neighbours_2[_e];\r\n                var x2 = eval(item.split(',')[0]);\r\n                var y2 = eval(item.split(',')[1]);\r\n                if (this.board[y2][x2] == val - 1) {\r\n                    path[index][i_1] = item;\r\n                    index++;\r\n                    x = x2;\r\n                    y = y2;\r\n                }\r\n                else\r\n                    continue;\r\n            }\r\n            val -= 1;\r\n        }\r\n        if (path[1].length > 0) {\r\n            for (var id in path[1]) {\r\n                path[0][id] = path[1][id];\r\n            }\r\n        }\r\n        var retVal = false;\r\n        console.log(path);\r\n        if ((path[0].length == 0 && this.board[eval(yField)][eval(xField)] != 0) || path[0].length > 0) {\r\n            retVal = true;\r\n            this.path = path[0];\r\n        }\r\n        path[0].unshift(xField + \",\" + yField);\r\n        path[0].push(xBall + \",\" + yBall);\r\n        for (var _f = 0, _g = path[0]; _f < _g.length; _f++) {\r\n            var item = _g[_f];\r\n            document.getElementById(item).setAttribute('class', 'field path');\r\n        }\r\n        return retVal;\r\n    };\r\n    Game.prototype.getNeighbours = function (x1, y1, filled) {\r\n        var neighbours = [];\r\n        for (var x = Math.max(0, x1 - 1); x <= Math.min(x1 + 1, _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].size - 1); x++) {\r\n            for (var y = Math.max(0, y1 - 1); y <= Math.min(y1 + 1, _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].size - 1); y++) {\r\n                if ((x != x1 || y != y1) && (((y == y1 - 1 || y == y1 + 1) && x == x1) || ((x == x1 - 1 || x == x1 + 1) && y == y1))) {\r\n                    if ((!filled && this.board[y][x] == 0) || filled)\r\n                        neighbours.push(x + \",\" + y);\r\n                }\r\n            }\r\n        }\r\n        return neighbours;\r\n    };\r\n    Game.prototype.moveBall = function () {\r\n        this.path.reverse();\r\n        console.log(this.path);\r\n        for (var id in this.path) {\r\n            if (eval(id) + 1 == this.path.length)\r\n                break;\r\n            console.log(eval(id) + 1);\r\n            var child = document.getElementById(this.path[eval(id)]).children[0];\r\n            document.getElementById(this.path[eval(id) + 1]).append(child);\r\n        }\r\n        document.querySelector('.clickedBall').setAttribute('class', 'ball');\r\n        Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('ballId', '');\r\n        Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('fieldId', '');\r\n        var _a = this.path[0].split(','), x = _a[0], y = _a[1];\r\n        var _b = this.path[this.path.length - 1].split(','), x2 = _b[0], y2 = _b[1];\r\n        console.table(_settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board);\r\n        this.board = JSON.parse(JSON.stringify(_settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board));\r\n        this.board[eval(y2)][eval(x2)] = this.board[eval(y)][eval(x)];\r\n        this.board[eval(y)][eval(x)] = 0;\r\n        Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('board', this.board);\r\n        console.table(_settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board);\r\n        document.getElementsByName(x + \",\" + y)[0].setAttribute('name', x2 + \",\" + y2);\r\n    };\r\n    return Game;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\r\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\r\n\r\ndocument.getElementById('root').appendChild(Object(_Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\nvar game = new _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\ngame.startGame();\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/*! exports provided: settings, set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return set; });\nvar settings = {};\r\nsettings = {\r\n    colors: [\r\n        \"red\",\r\n        \"blue\",\r\n        \"green\",\r\n        \"white\",\r\n        \"purple\",\r\n        \"gray\",\r\n        \"orange\"\r\n    ],\r\n    size: 9,\r\n    board: [],\r\n    path: [],\r\n    ballId: '',\r\n    fieldId: ''\r\n};\r\nvar set = function (k, v) { return settings[k] = v; };\r\n\n\n//# sourceURL=webpack:///./src/settings.ts?");

/***/ })

/******/ });