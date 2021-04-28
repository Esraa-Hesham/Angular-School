(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\2-my Projects\EsraaHeshamTask\src\main.ts */"zUnb");


/***/ }),

/***/ "2nbl":
/*!*******************************************************!*\
  !*** ./src/app/excellent-students/student.service.ts ***!
  \*******************************************************/
/*! exports provided: stutedntsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stutedntsService", function() { return stutedntsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class stutedntsService {
    constructor() {
        this.studetnts = [
            { src: 'assets/school/student.png',
                fullName: 'Esraa Hesham 1',
                grade: '99.9' },
            { src: 'assets/school/student.png',
                fullName: 'Esraa Hesham 2',
                grade: '99.8' },
            { src: 'assets/school/student.png',
                fullName: 'Esraa Hesham 3',
                grade: '99.7' },
            { src: 'assets/school/student.png',
                fullName: 'Esraa Hesham 4',
                grade: '99.6' },
            { src: 'assets/school/student.png',
                fullName: 'Esraa Hesham 5',
                grade: '99.5' },
            { src: 'assets/school/student.png',
                fullName: 'Esraa Hesham 6',
                grade: '99.8' },
            { src: 'assets/school/student.png',
                fullName: 'Esraa Hesham 7',
                grade: '99.7' },
            { src: 'assets/school/student.png',
                fullName: 'Esraa Hesham 8',
                grade: '99.6' }
        ];
    }
    getStudent() {
        return this.studetnts.slice();
    }
}
stutedntsService.ɵfac = function stutedntsService_Factory(t) { return new (t || stutedntsService)(); };
stutedntsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: stutedntsService, factory: stutedntsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](stutedntsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "QhyD":
/*!******************************************************!*\
  !*** ./src/app/school-word/school-word.component.ts ***!
  \******************************************************/
/*! exports provided: SchoolWordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolWordComponent", function() { return SchoolWordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SchoolWordComponent {
    constructor() { }
    ngOnInit() {
    }
}
SchoolWordComponent.ɵfac = function SchoolWordComponent_Factory(t) { return new (t || SchoolWordComponent)(); };
SchoolWordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchoolWordComponent, selectors: [["app-school-word"]], decls: 10, vars: 0, consts: [[1, "container"], [1, "about-us"], [1, "info-box"], [1, "myprogress-underline"], [1, "image-box"], ["src", "assets/school/ab.png", "id", "about-us-img", "alt", "about-us"]], template: function SchoolWordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-us[_ngcontent-%COMP%] {\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n  display: flex;\r\n}\r\n\r\n.about-us[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  padding: 30px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.about-us[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 35px;\r\n  color: #00ff80;\r\n  margin: 0 0 30px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.myprogress-underline[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 10px;\r\n  height: 10px;\r\n  background-color: #00ff80;\r\n  border-radius: 50%;\r\n  margin-left: 13%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.myprogress-underline[_ngcontent-%COMP%]::before, .myprogress-underline[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 60px;\r\n  height: 3px;\r\n  background-color: #30343d;\r\n  top: 4px;\r\n}\r\n\r\n.myprogress-underline[_ngcontent-%COMP%]::after {\r\n  left: -73px;\r\n}\r\n\r\n.myprogress-underline[_ngcontent-%COMP%]::before {\r\n  left: 20px;\r\n}\r\n\r\n.about-us[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 1.8;\r\n  color: #001a0f;\r\n  margin: 0;\r\n  font-size: 17px;\r\n}\r\n\r\n.about-us[_ngcontent-%COMP%]   .image-box[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  text-align: right;\r\n}\r\n\r\n.about-us[_ngcontent-%COMP%]   .image-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 430px;\r\n  height: 300px;\r\n  margin-right: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC13b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOztBQUVsQjtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsUUFBUTtBQUNWOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLE9BQU87RUFDUCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFDQSxrQkFBa0IiLCJmaWxlIjoic2Nob29sLXdvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0YXJ0IGFib3V0IHVzKi9cclxuXHJcbi5hYm91dC11cyB7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmFib3V0LXVzIC5pbmZvLWJveCB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLmFib3V0LXVzIC5pbmZvLWJveCBoMiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiAjMDBmZjgwO1xyXG4gIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ubXlwcm9ncmVzcy11bmRlcmxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmY4MDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEzJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubXlwcm9ncmVzcy11bmRlcmxpbmU6OmJlZm9yZSxcclxuLm15cHJvZ3Jlc3MtdW5kZXJsaW5lOjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzQzZDtcclxuICB0b3A6IDRweDtcclxufVxyXG4ubXlwcm9ncmVzcy11bmRlcmxpbmU6OmFmdGVyIHtcclxuICBsZWZ0OiAtNzNweDtcclxufVxyXG4ubXlwcm9ncmVzcy11bmRlcmxpbmU6OmJlZm9yZSB7XHJcbiAgbGVmdDogMjBweDtcclxufVxyXG4uYWJvdXQtdXMgLmluZm8tYm94IHAge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgY29sb3I6ICMwMDFhMGY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uYWJvdXQtdXMgLmltYWdlLWJveCB7XHJcbiAgZmxleDogMTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYWJvdXQtdXMgLmltYWdlLWJveCBpbWcge1xyXG4gIHdpZHRoOiA0MzBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNzBweDtcclxufVxyXG4vKiBzdGFydCBhYm91dCB1cyovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchoolWordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-school-word',
                templateUrl: './school-word.component.html',
                styleUrls: ['./school-word.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _school_word_school_word_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school-word/school-word.component */ "QhyD");
/* harmony import */ var _excellent_students_excellent_students_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./excellent-students/excellent-students.component */ "YSMj");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");







function AppComponent_app_school_word_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-school-word");
} }
function AppComponent_app_excellent_students_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-excellent-students");
} }
function AppComponent_app_footer_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
class AppComponent {
    constructor() {
        this.loadFeaure = '';
    }
    onNavigaite(feature) {
        this.loadFeaure = feature;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 3, consts: [[3, "featureSelected"], [1, "container"], [1, "row"], [1, "col-xs-12"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("featureSelected", function AppComponent_Template_app_header_featureSelected_0_listener($event) { return ctx.onNavigaite($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_school_word_4_Template, 1, 0, "app-school-word", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_excellent_students_7_Template, 1, 0, "app-excellent-students", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_app_footer_8_Template, 1, 0, "app-footer", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadFeaure || ctx.loadFeaure === "OurSchool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadFeaure || ctx.loadFeaure === "EXcellentStudents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadFeaure || ctx.loadFeaure === "ContactUs");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _school_word_school_word_component__WEBPACK_IMPORTED_MODULE_3__["SchoolWordComponent"], _excellent_students_excellent_students_component__WEBPACK_IMPORTED_MODULE_4__["ExcellentStudentsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["[_ngcontent-%COMP%]:root {\r\n  --main-color: #b38f00;\r\n}\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n  body {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxTQUFTO0FBQ1giLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1tYWluLWNvbG9yOiAjYjM4ZjAwO1xyXG59XHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuOjpuZy1kZWVwIGJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "YSMj":
/*!********************************************************************!*\
  !*** ./src/app/excellent-students/excellent-students.component.ts ***!
  \********************************************************************/
/*! exports provided: ExcellentStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcellentStudentsComponent", function() { return ExcellentStudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.service */ "2nbl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ExcellentStudentsComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const student_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", student_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r1.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Grade : ", student_r1.grade, " ");
} }
class ExcellentStudentsComponent {
    constructor(studentServcie) {
        this.studentServcie = studentServcie;
    }
    ngOnInit() {
        this.studetnts = this.studentServcie.getStudent();
    }
}
ExcellentStudentsComponent.ɵfac = function ExcellentStudentsComponent_Factory(t) { return new (t || ExcellentStudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_service__WEBPACK_IMPORTED_MODULE_1__["stutedntsService"])); };
ExcellentStudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExcellentStudentsComponent, selectors: [["app-excellent-students"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_student_service__WEBPACK_IMPORTED_MODULE_1__["stutedntsService"]])], decls: 28, vars: 1, consts: [[1, "section-team"], [1, "container"], [1, "row", "justify-content-center", "text-center"], [1, "col-md-6", "col-lg-12"], [1, "header-section"], [1, "title"], [1, "myprogress-underline"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "col-lg-offset-3", "col-xs-offset-0", "col-lg-3", "col-xs-6"], [1, "single-person"], [1, "person-image"], ["src", "assets/school/student.png", "alt", ""], [1, "person-info"], [1, "full-name"], [1, "speciality"], [1, "col-lg-3", "col-xs-6"], [1, "col-sm-6", "col-lg-3", "col-md-4"], ["alt", "", "title", "", 3, "src"]], template: function ExcellentStudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ten Excellent Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExcellentStudentsComponent_ng_container_9_Template, 10, 3, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Esraa Hesham");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Grade : 99.7% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Esraa Hesham");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Grade : 99.7% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.studetnts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["p[_ngcontent-%COMP%], a[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.section-team[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  padding: 80px 0;\r\n\r\n  margin: 0;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.section-team[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.section-team[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  font-size: 45px;\r\n  text-align: center;\r\n  color: #00ff80;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.myprogress-underline[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 10px;\r\n  height: 10px;\r\n  background-color: #00ff80;\r\n  border-radius: 50%;\r\n  margin-left: 50%;\r\n}\r\n\r\n.myprogress-underline[_ngcontent-%COMP%]::before, .myprogress-underline[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 200px;\r\n  height: 3px;\r\n  background-color: #30343d;\r\n  top: 4px;\r\n}\r\n\r\n.myprogress-underline[_ngcontent-%COMP%]::after {\r\n  left: -215px;\r\n}\r\n\r\n.myprogress-underline[_ngcontent-%COMP%]::before {\r\n  left: 25px;\r\n}\r\n\r\n.section-team[_ngcontent-%COMP%]   .single-person[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  padding: 30px;\r\n  background-color: #f6f9ff;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.section-team[_ngcontent-%COMP%]   .single-person[_ngcontent-%COMP%]:hover {\r\n  background: linear-gradient(to right, #00ff80, #00b5f7);\r\n}\r\n\r\n.section-team[_ngcontent-%COMP%]   .single-person[_ngcontent-%COMP%]   .person-image[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-bottom: 50px;\r\n  border-radius: 50%;\r\n  border: 4px dashed transparent;\r\n  transition: padding 0.3s;\r\n}\r\n\r\n.section-team[_ngcontent-%COMP%]   .single-person[_ngcontent-%COMP%]:hover   .person-image[_ngcontent-%COMP%] {\r\n  border: 4px dashed #fff;\r\n}\r\n\r\n.section-team[_ngcontent-%COMP%]   .single-person[_ngcontent-%COMP%]   .person-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: 50%;\r\n  height: 183px;\r\n  object-fit: contain;\r\n}\r\n\r\n.section-team[_ngcontent-%COMP%]   .single-person[_ngcontent-%COMP%]   .person-info[_ngcontent-%COMP%]   .full-name[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  text-align: center;\r\n}\r\n\r\n.section-team[_ngcontent-%COMP%]   .single-person[_ngcontent-%COMP%]   .person-info[_ngcontent-%COMP%]   .speciality[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  font-size: 17px;\r\n  color: #016cec;\r\n  text-align: center;\r\n  margin-left: 28%;\r\n  font-weight: bold;\r\n}\r\n\r\n.section-team[_ngcontent-%COMP%]   .single-person[_ngcontent-%COMP%]:hover   .full-name[_ngcontent-%COMP%], .section-team[_ngcontent-%COMP%]   .single-person[_ngcontent-%COMP%]:hover   .speciality[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2VsbGVudC1zdHVkZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7O0VBRWYsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFFBQVE7QUFDVjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImV4Y2VsbGVudC1zdHVkZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCxcclxuYSxcclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi10ZWFtIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogODBweCAwO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGVhbSAuaGVhZGVyLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRlYW0gLmhlYWRlci1zZWN0aW9uIC50aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDBmZjgwO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLm15cHJvZ3Jlc3MtdW5kZXJsaW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmODA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5teXByb2dyZXNzLXVuZGVybGluZTo6YmVmb3JlLFxyXG4ubXlwcm9ncmVzcy11bmRlcmxpbmU6OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzQzZDtcclxuICB0b3A6IDRweDtcclxufVxyXG4ubXlwcm9ncmVzcy11bmRlcmxpbmU6OmFmdGVyIHtcclxuICBsZWZ0OiAtMjE1cHg7XHJcbn1cclxuLm15cHJvZ3Jlc3MtdW5kZXJsaW5lOjpiZWZvcmUge1xyXG4gIGxlZnQ6IDI1cHg7XHJcbn1cclxuLnNlY3Rpb24tdGVhbSAuc2luZ2xlLXBlcnNvbiB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY5ZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRlYW0gLnNpbmdsZS1wZXJzb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwZmY4MCwgIzAwYjVmNyk7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRlYW0gLnNpbmdsZS1wZXJzb24gLnBlcnNvbi1pbWFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogNHB4IGRhc2hlZCB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuM3M7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRlYW0gLnNpbmdsZS1wZXJzb246aG92ZXIgLnBlcnNvbi1pbWFnZSB7XHJcbiAgYm9yZGVyOiA0cHggZGFzaGVkICNmZmY7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRlYW0gLnNpbmdsZS1wZXJzb24gLnBlcnNvbi1pbWFnZSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDE4M3B4O1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRlYW0gLnNpbmdsZS1wZXJzb24gLnBlcnNvbi1pbmZvIC5mdWxsLW5hbWUge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VjdGlvbi10ZWFtIC5zaW5nbGUtcGVyc29uIC5wZXJzb24taW5mbyAuc3BlY2lhbGl0eSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6ICMwMTZjZWM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAyOCU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRlYW0gLnNpbmdsZS1wZXJzb246aG92ZXIgLmZ1bGwtbmFtZSxcclxuLnNlY3Rpb24tdGVhbSAuc2luZ2xlLXBlcnNvbjpob3ZlciAuc3BlY2lhbGl0eSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcellentStudentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-excellent-students',
                templateUrl: './excellent-students.component.html',
                styleUrls: ['./excellent-students.component.css'],
                providers: [_student_service__WEBPACK_IMPORTED_MODULE_1__["stutedntsService"]]
            }]
    }], function () { return [{ type: _student_service__WEBPACK_IMPORTED_MODULE_1__["stutedntsService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _school_word_school_word_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./school-word/school-word.component */ "QhyD");
/* harmony import */ var _excellent_students_excellent_students_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./excellent-students/excellent-students.component */ "YSMj");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _school_word_school_word_component__WEBPACK_IMPORTED_MODULE_6__["SchoolWordComponent"],
        _excellent_students_excellent_students_component__WEBPACK_IMPORTED_MODULE_7__["ExcellentStudentsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _school_word_school_word_component__WEBPACK_IMPORTED_MODULE_6__["SchoolWordComponent"],
                    _excellent_students_excellent_students_component__WEBPACK_IMPORTED_MODULE_7__["ExcellentStudentsComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_ng_container_26_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We are ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Internatiional ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " School");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Our school is beautiful, clean and sophisticated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", slide_r1.alt)("title", slide_r1.title);
} }
function HeaderComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_container_26_ng_template_1_Template, 10, 3, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", slide_r1.id);
} }
class HeaderComponent {
    constructor() {
        this.featureSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bg = 'transparent';
        this.color = 'white';
        this.slidesStore = [
            { id: '1',
                title: 'Slider 1',
                src: 'assets/school/SC1.jpg',
                alt: 'School' },
            { id: '2',
                title: 'Slider 2',
                src: 'assets/school/SC2.jpg',
                alt: 'School' },
            { id: '3',
                title: 'Slider 3',
                src: 'assets/school/SC3.jpg',
                alt: 'School' },
            { id: '4',
                title: 'Slider 4',
                src: 'assets/school/SC4.jpg',
                alt: 'School' },
            { id: '5',
                title: 'Slider 5',
                src: 'assets/school/SC5.jpg',
                alt: 'School' }
        ];
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            navSpeed: 700,
            items: 1,
            nav: true,
            autoWidth: false,
            merge: false,
            navText: [
                `<i class="fa fa-chevron-left"></i>`, `<i class="fa fa-chevron-right"></i>`
            ]
        };
    }
    ngOnInit() {
    }
    onWindowScroll() {
        const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 100) {
            this.bg = 'white';
            this.color = '#000';
            console.log('You are 100px from the top to bottom');
        }
        else {
            this.bg = 'transparent';
            this.color = 'white';
        }
    }
    onSelect(feature) {
        this.featureSelected.emit(feature);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, outputs: { featureSelected: "featureSelected" }, decls: 27, vars: 14, consts: [[1, "landingpage"], [1, "navigation-bar"], [1, "container"], ["id", "myHeader", 1, "header"], [1, "logo", 3, "click"], [1, "links-container"], [1, "links"], ["href", "#", "data-section", ".about-us", 1, "active", 3, "click"], ["href", "#", "data-section", ".timeline", 3, "click"], ["href", "#", "data-section", ".features", 3, "click"], ["href", "#", "data-section", ".testimonials", 3, "click"], [1, "toggle-menu"], [1, "head-slider"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], [1, "overlay"], [3, "src", "alt", "title"], [1, "introdaction-text"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_4_listener() { return ctx.onSelect(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " International School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() { return ctx.onSelect("Educationlevels"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Education levels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_12_listener() { return ctx.onSelect("OurSchool"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Our School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() { return ctx.onSelect("EXcellentStudents"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "EXcellent Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() { return ctx.onSelect("ContactUs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "owl-carousel-o", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HeaderComponent_ng_container_26_Template, 2, 1, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.bg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slidesStore);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselSlideDirective"]], styles: ["[_ngcontent-%COMP%]:root {\r\n  --main-color: #b38f00;\r\n}\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  margin: 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  \r\n  margin: auto;\r\n}\r\n.landingpage[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n.landingpage[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n  background-color: #00000073;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 2;\r\n}\r\n.landingpage[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 10005;\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n  z-index: 999999;\r\n  color: #fbf9f3;\r\n  display: flex;\r\n  padding: 10px;\r\n}\r\n.header.sticky[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  background-color: transparent;\r\n  color: #eee;\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n  padding: 15px;\r\n  font-weight: bold;\r\n  font-size: 25px;\r\n  margin-top: -15px;\r\n  cursor: pointer;\r\n}\r\n.header[_ngcontent-%COMP%]   .links-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n.header[_ngcontent-%COMP%]   .toggle-menu[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  width: 40px;\r\n  display: none;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n.header[_ngcontent-%COMP%]   .toggle-menu.menu-active[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  border-width: 10px;\r\n  border-style: solid;\r\n  border-color: transparent transparent #00ff80 transparent;\r\n  position: absolute;\r\n  bottom: -15px;\r\n  left: 10px;\r\n}\r\n.header[_ngcontent-%COMP%]   .toggle-menu[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  color: #00ff80;\r\n}\r\n.header[_ngcontent-%COMP%]   .toggle-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  background-color: #fff;\r\n  height: 4px;\r\n  margin-bottom: 4px;\r\n  cursor: pointer;\r\n}\r\n.header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  width: 100%;\r\n  padding-left: 0;\r\n  font-size: 15px;\r\n}\r\n.header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-left: 10px;\r\n}\r\n.header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: aliceblue;\r\n  text-decoration: none;\r\n}\r\n.header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  color: #00ff80 !important;\r\n  transition: 0.3s;\r\n  \r\n  font-weight: bold;\r\n}\r\n.introdaction-text[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 2;\r\n  color: white;\r\n  text-align: center;\r\n  width: 95%;\r\n}\r\n.introdaction-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 45px;\r\n  margin: 0 0 12px;\r\n}\r\n.introdaction-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #00ff80;\r\n  font-weight: bolder;\r\n}\r\n.introdaction-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 2;\r\n  font-size: 20px;\r\n  margin: 0;\r\n}\r\n.head-slider[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.navigation-bar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: transparent;\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 999;\r\n}\r\n\r\n  .head-slider .owl-theme .owl-dots, .owl-theme[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  \r\n  bottom: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n  flex-wrap: nowrap;\r\n}\r\n  .head-slider .owl-theme .owl-nav [class*=\"owl-\"] {\r\n  color: #000;\r\n  font-size: 20px;\r\n  margin: 5px;\r\n  padding: 8px 17px;\r\n  background: #fff;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 45%;\r\n  border-radius: 50%;\r\n}\r\n  .head-slider .owl-carousel .owl-nav .owl-next {\r\n  right: 0;\r\n}\r\n  .head-slider .owl-carousel .owl-nav .owl-prev {\r\n  left: 0;\r\n}\r\n  .head-slider .owl-carousel .owl-item img {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100vh;\r\n  object-fit: cover;\r\n}\r\n  .head-slider .owl-theme .owl-dots .owl-dot.active span, .owl-theme[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n}\r\n  .head-slider .owl-theme .owl-dots .owl-dot span {\r\n  width: 14px;\r\n  height: 14px;\r\n  margin: 5px 7px;\r\n  background: #ffffff63;\r\n  display: block;\r\n  -webkit-backface-visibility: visible;\r\n  transition: opacity 0.2s ease;\r\n  border-radius: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxTQUFTO0FBQ1g7QUFDQTtFQUNFO3dCQUNzQjtFQUN0QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLE1BQU07RUFDTixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLE1BQU07RUFDTiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtBQUNWO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5REFBeUQ7RUFDekQsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0FBQ2Q7QUFFQSxTQUFTO0FBQ1Q7O0VBRUUsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7QUFDQTtFQUNFLE9BQU87QUFDVDtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsY0FBYztFQUNkLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC0tbWFpbi1jb2xvcjogI2IzOGYwMDtcclxufVxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAvKiBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDsgKi9cclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5sYW5kaW5ncGFnZSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxhbmRpbmdwYWdlIC5vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNzM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5sYW5kaW5ncGFnZSAuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTAwMDU7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG4gIGNvbG9yOiAjZmJmOWYzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uaGVhZGVyLnN0aWNreSB7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5oZWFkZXIgLmxvZ28ge1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmhlYWRlciAubGlua3MtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uaGVhZGVyIC50b2dnbGUtbWVudSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXIgLnRvZ2dsZS1tZW51Lm1lbnUtYWN0aXZlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMDBmZjgwIHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0xNXB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbn1cclxuLmhlYWRlciAudG9nZ2xlLW1lbnU6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICMwMGZmODA7XHJcbn1cclxuLmhlYWRlciAudG9nZ2xlLW1lbnUgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5oZWFkZXIgLmxpbmtzIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmhlYWRlciAubGlua3MgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uaGVhZGVyIC5saW5rcyBsaSBhIHtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uaGVhZGVyIC5saW5rcyBsaSBhOmhvdmVyLFxyXG4uaGVhZGVyIC5saW5rcyBsaSBhLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMGZmODAgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIC8qIGZvbnQtc2l6ZTogMjBweDsgKi9cclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaW50cm9kYWN0aW9uLXRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA5NSU7XHJcbn1cclxuLmludHJvZGFjdGlvbi10ZXh0IGgxIHtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgbWFyZ2luOiAwIDAgMTJweDtcclxufVxyXG4uaW50cm9kYWN0aW9uLXRleHQgaDEgc3BhbiB7XHJcbiAgY29sb3I6ICMwMGZmODA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uaW50cm9kYWN0aW9uLXRleHQgcCB7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uaGVhZC1zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubmF2aWdhdGlvbi1iYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLyogZG90cyAqL1xyXG46Om5nLWRlZXAgLmhlYWQtc2xpZGVyIC5vd2wtdGhlbWUgLm93bC1kb3RzLFxyXG4ub3dsLXRoZW1lIC5vd2wtbmF2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyogbGVmdDogMDsgKi9cclxuICAvKiByaWdodDogMDsgKi9cclxuICBib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG46Om5nLWRlZXAgLmhlYWQtc2xpZGVyIC5vd2wtdGhlbWUgLm93bC1uYXYgW2NsYXNzKj1cIm93bC1cIl0ge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiA4cHggMTdweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG46Om5nLWRlZXAgLmhlYWQtc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1uZXh0IHtcclxuICByaWdodDogMDtcclxufVxyXG46Om5nLWRlZXAgLmhlYWQtc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2IHtcclxuICBsZWZ0OiAwO1xyXG59XHJcbjo6bmctZGVlcCAuaGVhZC1zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbjo6bmctZGVlcCAuaGVhZC1zbGlkZXIgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHNwYW4sXHJcbi5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90OmhvdmVyIHNwYW4ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuOjpuZy1kZWVwIC5oZWFkLXNsaWRlciAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgbWFyZ2luOiA1cHggN3B4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY2MztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, { featureSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




class FooterComponent {
    constructor() {
        this.faMapMarkedAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarkedAlt"];
        this.faBlenderPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBlenderPhone"];
        this.faEnvelopeOpenText = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelopeOpenText"];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 45, vars: 3, consts: [[1, "keepInTouch"], [1, "container"], [1, "row-can"], [1, "myprogress-underline"], [1, "contact-icons"], [1, "contact-details"], [1, "fontcontact", 3, "icon"], [1, "social-links"], ["href", "#", 1, "linkmove"], ["href", "#"], ["src", "assets/school/fb2.png", "alt", "Facebook"], ["src", "assets/school/tw2.png", "alt", "Twitter"], ["src", "assets/school/link.png", "alt", "Linkedin"], ["src", "assets/school/inst.jpg", "alt", "Instgram"], [1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TO Contact With Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Our school is beautiful, clean and sophisticated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Visit Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "International School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Call Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "01102996605");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "esraa.hisaad@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Follow Me Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "This Site Made By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Esraa Hesham");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faMapMarkedAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBlenderPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelopeOpenText);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".keepInTouch[_ngcontent-%COMP%]   .row-can[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.keepInTouch[_ngcontent-%COMP%]   .row-can[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: #00ff80;\r\n  font-size: 40px;\r\n  margin-bottom: 15px;\r\n}\r\n.myprogress-underline[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 10px;\r\n  height: 10px;\r\n  background-color: #00ff80;\r\n  border-radius: 50%;\r\n  margin-left: 50%;\r\n  margin-bottom: 10px;\r\n}\r\n.myprogress-underline[_ngcontent-%COMP%]::before, .myprogress-underline[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 161px;\r\n  height: 3px;\r\n  background-color: #30343d;\r\n  top: 4px;\r\n}\r\n.myprogress-underline[_ngcontent-%COMP%]::after {\r\n  left: -175px;\r\n}\r\n.myprogress-underline[_ngcontent-%COMP%]::before {\r\n  left: 22px;\r\n}\r\n.keepInTouch[_ngcontent-%COMP%]   .row-can[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #30343d;\r\n  font-size: 20px;\r\n  margin-bottom: 30px;\r\n}\r\n.contact-icons[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .fontcontact[_ngcontent-%COMP%] {\r\n  height: 200px;\r\n  width: 100%;\r\n  margin-top: 40px;\r\n  text-align: center;\r\n  margin-bottom: 50px;\r\n}\r\n.contact-icons[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: calc(99% / 3);\r\n  text-align: center;\r\n}\r\n.contact-icons[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .fontcontact[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n  line-height: 100px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  font-size: 45px;\r\n  color: #30343d;\r\n  padding: 13px;\r\n  border: 1px solid #30343d;\r\n  margin-bottom: 20px;\r\n  transition: all 0.3s ease;\r\n}\r\n.contact-icons[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   .fontcontact[_ngcontent-%COMP%]:hover {\r\n  background-color: #00ff80;\r\n  color: whitesmoke;\r\n}\r\n.contact-icons[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: #00ff80;\r\n  font-size: 25px;\r\n}\r\n.contact-icons[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #48afa5;\r\n  margin-bottom: 50px;\r\n}\r\n.social-links[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.social-links[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: #30343d;\r\n  font-weight: bold;\r\n  font-size: 35px;\r\n}\r\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.social-links[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 50px;\r\n  height: 50px;\r\n  line-height: 40px;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  color: #fff;\r\n  font-size: 30px;\r\n  transition: all 0.3s ease;\r\n  padding-bottom: 0;\r\n  margin-right: 10px;\r\n}\r\n.footer[_ngcontent-%COMP%] {\r\n  background-color: #30343d;\r\n  color: #fff;\r\n  font-size: 25px;\r\n  text-align: center;\r\n  height: 90px;\r\n  margin-top: 50px;\r\n  height: auto;\r\n  padding: 26px 0;\r\n}\r\n.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #00ff80;\r\n}\r\n.linkmove[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 25px;\r\n  font-weight: 500;\r\n  color: #000;\r\n  text-decoration: none;\r\n  background-image: linear-gradient(#fff, #fff), linear-gradient(#000, #000);\r\n  background-size: 20px 2px, 100% 2px, 0 2px;\r\n  background-position: calc(20px * -1) 100%, 100% 100%, 0 100%;\r\n  background-repeat: no-repeat;\r\n  transition: background-size 0.3s linear, background-position 0.3s linear;\r\n}\r\n.linkmove[_ngcontent-%COMP%]:hover {\r\n  background-size: 20px 2px, 0 2px, 100% 2px;\r\n  background-position: calc(100% + 20px) 100%, 100% 100%, 0 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixRQUFRO0FBQ1Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUVuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUVmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQiwwRUFBMEU7RUFDMUUsMENBQTBDO0VBQzFDLDREQUE0RDtFQUM1RCw0QkFBNEI7RUFDNUIsd0VBQXdFO0FBQzFFO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMsOERBQThEO0FBQ2hFIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtlZXBJblRvdWNoIC5yb3ctY2FuIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmtlZXBJblRvdWNoIC5yb3ctY2FuIGgyIHtcclxuICBjb2xvcjogIzAwZmY4MDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubXlwcm9ncmVzcy11bmRlcmxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmY4MDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubXlwcm9ncmVzcy11bmRlcmxpbmU6OmJlZm9yZSxcclxuLm15cHJvZ3Jlc3MtdW5kZXJsaW5lOjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDE2MXB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDM0M2Q7XHJcbiAgdG9wOiA0cHg7XHJcbn1cclxuLm15cHJvZ3Jlc3MtdW5kZXJsaW5lOjphZnRlciB7XHJcbiAgbGVmdDogLTE3NXB4O1xyXG59XHJcbi5teXByb2dyZXNzLXVuZGVybGluZTo6YmVmb3JlIHtcclxuICBsZWZ0OiAyMnB4O1xyXG59XHJcbi5rZWVwSW5Ub3VjaCAucm93LWNhbiBwIHtcclxuICBjb2xvcjogIzMwMzQzZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uY29udGFjdC1pY29ucyAuY29udGFjdC1kZXRhaWxzIC5mb250Y29udGFjdCB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5jb250YWN0LWljb25zIC5jb250YWN0LWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogY2FsYyg5OSUgLyAzKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhY3QtaWNvbnMgLmNvbnRhY3QtZGV0YWlscyAuZm9udGNvbnRhY3Qge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBjb2xvcjogIzMwMzQzZDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMDM0M2Q7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4uY29udGFjdC1pY29ucyAuY29udGFjdC1kZXRhaWxzIC5mb250Y29udGFjdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmY4MDtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4uY29udGFjdC1pY29ucyAuY29udGFjdC1kZXRhaWxzIGgzIHtcclxuICBjb2xvcjogIzAwZmY4MDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWljb25zIC5jb250YWN0LWRldGFpbHMgcCB7XHJcbiAgY29sb3I6ICM0OGFmYTU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnNvY2lhbC1saW5rcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zb2NpYWwtbGlua3MgaDIge1xyXG4gIGNvbG9yOiAjMzAzNDNkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5cclxuLnNvY2lhbC1saW5rcyBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zb2NpYWwtbGlua3MgaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzQzZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogOTBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAyNnB4IDA7XHJcbn1cclxuLmZvb3RlciBzcGFuIHtcclxuICBjb2xvcjogIzAwZmY4MDtcclxufVxyXG4ubGlua21vdmUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZmYsICNmZmYpLCBsaW5lYXItZ3JhZGllbnQoIzAwMCwgIzAwMCk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDJweCwgMTAwJSAycHgsIDAgMnB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMjBweCAqIC0xKSAxMDAlLCAxMDAlIDEwMCUsIDAgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjNzIGxpbmVhciwgYmFja2dyb3VuZC1wb3NpdGlvbiAwLjNzIGxpbmVhcjtcclxufVxyXG4ubGlua21vdmU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAycHgsIDAgMnB4LCAxMDAlIDJweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgKyAyMHB4KSAxMDAlLCAxMDAlIDEwMCUsIDAgMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map