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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./node_modules/js-filters/Filters/SomeType.js":
/*!*****************************************************!*\
  !*** ./node_modules/js-filters/Filters/SomeType.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Abstract */ "./node_modules/js-filters/Filters/Abstract.js");


class SomeTypeFilter extends _Abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

	compare(values, filterValues) {
		if (filterValues.length === 0)
			return true;

		return filterValues.some(filterValue => values.includes(filterValue));
	}

}

/* harmony default export */ __webpack_exports__["default"] = (SomeTypeFilter);


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

/***/ "./src/js/sometypefilter.js":
/*!**********************************!*\
  !*** ./src/js/sometypefilter.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_filters_DataAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-filters/DataAdapter */ "./node_modules/js-filters/DataAdapter.js");
/* harmony import */ var js_filters_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-filters/Handler */ "./node_modules/js-filters/Handler.js");
/* harmony import */ var js_filters_Filters_SomeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-filters/Filters/SomeType */ "./node_modules/js-filters/Filters/SomeType.js");



var filterElement = document.querySelector('[name="filter"]');

var getItems = function getItems() {
  return document.querySelectorAll('#list li');
};

var adapter = new js_filters_DataAdapter__WEBPACK_IMPORTED_MODULE_0__["default"](filterElement, function (filteredItem) {
  return filteredItem.textContent.split(',');
}, function (filter) {
  return Array.from(filter.selectedOptions).map(function (option) {
    return option.value;
  });
});
var filters = [new js_filters_Filters_SomeType__WEBPACK_IMPORTED_MODULE_2__["default"](adapter)];
var handler = new js_filters_Handler__WEBPACK_IMPORTED_MODULE_1__["default"](filters, getItems);
filterElement.addEventListener('change', function () {
  handler.filterIterationCallback(function (item, passed) {
    if (passed) item.style.display = 'block';else item.style.display = 'none';
  });
});

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** multi ./src/js/sometypefilter.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dtokos/Documents/node_packages/dtokos/js-filters-examples/src/js/sometypefilter.js */"./src/js/sometypefilter.js");


/***/ })

/******/ });