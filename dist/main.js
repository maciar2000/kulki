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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\nvar Ball = /** @class */ (function () {\n    function Ball() {\n        this.x = Math.round(Math.random() * _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size);\n        this.y = Math.round(Math.random() * _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size);\n        this.colorId = Math.round(Math.random() * 6);\n        this.color = _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].colors[this.colorId];\n    }\n    Ball.prototype.create = function () {\n        var board = _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].board;\n        while (board[this.y][this.x] != 0) {\n            console.log('w');\n            this.x = Math.round(Math.random() * _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size);\n            this.y = Math.round(Math.random() * _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size);\n        }\n        console.log(this.x, this.y);\n        console.log(board);\n        board[this.y][this.x] = \"X\" + this.colorId;\n        Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"set\"])('board', board);\n        var ball = document.createElement('div');\n        var id = this.x + \",\" + this.y;\n        ball.setAttribute('class', 'ball');\n        ball.setAttribute('name', id);\n        ball.style.background = this.color;\n        document.getElementById(id).appendChild(ball);\n    };\n    return Ball;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n\n//# sourceURL=webpack:///./src/Ball.ts?");

/***/ }),

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\nvar board = function () {\n    var mainDiv = document.createElement('div');\n    var x = _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].size;\n    var board = [];\n    for (var i = 0; i < x; i++) {\n        var row = [];\n        for (var j = 0; j < x; j++) {\n            var div = document.createElement('div');\n            div.setAttribute('id', j + ',' + i);\n            div.setAttribute('class', 'field');\n            div.style.top = (i * 50) + 'px';\n            div.style.left = (j * 50) + 'px';\n            mainDiv.appendChild(div);\n            row.push(0);\n        }\n        board.push(row);\n    }\n    Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"set\"])('board', board);\n    return mainDiv;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (board);\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.ts\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\n\nvar Game = /** @class */ (function () {\n    function Game() {\n        this.startTime = new Date();\n    }\n    Game.prototype.create3Balls = function () {\n        for (var i = 0; i < 3; i++) {\n            var ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n            ball.create();\n        }\n    };\n    Game.prototype.startGame = function () {\n        this.create3Balls();\n        this.clickBall();\n    };\n    Game.prototype.clickBall = function () {\n        var clickField = this.clickField;\n        document.querySelectorAll('.ball').forEach(function (item) {\n            item.addEventListener('click', function (e) {\n                document.querySelector('.clickedBall') ? document.querySelector('.clickedBall').setAttribute('class', 'ball') : null;\n                this.setAttribute('class', 'clickedBall');\n                var id = this.getAttribute('name');\n                Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('ballId', id);\n                e.stopPropagation();\n                clickField();\n            });\n        });\n    };\n    Game.prototype.clickField = function () {\n        document.querySelectorAll('.field').forEach(function (item) {\n            item.addEventListener('mouseover', function () {\n                document.querySelector('.hoverField') ? document.querySelector('.hoverField').setAttribute('class', 'field') : null;\n                this.setAttribute('class', 'field hoverField');\n            });\n            item.addEventListener('click', function () {\n                console.log(this.id, _settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"].ballId);\n                Object(_settings__WEBPACK_IMPORTED_MODULE_1__[\"set\"])('fieldId', this.id);\n            });\n        });\n    };\n    return Game;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return set; });\nvar settings = {};\nsettings = {\n    'colors': [\n        \"red\",\n        \"blue\",\n        \"green\",\n        \"black\",\n        \"pink\",\n        \"gray\",\n        \"orange\"\n    ],\n    size: 9,\n    board: [0],\n    ballId: '',\n    fieldId: ''\n};\nvar set = function (k, v) { return settings[k] = v; };\n\n\n//# sourceURL=webpack:///./src/settings.ts?");

/***/ })

/******/ });