(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.site-container {\r\n    display: flex;\r\n    min-height: 100vh;\r\n    flex-direction: column;\r\n  }\r\n  \r\n.dashboard-container {\r\n    flex: 1;\r\n}\r\n  \r\n.villa-info {\r\n  margin-top: 50px;\r\n  display: flex;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQix1QkFBdUI7R0FDeEI7O0FBRUg7SUFDSSxRQUFRO0NBQ1g7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNpdGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4uZGFzaGJvYXJkLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4udmlsbGEtaW5mbyB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-container\">\r\n\r\n    <app-header></app-header>\r\n\r\n    <div class=\"container dashboard-container\">\r\n        <div class=\"villa-info\">\r\n            <app-summary></app-summary>\r\n        </div>\r\n        \r\n        <app-standings></app-standings>\r\n    </div>\r\n\r\n    <app-footer></app-footer>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'aston-villa-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _standings_standings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./standings/standings.component */ "./src/app/standings/standings.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _standings_standings_component__WEBPACK_IMPORTED_MODULE_7__["StandingsComponent"],
                _summary_summary_component__WEBPACK_IMPORTED_MODULE_8__["SummaryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    height: 50px;\r\n    background-color: #95BFE5;\r\n    padding-top: 10px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: #6c757d;\r\n}\r\n\r\na:hover {\r\n    text-decoration: underline;\r\n    color: #6c757d;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NUJGRTU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container\">\r\n        <span class=\"text-muted\">All Rights Reserved 2019 <a href=\"https://github.com/wkrzywiec\">Wojciech Krzywiec</a></span>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <nav class=\"navbar navbar-dark bg-claret\">\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          <img src=\"assets/images/logo/as_logo.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\r\n          Aston Villa Dashboard\r\n        </a>\r\n    </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/service/football-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/football-data.service.ts ***!
  \**************************************************/
/*! exports provided: FootballDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballDataService", function() { return FootballDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FootballDataService = /** @class */ (function () {
    function FootballDataService(http) {
        this.http = http;
        //private standingURL = '';
        this.standingURL = 'https://apifootball.com/api/?APIkey=9312f9173fad7330dc780c926a665525c9023c3c4433416130766a602be7c83e&action=get_standings&league_id=63';
    }
    FootballDataService.prototype.retrieveAllStandings = function () {
        return this.http.get(this.standingURL);
    };
    FootballDataService.prototype.retrieveTestStandings = function () {
        return [
            {
                "team_name": "Norwich City",
                "overall_league_position": "1",
                "overall_league_payed": "30",
                "overall_league_W": "16",
                "overall_league_D": "9",
                "overall_league_L": "5",
                "overall_league_GF": "57",
                "overall_league_GA": "39",
                "overall_league_PTS": "57"
            },
            {
                "team_name": "Leeds United",
                "overall_league_position": "2",
                "overall_league_payed": "30",
                "overall_league_W": "17",
                "overall_league_D": "6",
                "overall_league_L": "7",
                "overall_league_GF": "50",
                "overall_league_GA": "34",
                "overall_league_PTS": "57"
            },
            {
                "team_name": "Sheffield United",
                "overall_league_position": "3",
                "overall_league_payed": "31",
                "overall_league_W": "16",
                "overall_league_D": "7",
                "overall_league_L": "8",
                "overall_league_GF": "53",
                "overall_league_GA": "34",
                "overall_league_PTS": "55"
            },
            {
                "team_name": "West Bromwich Albion",
                "overall_league_position": "4",
                "overall_league_payed": "29",
                "overall_league_W": "14",
                "overall_league_D": "8",
                "overall_league_L": "7",
                "overall_league_GF": "59",
                "overall_league_GA": "38",
                "overall_league_PTS": "50"
            },
            {
                "team_name": "Middlesbrough",
                "overall_league_position": "5",
                "overall_league_payed": "29",
                "overall_league_W": "13",
                "overall_league_D": "11",
                "overall_league_L": "5",
                "overall_league_GF": "34",
                "overall_league_GA": "22",
                "overall_league_PTS": "50"
            },
            {
                "team_name": "Bristol City",
                "overall_league_position": "6",
                "overall_league_payed": "29",
                "overall_league_W": "13",
                "overall_league_D": "8",
                "overall_league_L": "8",
                "overall_league_GF": "37",
                "overall_league_GA": "29",
                "overall_league_PTS": "47"
            },
            {
                "team_name": "Derby County",
                "overall_league_position": "7",
                "overall_league_payed": "29",
                "overall_league_W": "13",
                "overall_league_D": "8",
                "overall_league_L": "8",
                "overall_league_GF": "40",
                "overall_league_GA": "35",
                "overall_league_PTS": "47"
            },
            {
                "team_name": "Aston Villa",
                "overall_league_position": "8",
                "overall_league_payed": "31",
                "overall_league_W": "10",
                "overall_league_D": "14",
                "overall_league_L": "7",
                "overall_league_GF": "56",
                "overall_league_GA": "49",
                "overall_league_PTS": "44"
            },
            {
                "team_name": "Birmingham City",
                "overall_league_position": "9",
                "overall_league_payed": "30",
                "overall_league_W": "10",
                "overall_league_D": "13",
                "overall_league_L": "7",
                "overall_league_GF": "45",
                "overall_league_GA": "36",
                "overall_league_PTS": "43"
            },
            {
                "team_name": "Hull City",
                "overall_league_position": "10",
                "overall_league_payed": "30",
                "overall_league_W": "12",
                "overall_league_D": "7",
                "overall_league_L": "11",
                "overall_league_GF": "43",
                "overall_league_GA": "38",
                "overall_league_PTS": "43"
            },
            {
                "team_name": "Blackburn Rovers",
                "overall_league_position": "11",
                "overall_league_payed": "30",
                "overall_league_W": "11",
                "overall_league_D": "10",
                "overall_league_L": "9",
                "overall_league_GF": "42",
                "overall_league_GA": "46",
                "overall_league_PTS": "43"
            },
            {
                "team_name": "Nottingham Forest",
                "overall_league_position": "12",
                "overall_league_payed": "30",
                "overall_league_W": "10",
                "overall_league_D": "12",
                "overall_league_L": "8",
                "overall_league_GF": "42",
                "overall_league_GA": "35",
                "overall_league_PTS": "42"
            },
            {
                "team_name": "Swansea City",
                "overall_league_position": "13",
                "overall_league_payed": "30",
                "overall_league_W": "11",
                "overall_league_D": "8",
                "overall_league_L": "11",
                "overall_league_GF": "40",
                "overall_league_GA": "37",
                "overall_league_PTS": "41"
            },
            {
                "team_name": "Queens Park Rangers",
                "overall_league_position": "14",
                "overall_league_payed": "29",
                "overall_league_W": "11",
                "overall_league_D": "6",
                "overall_league_L": "12",
                "overall_league_GF": "35",
                "overall_league_GA": "41",
                "overall_league_PTS": "39"
            },
            {
                "team_name": "Stoke City",
                "overall_league_position": "15",
                "overall_league_payed": "30",
                "overall_league_W": "9",
                "overall_league_D": "11",
                "overall_league_L": "10",
                "overall_league_GF": "33",
                "overall_league_GA": "39",
                "overall_league_PTS": "38"
            },
            {
                "team_name": "Sheffield Wednesday",
                "overall_league_position": "16",
                "overall_league_payed": "29",
                "overall_league_W": "10",
                "overall_league_D": "8",
                "overall_league_L": "11",
                "overall_league_GF": "34",
                "overall_league_GA": "45",
                "overall_league_PTS": "38"
            },
            {
                "team_name": "Brentford",
                "overall_league_position": "17",
                "overall_league_payed": "29",
                "overall_league_W": "9",
                "overall_league_D": "10",
                "overall_league_L": "10",
                "overall_league_GF": "48",
                "overall_league_GA": "41",
                "overall_league_PTS": "37"
            },
            {
                "team_name": "Preston North End",
                "overall_league_position": "18",
                "overall_league_payed": "30",
                "overall_league_W": "9",
                "overall_league_D": "10",
                "overall_league_L": "11",
                "overall_league_GF": "45",
                "overall_league_GA": "45",
                "overall_league_PTS": "37"
            },
            {
                "team_name": "Wigan Athletic",
                "overall_league_position": "19",
                "overall_league_payed": "30",
                "overall_league_W": "9",
                "overall_league_D": "5",
                "overall_league_L": "16",
                "overall_league_GF": "31",
                "overall_league_GA": "45",
                "overall_league_PTS": "32"
            },
            {
                "team_name": "Millwall",
                "overall_league_position": "20",
                "overall_league_payed": "29",
                "overall_league_W": "7",
                "overall_league_D": "9",
                "overall_league_L": "13",
                "overall_league_GF": "34",
                "overall_league_GA": "44",
                "overall_league_PTS": "30"
            },
            {
                "team_name": "Rotherham United",
                "overall_league_position": "21",
                "overall_league_payed": "30",
                "overall_league_W": "5",
                "overall_league_D": "11",
                "overall_league_L": "14",
                "overall_league_GF": "28",
                "overall_league_GA": "48",
                "overall_league_PTS": "26"
            },
            {
                "team_name": "Reading",
                "overall_league_position": "22",
                "overall_league_payed": "30",
                "overall_league_W": "5",
                "overall_league_D": "10",
                "overall_league_L": "15",
                "overall_league_GF": "32",
                "overall_league_GA": "44",
                "overall_league_PTS": "25"
            },
            {
                "team_name": "Bolton Wanderers",
                "overall_league_position": "23",
                "overall_league_payed": "30",
                "overall_league_W": "5",
                "overall_league_D": "8",
                "overall_league_L": "17",
                "overall_league_GF": "19",
                "overall_league_GA": "45",
                "overall_league_PTS": "23"
            },
            {
                "team_name": "Ipswich Town",
                "overall_league_position": "24",
                "overall_league_payed": "30",
                "overall_league_W": "3",
                "overall_league_D": "9",
                "overall_league_L": "18",
                "overall_league_GF": "23",
                "overall_league_GA": "51",
                "overall_league_PTS": "18"
            }
        ];
    };
    FootballDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FootballDataService);
    return FootballDataService;
}());



/***/ }),

/***/ "./src/app/standings/standings.component.css":
/*!***************************************************!*\
  !*** ./src/app/standings/standings.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#standings-card{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#standings-title {\r\n    display: flex;\r\n    align-items: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.efl-picture {\r\n    content: url(\"/assets/images/efl-logo.svg\");\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n\r\n.first-place {\r\n    background: rgba(84, 167, 89, 0.8);\r\n}\r\n\r\n.second-place {\r\n    background: rgba(84, 167, 89, 0.6);\r\n}\r\n\r\n.third-place {\r\n    background: rgba(84, 167, 89, 0.4);\r\n}\r\n\r\n.relegation-place {\r\n    background: rgba(212, 111, 106, 0.6);\r\n}\r\n\r\n.team-name-column {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.astonvilla-picture, .birmigham-picture, .blackburn-picture, .bolton-picture,\r\n.brentford-picture, .bristol-picture, .derby-picture, .hull-picture,\r\n.ipswich-picture, .leeds-picture, .middle-picture, .millwall-picture,\r\n.norwich-picture, .nottingham-picture, .preston-picture, .qpr-picture,\r\n.reading-picture, .rotherham-picture, .sheffield-picture, .sheffield-wednesday-picture, \r\n.stoke-picture, .swansea-picture, .wba-picture , .wigan-picture{\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.astonvilla-picture {\r\n    content: url(\"/assets/images/logo/as_logo.svg\");\r\n}\r\n\r\n.birmigham-picture {\r\n    content: url(\"/assets/images/logo/Birmingham_City-logo.svg\");\r\n}\r\n\r\n.blackburn-picture {\r\n    content: url(\"/assets/images/logo/Blackburn_Rovers-logo.svg\");\r\n}\r\n\r\n.bolton-picture {\r\n    content: url(\"/assets/images/logo/bolton-logo.svg\");\r\n}\r\n\r\n.brentford-picture {\r\n    content: url(\"/assets/images/logo/Brentford_FC-logo.svg\");\r\n}\r\n\r\n.bristol-picture {\r\n    content: url(\"/assets/images/logo/bristol.png\");\r\n}\r\n\r\n.derby-picture {\r\n    content: url(\"/assets/images/logo/derby-county-logo.png\");\r\n}\r\n\r\n.hull-picture {\r\n    content: url(\"/assets/images/logo/hull-logo.png\");\r\n}\r\n\r\n.ipswich-picture {\r\n    content: url(\"/assets/images/logo/ipswitch.svg\");\r\n}\r\n\r\n.leeds-picture {\r\n    content: url(\"/assets/images/logo/leeds-logo.svg\");\r\n}\r\n\r\n.middle-picture {\r\n    content: url(\"/assets/images/logo/Middlesbrough-logo.svg\");\r\n}\r\n\r\n.millwall-picture {\r\n    content: url(\"/assets/images/logo/millwal-logo.png\");\r\n}\r\n\r\n.norwich-picture {\r\n    content: url(\"/assets/images/logo/norwich-logo.svg\");\r\n}\r\n\r\n.nottingham-picture {\r\n    content: url(\"/assets/images/logo/nottingham-logo.png\");\r\n    width: 25px;\r\n}\r\n\r\n.preston-picture {\r\n    content: url(\"/assets/images/logo/preston-north-logo.gif\");\r\n}\r\n\r\n.qpr-picture {\r\n    content: url(\"/assets/images/logo/qpr-logo.svg\");\r\n}\r\n\r\n.reading-picture {\r\n    content: url(\"/assets/images/logo/Reading-logo.svg\");\r\n}\r\n\r\n.rotherham-picture {\r\n    content: url(\"/assets/images/logo/Rotherham-logo.png\");\r\n}\r\n\r\n.sheffield-picture {\r\n    content: url(\"/assets/images/logo/sheffield-logo.svg\");\r\n}\r\n\r\n.sheffield-wednesday-picture {\r\n    content: url(\"/assets/images/logo/Sheffield_Wednesday-logo.svg\");\r\n}\r\n\r\n.stoke-picture {\r\n    content: url(\"/assets/images/logo/Stoke-logo.svg\");\r\n}\r\n\r\n.swansea-picture {\r\n    content: url(\"/assets/images/logo/Swansea-logo.svg\");\r\n}\r\n\r\n.wba-picture {\r\n    content: url(\"/assets/images/logo/wba-logo.svg\");\r\n}\r\n\r\n.wigan-picture {\r\n    content: url(\"/assets/images/logo/wigan-logo.svg\");\r\n}\r\n\r\n.points-column {\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhbmRpbmdzL3N0YW5kaW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksNENBQTRDO0lBQzVDLFlBQVk7SUFDWixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksbUNBQW1DO0NBQ3RDOztBQUVEO0lBQ0ksbUNBQW1DO0NBQ3RDOztBQUVEO0lBQ0ksbUNBQW1DO0NBQ3RDOztBQUVEO0lBQ0kscUNBQXFDO0NBQ3hDOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtDQUN2Qjs7QUFFRDs7Ozs7O0lBTUksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxnREFBZ0Q7Q0FDbkQ7O0FBRUQ7SUFDSSw2REFBNkQ7Q0FDaEU7O0FBRUQ7SUFDSSw4REFBOEQ7Q0FDakU7O0FBRUQ7SUFDSSxvREFBb0Q7Q0FDdkQ7O0FBRUQ7SUFDSSwwREFBMEQ7Q0FDN0Q7O0FBRUQ7SUFDSSxnREFBZ0Q7Q0FDbkQ7O0FBRUQ7SUFDSSwwREFBMEQ7Q0FDN0Q7O0FBRUQ7SUFDSSxrREFBa0Q7Q0FDckQ7O0FBRUQ7SUFDSSxpREFBaUQ7Q0FDcEQ7O0FBRUQ7SUFDSSxtREFBbUQ7Q0FDdEQ7O0FBRUQ7SUFDSSwyREFBMkQ7Q0FDOUQ7O0FBRUQ7SUFDSSxxREFBcUQ7Q0FDeEQ7O0FBRUQ7SUFDSSxxREFBcUQ7Q0FDeEQ7O0FBRUQ7SUFDSSx3REFBd0Q7SUFDeEQsWUFBWTtDQUNmOztBQUVEO0lBQ0ksMkRBQTJEO0NBQzlEOztBQUVEO0lBQ0ksaURBQWlEO0NBQ3BEOztBQUVEO0lBQ0kscURBQXFEO0NBQ3hEOztBQUVEO0lBQ0ksdURBQXVEO0NBQzFEOztBQUVEO0lBQ0ksdURBQXVEO0NBQzFEOztBQUVEO0lBQ0ksaUVBQWlFO0NBQ3BFOztBQUVEO0lBQ0ksbURBQW1EO0NBQ3REOztBQUVEO0lBQ0kscURBQXFEO0NBQ3hEOztBQUVEO0lBQ0ksaURBQWlEO0NBQ3BEOztBQUVEO0lBQ0ksbURBQW1EO0NBQ3REOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3RhbmRpbmdzL3N0YW5kaW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N0YW5kaW5ncy1jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNzdGFuZGluZ3MtdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmVmbC1waWN0dXJlIHtcclxuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2VmbC1sb2dvLnN2Z1wiKTtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uZmlyc3QtcGxhY2Uge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg4NCwgMTY3LCA4OSwgMC44KTtcclxufVxyXG5cclxuLnNlY29uZC1wbGFjZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDg0LCAxNjcsIDg5LCAwLjYpO1xyXG59XHJcblxyXG4udGhpcmQtcGxhY2Uge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg4NCwgMTY3LCA4OSwgMC40KTtcclxufVxyXG5cclxuLnJlbGVnYXRpb24tcGxhY2Uge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTIsIDExMSwgMTA2LCAwLjYpO1xyXG59XHJcblxyXG4udGVhbS1uYW1lLWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFzdG9udmlsbGEtcGljdHVyZSwgLmJpcm1pZ2hhbS1waWN0dXJlLCAuYmxhY2tidXJuLXBpY3R1cmUsIC5ib2x0b24tcGljdHVyZSxcclxuLmJyZW50Zm9yZC1waWN0dXJlLCAuYnJpc3RvbC1waWN0dXJlLCAuZGVyYnktcGljdHVyZSwgLmh1bGwtcGljdHVyZSxcclxuLmlwc3dpY2gtcGljdHVyZSwgLmxlZWRzLXBpY3R1cmUsIC5taWRkbGUtcGljdHVyZSwgLm1pbGx3YWxsLXBpY3R1cmUsXHJcbi5ub3J3aWNoLXBpY3R1cmUsIC5ub3R0aW5naGFtLXBpY3R1cmUsIC5wcmVzdG9uLXBpY3R1cmUsIC5xcHItcGljdHVyZSxcclxuLnJlYWRpbmctcGljdHVyZSwgLnJvdGhlcmhhbS1waWN0dXJlLCAuc2hlZmZpZWxkLXBpY3R1cmUsIC5zaGVmZmllbGQtd2VkbmVzZGF5LXBpY3R1cmUsIFxyXG4uc3Rva2UtcGljdHVyZSwgLnN3YW5zZWEtcGljdHVyZSwgLndiYS1waWN0dXJlICwgLndpZ2FuLXBpY3R1cmV7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYXN0b252aWxsYS1waWN0dXJlIHtcclxuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vYXNfbG9nby5zdmdcIik7XHJcbn1cclxuXHJcbi5iaXJtaWdoYW0tcGljdHVyZSB7XHJcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvL0Jpcm1pbmdoYW1fQ2l0eS1sb2dvLnN2Z1wiKTtcclxufVxyXG5cclxuLmJsYWNrYnVybi1waWN0dXJlIHtcclxuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vQmxhY2tidXJuX1JvdmVycy1sb2dvLnN2Z1wiKTtcclxufVxyXG5cclxuLmJvbHRvbi1waWN0dXJlIHtcclxuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vYm9sdG9uLWxvZ28uc3ZnXCIpO1xyXG59XHJcblxyXG4uYnJlbnRmb3JkLXBpY3R1cmUge1xyXG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9CcmVudGZvcmRfRkMtbG9nby5zdmdcIik7XHJcbn1cclxuXHJcbi5icmlzdG9sLXBpY3R1cmUge1xyXG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9icmlzdG9sLnBuZ1wiKTtcclxufVxyXG5cclxuLmRlcmJ5LXBpY3R1cmUge1xyXG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9kZXJieS1jb3VudHktbG9nby5wbmdcIik7XHJcbn1cclxuXHJcbi5odWxsLXBpY3R1cmUge1xyXG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9odWxsLWxvZ28ucG5nXCIpO1xyXG59XHJcblxyXG4uaXBzd2ljaC1waWN0dXJlIHtcclxuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vaXBzd2l0Y2guc3ZnXCIpO1xyXG59XHJcblxyXG4ubGVlZHMtcGljdHVyZSB7XHJcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvL2xlZWRzLWxvZ28uc3ZnXCIpO1xyXG59XHJcblxyXG4ubWlkZGxlLXBpY3R1cmUge1xyXG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9NaWRkbGVzYnJvdWdoLWxvZ28uc3ZnXCIpO1xyXG59XHJcblxyXG4ubWlsbHdhbGwtcGljdHVyZSB7XHJcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvL21pbGx3YWwtbG9nby5wbmdcIik7XHJcbn1cclxuXHJcbi5ub3J3aWNoLXBpY3R1cmUge1xyXG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9ub3J3aWNoLWxvZ28uc3ZnXCIpO1xyXG59XHJcblxyXG4ubm90dGluZ2hhbS1waWN0dXJlIHtcclxuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vbm90dGluZ2hhbS1sb2dvLnBuZ1wiKTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4ucHJlc3Rvbi1waWN0dXJlIHtcclxuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vcHJlc3Rvbi1ub3J0aC1sb2dvLmdpZlwiKTtcclxufVxyXG5cclxuLnFwci1waWN0dXJlIHtcclxuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vcXByLWxvZ28uc3ZnXCIpO1xyXG59XHJcblxyXG4ucmVhZGluZy1waWN0dXJlIHtcclxuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vUmVhZGluZy1sb2dvLnN2Z1wiKTtcclxufVxyXG5cclxuLnJvdGhlcmhhbS1waWN0dXJlIHtcclxuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vUm90aGVyaGFtLWxvZ28ucG5nXCIpO1xyXG59XHJcblxyXG4uc2hlZmZpZWxkLXBpY3R1cmUge1xyXG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9zaGVmZmllbGQtbG9nby5zdmdcIik7XHJcbn1cclxuXHJcbi5zaGVmZmllbGQtd2VkbmVzZGF5LXBpY3R1cmUge1xyXG4gICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbG9nby9TaGVmZmllbGRfV2VkbmVzZGF5LWxvZ28uc3ZnXCIpO1xyXG59XHJcblxyXG4uc3Rva2UtcGljdHVyZSB7XHJcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvL1N0b2tlLWxvZ28uc3ZnXCIpO1xyXG59XHJcblxyXG4uc3dhbnNlYS1waWN0dXJlIHtcclxuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vU3dhbnNlYS1sb2dvLnN2Z1wiKTtcclxufVxyXG5cclxuLndiYS1waWN0dXJlIHtcclxuICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vd2JhLWxvZ28uc3ZnXCIpO1xyXG59XHJcblxyXG4ud2lnYW4tcGljdHVyZSB7XHJcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvL3dpZ2FuLWxvZ28uc3ZnXCIpO1xyXG59XHJcblxyXG4ucG9pbnRzLWNvbHVtbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/standings/standings.component.html":
/*!****************************************************!*\
  !*** ./src/app/standings/standings.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" id=\"standings-card\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\" id=\"standings-title\"><span class=\"efl-picture\"></span>EFL Championship standings</h5>\r\n      <table class=\"table table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>No.</th>\r\n            <th>Team</th>\r\n            <th>Played</th>\r\n            <th>Pts</th>\r\n            <th>Wins</th>\r\n            <th>Draws</th>\r\n            <th>Loses</th>\r\n            <th>GF</th>\r\n            <th>GA</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let standing of standings\" [ngClass]=\"setRowColor(standing.overall_league_position)\">\r\n            <td>{{standing.overall_league_position}}</td>\r\n            <td class=\"team-name-column\"><span [ngClass]=\"setLogo(standing.team_name)\"></span>{{standing.team_name}}</td>\r\n            <td>{{standing.overall_league_payed}}</td>\r\n            <td class=\"points-column\">{{standing.overall_league_PTS}}</td>\r\n            <td>{{standing.overall_league_W}}</td>\r\n            <td>{{standing.overall_league_D}}</td>\r\n            <td>{{standing.overall_league_L}}</td>\r\n            <td>{{standing.overall_league_GF}}</td>\r\n            <td>{{standing.overall_league_GA}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n</div>\r\n  \r\n  \r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/standings/standings.component.ts":
/*!**************************************************!*\
  !*** ./src/app/standings/standings.component.ts ***!
  \**************************************************/
/*! exports provided: StandingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsComponent", function() { return StandingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_football_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/football-data.service */ "./src/app/service/football-data.service.ts");



var StandingsComponent = /** @class */ (function () {
    function StandingsComponent(footballService) {
        this.footballService = footballService;
    }
    StandingsComponent.prototype.ngOnInit = function () {
        this.retrieveAllStandings();
    };
    StandingsComponent.prototype.retrieveAllStandings = function () {
        var _this = this;
        this.footballService.retrieveAllStandings().subscribe(function (response) {
            _this.standings = response;
            if (!_this.isAVInStandings(_this.standings))
                _this.standings = _this.footballService.retrieveTestStandings();
        }, function (error) {
            _this.standings = _this.footballService.retrieveTestStandings();
        });
    };
    StandingsComponent.prototype.setRowColor = function (position) {
        switch (position) {
            case '1': {
                return 'first-place';
            }
            case '2': {
                return 'second-place';
            }
            case '3': {
                return 'third-place';
            }
            case '22':
            case '23':
            case '24': {
                return 'relegation-place';
            }
        }
    };
    StandingsComponent.prototype.setLogo = function (team) {
        switch (team) {
            case 'Aston Villa': {
                return "astonvilla-picture";
            }
            case 'Birmingham City': {
                return 'birmigham-picture';
            }
            case 'Blackburn Rovers': {
                return 'blackburn-picture';
            }
            case 'Bolton Wanderers': {
                return 'bolton-picture';
            }
            case 'Brentford': {
                return 'brentford-picture';
            }
            case 'Bristol City': {
                return 'bristol-picture';
            }
            case 'Derby County': {
                return 'derby-picture';
            }
            case 'Hull City': {
                return 'hull-picture';
            }
            case 'Ipswich Town': {
                return 'ipswich-picture';
            }
            case 'Leeds United': {
                return 'leeds-picture';
            }
            case 'Middlesbrough': {
                return 'middle-picture';
            }
            case 'Millwall': {
                return 'millwall-picture';
            }
            case 'Norwich City': {
                return 'norwich-picture';
            }
            case 'Nottingham Forest': {
                return 'nottingham-picture';
            }
            case 'Preston North End': {
                return 'preston-picture';
            }
            case 'Queens Park Rangers': {
                return 'qpr-picture';
            }
            case 'Reading': {
                return 'reading-picture';
            }
            case 'Rotherham United': {
                return 'rotherham-picture';
            }
            case 'Sheffield United': {
                return 'sheffield-picture';
            }
            case 'Sheffield Wednesday': {
                return 'sheffield-wednesday-picture';
            }
            case 'Stoke City': {
                return 'stoke-picture';
            }
            case 'Swansea City': {
                return 'swansea-picture';
            }
            case 'West Bromwich Albion': {
                return 'wba-picture';
            }
            case 'Wigan Athletic': {
                return 'wigan-picture';
            }
        }
    };
    StandingsComponent.prototype.isAVInStandings = function (standings) {
        var avStanding = standings.find(function (x) { return x.team_name === 'Aston Villa'; });
        if (typeof avStanding === 'undefined') {
            return false;
        }
        else {
            return true;
        }
    };
    StandingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standings',
            template: __webpack_require__(/*! ./standings.component.html */ "./src/app/standings/standings.component.html"),
            styles: [__webpack_require__(/*! ./standings.component.css */ "./src/app/standings/standings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_football_data_service__WEBPACK_IMPORTED_MODULE_2__["FootballDataService"]])
    ], StandingsComponent);
    return StandingsComponent;
}());



/***/ }),

/***/ "./src/app/summary/summary.component.css":
/*!***********************************************!*\
  !*** ./src/app/summary/summary.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aston-villa-picture {\r\n    content: url(\"/assets/images/logo/as_logo.svg\");\r\n    width: 240px;\r\n    height: 240px;\r\n}\r\n\r\ndiv .card-body {\r\n    background-color: #95BFE5;\r\n    display: flex;\r\n}\r\n\r\n.av-position {\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.av-last-match {\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnREFBZ0Q7SUFDaEQsYUFBYTtJQUNiLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXN0b24tdmlsbGEtcGljdHVyZSB7XHJcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvL2FzX2xvZ28uc3ZnXCIpO1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG5cclxuZGl2IC5jYXJkLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1QkZFNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hdi1wb3NpdGlvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmF2LWxhc3QtbWF0Y2gge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/summary/summary.component.html":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" id=\"standings-card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"av-picture-container\">\r\n      <span class=\"aston-villa-picture\"></span>\r\n    </div>\r\n    <div class=\"av-info-container\">\r\n      <h5 class=\"av-position\">LEAGUE POSITION:</h5>\r\n      <h2 class=\"av-position\">{{ position}}</h2>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_football_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/football-data.service */ "./src/app/service/football-data.service.ts");



var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(footballDataService) {
        this.footballDataService = footballDataService;
    }
    SummaryComponent.prototype.ngOnInit = function () {
        this.getLeaguePosition();
    };
    SummaryComponent.prototype.getLeaguePosition = function () {
        var _this = this;
        this.footballDataService.retrieveAllStandings().subscribe(function (response) {
            var standings = response;
            var avStanding = standings.find(function (x) { return x.team_name === 'Aston Villa'; });
            if (typeof avStanding === 'undefined') {
                _this.getTestLeaguePosition();
            }
            else {
                _this.position = avStanding.overall_league_position;
            }
        }, function (error) {
            _this.getTestLeaguePosition();
        });
    };
    SummaryComponent.prototype.getTestLeaguePosition = function () {
        var standings = this.footballDataService.retrieveTestStandings();
        this.position = standings.find(function (x) { return x.team_name === 'Aston Villa'; }).overall_league_position;
    };
    SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/summary/summary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_football_data_service__WEBPACK_IMPORTED_MODULE_2__["FootballDataService"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ProgramData\Jenkins\.jenkins\workspace\git\local-repo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map