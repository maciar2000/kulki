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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n\nvar Ball = /** @class */ (function () {\n    function Ball() {\n        this.x = Math.round(Math.random() * (_settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size - 1));\n        this.y = Math.round(Math.random() * (_settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size - 1));\n        this.colorId = Math.round(Math.random() * 6);\n        this.color = _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].colors[this.colorId];\n    }\n    Ball.prototype.checkEmptyField = function () {\n        var x = 0;\n        _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].board.map(function (item, index) { return _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].board[index].map(function (item) { return item == 0 ? x++ : null; }); });\n        return x;\n    };\n    Ball.prototype.create = function () {\n        var board = __spreadArrays(_settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].board);\n        while (board[this.y][this.x] != 0 && this.checkEmptyField() != 0) {\n            console.log('w');\n            this.x = Math.round(Math.random() * (_settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size - 1));\n            this.y = Math.round(Math.random() * (_settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size - 1));\n        }\n        board[this.y][this.x] = \"X\" + this.colorId;\n        Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"set\"])('board', __spreadArrays(board));\n        var ball = document.createElement('div');\n        var id = this.x + \",\" + this.y;\n        ball.setAttribute('class', 'ball');\n        ball.setAttribute('name', id);\n        ball.style.background = this.color;\n        document.getElementById(id).appendChild(ball);\n    };\n    return Ball;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n\n//# sourceURL=webpack:///./src/Ball.ts?");

/***/ }),

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n\nvar board = function () {\n    var mainDiv = document.createElement('div');\n    var x = _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size;\n    var board = [];\n    for (var i = 0; i < x; i++) {\n        var row = [];\n        for (var j = 0; j < x; j++) {\n            var div = document.createElement('div');\n            div.setAttribute('id', j + ',' + i);\n            div.setAttribute('class', 'field');\n            div.style.top = (i * 50) + 'px';\n            div.style.left = (j * 50) + 'px';\n            mainDiv.appendChild(div);\n            row.push(0);\n        }\n        board.push(row);\n    }\n    Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"set\"])('board', __spreadArrays(board));\n    return mainDiv;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (board);\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.ts\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n\n\nvar Game = /** @class */ (function () {\n    function Game() {\n        this.startTime = new Date();\n    }\n    Game.prototype.create3Balls = function () {\n        var ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        var x = ball.checkEmptyField() >= 3 ? 27 : ball.checkEmptyField();\n        for (var i = 0; i < x; i++) {\n            ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n            ball.create();\n        }\n    };\n    Game.prototype.startGame = function () {\n        this.create3Balls();\n        this.clickBall();\n    };\n    Game.prototype.clickBall = function () {\n        var clickField = this.clickField.bind(this);\n        document.querySelectorAll('.ball').forEach(function (item) {\n            item.addEventListener('click', function (e) {\n                document.querySelector('.clickedBall') ? document.querySelector('.clickedBall').setAttribute('class', 'ball') : null;\n                this.setAttribute('class', 'clickedBall');\n                var id = this.getAttribute('name');\n                Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('ballId', id);\n                e.stopPropagation();\n                clickField();\n            });\n        });\n    };\n    Game.prototype.clickField = function () {\n        if (this.fClickField)\n            return 0;\n        this.fClickField = true;\n        var searchPath = this.searchPath.bind(this);\n        var moveBall = this.moveBall.bind(this);\n        document.querySelectorAll('.field').forEach(function (item) {\n            item.addEventListener('mouseover', function () {\n                try {\n                    if (this.children.length == 0) {\n                        document.querySelector('.hoverField') ? document.querySelector('.hoverField').setAttribute('class', 'field') : null;\n                        this.setAttribute('class', 'field hoverField');\n                        Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('fieldId', this.id);\n                        searchPath();\n                    }\n                }\n                catch (_a) {\n                    item.setAttribute('class', 'field');\n                }\n            });\n            item.addEventListener('mouseout', function () {\n                document.querySelectorAll('.path').forEach(function (item) {\n                    item.setAttribute('class', 'field');\n                });\n            });\n            item.addEventListener('click', function () {\n                if (this.children.length == 0) {\n                    Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('fieldId', this.id);\n                    if (searchPath())\n                        moveBall();\n                    else\n                        console.log('nothing');\n                }\n            });\n        });\n        return 1;\n    };\n    Game.prototype.searchPath = function () {\n        this.board = JSON.parse(JSON.stringify(_settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board));\n        var _a = _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].ballId.split(','), xBall = _a[0], yBall = _a[1];\n        var _b = _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].fieldId.split(','), xField = _b[0], yField = _b[1];\n        var neighboursBall = this.getNeighbours(eval(xBall), eval(yBall));\n        var currentField = xBall + \",\" + yBall;\n        var i = 1;\n        var j = 1;\n        var key = 0;\n        var neighboursBase = __spreadArrays(neighboursBall);\n        for (var _i = 0, neighboursBall_1 = neighboursBall; _i < neighboursBall_1.length; _i++) {\n            var item = neighboursBall_1[_i];\n            var _c = item.split(','), x_1 = _c[0], y_1 = _c[1];\n            this.board[eval(y_1)][eval(x_1)] = j;\n            currentField = x_1 + \",\" + y_1;\n            if (currentField == xField + \",\" + yField)\n                break;\n            var neighbours = this.getNeighbours(eval(x_1), eval(y_1));\n            for (var _d = 0, neighbours_1 = neighbours; _d < neighbours_1.length; _d++) {\n                var item2 = neighbours_1[_d];\n                if (neighboursBall.indexOf(item2) == -1)\n                    neighboursBall.push(item2);\n                if (currentField == xField + \",\" + yField)\n                    break;\n            }\n            if (neighboursBase.length / i == 1) {\n                key += i;\n                neighboursBase = neighboursBall.slice(key);\n                j++;\n                i = 1;\n            }\n            else\n                i++;\n        }\n        var path = [[], []];\n        var x = eval(xField);\n        var y = eval(yField);\n        var val = j;\n        for (var i_1 = 0;; i_1++) {\n            var neighbours = this.getNeighbours(x, y, true);\n            var index = 0;\n            if (val == 1)\n                break;\n            for (var _e = 0, neighbours_2 = neighbours; _e < neighbours_2.length; _e++) {\n                var item = neighbours_2[_e];\n                var x2 = eval(item.split(',')[0]);\n                var y2 = eval(item.split(',')[1]);\n                if (this.board[y2][x2] == val - 1) {\n                    path[index][i_1] = item;\n                    index++;\n                    x = x2;\n                    y = y2;\n                }\n                else\n                    continue;\n            }\n            val -= 1;\n        }\n        if (path[1].length > 0) {\n            for (var id in path[1]) {\n                path[0][id] = path[1][id];\n            }\n        }\n        var retVal = false;\n        if ((path[0].length == 0 && this.board[eval(yField)][eval(xField)] != 0) || path[0].length > 0) {\n            retVal = true;\n            this.path = path[0];\n        }\n        path[0].unshift(xField + \",\" + yField);\n        path[0].push(xBall + \",\" + yBall);\n        for (var _f = 0, _g = path[0]; _f < _g.length; _f++) {\n            var item = _g[_f];\n            document.getElementById(item).setAttribute('class', 'field path');\n        }\n        return retVal;\n    };\n    Game.prototype.getNeighbours = function (x1, y1, filled) {\n        var neighbours = [];\n        for (var x = Math.max(0, x1 - 1); x <= Math.min(x1 + 1, _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].size - 1); x++) {\n            for (var y = Math.max(0, y1 - 1); y <= Math.min(y1 + 1, _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].size - 1); y++) {\n                if ((x != x1 || y != y1) && (((y == y1 - 1 || y == y1 + 1) && x == x1) || ((x == x1 - 1 || x == x1 + 1) && y == y1))) {\n                    if ((!filled && this.board[y][x] == 0) || filled)\n                        neighbours.push(x + \",\" + y);\n                }\n            }\n        }\n        return neighbours;\n    };\n    Game.prototype.moveBall = function () {\n        this.path.reverse();\n        for (var id in this.path) {\n            if (eval(id) + 1 == this.path.length)\n                break;\n            var child = document.getElementById(this.path[eval(id)]).children[0];\n            document.getElementById(this.path[eval(id) + 1]).append(child);\n        }\n        var i = 0;\n        var _loop_1 = function (item) {\n            document.getElementById(item).style.background = \"rgba(100,100,100,0.5)\";\n            i++;\n            setTimeout(function () {\n                document.getElementById(item).style.background = \"\";\n            }, 100 * i);\n        };\n        for (var _i = 0, _a = this.path; _i < _a.length; _i++) {\n            var item = _a[_i];\n            _loop_1(item);\n        }\n        document.querySelector('.clickedBall').setAttribute('class', 'ball');\n        Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('ballId', '');\n        Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('fieldId', '');\n        var _b = this.path[0].split(','), x = _b[0], y = _b[1];\n        var _c = this.path[this.path.length - 1].split(','), x2 = _c[0], y2 = _c[1];\n        this.board = JSON.parse(JSON.stringify(_settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board));\n        this.board[eval(y2)][eval(x2)] = this.board[eval(y)][eval(x)];\n        this.board[eval(y)][eval(x)] = 0;\n        Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('board', this.board);\n        document.getElementsByName(x + \",\" + y)[0].setAttribute('name', x2 + \",\" + y2);\n        this.find5Balls(this.board[eval(y2)][eval(x2)], eval(y2)); //row\n        this.find5Balls(this.board[eval(y2)][eval(x2)], eval(x2), 'column');\n    };\n    Game.prototype.find5Balls = function (color, number, type) {\n        if (type === void 0) { type = 'row'; }\n        if (type == 'row') {\n            var x = 0;\n            for (var _i = 0, _a = _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board[number]; _i < _a.length; _i++) {\n                var item = _a[_i];\n                if (item == color)\n                    x++;\n            }\n            if (x >= 5) {\n                var distance = _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board[number].lastIndexOf(color) - _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board[number].indexOf(color);\n                if (distance == 4) {\n                    this.destroyBalls(_settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board[number].indexOf(color) + \",\" + number, _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board[number].lastIndexOf(color) + \",\" + number, 'row');\n                }\n                else {\n                    var xBall = _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board[number].indexOf(color);\n                    var count = 0;\n                    var last = void 0;\n                    var lastX = void 0;\n                    for (var i = 0; i < x; i++) {\n                        if (_settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board[number][xBall + i] == color) {\n                            count++;\n                            last = xBall + i + \",\" + number;\n                            lastX = xBall + i;\n                        }\n                        else if (x >= count + 5) {\n                            count = 0;\n                            x++;\n                        }\n                        else\n                            break;\n                    }\n                    if (count >= 5) {\n                        var first = lastX - count + 1 + \",\" + number;\n                        this.destroyBalls(first, last, 'row');\n                    }\n                }\n            }\n        }\n        else if (type == 'column') {\n            var colors = [];\n            for (var i = 0; i < _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].size; i++) {\n                colors.push(_settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board[i][number]);\n            }\n            var x = 0;\n            for (var _b = 0, colors_1 = colors; _b < colors_1.length; _b++) {\n                var item = colors_1[_b];\n                if (item == color)\n                    x++;\n            }\n            if (x >= 5) {\n                var distance = colors.lastIndexOf(color) - colors.indexOf(color);\n                if (distance == 4) {\n                    this.destroyBalls(number + \",\" + colors.indexOf(color), number + \",\" + colors.lastIndexOf(color), 'column');\n                }\n                else {\n                    var yBall = colors.indexOf(color);\n                    var count = 0;\n                    var last = void 0;\n                    var lastY = void 0;\n                    for (var i = 0; i < x; i++) {\n                        if (colors[yBall + i] == color) {\n                            count++;\n                            last = number + \",\" + (yBall + i);\n                            lastY = yBall + i;\n                        }\n                        else if (x >= count + 5) {\n                            count = 0;\n                            x++;\n                        }\n                        else\n                            break;\n                    }\n                    if (count >= 5) {\n                        var first = number + \",\" + (lastY - count + 1);\n                        this.destroyBalls(first, last, 'column');\n                    }\n                }\n            }\n        }\n        else {\n        }\n    };\n    Game.prototype.destroyBalls = function (first, last, type) {\n        var board = JSON.parse(JSON.stringify(_settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].board));\n        if (type === 'row') {\n            var y_2 = eval(first.split(',')[1]);\n            setTimeout(function () {\n                var x = eval(first.split(',')[0]);\n                var newId;\n                for (var i = 0;; i++) {\n                    newId = x + i + \",\" + y_2;\n                    document.getElementById(newId).innerHTML = '';\n                    board[y_2][x + i] = 0;\n                    if (newId == last)\n                        break;\n                }\n            }, 1000);\n            Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('board', board);\n        }\n        else if (type === 'column') {\n            var x_2 = eval(first.split(',')[0]);\n            var y_3 = eval(first.split(',')[1]);\n            var newId_1;\n            setTimeout(function () {\n                for (var i = 0;; i++) {\n                    newId_1 = x_2 + \",\" + (y_3 + i);\n                    document.getElementById(newId_1).innerHTML = '';\n                    board[y_3 + i][x_2] = 0;\n                    if (newId_1 == last)\n                        break;\n                }\n            }, 1000);\n        }\n        else {\n        }\n    };\n    return Game;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\n\ndocument.getElementById('root').appendChild(Object(_Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\nvar game = new _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ngame.startGame();\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/*! exports provided: settings, set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return set; });\nvar settings = {};\nsettings = {\n    colors: [\n        \"red\",\n        \"blue\",\n        \"green\",\n        \"white\",\n        \"purple\",\n        \"gray\",\n        \"orange\"\n    ],\n    size: 9,\n    board: [],\n    path: [],\n    ballId: '',\n    fieldId: ''\n};\nvar set = function (k, v) { return settings[k] = v; };\n\n\n//# sourceURL=webpack:///./src/settings.ts?");

/***/ })

/******/ });