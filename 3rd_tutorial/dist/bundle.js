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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__substutioncipcher__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calcoperations__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__makebuffer__ = __webpack_require__(3);




var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new __WEBPACK_IMPORTED_MODULE_0__substutioncipcher__["a" /* default */](abc1, abc2);

console.log(sub.encode("abc")) // => "eta"
console.log(sub.encode("xyz")) // => "qxz"
console.log(sub.encode("aeiou")) // => "eirfg"

console.log(sub.decode("eta")) // => "abc"
console.log(sub.decode("qxz")) // => "xyz"
console.log(sub.decode("eirfg")) // => "aeiou

console.log(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["g" /* one */])(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["h" /* plus */])(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["g" /* one */])())));
console.log(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["i" /* seven */])(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["l" /* times */])(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["c" /* five */])())));
console.log(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["d" /* four */])(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["h" /* plus */])(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["f" /* nine */])())));
console.log(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["b" /* eight */])(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["e" /* minus */])(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["k" /* three */])())));
console.log(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["j" /* six */])(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["a" /* dividedBy */])(Object(__WEBPACK_IMPORTED_MODULE_1__calcoperations__["m" /* two */])())));

var buffer = Object(__WEBPACK_IMPORTED_MODULE_2__makebuffer__["a" /* default */])();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

console.log(buffer());

buffer.clear();

console.log(buffer());


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SubstitutionCipher;
function SubstitutionCipher(dict1, dict2) {
  this.dict1 = dict1;
  this.dict2 = dict2;

  this.encode = function(subs) {
      let newline= '';
      for(var i = 0; i < subs.length; i++){
          newline+=dict2[dict1.indexOf(subs[i])];
      }
      return newline
  }

  this.decode = function(subs) {
      let newline='';
      for(var i = 0; i < subs.length; i++){
          newline+=dict1[dict2.indexOf(subs[i])];
      }
      return newline
  }

}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = one;
/* harmony export (immutable) */ __webpack_exports__["m"] = two;
/* harmony export (immutable) */ __webpack_exports__["k"] = three;
/* harmony export (immutable) */ __webpack_exports__["d"] = four;
/* harmony export (immutable) */ __webpack_exports__["c"] = five;
/* harmony export (immutable) */ __webpack_exports__["j"] = six;
/* harmony export (immutable) */ __webpack_exports__["i"] = seven;
/* harmony export (immutable) */ __webpack_exports__["b"] = eight;
/* harmony export (immutable) */ __webpack_exports__["f"] = nine;
/* harmony export (immutable) */ __webpack_exports__["h"] = plus;
/* harmony export (immutable) */ __webpack_exports__["e"] = minus;
/* harmony export (immutable) */ __webpack_exports__["l"] = times;
/* harmony export (immutable) */ __webpack_exports__["a"] = dividedBy;
function one(arg) {
  if (!arg) {return 1;}
  if (typeof(arg)==="object") {
    return  calcOps(1, arg[0], arg[1]);
  }
}

function two(arg) {
  if (!arg) {return 2;}
  if (typeof(arg)==="object") {
    return  calcOps(2, arg[0], arg[1]);
  }
}

function three(arg) {
  if (!arg) {return 3;}
  if (typeof(arg)==="object") {
    return  calcOps(3, arg[0], arg[1]);
  }
}

function four(arg) {
  if (!arg) {return 4;}
  if (typeof(arg)==="object") {
    return  calcOps(4, arg[0], arg[1]);
  }
}

function five(arg) {
  if (!arg) {return 5;}
  if (typeof(arg)==="object") {
    return  calcOps(5, arg[0], arg[1]);
  }
}

function six(arg) {
  if (!arg) {return 6;}
  if (typeof(arg)==="object") {
    return  calcOps(6, arg[0], arg[1]);
  }
}

function seven(arg) {
  if (!arg) {return 7;}
  if (typeof(arg)==="object") {
    return  calcOps(7, arg[0], arg[1]);
  }
}

function eight(arg) {
  if (!arg) {return 8;}
  if (typeof(arg)==="object") {
    return  calcOps(8, arg[0], arg[1]);
  }
}

function nine(arg) {
  if (!arg) {return 9;}
  if (typeof(arg)==="object") {
    return  calcOps(9, arg[0], arg[1]);
  }
}

function calcOps(a,opt,b) {
  switch (opt) {
    case "+":
        return a + b;
      break;
    case "-":
          return a - b;
      break;
    case "*":
          return a * b;
    case "/":
        return a / b;
    default:
      console.log("somethings wrong")
  }
}

function plus(b) {
   let res = [];
   res[0]="+";
   res[1]=b;
   return res
}

function minus(b) {
   let res = [];
   res[0]="-";
   res[1]=b;
   return res
}

function times(b) {
   let res = [];
   res[0]="*";
   res[1]=b;
   return res
}

function dividedBy(b) {
   let res = [];
   res[0]="/";
   res[1]=b;
   return res
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeBuffer;
function makeBuffer(){
  var strBuffer='';
  function buffer(subStr) {
    if (!subStr) { return strBuffer; }
    strBuffer+=subStr;
  };
  buffer.clear = function () {
      strBuffer = '';
      };
  return buffer;
}


/***/ })
/******/ ]);