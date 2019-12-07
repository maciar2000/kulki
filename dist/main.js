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

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Board = /** @class */ (function () {\n    function Board(x) {\n        this.x = x;\n        this.colors = [\n            \"red\",\n            \"blue\",\n            \"green\",\n            \"black\",\n            \"pink\",\n            \"gray\",\n            \"orange\"\n        ];\n        this.clickedBall = false;\n    }\n    Board.prototype.create = function () {\n        var mainDiv = document.createElement('div');\n        for (var i = 0; i < this.x; i++) {\n            for (var j = 0; j < this.x; j++) {\n                var div = document.createElement('div');\n                div.setAttribute('id', i + ',' + j);\n                div.setAttribute('class', 'field');\n                div.style.top = (i * 50) + 'px';\n                div.style.left = (j * 50) + 'px';\n                mainDiv.appendChild(div);\n            }\n        }\n        return mainDiv;\n    };\n    Board.prototype.balls = function () {\n        for (var i = 0; i < 3; i++) {\n            var x, y;\n            x = Math.round(Math.random() * 8);\n            y = Math.round(Math.random() * 8);\n            var id = x + ',' + y;\n            var color = this.colors[Math.round(Math.random() * 6)];\n            var div = document.createElement('div');\n            div.setAttribute('class', 'ball');\n            div.setAttribute('name', id);\n            div.style.background = color;\n            document.getElementById(id).appendChild(div);\n            console.log(color);\n        }\n        this.clickBall();\n    };\n    Board.prototype.clickBall = function () {\n        var _this = this;\n        var id;\n        document.querySelectorAll('.ball').forEach(function (item) {\n            var that = _this;\n            item.addEventListener('click', function (e) {\n                console.log(this);\n                document.querySelector('.clickedBall') ? document.querySelector('.clickedBall').setAttribute('class', 'ball') : null;\n                this.setAttribute('class', 'clickedBall');\n                that.clickedBall = true;\n                id = this.getAttribute('name');\n                e.stopPropagation();\n            });\n        });\n        document.querySelectorAll('.field').forEach(function (item) {\n            var that = _this;\n            item.addEventListener('mouseover', function () {\n                if (that.clickedBall) {\n                    document.querySelector('.clicked') ? document.querySelector('.clicked').setAttribute('class', 'field') : null;\n                    this.setAttribute('class', 'field clicked');\n                }\n            });\n            item.addEventListener('click', function () {\n                if (that.clickedBall) {\n                    console.log(id);\n                    var ball = document.getElementById(id).children[0];\n                    document.getElementById(id).children[0].remove;\n                    this.appendChild(ball);\n                    document.querySelector('.clickedBall').setAttribute('name', this.id);\n                    document.querySelector('.clickedBall').setAttribute('class', 'ball');\n                    this.setAttribute('class', 'field');\n                    that.clickedBall = false;\n                }\n            });\n        });\n    };\n    return Board;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\n\nvar x = 9;\nvar board = new _Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x);\ndocument.getElementById('root').appendChild(board.create());\nboard.balls();\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });