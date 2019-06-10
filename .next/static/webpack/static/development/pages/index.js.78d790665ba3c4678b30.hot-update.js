webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/RadioButtonGroup.js":
/*!****************************************!*\
  !*** ./components/RadioButtonGroup.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");

var _jsxFileName = "C:\\Users\\lucid\\Documents\\Github Repos\\Albion-Tools\\components\\RadioButtonGroup.js";









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    FormControl: {
      margin: theme.spacing(3)
    },
    group: {
      margin: theme.spacing(1, 0)
    }
  };
});

var RadioButtonGroup = function RadioButtonGroup(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1]; // const handleChange(event) {
  //   setValue()
  // }


  var renderList = function renderList() {
    return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.keys(props.data).map(function (category) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: category,
        control: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }),
        label: category,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "fieldset",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "legend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": props.name,
    name: props.name,
    child: true,
    className: classes.group,
    value: props.value,
    onChange: props.handleCategoryChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, renderList())));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioButtonGroup);

/***/ })

})
//# sourceMappingURL=index.js.78d790665ba3c4678b30.hot-update.js.map