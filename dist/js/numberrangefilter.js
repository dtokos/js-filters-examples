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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-filters/DataAdapter.js":
/*!************************************************!*\
  !*** ./node_modules/js-filters/DataAdapter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class DataAdapter {

	constructor(filter, valueGetter, filterValueGetter) {
		this.filter = filter;
		this.valueGetter = valueGetter;
		this.filterValueGetter = filterValueGetter;
	}

	getValue(filteredItem) {
		return this.valueGetter(filteredItem);
	}

	getFilterValue() {
		return this.filterValueGetter(this.filter);
	}

}

/* harmony default export */ __webpack_exports__["default"] = (DataAdapter);


/***/ }),

/***/ "./node_modules/js-filters/Filters/Abstract.js":
/*!*****************************************************!*\
  !*** ./node_modules/js-filters/Filters/Abstract.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class AbstractFilter {

	constructor(dataAdapter) {
		this.dataAdapter = dataAdapter;
	}

	passes(filteredItem) {
		const value = this.getValue(filteredItem);
		const filterValue = this.getFilterValue();

		return this.compare(value, filterValue);
	}

	getValue(filteredItem) {
		return this.dataAdapter.getValue(filteredItem);
	}

	getFilterValue() {
		return this.dataAdapter.getFilterValue();
	}

}

/* harmony default export */ __webpack_exports__["default"] = (AbstractFilter);


/***/ }),

/***/ "./node_modules/js-filters/Filters/NumberRange.js":
/*!********************************************************!*\
  !*** ./node_modules/js-filters/Filters/NumberRange.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Abstract */ "./node_modules/js-filters/Filters/Abstract.js");


class NumberRangeFilter extends _Abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

	constructor(dataAdapter, allowSameFromValue = false, allowSameToValue = false) {
		super(dataAdapter);
		this.allowSameFromValue = allowSameFromValue;
		this.allowSameToValue = allowSameToValue;
	}

	passes(filteredItem) {
		const value = this.getValue(filteredItem);
		const [fromValue, toValue] = this.getFilterValue();

		if (Number.isNaN(fromValue) || Number.isNaN(toValue))
			return true;

		return this.compare(value, fromValue, toValue);
	}

	compare(value, fromValue, toValue) {
		return (fromValue < value || (this.allowSameFromValue && fromValue === value)) &&
			(value < toValue || (this.allowSameToValue && value === toValue));
	}

}

/* harmony default export */ __webpack_exports__["default"] = (NumberRangeFilter);


/***/ }),

/***/ "./node_modules/js-filters/Handler.js":
/*!********************************************!*\
  !*** ./node_modules/js-filters/Handler.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class FilterHandler {

	constructor(filters, itemsGetter) {
		this.filters = filters;
		this.itemsGetter = itemsGetter;
	}

	getFilters() {
		return this.filters;
	}

	getItems() {
		return this.itemsGetter();
	}

	filterBoolean() {
		const items = this.getItems();
		const result = [];

		for (const item of items)
			result.push(this.filterItem(item));

		return result;
	}

	filterObject() {
		const items = this.getItems();
		const result = {
			passed: [],
			failed: []
		};

		for (const item of items)
			if (this.filterItem(item))
				result.passed.push(item);
			else
				result.failed.push(item);

		return result;
	}

	filterCallback(callback) {
		const items = this.getItems();
		const passed = [];
		const failed = [];

		for (const item of items)
			if (this.filterItem(item))
				passed.push(item);
			else
				failed.push(item);

		callback(passed, failed);
	}

	filterIterationCallback(iterationCallback) {
		const items = this.getItems();

		for (const item of items) {
			const passed = this.filterItem(item);
			iterationCallback(item, passed);
		}
	}

	filterItem(item) {
		const filters = this.getFilters();
		
		for (const filter of filters)
			if (!filter.passes(item))
				return false;

		return true;
	}

}

/* harmony default export */ __webpack_exports__["default"] = (FilterHandler);


/***/ }),

/***/ "./src/js/numberrangefilter.js":
/*!*************************************!*\
  !*** ./src/js/numberrangefilter.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_filters_DataAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-filters/DataAdapter */ "./node_modules/js-filters/DataAdapter.js");
/* harmony import */ var js_filters_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-filters/Handler */ "./node_modules/js-filters/Handler.js");
/* harmony import */ var js_filters_Filters_NumberRange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-filters/Filters/NumberRange */ "./node_modules/js-filters/Filters/NumberRange.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var fromFilterElement = document.querySelector('[name="from-filter"]');
var toFilterElement = document.querySelector('[name="to-filter"]');

var getItems = function getItems() {
  return document.querySelectorAll('#list li');
};

var adapter = new js_filters_DataAdapter__WEBPACK_IMPORTED_MODULE_0__["default"]([fromFilterElement, toFilterElement], function (filteredItem) {
  return parseInt(filteredItem.textContent);
}, function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      fromFilter = _ref2[0],
      toFilter = _ref2[1];

  return [parseInt(fromFilter.value), parseInt(toFilter.value)];
});
var filters = [new js_filters_Filters_NumberRange__WEBPACK_IMPORTED_MODULE_2__["default"](adapter)];
var handler = new js_filters_Handler__WEBPACK_IMPORTED_MODULE_1__["default"](filters, getItems);

function changeCallback() {
  handler.filterIterationCallback(function (item, passed) {
    if (passed) item.style.display = 'block';else item.style.display = 'none';
  });
}

fromFilterElement.addEventListener('change', changeCallback);
toFilterElement.addEventListener('change', changeCallback);

/***/ }),

/***/ 4:
/*!*******************************************!*\
  !*** multi ./src/js/numberrangefilter.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dtokos/Documents/node_packages/dtokos/js-filters-examples/src/js/numberrangefilter.js */"./src/js/numberrangefilter.js");


/***/ })

/******/ });