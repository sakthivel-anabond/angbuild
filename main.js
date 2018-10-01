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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/forbidden/forbidden.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _responsibilities_responsibilities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./responsibilities/responsibilities.component */ "./src/app/responsibilities/responsibilities.component.ts");
/* harmony import */ var _classifications_classifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classifications/classifications.component */ "./src/app/classifications/classifications.component.ts");
/* harmony import */ var _division_classifications_division_classifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./division-classifications/division-classifications.component */ "./src/app/division-classifications/division-classifications.component.ts");
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locations/locations.component */ "./src/app/locations/locations.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _org_scope_org_scope_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./org-scope/org-scope.component */ "./src/app/org-scope/org-scope.component.ts");
/* harmony import */ var _division_division_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./division/division.component */ "./src/app/division/division.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _audit_audit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./audit/audit.component */ "./src/app/audit/audit.component.ts");
/* harmony import */ var _application_settings_application_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./application-settings/application-settings.component */ "./src/app/application-settings/application-settings.component.ts");
/* harmony import */ var _my_responsibility_my_responsibility_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./my-responsibility/my-responsibility.component */ "./src/app/my-responsibility/my-responsibility.component.ts");
/* harmony import */ var _correlation_correlation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./correlation/correlation.component */ "./src/app/correlation/correlation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: "callback",
        component: _callback_callback_component__WEBPACK_IMPORTED_MODULE_4__["CallbackComponent"]
    },
    {
        path: "forbidden",
        component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_5__["ForbiddenComponent"]
    },
    {
        path: "home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: "responsibilities",
        component: _responsibilities_responsibilities_component__WEBPACK_IMPORTED_MODULE_7__["ResponsibilitiesComponent"]
    },
    {
        path: "test",
        component: _test_test_component__WEBPACK_IMPORTED_MODULE_6__["TestComponent"]
    },
    {
        path: "classifications",
        component: _classifications_classifications_component__WEBPACK_IMPORTED_MODULE_8__["ClassificationsComponent"]
    },
    {
        path: "locations",
        component: _locations_locations_component__WEBPACK_IMPORTED_MODULE_10__["LocationsComponent"]
    },
    {
        path: "employee",
        component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeComponent"]
    },
    {
        path: 'scope',
        component: _org_scope_org_scope_component__WEBPACK_IMPORTED_MODULE_12__["OrgScopeComponent"]
    },
    {
        path: 'division',
        component: _division_division_component__WEBPACK_IMPORTED_MODULE_13__["DivisionComponent"]
    },
    {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"]
    },
    {
        path: 'application-settings',
        component: _application_settings_application_settings_component__WEBPACK_IMPORTED_MODULE_16__["ApplicationSettingsComponent"]
    },
    {
        path: 'audit',
        component: _audit_audit_component__WEBPACK_IMPORTED_MODULE_15__["AuditComponent"]
    },
    {
        path: 'division-function',
        component: _division_classifications_division_classifications_component__WEBPACK_IMPORTED_MODULE_9__["DivisionClassificationsComponent"]
    },
    {
        path: 'my-responsibilities',
        component: _my_responsibility_my_responsibility_component__WEBPACK_IMPORTED_MODULE_17__["MyResponsibilityComponent"]
    },
    {
        path: 'correlation',
        component: _correlation_correlation_component__WEBPACK_IMPORTED_MODULE_18__["CorrelationComponent"]
        //component:TestComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toast-msg{\n    left: 30%;\n    width: 50vw;\n    position: absolute;\n}\n\n.sidebar .nav-link:hover {\n    color: #fff;\n    background: #73818f;\n}\n\n.sidebar .nav-link.active {\n    color: #fff;\n    background: #1986AC;\n}\n\n#settingMenu .nav-link {\n    padding-left: 20px;\n    font-size: .70rem\n}\n\n.sidebar {\n    -webkit-font-smoothing:auto;\n}\n\n.dropdown-toggle::after{\n  position: absolute;\n  right: 1rem;\n  display: block;\n  width: 8px;\n  height: 8px;\n  padding: 0;\n  margin-top: -10px;\n  content: \"\";\n\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n  <button class=\"navbar-toggler sidebar-toggler d-lg-none mr-auto\" type=\"button\" data-toggle=\"sidebar-show\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" [routerLink]=\"['']\">\n    <img class=\"navbar-brand-full\" src=\"/assets/img/anabond.png\" width=\"150\" height=\"39\" alt=\"CoreUI Logo\">\n    <img class=\"navbar-brand-minimized\" src=\"/assets/img/anabond_min.png\" width=\"30\" height=\"30\" alt=\"CoreUI Logo\">\n  </a>\n  <button *ngIf=\"currentUser\" class=\"navbar-toggler sidebar-toggler d-md-down-none\" type=\"button\" data-toggle=\"sidebar-lg-show\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"col-md-4 alert alert-danger alert-dismissible toast-msg\" id=\"toast-error\" *ngIf=\"toast-error\">\n    <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n    <p>This alert box could indicate a dangerous or potentially negative action.</p>\n  </div>\n  <div class=\"col-md-4 alert alert-success alert-dismissible toast-msg\" id=\"toast-success\" *ngIf=\"toast-success\">\n    <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n    <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.\n  </div>\n  <ul *ngIf=\"currentUser\" class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <img class=\"img-avatar\" src=\"/assets/img/user.png\" alt=\"image\">\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <div class=\"dropdown-header text-center\">\n          <strong>{{currentUser.first_name}} {{currentUser.last_name}}</strong>\n        </div>\n        <!-- <a class=\"dropdown-item\" href=\"#\">\n          <i class=\"fa fa-user\"></i> Profile</a>\n        <div class=\"divider\"></div> -->\n        <a class=\"dropdown-item btn btn-link\" (click)=\"logout()\">\n          <i class=\"fa fa-lock\"></i> Logout</a>\n      </div>\n    </li>\n  </ul>\n\n  <button *ngIf=\"currentUser\" class=\"navbar-toggler aside-menu-toggler d-lg-none\" type=\"button\" data-toggle=\"aside-menu-show\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</header>\n<div class=\"app-body\">\n  <div class=\"sidebar\" *ngIf=\"currentUser\">\n    <nav id=\"sidebar\" class=\"sidebar-nav\">\n      <ul class=\"list-unstyled components\">\n        <li class=\"nav-item\" *ngIf=\"user_info.is_superuser || user_info.division_head\">\n          <a [ngClass]=\"current_menu == '/home' ? 'nav-link active':'nav-link'\" [routerLink]=\"['/home']\">\n            <i class=\"nav-icon icon-list\"></i> Dashboard\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"user_info.is_superuser || user_info.division_head\">\n            <a [ngClass]=\"current_menu == '/correlation' ? 'nav-link active':'nav-link'\" [routerLink]=\"['/correlation']\">\n              <i class=\"nav-icon icon-list\"></i> Correlation\n            </a>\n          </li>\n        <li class=\"nav-item\" *ngIf=\"user_info.is_superuser || user_info.division_head\">\n          <a [ngClass]=\"current_menu == '/search' ? 'nav-link active':'nav-link'\" [routerLink]=\"['/search']\">\n            <i class=\"nav-icon icon-magnifier\"></i> Search\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a [ngClass]=\"current_menu == '/my-responsibilities' ? 'nav-link active':'nav-link'\" [routerLink]=\"['/my-responsibilities']\">\n            <i class=\"fa fa-group nav-icon\"></i> My Responsibilities </a>\n        </li>\n\n        <li class=\"nav-item\" *ngIf=\"user_info.is_superuser\">\n          <a href=\"#settingMenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle nav-link nav-link-sub\">\n            <i class=\"nav-icon icon-settings\"></i> Setting\n          </a>\n          <ul [ngClass]=\"current_menu == '/division' || current_menu == '/scope' || current_menu == '/division-function' || current_menu == '/responsibilities' || current_menu == '/locations' || current_menu == '/employee' || current_menu == '/application-settings' || current_menu == '/audit' ? 'collapse list-unstyled show':'collapse list-unstyled'\"  id=\"settingMenu\">\n            <li class=\"nav-item\">\n              <a [ngClass]=\"current_menu == '/scope' ? 'nav-link nav-link-sub active':'nav-link nav-link-sub'\" [routerLink]=\"['/scope']\">\n                <i class=\"nav-icon icon-options icons\"></i> Scope</a>\n            </li>\n            <li class=\"nav-item\">\n              <a [ngClass]=\"current_menu == '/division' ? 'nav-link nav-link-sub active':'nav-link nav-link-sub'\" [routerLink]=\"['/division']\">\n                <i class=\" nav-icon icon-options icons\"></i> Division</a>\n            </li>\n            <li class=\"nav-item\">\n              <a [ngClass]=\"current_menu == '/division-function' ? 'nav-link nav-link-sub active':'nav-link nav-link-sub'\" [routerLink]=\"['/division-function']\">\n                <i class=\"nav-icon icon-options icons\"></i>Division Function</a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a [ngClass]=\"current_menu == '/responsibilities' ? 'nav-link nav-link-sub active':'nav-link nav-link-sub'\" [routerLink]=\"['/responsibilities']\">\n                <i class=\"nav-icon icon-options icons\"></i> Responsibilities</a>\n            </li>\n            <li class=\"nav-item\">\n              <a [ngClass]=\"current_menu == '/locations' ? 'nav-link nav-link-sub active':'nav-link nav-link-sub'\" [routerLink]=\"['/locations']\">\n                <i class=\"nav-icon icon-options icons\"></i> Locations</a>\n            </li>\n            <li class=\"nav-item\">\n              <a [ngClass]=\"current_menu == '/employee' ? 'nav-link nav-link-sub active':'nav-link nav-link-sub'\" [routerLink]=\"['/employee']\">\n                <i class=\"nav-icon icon-options icons\"></i> Employee</a>\n            </li>\n            <li class=\"nav-item\">\n              <a [ngClass]=\"current_menu == '/application-settings' ? 'nav-link nav-link-sub active':'nav-link nav-link-sub'\" [routerLink]=\"['/application-settings']\">\n                <i class=\"nav-icon icon-options icons\"></i> Application Settings</a>\n            </li>\n            <li class=\"nav-item\">\n              <a [ngClass]=\"current_menu == '/audit' ? 'nav-link nav-link-sub active':'nav-link nav-link-sub'\" [routerLink]=\"['/audit']\">\n                <i class=\"nav-icon icon-options icons\"></i> Audit</a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"divider\"></li>\n      </ul>\n    </nav>\n\n    <button class=\"sidebar-minimizer brand-minimizer\" type=\"button\"></button>\n  </div>\n  <div class=\"main container-fluid\">\n      <spinner></spinner>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<footer class=\"app-footer\" *ngIf=\"currentUser\">\n  <div>\n    <a href=\"#\">Anabond R&R</a>\n    <span>&copy; {{currentYear}} Anabond ltd.</span>\n  </div>\n  <div class=\"ml-auto\">\n    <!-- <span>Anabond ltd</span> -->\n    <a href=\"http://www.anabond.com/\"> Anabond Limited</a>\n  </div>\n</footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBase;
var client_id = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].client_id;
var client_secret = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].client_secret;
var redirect_uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].redirect_uri;
var site_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].site_url;
var AppComponent = /** @class */ (function () {
    function AppComponent(auth, router, us) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.us = us;
        this.title = 'app';
        this.user_info = {};
        this.current_menu = "";
        this.currentYear = (new Date()).getFullYear();
        if (window.location.pathname != "/callback" && window.location.pathname != "/forbidden") {
            this.currentUser = this.auth.user();
            this.currentAuth = this.auth.token();
            if (!this.currentAuth) {
                this.router.navigateByUrl('/login');
            }
            else {
                this.us.info().subscribe(function (result) {
                    _this.user_info = result;
                    // if(!this.user_info.is_superuser || !this.user_info.is_superuser.division_head) {
                    //   this.router.navigateByUrl('/my-responsibilities');
                    // }           
                }, function (error) {
                    _this.us.checkError(error);
                });
            }
        }
    }
    AppComponent.prototype.ngDoCheck = function () {
        this.current_menu = this.router.url;
        this.currentUser = this.auth.user();
        this.currentAuth = this.auth.token();
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
        window.location.href = API_URL + "/accounts/logout/?next=/logout-redirect?redirect_url=" + site_url;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-dnd */ "./node_modules/ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nl2br_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nl2br-pipe */ "./node_modules/nl2br-pipe/index.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_http_http_client_cust__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http/http-client-cust */ "./src/app/services/http/http-client-cust.ts");
/* harmony import */ var _services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/divisions/divisions.service */ "./src/app/services/divisions/divisions.service.ts");
/* harmony import */ var _services_classifications_classifications_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/classifications/classifications.service */ "./src/app/services/classifications/classifications.service.ts");
/* harmony import */ var _services_division_classifications_division_classifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/division-classifications/division-classifications.service */ "./src/app/services/division-classifications/division-classifications.service.ts");
/* harmony import */ var _services_responsibilities_responsibilities_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/responsibilities/responsibilities.service */ "./src/app/services/responsibilities/responsibilities.service.ts");
/* harmony import */ var _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/locations/locations.service */ "./src/app/services/locations/locations.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_audit_audit_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/audit/audit.service */ "./src/app/services/audit/audit.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/forbidden/forbidden.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _responsibilities_responsibilities_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./responsibilities/responsibilities.component */ "./src/app/responsibilities/responsibilities.component.ts");
/* harmony import */ var _classifications_classifications_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./classifications/classifications.component */ "./src/app/classifications/classifications.component.ts");
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./locations/locations.component */ "./src/app/locations/locations.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _org_scope_org_scope_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./org-scope/org-scope.component */ "./src/app/org-scope/org-scope.component.ts");
/* harmony import */ var _division_division_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./division/division.component */ "./src/app/division/division.component.ts");
/* harmony import */ var _application_settings_application_settings_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./application-settings/application-settings.component */ "./src/app/application-settings/application-settings.component.ts");
/* harmony import */ var _audit_audit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./audit/audit.component */ "./src/app/audit/audit.component.ts");
/* harmony import */ var _division_classifications_division_classifications_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./division-classifications/division-classifications.component */ "./src/app/division-classifications/division-classifications.component.ts");
/* harmony import */ var _my_responsibility_my_responsibility_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./my-responsibility/my-responsibility.component */ "./src/app/my-responsibility/my-responsibility.component.ts");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _correlation_correlation_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./correlation/correlation.component */ "./src/app/correlation/correlation.component.ts");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng2-nvd3 */ "./node_modules/ng2-nvd3/build/index.js");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(ng2_nvd3__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_38__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































// d3 and nvd3 should be included somewhere


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _callback_callback_component__WEBPACK_IMPORTED_MODULE_20__["CallbackComponent"],
                _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_21__["ForbiddenComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_22__["TestComponent"],
                _responsibilities_responsibilities_component__WEBPACK_IMPORTED_MODULE_23__["ResponsibilitiesComponent"],
                _classifications_classifications_component__WEBPACK_IMPORTED_MODULE_24__["ClassificationsComponent"],
                _locations_locations_component__WEBPACK_IMPORTED_MODULE_25__["LocationsComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_26__["EmployeeComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_27__["SearchComponent"],
                _org_scope_org_scope_component__WEBPACK_IMPORTED_MODULE_28__["OrgScopeComponent"],
                _division_division_component__WEBPACK_IMPORTED_MODULE_29__["DivisionComponent"],
                _application_settings_application_settings_component__WEBPACK_IMPORTED_MODULE_30__["ApplicationSettingsComponent"],
                _audit_audit_component__WEBPACK_IMPORTED_MODULE_31__["AuditComponent"],
                _division_classifications_division_classifications_component__WEBPACK_IMPORTED_MODULE_32__["DivisionClassificationsComponent"],
                _my_responsibility_my_responsibility_component__WEBPACK_IMPORTED_MODULE_33__["MyResponsibilityComponent"],
                _correlation_correlation_component__WEBPACK_IMPORTED_MODULE_35__["CorrelationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                nl2br_pipe__WEBPACK_IMPORTED_MODULE_6__["Nl2BrPipeModule"],
                ng_http_loader__WEBPACK_IMPORTED_MODULE_34__["NgHttpLoaderModule"],
                ng2_nvd3__WEBPACK_IMPORTED_MODULE_36__["NvD3Module"],
                ng2_dnd__WEBPACK_IMPORTED_MODULE_4__["DndModule"].forRoot()
            ],
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                _services_http_http_client_cust__WEBPACK_IMPORTED_MODULE_8__["HttpClientCust"],
                _services_responsibilities_responsibilities_service__WEBPACK_IMPORTED_MODULE_12__["ResponsibilitiesService"],
                _services_classifications_classifications_service__WEBPACK_IMPORTED_MODULE_10__["ClassificationsService"],
                _services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_9__["DivisionsService"],
                _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_13__["LocationsService"],
                _services_user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"],
                _services_audit_audit_service__WEBPACK_IMPORTED_MODULE_15__["AuditService"],
                _services_division_classifications_division_classifications_service__WEBPACK_IMPORTED_MODULE_11__["DivisionClassificationsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/application-settings/application-settings.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/application-settings/application-settings.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/application-settings/application-settings.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/application-settings/application-settings.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"col-md-12\">\n      <h2>Application Settings</h2>\n    </div>\n    <div class=\"col-md-12\">\n      <div>\n          <div *ngIf=\"formSuccess\" class=\"alert alert-success\">Saved!</div>\n        <input type=\"hidden\" [(ngModel)]=\"application_settting.id\" value=\"{{ application_settting.id }}\">\n       Role based responsibility assignments \n        <label class=\"form-check-inline\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"is_role_based_responsibility_ass\" [value]=\"1\" [(ngModel)]=\"application_settting.is_role_based_responsibility_ass\" [checked]=\"application_settting.is_role_based_responsibility_ass === 1\"> Yes\n        </label>\n        <label class=\"form-check-inline\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"is_role_based_responsibility_ass\" [value]=\"0\" [(ngModel)]=\"application_settting.is_role_based_responsibility_ass\" [checked]=\"application_settting.is_role_based_responsibility_ass === 0\"> No\n        </label>\n      </div>\n      <div>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveSetting()\">\n            <i class=\"fa fa-dot-circle-o\"></i> Save</button>\n          </div>\n          \n\n  </div>\n"

/***/ }),

/***/ "./src/app/application-settings/application-settings.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/application-settings/application-settings.component.ts ***!
  \************************************************************************/
/*! exports provided: ApplicationSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSettingsComponent", function() { return ApplicationSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_settings_application_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/application-settings/application-settings.service */ "./src/app/services/application-settings/application-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationSettingsComponent = /** @class */ (function () {
    function ApplicationSettingsComponent(ass) {
        this.ass = ass;
        this.application_settting = {};
        this.formErrors = {};
        this.formSuccess = false;
        this.application_settting.is_role_based_responsibility_ass = 0;
        this.application_settting.id = "";
        this.getSetting();
    }
    ApplicationSettingsComponent.prototype.getSetting = function () {
        var _this = this;
        this.ass.get().subscribe(function (result) {
            if (result[0]) {
                _this.application_settting = result[0];
            }
            else {
                _this.application_settting.is_role_based_responsibility_ass = 0;
                _this.application_settting.id = "";
            }
        }, function (error) {
            _this.ass.checkError(error);
        });
    };
    ApplicationSettingsComponent.prototype.saveSetting = function () {
        var _this = this;
        this.formErrors = {};
        if (this.application_settting.id) {
            this.ass.put(this.application_settting.id, this.application_settting).subscribe(function (result) {
                $('#division_modal').modal('hide');
                _this.formSuccess = true;
                _this.getSetting();
            }, function (error) {
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.ass.checkError(error);
            });
        }
        else {
            this.ass.post(this.application_settting).subscribe(function (result) {
                $('#division_modal').modal('hide');
                _this.formSuccess = true;
            }, function (error) {
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.ass.checkError(error);
            });
        }
    };
    ApplicationSettingsComponent.prototype.ngOnInit = function () {
    };
    ApplicationSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application-settings',
            template: __webpack_require__(/*! ./application-settings.component.html */ "./src/app/application-settings/application-settings.component.html"),
            styles: [__webpack_require__(/*! ./application-settings.component.css */ "./src/app/application-settings/application-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_application_settings_application_settings_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationSettingsService"]])
    ], ApplicationSettingsComponent);
    return ApplicationSettingsComponent;
}());



/***/ }),

/***/ "./src/app/audit/audit.component.css":
/*!*******************************************!*\
  !*** ./src/app/audit/audit.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/audit/audit.component.html":
/*!********************************************!*\
  !*** ./src/app/audit/audit.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Audit</h2>\n<div class=\"col-md-5 form-horizontal\">\n\n  <div class=\"form-group\">\n    <label for=\"module\" class=\"pull-left\" style=\"padding-right:10px;\">Module </label>\n    <select [(ngModel)]=\"module\" (ngModelChange)=\"getAudit(module)\" class=\"form-control\" style=\"width: 30vw;\">\n        <option value=\"all\" selected=\"selected\" >All</option>\n      <option *ngFor=\"let model of models\" value=\"{{ model.model_name }}\" >{{ model.display_model_name }}</option>\n      <!-- <option value=\"Scope\">Scope</option> -->\n    </select>\n  </div>\n</div>\n<div class=\"col-md-12\">\n  <table class=\"table table-sm\">\n    <thead class=\"table_th\">\n      <tr class=\"d-flex\">\n        <th class=\"col-1\">Model</th>\n        <th class=\"col-1\">Action</th>\n        <th class=\"col-1\">Record</th>\n        <th class=\"col-5\">Changes</th>\n        <th class=\"col-2\">Author</th>\n        <th class=\"col-2\">Time</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr class=\"d-flex rec{{audit.action_type}}\" *ngFor=\"let audit of audits\">\n            <td class=\"col-1\" style=\"overflow-wrap: break-word;\">{{audit.display_model_name}}</td>\n            <td class=\"col-1\">{{checkAction(audit.action)}}</td>\n            <td class=\"col-1\">{{ audit.record_name }}</td>\n            <td class=\"col-5\">\n                <div [innerHTML]=\"checkChanges(audit.changes)\"></div>\n                <!-- <p *ngIf=\"audit.record_name\">::::{{ audit.record_name }}</p> -->\n            </td>\n            <td class=\"col-2\">{{audit.actor_data.username}}<span *ngIf=\"audit.actor_data.first_name\">({{audit.actor_data.first_name}})</span></td>\n            <td class=\"col-2\">{{audit.timestamp| date: 'dd/MM/yyyy h:mm:ss a'}}</td>\n        </tr>\n        <tr *ngIf=\" audits?.length == 0\" class=\"d-flex\">\n          <th class=\"col-12 text-center\">No record found</th>\n\n        </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/audit/audit.component.ts":
/*!******************************************!*\
  !*** ./src/app/audit/audit.component.ts ***!
  \******************************************/
/*! exports provided: AuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditComponent", function() { return AuditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_audit_audit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/audit/audit.service */ "./src/app/services/audit/audit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuditComponent = /** @class */ (function () {
    function AuditComponent(as) {
        var _this = this;
        this.as = as;
        this.models = [];
        this.getAudit('all');
        this.as.getAllModels().subscribe(function (result) {
            _this.models = result;
        }, function (error) {
            _this.as.checkError(error);
        });
    }
    AuditComponent.prototype.ngOnInit = function () {
    };
    AuditComponent.prototype.getAudit = function (module) {
        var _this = this;
        this.as.get(module).subscribe(function (result) {
            _this.audits = result;
        }, function (error) {
            _this.as.checkError(error);
        });
    };
    AuditComponent.prototype.checkChanges = function (changes) {
        var htmlStr = '';
        Object.keys(changes).forEach(function (element) {
            if (element !== 'created_at' && element !== 'modified_at' && element !== 'created_by' && element !== 'modified_by' && element !== 'id') {
                htmlStr += '<h5 class="text-primary">' + element + '</h5>';
                if (changes[element][0] !== 'None') {
                    htmlStr += '<p class="text-danger"><s>' + changes[element][0] + '</s></p>';
                }
                htmlStr += '<p class="text-success">' + changes[element][1] + '</p>';
            }
        });
        return htmlStr;
    };
    AuditComponent.prototype.checkAction = function (action) {
        if (action === 0) {
            return "New";
        }
        else if (action === 1) {
            return "Update";
        }
        else {
            return "Delete";
        }
    };
    AuditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-audit',
            template: __webpack_require__(/*! ./audit.component.html */ "./src/app/audit/audit.component.html"),
            styles: [__webpack_require__(/*! ./audit.component.css */ "./src/app/audit/audit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_audit_audit_service__WEBPACK_IMPORTED_MODULE_1__["AuditService"]])
    ], AuditComponent);
    return AuditComponent;
}());



/***/ }),

/***/ "./src/app/callback/callback.component.css":
/*!*************************************************!*\
  !*** ./src/app/callback/callback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/callback/callback.component.html":
/*!**************************************************!*\
  !*** ./src/app/callback/callback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Loading ...\n</p>\n"

/***/ }),

/***/ "./src/app/callback/callback.component.ts":
/*!************************************************!*\
  !*** ./src/app/callback/callback.component.ts ***!
  \************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(auth) {
        this.auth = auth;
        var href = window.location.href;
        console.log(href);
        var extractedcode = href.split('=');
        var ourcode = extractedcode[1];
        auth.getAccessToken(ourcode);
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__(/*! ./callback.component.html */ "./src/app/callback/callback.component.html"),
            styles: [__webpack_require__(/*! ./callback.component.css */ "./src/app/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/classifications/classifications.component.css":
/*!***************************************************************!*\
  !*** ./src/app/classifications/classifications.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/classifications/classifications.component.html":
/*!****************************************************************!*\
  !*** ./src/app/classifications/classifications.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- <div class=\"col-md-12\">\n    <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#core_res_add\">+</button>\n  </div> -->\n  <div class=\"col-md-12\">\n    <table class=\"table table-bordered table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>Name</th>\n        </tr>\n\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let core of core_responsibilities\">\n          <td>\n            {{ core.name }}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n</div>\n\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"core_res_add\" role=\"dialog\">\n  <div class=\"modal-dialog modal-info\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n\n        <h4 class=\"modal-title\">Add Core Responsibility</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <form action=\"\" method=\"post\" class=\"form-horizontal\">\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"name\">Name</label>\n            <div class=\"col-md-9\">\n              <input type=\"text\" [(ngModel)]=\"core_responsibilitie.name\" name=\"name\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"name\">Division</label>\n            <div class=\"col-md-9\">\n              <select id=\"division\" class=\"form-control\" [(ngModel)]=\"core_responsibilitie.division\" name=\"division\">\n                  <option value=\"\" disabled selected>Select your option</option>\n                <option *ngFor=\"let division of divisions\" value=\"{{ division.id }}\">{{ division.name }}</option>\n              </select>\n            </div>\n          </div>\n\n\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"saveCoreResponsibility()\">\n          <i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        <!-- <button type=\"reset\" class=\"btn btn-sm btn-danger\">\n                  <i class=\"fa fa-ban\"></i> Reset</button> -->\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/classifications/classifications.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/classifications/classifications.component.ts ***!
  \**************************************************************/
/*! exports provided: ClassificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificationsComponent", function() { return ClassificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_classifications_classifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/classifications/classifications.service */ "./src/app/services/classifications/classifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClassificationsComponent = /** @class */ (function () {
    function ClassificationsComponent(cs) {
        this.cs = cs;
        this.core_responsibilitie = {};
        this.divisions = [];
    }
    ClassificationsComponent.prototype.ngOnInit = function () {
        this.getCoreResponsibility();
    };
    ClassificationsComponent.prototype.getCoreResponsibility = function () {
        var _this = this;
        this.cs.get().subscribe(function (result) {
            _this.core_responsibilities = result;
        });
    };
    ClassificationsComponent.prototype.saveCoreResponsibility = function () {
        var _this = this;
        this.cs.new(this.core_responsibilitie).subscribe(function (data) {
            $('#core_res_add').modal('hide');
            _this.getCoreResponsibility();
        });
    };
    ClassificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-classifications',
            template: __webpack_require__(/*! ./classifications.component.html */ "./src/app/classifications/classifications.component.html"),
            styles: [__webpack_require__(/*! ./classifications.component.css */ "./src/app/classifications/classifications.component.css")]
        }),
        __metadata("design:paramtypes", [_services_classifications_classifications_service__WEBPACK_IMPORTED_MODULE_1__["ClassificationsService"]])
    ], ClassificationsComponent);
    return ClassificationsComponent;
}());



/***/ }),

/***/ "./src/app/correlation/correlation.component.css":
/*!*******************************************************!*\
  !*** ./src/app/correlation/correlation.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blueBg{\nbackground: #1986AC;\n}\n"

/***/ }),

/***/ "./src/app/correlation/correlation.component.html":
/*!********************************************************!*\
  !*** ./src/app/correlation/correlation.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\">\n    <select id=\"location\" class=\"form-control\" [(ngModel)]=\"divisionId\" (ngModelChange)=\"getReponsiblity(divisionId)\">\n      <option value=\"null\" selected>Select divsion</option>\n      <option *ngFor=\"let division of divisions\" value=\"{{ division.id }}\">{{division.name}}</option>\n    </select>\n  </div>\n  <div class=\"col-md-12\" id=\"responsibilities\">\n    <div class=\"row\">\n      <div class=\"col-md-4 classification-group text-right\">\n        <h3 *ngIf=\"cpsv_classifications\">CPSV</h3>\n        <ng-container *ngFor=\"let core of cpsv_classifications\">\n          <ul>\n            <li *ngIf=\"core.name\" class=\"list-group-item\">\n              <h4>{{core.name}}</h4>\n            </li>\n            <ng-container *ngFor=\"let responsibility of core.responsibilities;  let i=index\">\n              <li id=\"left{{responsibility.id}}\" [attr.data-id]=\"'right'+responsibility.id\" class=\"line list-group-item text-right\">\n                {{responsibility.name}}-{{i+1}}\n              </li>\n            </ng-container>\n          </ul>\n        </ng-container>\n      </div>\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4 classification-group text-left\">\n        <h3 *ngIf=\"dfv_classifications\">DFV</h3>\n        <ng-container *ngFor=\"let core of dfv_classifications\">\n          <ul>\n            <li *ngIf=\"core.name\" class=\"list-group-item\">\n              <h4>{{core.name}}</h4>\n            </li>\n            <ng-container *ngFor=\"let responsibility of core.responsibilities;  let i=index\">\n              <li id=\"right{{responsibility.id}}\" class=\"list-group-item line1\" [attr.data-id]=\"'left'+responsibility.id\">\n                {{i+1}}-{{responsibility.name}}\n              </li>\n            </ng-container>\n          </ul>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n  <div id=\"datachanged\" style=\"opacity:0;\">{{datachanged}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/correlation/correlation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/correlation/correlation.component.ts ***!
  \******************************************************/
/*! exports provided: CorrelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrelationComponent", function() { return CorrelationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_responsibilities_responsibilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/responsibilities/responsibilities.service */ "./src/app/services/responsibilities/responsibilities.service.ts");
/* harmony import */ var _services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/divisions/divisions.service */ "./src/app/services/divisions/divisions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CorrelationComponent = /** @class */ (function () {
    function CorrelationComponent(ds, rs) {
        this.ds = ds;
        this.rs = rs;
        this.divisionId = 'null';
        this.cpsv_classifications = [];
        this.dfv_classifications = [];
        this.cpsv_flag = 0;
        this.dfv_flag = 0;
        this.classification_id = -1;
        //this.getResposiblities();
    }
    CorrelationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.get().subscribe(function (result) {
            _this.divisions = result;
            if (result[0]) {
                _this.getReponsiblity(result[0].id);
            }
        }, function (error) {
            _this.ds.checkError(error);
        });
    };
    CorrelationComponent.prototype.getReponsiblity = function (divisionId) {
        var _this = this;
        if (this.divisionId === 'null') {
            return;
        }
        this.rs.get(divisionId, 'cpsv').subscribe(function (result) {
            _this.responsibilities = result;
            _this.cpsv();
        }, function (error) {
            _this.rs.checkError(error);
        });
        this.rs.get(divisionId, 'dfv').subscribe(function (result) {
            _this.responsibilities1 = result;
            _this.dfv();
        }, function (error) {
            _this.rs.checkError(error);
        });
        this.currentdivision = divisionId;
    };
    CorrelationComponent.prototype.cpsv = function () {
        var _this = this;
        var i = -1;
        var j = 0;
        this.classification_id = 0;
        this.cpsv_classifications = new Array();
        this.responsibilities.forEach(function (element) {
            if (_this.classification_id != element.classification) {
                _this.classification_id = element.classification;
                _this.cpsv_classifications[++i] = new Array();
                _this.cpsv_classifications[i]['name'] = element.classification_data.name;
                _this.cpsv_classifications[i]['id'] = element.classification;
                _this.cpsv_classifications[i]['responsibilities'] = new Array();
                _this.cpsv_classifications[i]['responsibilities'].push({ id: element.id, name: element.name, description: element.description, position: element.position });
            }
            else {
                _this.cpsv_classifications[i]['responsibilities'].push({ id: element.id, name: element.name, description: element.description, position: element.position });
            }
        });
        this.cpsv_flag = 1;
        this.datachangedFnc();
    };
    CorrelationComponent.prototype.dfv = function () {
        var _this = this;
        var i = -1;
        var j = 0;
        this.classification_id = 0;
        this.dfv_classifications = new Array();
        this.responsibilities1.forEach(function (element) {
            if (_this.classification_id != element.division_function) {
                _this.classification_id = element.division_function;
                _this.dfv_classifications[++i] = new Array();
                if (element.function_data) {
                    _this.dfv_classifications[i]['name'] = element.function_data.name;
                }
                else {
                    _this.dfv_classifications[i]['name'] = 'Unassigned';
                }
                _this.dfv_classifications[i]['id'] = element.division_function;
                _this.dfv_classifications[i]['responsibilities'] = new Array();
                _this.dfv_classifications[i]['responsibilities'].push({ id: element.id, name: element.name, description: element.description, position: element.function_position });
            }
            else {
                _this.dfv_classifications[i]['responsibilities'].push({ id: element.id, name: element.name, description: element.description, position: element.function_position });
            }
        });
        this.dfv_flag = 1;
        this.datachangedFnc();
        //console.log(this.dfv_classifications);
    };
    CorrelationComponent.prototype.datachangedFnc = function () {
        if (this.dfv_flag === 1 && this.cpsv_flag === 1) {
            if (this.datachanged) {
                this.datachanged = false;
            }
            else {
                this.datachanged = true;
            }
            this.cpsv_flag = 0;
            this.dfv_flag = 0;
        }
    };
    CorrelationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-correlation',
            template: __webpack_require__(/*! ./correlation.component.html */ "./src/app/correlation/correlation.component.html"),
            styles: [__webpack_require__(/*! ./correlation.component.css */ "./src/app/correlation/correlation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_2__["DivisionsService"], _services_responsibilities_responsibilities_service__WEBPACK_IMPORTED_MODULE_1__["ResponsibilitiesService"]])
    ], CorrelationComponent);
    return CorrelationComponent;
}());



/***/ }),

/***/ "./src/app/division-classifications/division-classifications.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/division-classifications/division-classifications.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/division-classifications/division-classifications.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/division-classifications/division-classifications.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pl-3 pr-3 row\">\n    <h2>Division Function</h2>\n  </div>\n\n\n<div class=\"row\">\n  <!-- <div class=\"col-md-12\">\n    <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#core_res_add\">+</button>\n  </div> -->\n  <div class=\"col-md-12\">\n    <table class=\"table table-bordered table-striped table-sm\">\n      <thead class=\"table_th\">\n        <tr class=\"\">\n          <th class=\"w-25\">Division</th>\n          <th class=\"w-25\">Name</th>\n          <th class=\"\">Description</th>\n          <th style=\"width: 4%\"><button type=\"button\" class=\"btn btn-sm btn-info\" data-toggle=\"modal\" data-target=\"#core_res_add\" (click)=\"reset_from()\">+</button></th>\n        </tr>\n\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let core of core_responsibilities\" class=\"\">\n          <td class=\"\">{{ core.division_data.name }}</td>\n          <td class=\"\">\n            {{ core.name }}\n          </td>\n          <td class=\"\">\n            {{ core.description }}\n          </td>\n          \n          <td class=\"\"><i class=\"fa fa-edit\" (click)=\"openedit(core)\" data-toggle=\"modal\" data-target=\"#core_res_add\"></i>&nbsp;&nbsp;&nbsp;\n            <i class=\"fa fa-trash\" (click)=\"conformed_delete(core)\"></i></td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n</div>\n\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"core_res_add\" role=\"dialog\">\n  <div class=\"modal-dialog modal-info\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n\n        <h4 class=\"modal-title\">Add/Edit Division Function</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <form action=\"\" method=\"post\" class=\"form-horizontal\">\n\n            <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"name\">Division</label>\n                <div class=\"col-md-9\">\n                  <select id=\"division\" class=\"form-control\" [(ngModel)]=\"formDivisionFunction.division\" name=\"division\" autofocus=\"autofocus\">\n                      <option value=\"\" disabled selected>Select your option</option>\n                    <option *ngFor=\"let division of divisions\" value=\"{{ division.id }}\">{{ division.name }}</option>\n                  </select>\n                  <div *ngIf=\"formErrors.division\" class=\"alert alert-danger\">{{formErrors.division}}</div>\n                </div>\n              </div> \n              \n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"name\">Name</label>\n            <div class=\"col-md-9\">\n              <input type=\"text\" [(ngModel)]=\"formDivisionFunction.name\" name=\"name\" class=\"form-control\">\n              <div *ngIf=\"formErrors.name\" class=\"alert alert-danger\">{{formErrors.name}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"name\">Description</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" [(ngModel)]=\"formDivisionFunction.description\" name=\"description\" class=\"form-control\">\n                <div *ngIf=\"formErrors.description\" class=\"alert alert-danger\">{{formErrors.description}}</div>\n              </div>\n            </div>\n        \n\n\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveCoreResponsibility()\">\n          <i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        <!-- <button type=\"reset\" class=\"btn btn-sm btn-danger\">\n                  <i class=\"fa fa-ban\"></i> Reset</button> -->\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/division-classifications/division-classifications.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/division-classifications/division-classifications.component.ts ***!
  \********************************************************************************/
/*! exports provided: DivisionClassificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionClassificationsComponent", function() { return DivisionClassificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_division_classifications_division_classifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/division-classifications/division-classifications.service */ "./src/app/services/division-classifications/division-classifications.service.ts");
/* harmony import */ var _services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/divisions/divisions.service */ "./src/app/services/divisions/divisions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DivisionClassificationsComponent = /** @class */ (function () {
    function DivisionClassificationsComponent(dcs, ds) {
        var _this = this;
        this.dcs = dcs;
        this.ds = ds;
        this.core_responsibilitie = {};
        this.divisions = [];
        this.formDivisionFunction = {};
        this.formErrors = {};
        this.ds.get().subscribe(function (result) {
            _this.divisions = result;
        }, function (error) {
            _this.ds.checkError(error);
        });
    }
    DivisionClassificationsComponent.prototype.ngOnInit = function () {
        this.getCoreResponsibility();
    };
    DivisionClassificationsComponent.prototype.getCoreResponsibility = function () {
        var _this = this;
        this.dcs.get().subscribe(function (result) {
            _this.core_responsibilities = result;
        });
    };
    DivisionClassificationsComponent.prototype.saveCoreResponsibility = function () {
        var _this = this;
        if (this.formDivisionFunction.id) {
            this.dcs.put(this.formDivisionFunction.id, this.formDivisionFunction).subscribe(function (result) {
                $('#core_res_add').modal('hide');
                _this.getCoreResponsibility();
            }, function (error) {
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.ds.checkError(error);
            });
        }
        else {
            this.dcs.new(this.formDivisionFunction).subscribe(function (data) {
                $('#core_res_add').modal('hide');
                _this.getCoreResponsibility();
            }, function (error) {
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.ds.checkError(error);
            });
        }
        this.reset_from();
    };
    DivisionClassificationsComponent.prototype.reset_from = function () {
        this.formDivisionFunction = {};
    };
    DivisionClassificationsComponent.prototype.openedit = function (division_function) {
        this.formDivisionFunction = division_function;
    };
    DivisionClassificationsComponent.prototype.conformed_delete = function (scope) {
        var _this = this;
        if (confirm("Are you sure to delete " + scope.name + "?")) {
            this.dcs.delete(scope.id).subscribe(function (result) {
                _this.getCoreResponsibility();
            }, function (error) {
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.dcs.checkError(error);
            });
        }
    };
    DivisionClassificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-division-classifications',
            template: __webpack_require__(/*! ./division-classifications.component.html */ "./src/app/division-classifications/division-classifications.component.html"),
            styles: [__webpack_require__(/*! ./division-classifications.component.css */ "./src/app/division-classifications/division-classifications.component.css")]
        }),
        __metadata("design:paramtypes", [_services_division_classifications_division_classifications_service__WEBPACK_IMPORTED_MODULE_1__["DivisionClassificationsService"], _services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_2__["DivisionsService"]])
    ], DivisionClassificationsComponent);
    return DivisionClassificationsComponent;
}());



/***/ }),

/***/ "./src/app/division/division.component.css":
/*!*************************************************!*\
  !*** ./src/app/division/division.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-btn{\n    width: 5% !important;\n}"

/***/ }),

/***/ "./src/app/division/division.component.html":
/*!**************************************************!*\
  !*** ./src/app/division/division.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"pl-3 pr-3 row\">\n      <h2>Division</h2>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-md-12\">\n    <table class=\"table table-striped table-bordered table-sm\">\n        <thead class=\"table_th\">\n              <tr class=\"\">\n                <th class=\"\">Name</th>\n                <th class=\"w-50\">Description</th>\n                <th style=\"width:4%\"><button type=\"button\" class=\"btn btn-sm btn-info\" data-toggle=\"modal\" data-target=\"#division_modal\" (click)=\"reset_from()\">+</button></th>\n              </tr>\n          </thead>\n\n\n      <tbody>\n\n            <tr *ngFor=\"let divs of divisions\" class=\"\">\n              <td >{{ divs.name }}</td>\n              <td >{{ divs.description }}</td>\n              <td ><i class=\"fa fa-edit\" (click)=\"openedit(divs)\" data-toggle=\"modal\" data-target=\"#division_modal\"></i>&nbsp;&nbsp;&nbsp;\n                <i class=\"fa fa-trash\" (click)=\"conformed_delete(divs)\"></i></td>\n            </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"division_modal\" role=\"dialog\">\n      <div class=\"modal-dialog modal-info\">\n        \n        <!-- Modal content-->\n        <div class=\"modal-content \">\n          <div class=\"modal-header\">\n\n            <h4 class=\"modal-title\">Add/Edit Division</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"name\">Division Name</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" [(ngModel)]=\"formDivision.name\" autofocus=\"autofocus\" class=\"form-control\">\n                <div *ngIf=\"formErrors.name\" class=\"alert alert-danger\">{{formErrors.name}}</div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"name\">Description</label>\n                <div class=\"col-md-9\">\n                  <textarea [(ngModel)]=\"formDivision.description\" class=\"form-control\"></textarea>\n                  <div *ngIf=\"formErrors.description\" class=\"alert alert-danger\">{{formErrors.description}}</div>\n                </div>\n              </div>\n\n\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveScope()\">\n              <i class=\"fa fa-dot-circle-o\"></i> Save</button>\n            <!-- <button type=\"reset\" class=\"btn btn-sm btn-danger\">\n                      <i class=\"fa fa-ban\"></i> Reset</button> -->\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/division/division.component.ts":
/*!************************************************!*\
  !*** ./src/app/division/division.component.ts ***!
  \************************************************/
/*! exports provided: DivisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionComponent", function() { return DivisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/divisions/divisions.service */ "./src/app/services/divisions/divisions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DivisionComponent = /** @class */ (function () {
    function DivisionComponent(ds) {
        this.ds = ds;
        this.formDivision = {};
        this.formErrors = {};
        this.getDivisions();
    }
    DivisionComponent.prototype.ngOnInit = function () {
    };
    DivisionComponent.prototype.getDivisions = function () {
        var _this = this;
        this.ds.get().subscribe(function (result) {
            _this.divisions = result;
        }, function (error) {
            _this.ds.checkError(error);
        });
    };
    DivisionComponent.prototype.saveScope = function () {
        var _this = this;
        this.formErrors = {};
        if (this.formDivision.id) {
            this.ds.put(this.formDivision.id, this.formDivision).subscribe(function (result) {
                _this.reset_from();
                $('#division_modal').modal('hide');
                _this.getDivisions();
            }, function (error) {
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.ds.checkError(error);
            });
        }
        else {
            this.ds.post(this.formDivision).subscribe(function (result) {
                _this.reset_from();
                $('#division_modal').modal('hide');
                _this.getDivisions();
            }, function (error) {
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.ds.checkError(error);
            });
        }
    };
    DivisionComponent.prototype.reset_from = function () {
        this.formDivision = {};
    };
    DivisionComponent.prototype.openedit = function (division) {
        this.formDivision = division;
    };
    DivisionComponent.prototype.conformed_delete = function (scope) {
        var _this = this;
        if (confirm("Are you sure to delete " + scope.name + "?")) {
            this.ds.delete(scope.id).subscribe(function (result) {
                _this.getDivisions();
            }, function (error) {
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.ds.checkError(error);
            });
        }
    };
    DivisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-division',
            template: __webpack_require__(/*! ./division.component.html */ "./src/app/division/division.component.html"),
            styles: [__webpack_require__(/*! ./division.component.css */ "./src/app/division/division.component.css")]
        }),
        __metadata("design:paramtypes", [_services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_1__["DivisionsService"]])
    ], DivisionComponent);
    return DivisionComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".classfication-name{\n    background: #1D9ED3 ;\n     font-weight:bold;\n}\n.responsibilities-title{\n    min-width:300px;\n    white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.employee{\n    min-width:150px;\n}\n.cut-text { \n    text-overflow: ellipsis;\n    overflow: hidden; \n    width: 300px; \n    /* height: 1.2em;  */\n    white-space: nowrap;\n  }"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"col-md-12\">\n      <h2>Employee And Responsibilities Mapping</h2>\n    </div>\n    <div class=\"col-md-12\">\n    <div class=\"form-inline row\">\n        <div class=\"col-md-3 form-group \">\n      <label for=\"division\">Divison &nbsp;&nbsp;</label>\n      <select id=\"division\" class=\"form-control\" [(ngModel)]=\"divisionId\" (ngModelChange)=\"getLocations(divisionId)\">\n        <option value=\"\"  selected>Select your option</option>\n        <option *ngFor=\"let division of divisions\" value=\"{{ division.id }}\">{{ division.name }}</option>\n      </select>\n      </div>\n      <div class=\"col-md-3 form-group \">\n      <label for=\"division\">Location &nbsp;&nbsp;</label>\n      <select id=\"location\" class=\"form-control\" [(ngModel)]=\"locationdivision\" (ngModelChange)=\"getList(locationdivision)\">\n        <option value=\"\"  selected>Select your option</option>\n        <option *ngFor=\"let location of locations\" value=\"{{ location.id }}\">{{ location.location_data.name }}</option>\n      </select>\n    </div>\n    </div>\n\n    <!-- <div class=\"col-md-12\">\n      <button class=\"btn btn-info pull-right\">Apply</button>\n    </div> -->\n  <br>\n  <div class=\"row\" *ngIf=\"responsibilities?.length > 0\">\n    <div class=\"col-md-12 table-responsive\">\n      <table class=\"table table-striped table-bordered table-sm \">\n        <thead class=\"\">\n          <tr>\n            <th scope=\"col\" class=\"table_th responsibilities-title \" >Responsibilities</th>\n            <th *ngFor=\"let employee of employees\" class=\"table_th employee\">\n                {{ employee.employee.first_name }} {{ employee.employee.last_name }}\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <ng-container *ngFor=\"let res of responsibilities\">\n            <tr *ngIf=\"check_classification(res.responsibility_data.classification_data.id)\">\n              <td  [colSpan]=\"1+employees?.length\" class=\"table_th\">\n                {{res.responsibility_data.classification_data.id}}.{{res.responsibility_data.classification_data.name}}\n              </td>\n            </tr>\n            <tr >\n              <td><p class=\"cut-text\">{{res.responsibility_data.classification_data.id}}.{{res.responsibility_data.position}} {{res.responsibility_data.name}}</p></td>\n              <td *ngFor=\"let employee of employees\">\n               <select  class=\"form-control\" (change)=\"updateRole($event,res.responsibility_data.id,employee.employee.id,'update_role')\"  *ngIf=\"application_settting.is_role_based_responsibility_ass\">\n                <option value=\"\" selected>---</option>\n                <option *ngFor=\"let role of roles\" value=\"{{ role.id }}\" selected=\"{{selectedRole(res.responsibility_data.id,employee.employee.id,role.id)}}\">{{ role.name }}</option>\n              </select>\n              <input type=\"checkbox\" (click)=\"updateRole($event,res.responsibility_data.id,employee.employee.id,'update_active')\"\n                checked=\"{{checkResposibility(res.responsibility_data.id,employee.employee.id)}}\" *ngIf=\"!application_settting.is_role_based_responsibility_ass\" />\n              </td>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"responsibilities?.length == 0\">\n    <div class=\"col-md-12 table-responsive\">\n        <h6 class=\"text-center\">No Data found</h6> \n    </div>\n  \n</div>\n  </div>"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/divisions/divisions.service */ "./src/app/services/divisions/divisions.service.ts");
/* harmony import */ var _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/locations/locations.service */ "./src/app/services/locations/locations.service.ts");
/* harmony import */ var _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/employee/employee.service */ "./src/app/services/employee/employee.service.ts");
/* harmony import */ var _services_role_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/role/role.service */ "./src/app/services/role/role.service.ts");
/* harmony import */ var _services_application_settings_application_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/application-settings/application-settings.service */ "./src/app/services/application-settings/application-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(ds, ls, es, rs, ass) {
        var _this = this;
        this.ds = ds;
        this.ls = ls;
        this.es = es;
        this.rs = rs;
        this.ass = ass;
        this.locationdivision = "";
        this.employees = [];
        this.divisionId = "";
        this.responsibilitie_employee_role = [];
        this.responsibilitie_employee = [];
        this.application_settting = {};
        this.data = {};
        this.classification_id = "";
        this.ass.get().subscribe(function (result) {
            if (result[0]) {
                _this.application_settting = result[0];
            }
            else {
                _this.application_settting.is_role_based_responsibility_ass = 0;
                _this.application_settting.id = "";
            }
        }, function (error) {
            _this.ass.checkError(error);
        });
        this.ds.get().subscribe(function (result) {
            _this.divisions = result;
        }, function (error) {
            ds.checkError(error);
        });
        this.rs.getRole().subscribe(function (result) {
            _this.roles = result;
        }, function (error) {
            ds.checkError(error);
        });
    }
    EmployeeComponent.prototype.getLocations = function (divisionId) {
        var _this = this;
        this.locationdivision = "";
        this.employees = [];
        this.responsibilities = [];
        this.locations = [];
        if (divisionId) {
            this.ls.get(divisionId).subscribe(function (result) {
                _this.locations = result;
            }, function (error) {
                _this.ls.checkError(error);
            });
        }
    };
    EmployeeComponent.prototype.getList = function (locationDivisoinId) {
        var _this = this;
        this.classification_id = "";
        //this.locationdivision = null;
        this.responsibilitie_employee_role = [];
        this.responsibilitie_employee = [];
        this.location_divisoin_id = locationDivisoinId;
        //this.application_settting.is_role_based_responsibility_ass
        if (locationDivisoinId) {
            this.getResponsibilities(locationDivisoinId);
            this.getEmployees(locationDivisoinId);
            this.rs.getEmployeeResponsibilityRole(locationDivisoinId).subscribe(function (result) {
                _this.response = result;
                if (_this.application_settting.is_role_based_responsibility_ass) {
                    _this.response.forEach(function (row) {
                        if (row.role) {
                            _this.responsibilitie_employee_role[row.responsibility + "_" + row.employee + "_" + row.role] = "yes";
                            _this.responsibilitie_employee[row.responsibility + "_" + row.employee] = "yes";
                        }
                        else {
                            _this.responsibilitie_employee_role[row.responsibility + "_" + row.employee + "_" + row.role] = "no";
                            _this.responsibilitie_employee[row.responsibility + "_" + row.employee] = "no";
                        }
                        _this.responsibilitie_employee_role[row.responsibility + "_" + row.employee + "_" + row.role + "_id"] = row.id;
                        _this.responsibilitie_employee[row.responsibility + "_" + row.employee + "_id"] = row.id;
                    });
                }
                else {
                    _this.response.forEach(function (row) {
                        if (row.active) {
                            _this.responsibilitie_employee[row.responsibility + "_" + row.employee] = "yes";
                        }
                        else {
                            _this.responsibilitie_employee[row.responsibility + "_" + row.employee] = "no";
                        }
                        _this.responsibilitie_employee[row.responsibility + "_" + row.employee + "_id"] = row.id;
                    });
                }
            }, function (error) {
                _this.ls.checkError(error);
            });
        }
        else {
            this.responsibilities = [];
        }
    };
    EmployeeComponent.prototype.getEmployees = function (locationDivisoinId) {
        var _this = this;
        this.es.get(locationDivisoinId).subscribe(function (result) {
            _this.employees = result;
        }, function (error) {
            _this.ls.checkError(error);
        });
    };
    EmployeeComponent.prototype.getResponsibilities = function (locationDivisoinId) {
        var _this = this;
        this.ls.responsibilities_location(locationDivisoinId, true).subscribe(function (result) {
            _this.responsibilities = result;
        }, function (error) {
            _this.ls.checkError(error);
        });
    };
    EmployeeComponent.prototype.updateRole = function (event, responsibility_id, employee_id, action) {
        var _this = this;
        if (action == 'update_role') {
            if (event.target.value) {
                this.data = { responsibility: responsibility_id, employee: employee_id, role: event.target.value, division_location: this.location_divisoin_id };
            }
            else {
                this.data = { responsibility: responsibility_id, employee: employee_id, role: "", division_location: this.location_divisoin_id };
            }
        }
        else {
            if (event.target.checked) {
                this.data = { responsibility: responsibility_id, employee: employee_id, active: true, division_location: this.location_divisoin_id };
            }
            else {
                this.data = { responsibility: responsibility_id, employee: employee_id, active: false, division_location: this.location_divisoin_id };
            }
        }
        // var data = {responsibility:responsibility_id,employee:employee_id,active:active,role:role_id,division_location:this.location_divisoin_id};
        if (this.responsibilitie_employee[responsibility_id + "_" + employee_id]) {
            //update
            // let data = {responsibility:responsibility_id,employee:employee_id,active:active,division_location:this.location_divisoin_id};
            this.rs.updateEmployeeResponsibilityRole(this.responsibilitie_employee[responsibility_id + "_" + employee_id + "_id"], this.location_divisoin_id, this.data).subscribe(function (result) {
                _this.response = result;
                if (_this.application_settting.is_role_based_responsibility_ass) {
                    if (_this.response.role) {
                        _this.responsibilitie_employee_role[_this.response.responsibility + "_" + _this.response.employee + "_" + _this.response.role] = "yes";
                        _this.responsibilitie_employee[_this.response.responsibility + "_" + _this.response.employee] = "yes";
                    }
                    else {
                        _this.responsibilitie_employee_role[_this.response.responsibility + "_" + _this.response.employee + "_" + _this.response.role] = "no";
                        _this.responsibilitie_employee[_this.response.responsibility + "_" + _this.response.employee] = "no";
                    }
                    _this.responsibilitie_employee_role[_this.response.responsibility + "_" + _this.response.employee + "_" + _this.response.role + "_id"] = _this.response.id;
                    _this.responsibilitie_employee[_this.response.responsibility + "_" + _this.response.employee + "_id"] = _this.response.id;
                }
                else {
                    if (_this.response.active) {
                        _this.responsibilitie_employee[_this.response.responsibility + "_" + _this.response.employee] = "yes";
                    }
                    else {
                        _this.responsibilitie_employee[_this.response.responsibility + "_" + _this.response.employee] = "no";
                    }
                    _this.responsibilitie_employee[_this.response.responsibility + "_" + _this.response.employee + "_id"] = _this.response.id;
                }
            });
        }
        else {
            //post
            // let data = {responsibility:responsibility_id,employee:employee_id,active:active,role:event.target.value,division_location:this.location_divisoin_id};
            if (!this.data.active) {
                this.data.active = false;
            }
            this.rs.createEmployeeResponsibilityRole(this.data).subscribe(function (result) {
                _this.response = result;
                if (_this.application_settting.is_role_based_responsibility_ass) {
                    if (_this.response.role) {
                        _this.responsibilitie_employee_role[_this.response.responsibility + "_" + _this.response.employee + "_" + _this.response.role] = "yes";
                        _this.responsibilitie_employee[_this.response.responsibility + "_" + _this.response.employee] = "yes";
                    }
                    else {
                        _this.responsibilitie_employee_role[_this.response.responsibility + "_" + _this.response.employee + "_" + _this.response.role] = "no";
                        _this.responsibilitie_employee[_this.response.responsibility + "_" + _this.response.employee] = "no";
                    }
                    _this.responsibilitie_employee_role[_this.response.responsibility + "_" + _this.response.employee + "_" + _this.response.role + "_id"] = _this.response.id;
                    _this.responsibilitie_employee[_this.response.responsibility + "_" + _this.response.employee + "_id"] = _this.response.id;
                }
                else {
                    if (_this.response.active) {
                        _this.responsibilitie_employee[_this.response.responsibility + "_" + _this.response.employee] = "yes";
                    }
                    else {
                        _this.responsibilitie_employee[_this.response.responsibility + "_" + _this.response.employee] = "no";
                    }
                    _this.responsibilitie_employee[_this.response.responsibility + "_" + _this.response.employee + "_id"] = _this.response.id;
                }
            });
        }
    };
    EmployeeComponent.prototype.selectedRole = function (responsibility_id, employee_id, role_id) {
        if (this.responsibilitie_employee_role[responsibility_id + "_" + employee_id + "_" + role_id] == "yes") {
            return "selectd";
        }
        return "";
    };
    EmployeeComponent.prototype.checkResposibility = function (responsibilityId, employee_id) {
        if (this.responsibilitie_employee[responsibilityId + "_" + employee_id] == "yes") {
            return "checked";
        }
        return "";
    };
    EmployeeComponent.prototype.check_classification = function (classification) {
        if (this.classification_id !== classification) {
            this.classification_id = classification;
            return true;
        }
        else {
            return false;
        }
    };
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [_services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_1__["DivisionsService"], _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"], _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"], _services_role_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"], _services_application_settings_application_settings_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationSettingsService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/forbidden/forbidden.component.css":
/*!***************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.html":
/*!****************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Access Forbidden</h2>\n<a href=\"/\" >Try Again</a>\n"

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.ts ***!
  \**************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForbiddenComponent = /** @class */ (function () {
    function ForbiddenComponent() {
    }
    ForbiddenComponent.prototype.ngOnInit = function () {
    };
    ForbiddenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forbidden',
            template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/forbidden/forbidden.component.html"),
            styles: [__webpack_require__(/*! ./forbidden.component.css */ "./src/app/forbidden/forbidden.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForbiddenComponent);
    return ForbiddenComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#scope-desc {\n    padding-bottom: 10px;\n    padding-right: 50px;\n}\n#scope-info {\n  position: relative;\n  bottom: 20px;\n  right: -40px;\n  margin-bottom: -24px;\n}\n.classification-group{\n    /* border: 1px solid #20a8d8;\n    min-height: 100px; */\n}\n.tuncate-text {\n    max-width: 23vw;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.truncate-text_division_menu {\n        max-width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 20px;\n}\n/* Hide default HTML checkbox */\n.switch input {display:none;}\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #2196F3;\n  /*background-color: #ccc;*/\n  transition: .4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 10px;\n  bottom: 2px;\n  background-color: white;\n  transition: .4s;\n}\ninput:checked + .slider {\n  background-color: #2196F3;\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n.divisions_list{\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-weight:600;\n}\n/* #divisions_list>.list-group-item.active{\n  padding-top: 100px;\n} */\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div *ngIf=\"org_scope\" class=\"col-md-12 alert alert-info border truncate-text_division_menu \" id=\"scope-desc\" title=\" {{org_scope.description}}\">\n      <span><b>SCOPE:</b></span>\n      {{org_scope.description}}\n   <button type=\"button\" class=\"close infodata\" id=\"scope-info\" data-toggle=\"modal\" data-target=\"#myModal\">\n     <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n </button>\n   </div>\n   <div class=\"col-md-12\">\n      <p class=\"pull-right\" style=\"padding-left: 10px;\">DF View</p>\n      <label class=\"switch pull-right\">\n          <input type=\"checkbox\" (click)=\"isSelected($event)\" value=\"yes\" />\n          <span class=\"slider round\"></span>\n        </label>\n        <p class=\"pull-right\" style=\"padding-right: 10px;\">CPS View</p>\n   </div>\n  <div class=\"col-md-3\">\n    <ul class=\"list-group \" id=\"divisions_list\">\n      <li *ngFor=\"let division of divisions\" class=\"btn btn-link list-group-item list-group-item-action divisions_list truncate-text_division_menu\" [ngClass]=\"{active : currentdivision === division.id}\" (click)=\"getReponsiblity(division.id)\" >{{division.name}}</li>\n    </ul>\n  </div>\n  <div class=\"col-md-9\" id=\"responsibilities\">\n    <div class=\"row\">\n      <div class=\"col-md-12 classification-group\" *ngFor=\"let core of classifications\">\n        <!-- <h5>{{core.id}} - {{core.name}}</h5> -->\n        <ul class=\"list-group core-group\" dnd-sortable-container [sortableData]=\"core.responsibilities\" (onDropSuccess)=\"itemDroped()\" [dropZones]=\"['source-dropZone']\">\n         <table class=\"table table-responsive table table-striped table-bordered table-sm\">\n           <thead><tr *ngIf=\"core.name\">\n             <td class=\"table_th\" colspan=\"12\" style=\"width: 100vw\">{{core.name}}</td>\n           </tr></thead>\n           <tbody>\n          <tr *ngFor=\"let responsibility of core.responsibilities; let i = index\" dnd-sortable [sortableIndex]=\"i\" [dragData]=\"source\" (onDropSuccess)=\"itemDroped(core.id,responsibility.id,i)\">\n              <td style=\"width:1%;\"> <ng-container *ngIf=\"core.id\">{{core.id}}.</ng-container>{{i+1}}</td>\n              <td class=\"tuncate-text\" style=\"width:35%;\" title=\"{{responsibility.name}}\" >{{responsibility.name}}\n                <!-- <span><i class=\"fa fa-info-circle infodata\"></i></span> -->\n              </td>\n              <td class=\"tuncate-text\" style=\"width:64%;\" title=\"{{responsibility.description}}\"> {{responsibility.description}}</td>\n          </tr>\n        </tbody>\n        </table>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <!-- <div *ngIf=\"isChanged\"class=\"col-md-12\">\n      <button type=\"button\" class=\"close\" (click)=\"updateReponsiblity()\">save</button>\n  </div> -->\n</div>\n<!-- Modal -->\n<div id=\"myModal\" class=\"modal  fade\" role=\"dialog\">\n  <div class=\"modal-dialog modal-info\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3>Scope</h3>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div style=\"white-space: pre-line;\" class=\"modal-body\">\n        {{org_scope.description}}\n      </div>\n      <!-- <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div> -->\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/divisions/divisions.service */ "./src/app/services/divisions/divisions.service.ts");
/* harmony import */ var _services_responsibilities_responsibilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/responsibilities/responsibilities.service */ "./src/app/services/responsibilities/responsibilities.service.ts");
/* harmony import */ var _services_org_scope_org_scope_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/org-scope/org-scope.service */ "./src/app/services/org-scope/org-scope.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(ds, rs, ss) {
        var _this = this;
        this.ds = ds;
        this.rs = rs;
        this.ss = ss;
        this.dataview = 'cpsv';
        this.classifications = new Array();
        this.classification_id = 0;
        this.org_scope = {};
        this.ss.get().subscribe(function (result) {
            _this.org_scope = result[0];
        }, function (error) {
            _this.ss.checkError(error);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.reg_reponsiblity("Accounts");
        this.ds.get().subscribe(function (result) {
            _this.divisions = result;
            if (result[0]) {
                _this.getReponsiblity(result[0].id);
            }
        }, function (error) {
            _this.ds.checkError(error);
        });
    };
    HomeComponent.prototype.getReponsiblity = function (divisionId) {
        var _this = this;
        this.rs.get(divisionId, this.dataview).subscribe(function (result) {
            _this.responsibilities = result;
            if (_this.dataview === 'cpsv') {
                _this.cpsv();
            }
            else {
                _this.dfv();
            }
        }, function (error) {
            _this.rs.checkError(error);
        });
        this.currentdivision = divisionId;
    };
    HomeComponent.prototype.cpsv = function () {
        var _this = this;
        var i = -1;
        var j = 0;
        this.classification_id = 0;
        this.classifications = new Array();
        this.responsibilities.forEach(function (element) {
            if (_this.classification_id != element.classification) {
                _this.classification_id = element.classification;
                _this.classifications[++i] = new Array();
                _this.classifications[i]['name'] = element.classification_data.name;
                _this.classifications[i]['id'] = element.classification;
                _this.classifications[i]['responsibilities'] = new Array();
                _this.classifications[i]['responsibilities'].push({ id: element.id, name: element.name, description: element.description, position: element.position });
            }
            else {
                _this.classifications[i]['responsibilities'].push({ id: element.id, name: element.name, description: element.description, position: element.position });
            }
        });
    };
    HomeComponent.prototype.dfv = function () {
        var _this = this;
        var i = -1;
        var j = 0;
        this.classification_id = 0;
        this.classifications = new Array();
        this.responsibilities.forEach(function (element) {
            if (_this.classification_id != element.division_function) {
                _this.classification_id = element.division_function;
                _this.classifications[++i] = new Array();
                if (element.function_data) {
                    _this.classifications[i]['name'] = element.function_data.name;
                }
                else {
                    _this.classifications[i]['name'] = 'Unassigned';
                }
                _this.classifications[i]['id'] = element.division_function;
                _this.classifications[i]['responsibilities'] = new Array();
                _this.classifications[i]['responsibilities'].push({ id: element.id, name: element.name, description: element.description, position: element.function_position });
            }
            else {
                _this.classifications[i]['responsibilities'].push({ id: element.id, name: element.name, description: element.description, position: element.function_position });
            }
        });
    };
    HomeComponent.prototype.itemDroped = function (core_id, responsibility, i) {
        //this.isChanged = true;
        var postdata = new Array();
        this.classifications.forEach(function (element) {
            var i = 1;
            element.responsibilities.forEach(function (element1) {
                postdata.push({ classification: element.id, id: element1.id, position: i++ });
            });
        });
        this.rs.updatePositions({ data: postdata }, this.dataview).subscribe(function (result) {
            //this.isChanged = false;
        });
    };
    HomeComponent.prototype.isSelected = function (event) {
        if (event.target.checked) {
            this.dataview = 'dfv';
            this.getReponsiblity(this.currentdivision);
            //this.cpsv();
        }
        else {
            this.dataview = 'cpsv';
            this.getReponsiblity(this.currentdivision);
            //this.dfv();
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_1__["DivisionsService"], _services_responsibilities_responsibilities_service__WEBPACK_IMPORTED_MODULE_2__["ResponsibilitiesService"], _services_org_scope_org_scope_service__WEBPACK_IMPORTED_MODULE_3__["OrgScopeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/locations/locations.component.css":
/*!***************************************************!*\
  !*** ./src/app/locations/locations.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr{\n    border: 1px solid #c8ced3;\n    width: 100vw;\n}\n#locations_mapping_header{\n    padding-top: 20px;\n    padding-bottom: 20px;\n    /* background: #3a4248;\n    color: #ffffff; */\n}\n#division, #advanced_division{\n  width: 22vw;\n}\n"

/***/ }),

/***/ "./src/app/locations/locations.component.html":
/*!****************************************************!*\
  !*** ./src/app/locations/locations.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row form-inline\" id=\"locations_mapping_header\">\n  <div class=\"col-md-12\">\n    <h2>Responsibilities And Locations Mapping</h2>\n  </div>\n  <div class=\"col-md-5 form-group\">\n      <label for=\"division\">Division &nbsp;&nbsp;</label>\n    <select id=\"division\" class=\"form-control\" [(ngModel)]=\"base_division\" (ngModelChange)=\"getResponsibilities(base_division)\">\n      <option value=\"null\" selected>Select division</option>\n      <option *ngFor=\"let division of divisions\" value=\"{{ division.id }}\">{{ division.name }}</option>\n    </select>\n  </div>\n  <div class=\"col-md-2\">\n    <button type=\"button\" class=\"txt-center btn btn-link\" data-toggle=\"collapse\" data-target=\"#advanced_division\">Advanced</button>\n  </div>\n  <div id=\"advanced_division\" class=\"col-md-5 collapse\">\n    <div class=\"row\">\n      <div class=\"col-md-10 form-group\">\n          <label for=\"advanced_division\">Division &nbsp;&nbsp;</label>\n        <select id=\"advanced_division\" class=\"form-control\" [(ngModel)]=\"advanced_division\" (ngModelChange)=\"getLocations(advanced_division)\">\n          <option value=\"null\" selected>Select division</option>\n          <option *ngFor=\"let division of divisions_advanced\" value=\"{{ division.id }}\">{{ division.name }}</option>\n        </select>\n      </div>\n      <div class=\"col-md-2\">\n        <button type=\"button\" class=\"pull-right btn btn-link\" data-toggle=\"collapse\" data-target=\"#advanced_division\" (click)=\"getResponsibilitiesReset(base_division)\">Clear</button>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"col-md-12\">\n    <button class=\"btn btn-info pull-right\">Apply</button>\n  </div> -->\n</div>\n<div class=\"row\" *ngIf=\"locations\">\n  <div class=\"col-md-12 table-responsive\">\n    <table class=\"table table-borderless \">\n      <thead class=\"\">\n        <tr>\n          <th scope=\"col\">Responsibilities</th>\n          <th *ngFor=\"let location of locations\">\n            {{location.location_data.name}}\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let responsibility of responsibilities\">\n            <tr *ngIf=\"check_classification(responsibility.classification)\"><td [colSpan]=\"1+locations?.length\"  class=\"table_th\">{{responsibility.classification_data.name}}</td></tr>\n          <tr>\n            <td>{{responsibility.classification}}.{{responsibility.position}} {{responsibility.name}}</td>\n            <td *ngFor=\"let location of locations\">\n              <input type=\"checkbox\" (click)=\"isSelected($event,responsibility.id,location.id,location.location_data.id)\"\n                checked=\"{{checkResposibility(responsibility.id,location.location_data.id)}}\" />\n            </td>\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/locations/locations.component.ts":
/*!**************************************************!*\
  !*** ./src/app/locations/locations.component.ts ***!
  \**************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/divisions/divisions.service */ "./src/app/services/divisions/divisions.service.ts");
/* harmony import */ var _services_classifications_classifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/classifications/classifications.service */ "./src/app/services/classifications/classifications.service.ts");
/* harmony import */ var _services_responsibilities_responsibilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/responsibilities/responsibilities.service */ "./src/app/services/responsibilities/responsibilities.service.ts");
/* harmony import */ var _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/locations/locations.service */ "./src/app/services/locations/locations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(ds, cs, rs, ls) {
        var _this = this;
        this.ds = ds;
        this.cs = cs;
        this.rs = rs;
        this.ls = ls;
        this.base_division = null;
        this.advanced_division = null;
        this.locations_responsibilities = [];
        this.checkedArr = [];
        this.classification_id = 0;
        this.ds.get().subscribe(function (result) {
            _this.divisions = result;
            _this.divisions_advanced = result;
        }, function (error) {
            _this.rs.checkError(error);
        });
        this.cs.get().subscribe(function (result) {
            _this.classifications = result;
        }, function (error) {
            _this.rs.checkError(error);
        });
    }
    LocationsComponent.prototype.ngOnInit = function () {
    };
    LocationsComponent.prototype.getResponsibilities = function (divisionId) {
        var _this = this;
        this.classification_id = 0;
        this.responsibilities = [];
        if (divisionId === 'null') {
            return;
        }
        if (!this.advanced_division) {
            this.getLocations(divisionId);
        }
        this.rs.get(divisionId).subscribe(function (result) {
            _this.responsibilities = result;
        }, function (error) {
            _this.rs.checkError(error);
        });
    };
    LocationsComponent.prototype.getResponsibilitiesReset = function (divisionId) {
        this.advanced_division = null;
        this.getResponsibilities(divisionId);
    };
    LocationsComponent.prototype.getLocations = function (divisionId) {
        var _this = this;
        this.locations = [];
        if (divisionId === 'null') {
            return;
        }
        this.locations_responsibilities = [];
        this.ls.get(divisionId).subscribe(function (result) {
            _this.locations = result;
        }, function (error) {
            _this.rs.checkError(error);
        });
        this.ls.locations_responsibilities(divisionId).subscribe(function (result) {
            _this.response = result;
            _this.response.forEach(function (row) {
                if (row.active) {
                    _this.locations_responsibilities[row.responsibility + "_" + row.divsion.location] = "yes";
                }
                else {
                    _this.locations_responsibilities[row.responsibility + "_" + row.divsion.location] = "no";
                }
                _this.locations_responsibilities[row.responsibility + "_" + row.divsion.location + "_id"] = row.id;
            });
        }, function (error) {
            _this.rs.checkError(error);
        });
    };
    LocationsComponent.prototype.checkResposibility = function (responsibilityId, locationId) {
        if (this.locations_responsibilities[responsibilityId + "_" + locationId] == "yes") {
            return "checked";
        }
        return "";
    };
    LocationsComponent.prototype.isSelected = function (event, responsibility_id, location_division_id, location_id) {
        var _this = this;
        var division_id = 0;
        if (this.advanced_division) {
            division_id = this.advanced_division;
        }
        else {
            division_id = this.base_division;
        }
        if (event.target.checked) {
            var data = { division_location: location_division_id, responsibility: responsibility_id, active: true };
        }
        else {
            var data = { division_location: location_division_id, responsibility: responsibility_id, active: false };
        }
        //console.log(this.locations_responsibilities);
        if (this.locations_responsibilities[responsibility_id + "_" + location_id]) {
            this.ls.update(this.locations_responsibilities[responsibility_id + "_" + location_id + "_id"], division_id, data).subscribe(function (result) {
                //alert("saved");
                _this.response = result;
                if (_this.response.active) {
                    _this.locations_responsibilities[_this.response.responsibility + "_" + _this.response.divsion.location] = "yes";
                }
                else {
                    _this.locations_responsibilities[_this.response.responsibility + "_" + _this.response.divsion.location] = "no";
                }
                _this.locations_responsibilities[_this.response.responsibility + "_" + _this.response.divsion.location + "_id"] = _this.response.id;
            });
        }
        else {
            this.ls.post(data).subscribe(function (result) {
                //alert("saved");
                _this.response = result;
                if (_this.response.active) {
                    _this.locations_responsibilities[_this.response.responsibility + "_" + _this.response.divsion.location] = "yes";
                }
                else {
                    _this.locations_responsibilities[_this.response.responsibility + "_" + _this.response.divsion.location] = "no";
                }
                _this.locations_responsibilities[_this.response.responsibility + "_" + _this.response.divsion.location + "_id"] = _this.response.id;
            });
        }
    };
    LocationsComponent.prototype.check_classification = function (classification) {
        if (this.classification_id !== classification) {
            this.classification_id = classification;
            return true;
        }
        else {
            return false;
        }
    };
    LocationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locations',
            template: __webpack_require__(/*! ./locations.component.html */ "./src/app/locations/locations.component.html"),
            styles: [__webpack_require__(/*! ./locations.component.css */ "./src/app/locations/locations.component.css")]
        }),
        __metadata("design:paramtypes", [_services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_1__["DivisionsService"], _services_classifications_classifications_service__WEBPACK_IMPORTED_MODULE_2__["ClassificationsService"], _services_responsibilities_responsibilities_service__WEBPACK_IMPORTED_MODULE_3__["ResponsibilitiesService"], _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_4__["LocationsService"]])
    ], LocationsComponent);
    return LocationsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row text-center\" style=\"margin-top: 5%;\">\n    <div class=\"col-md-10\">\n        <img src=\"/assets/img/anabond.png\" alt=\"Logo\" class=\"\">\n      </div>\n      <div class=\"col-md-10\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"authorizeclient()\">Login</button>\n</div>\n  </div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase;
var client_id = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].client_id;
var client_secret = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].client_secret;
var redirect_uri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].redirect_uri;
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        window.location.href = API_URL + "/oauth/authorize?client_id=" + client_id + "&response_type=code&redirect_uri=" + redirect_uri;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.authorizeclient = function () {
        this.auth.authorizeuser();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-responsibility/my-responsibility.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/my-responsibility/my-responsibility.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-responsibility/my-responsibility.component.html":
/*!********************************************************************!*\
  !*** ./src/app/my-responsibility/my-responsibility.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"pl-3 pr-3 row\">\n    <h2>My Responsibilities</h2>\n  </div>\n<div class=\"row\" *ngIf=\"emp_responsibilities?.length > 0\">\n    <div class=\"col-md-12 table-responsive\">\n      <table class=\"table table-striped table-bordered table-sm\">\n        <thead class=\"\">\n          <tr>\n            <th class=\"w-1\">#</th>\n            <th class=\"w-25\" scope=\"col\">Responsibilities</th>\n            <th class=\"w-70\" >Description</th>\n            <th class=\"w-4\"  *ngIf=\"application_settting.is_role_based_responsibility_ass\">Role</th>\n          </tr>\n        </thead>\n        <tbody>\n            <ng-container *ngFor=\"let res of emp_responsibilities\">\n                \n                <tr *ngIf=\"check_classification(res.responsibility_data.classification_data.id)\">\n                  <td class=\"table_th\">{{res.responsibility_data.classification_data.id}}</td>\n                    <td  [colSpan]=\"application_settting.is_role_based_responsibility_ass ? '4' : '3'\" class=\"table_th\">{{res.responsibility_data.classification_data.name}}\n                    </td>\n                  </tr>\n              <tr>\n                <td>{{res.responsibility_data.classification_data.id}}</td>\n                <td>{{res.responsibility_data.position}} {{res.responsibility_data.name}}</td>\n                <td>{{res.responsibility_data.description}}</td>\n                <td *ngIf=\"application_settting.is_role_based_responsibility_ass\">{{res.role_data.name}}</td>\n\n              </tr>\n            </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"emp_responsibilities?.length == 0\">\n      <div class=\"col-md-12 table-responsive\">\n          <h6>No Responsibilities</h6> \n      </div>\n    \n  </div>"

/***/ }),

/***/ "./src/app/my-responsibility/my-responsibility.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/my-responsibility/my-responsibility.component.ts ***!
  \******************************************************************/
/*! exports provided: MyResponsibilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyResponsibilityComponent", function() { return MyResponsibilityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/employee/employee.service */ "./src/app/services/employee/employee.service.ts");
/* harmony import */ var _services_application_settings_application_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/application-settings/application-settings.service */ "./src/app/services/application-settings/application-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyResponsibilityComponent = /** @class */ (function () {
    function MyResponsibilityComponent(es, ass) {
        var _this = this;
        this.es = es;
        this.ass = ass;
        this.application_settting = {};
        this.ass.get().subscribe(function (result) {
            if (result[0]) {
                _this.application_settting = result[0];
            }
            else {
                _this.application_settting.is_role_based_responsibility_ass = 0;
                _this.application_settting.id = "";
            }
        }, function (error) {
            _this.ass.checkError(error);
        });
        this.es.getCurrentUserResponsibility().subscribe(function (result) {
            _this.emp_responsibilities = result;
        }, function (error) {
            _this.es.checkError(error);
        });
    }
    MyResponsibilityComponent.prototype.ngOnInit = function () {
    };
    MyResponsibilityComponent.prototype.check_classification = function (classification) {
        if (this.classification_id !== classification) {
            this.classification_id = classification;
            return true;
        }
        else {
            return false;
        }
    };
    MyResponsibilityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-responsibility',
            template: __webpack_require__(/*! ./my-responsibility.component.html */ "./src/app/my-responsibility/my-responsibility.component.html"),
            styles: [__webpack_require__(/*! ./my-responsibility.component.css */ "./src/app/my-responsibility/my-responsibility.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _services_application_settings_application_settings_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationSettingsService"]])
    ], MyResponsibilityComponent);
    return MyResponsibilityComponent;
}());



/***/ }),

/***/ "./src/app/org-scope/org-scope.component.css":
/*!***************************************************!*\
  !*** ./src/app/org-scope/org-scope.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description{\n    width: 95%;\n}"

/***/ }),

/***/ "./src/app/org-scope/org-scope.component.html":
/*!****************************************************!*\
  !*** ./src/app/org-scope/org-scope.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <div  class=\"pl-3 pr-3 row\">\n    <h2>Scope</h2>\n  </div>\n  <div class=\"row\">\n  <div class=\"col-md-12\">\n  <table class=\"table  table-bordered table-sm \">\n        <thead>\n            <tr *ngIf=\"org_scope?.length == 0\">\n              <!-- <th>Name</th> -->\n              <th ></th>\n              <th><button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#scope_modal\" (click)=\"reset_from()\" *ngIf=\"org_scope?.length == 0\">+</button></th>\n            </tr>\n        </thead>\n\n\n    <tbody>\n\n          <tr *ngFor=\"let scope of org_scope\">\n            <!-- <td>{{ scope.name }}</td> -->\n            <td class=\"description\">\n                <div [innerHTML]=\" scope.description | nl2br \"></div>\n              </td>\n            <td style=\"width:2%;\"><i class=\"fa fa-edit\" (click)=\"openedit(scope)\" data-toggle=\"modal\" data-target=\"#scope_modal\"></i>&nbsp;&nbsp;&nbsp;\n              <!-- <i class=\"fa fa-trash\" (click)=\"conformed_delete(scope)\"></i></td> -->\n          </tr>\n    </tbody>\n  </table>\n</div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"scope_modal\" role=\"dialog\">\n    <div class=\"modal-dialog modal-info\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n\n          <h4 class=\"modal-title\">Scope</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <!-- <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"name\">Scope</label>\n            <div class=\"col-md-9\">\n              <input type=\"text\" [(ngModel)]=\"formScope.name\" class=\"form-control\">\n              <div *ngIf=\"formErrors.name\" class=\"alert alert-danger\">{{formErrors.name}}</div>\n            </div>\n          </div> -->\n          <div class=\"form-group row\">\n\n              <div class=\"col-md-12\">\n                <textarea [(ngModel)]=\"formScope.description\" class=\"form-control\" rows=\"15\"></textarea>\n                <div *ngIf=\"formErrors.description\" class=\"alert alert-danger\">{{formErrors.description}}</div>\n              </div>\n            </div>\n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveScope()\">\n            <i class=\"fa fa-dot-circle-o\"></i> Save</button>\n          <!-- <button type=\"reset\" class=\"btn btn-sm btn-danger\">\n                    <i class=\"fa fa-ban\"></i> Reset</button> -->\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/org-scope/org-scope.component.ts":
/*!**************************************************!*\
  !*** ./src/app/org-scope/org-scope.component.ts ***!
  \**************************************************/
/*! exports provided: OrgScopeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgScopeComponent", function() { return OrgScopeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_org_scope_org_scope_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/org-scope/org-scope.service */ "./src/app/services/org-scope/org-scope.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrgScopeComponent = /** @class */ (function () {
    function OrgScopeComponent(ss) {
        this.ss = ss;
        this.formScope = {};
        this.formErrors = {};
        this.getScope();
    }
    OrgScopeComponent.prototype.ngOnInit = function () {
    };
    OrgScopeComponent.prototype.getScope = function () {
        var _this = this;
        this.ss.get().subscribe(function (result) {
            _this.org_scope = result;
        }, function (error) {
            _this.ss.checkError(error);
        });
    };
    OrgScopeComponent.prototype.reset_from = function () {
        this.formScope = {};
    };
    OrgScopeComponent.prototype.saveScope = function () {
        var _this = this;
        this.formErrors = {};
        if (this.formScope.id) {
            this.ss.put(this.formScope.id, this.formScope).subscribe(function (result) {
                _this.reset_from();
                $('#scope_modal').modal('hide');
                _this.getScope();
            }, function (error) {
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.ss.checkError(error);
            });
        }
        else {
            this.ss.post(this.formScope).subscribe(function (result) {
                _this.reset_from();
                $('#scope_modal').modal('hide');
                _this.getScope();
            }, function (error) {
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.ss.checkError(error);
            });
        }
    };
    OrgScopeComponent.prototype.openedit = function (form_scope) {
        this.formScope = form_scope;
    };
    OrgScopeComponent.prototype.conformed_delete = function (scope) {
        var _this = this;
        if (confirm("Are you sure to delete " + scope.name + "?")) {
            this.ss.delete(scope.id).subscribe(function (result) {
                _this.getScope();
            }, function (error) {
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.ss.checkError(error);
            });
        }
    };
    OrgScopeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-org-scope',
            template: __webpack_require__(/*! ./org-scope.component.html */ "./src/app/org-scope/org-scope.component.html"),
            styles: [__webpack_require__(/*! ./org-scope.component.css */ "./src/app/org-scope/org-scope.component.css")]
        }),
        __metadata("design:paramtypes", [_services_org_scope_org_scope_service__WEBPACK_IMPORTED_MODULE_1__["OrgScopeService"]])
    ], OrgScopeComponent);
    return OrgScopeComponent;
}());



/***/ }),

/***/ "./src/app/responsibilities/responsibilities.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/responsibilities/responsibilities.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .tr_border{\n  border: 1px solid #c8ced3;\n}\n.td_border{\n  border: 1px solid #c8ced3;\n} */\n.no_border{\n  border: none;\n}\n#res_table td {\n  border-left: 1px solid #c8ced3;\n}\n#res_table {\n  border: 1px solid #c8ced3;\n}\n"

/***/ }),

/***/ "./src/app/responsibilities/responsibilities.component.html":
/*!******************************************************************!*\
  !*** ./src/app/responsibilities/responsibilities.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 \">\n  <h2>Responsibilities</h2>\n</div>\n<div class=\"col-md-12\">\n  <table class=\"table table-sm table-bordered table-striped\" id=\"res_table\">\n    <thead class=\"table_th\">\n      <tr class=\"d-flex\">\n        <th class=\"col-2\">Division</th>\n        <th class=\"col-2\">Classification</th>\n        <th class=\"col-7\">Name</th>\n        <th class=\"col-1\">\n          <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#responsibility_modal\" (click)=\"reset_from()\">+</button>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let responsibility of responsibilities\">\n        <tr class=\"d-flex\">\n          <td class=\"col-2\" [ngClass]=\"{no_border : check_div_td_boder(responsibility.division)}\">\n            <ng-container *ngIf=\"check_division(responsibility.division)\">{{responsibility.division_data.name}}</ng-container>\n          </td>\n          <td class=\"col-2\" [ngClass]=\"{no_border : check_td_boder(responsibility.classification)}\">\n            <ng-container *ngIf=\"check_classification(responsibility.classification)\">{{responsibility.classification_data.name}}</ng-container>\n          </td>\n          <td class=\"col-7\">{{responsibility.classification}}.{{responsibility.position}} {{responsibility.name}}\n            <span (click)=\"updateModal(responsibility.description)\"\n              data-toggle=\"modal\" data-target=\"#myModal\">\n              <i class=\"fa fa-info-circle infodata\"></i>\n            </span>\n          </td>\n          <td class=\"col-1\">\n            <i class=\"fa fa-edit btn\" (click)=\"openedit(responsibility)\" data-toggle=\"modal\" data-target=\"#responsibility_modal\"></i>\n            <i class=\"fa fa-trash btn\" (click)=\"conformed_delete(responsibility)\"></i>\n          </td>\n        </tr>\n      </ng-container>\n\n    </tbody>\n  </table>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"responsibility_modal\" role=\"dialog\">\n  <div class=\"modal-dialog modal-info\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n\n        <h4 class=\"modal-title\">Add/Edit Responsibility</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"formSuccess\" class=\"alert alert-success\">Saved!</div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"name\">Name</label>\n          <div class=\"col-md-9\">\n            <input type=\"text\" [(ngModel)]=\"formResponsibilities.name\" class=\"form-control\" autofocus=\"autofocus\">\n            <div *ngIf=\"formErrors.name\" class=\"alert alert-danger\">{{formErrors.name}}</div>\n            <div *ngIf=\"formErrors.non_field_errors\" class=\"alert alert-danger\">{{formErrors.non_field_errors}}</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"name\">Description</label>\n          <div class=\"col-md-9\">\n            <input type=\"text\" [(ngModel)]=\"formResponsibilities.description\" class=\"form-control\">\n            <div *ngIf=\"formErrors.description\" class=\"alert alert-danger\">{{formErrors.description}}</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"name\">Classifications</label>\n          <div class=\"col-md-9\">\n            <select id=\"classifications\" class=\"form-control\" [(ngModel)]=\"formResponsibilities.classification\" name=\"classifications\">\n              <option *ngFor=\"let classification of classifications\" value=\"{{ classification.id }}\">{{ classification.name }}</option>\n            </select>\n            <div *ngIf=\"formErrors.classification\" class=\"alert alert-danger\">{{formErrors.classification}}</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"name\">Division</label>\n          <div class=\"col-md-9\">\n            <select id=\"division\" class=\"form-control\" [(ngModel)]=\"formResponsibilities.division\" (ngModelChange)=\"geClassifications(formResponsibilities.division)\"\n              [disabled]='formResponsibilities.is_disable'>\n              <option *ngFor=\"let division of divisions\" value=\"{{ division.id }}\">{{ division.name }}</option>\n            </select>\n            <div *ngIf=\"formErrors.division\" class=\"alert alert-danger\">{{formErrors.division}}</div>\n            <div *ngIf=\"formErrors.non_field_errors\" class=\"alert alert-danger\">{{formErrors.non_field_errors}}</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-3 col-form-label\" for=\"name\">Division Classifications</label>\n          <div class=\"col-md-9\">\n            <select id=\"classifications\" class=\"form-control\" [(ngModel)]=\"formResponsibilities.division_function\" name=\"division_function\"\n              [disabled]='formResponsibilities.is_disable'>\n              <option value=\"null\" selected>Select classifications</option>\n              <option *ngFor=\"let classification of division_classification\" value=\"{{ classification.id }}\">{{ classification.name }}</option>\n            </select>\n            <div *ngIf=\"formErrors.division_function\" class=\"alert alert-danger\">{{formErrors.division_function}}</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveResponsibility()\">\n          <i class=\"fa fa-dot-circle-o\"></i> Save</button>\n        <!-- <button type=\"reset\" class=\"btn btn-sm btn-danger\">\n                  <i class=\"fa fa-ban\"></i> Reset</button> -->\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog modal-info\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3>Responsibility Description</h3>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        {{responsibility_description}}\n      </div>\n      <!-- <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div> -->\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/responsibilities/responsibilities.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/responsibilities/responsibilities.component.ts ***!
  \****************************************************************/
/*! exports provided: ResponsibilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsibilitiesComponent", function() { return ResponsibilitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/divisions/divisions.service */ "./src/app/services/divisions/divisions.service.ts");
/* harmony import */ var _services_classifications_classifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/classifications/classifications.service */ "./src/app/services/classifications/classifications.service.ts");
/* harmony import */ var _services_responsibilities_responsibilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/responsibilities/responsibilities.service */ "./src/app/services/responsibilities/responsibilities.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResponsibilitiesComponent = /** @class */ (function () {
    function ResponsibilitiesComponent(ds, cs, rs) {
        this.ds = ds;
        this.cs = cs;
        this.rs = rs;
        this.formErrors = {};
        this.formSuccess = false;
        this.formResponsibilities = {};
        this.classification_id = 0;
        this.division_id = 0;
        this.responsibility_description = '';
    }
    ResponsibilitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getResposiblities();
        this.ds.get().subscribe(function (result) {
            _this.divisions = result;
        }, function (error) {
            _this.rs.checkError(error);
        });
        this.cs.get().subscribe(function (result) {
            _this.classifications = result;
        }, function (error) {
            _this.rs.checkError(error);
        });
    };
    ResponsibilitiesComponent.prototype.getResposiblities = function () {
        var _this = this;
        this.rs.get().subscribe(function (result) {
            _this.responsibilities = result;
        }, function (error) {
            _this.rs.checkError(error);
        });
    };
    ResponsibilitiesComponent.prototype.saveResponsibility = function () {
        var _this = this;
        this.formErrors = {};
        if (this.formResponsibilities.division_function === 'null') {
            this.formResponsibilities.division_function = "";
        }
        if (this.formResponsibilities.id) {
            this.rs.put(this.formResponsibilities.id, this.formResponsibilities).subscribe(function (result) {
                $('#responsibility_modal').modal('hide');
                _this.formSuccess = true;
                _this.getResposiblities();
            }, function (error) {
                _this.formSuccess = false;
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.rs.checkError(error);
            });
        }
        else {
            this.rs.post(this.formResponsibilities).subscribe(function (result) {
                $('#responsibility_modal').modal('hide');
                _this.formSuccess = true;
                _this.reset_from();
                _this.getResposiblities();
            }, function (error) {
                _this.formSuccess = false;
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.rs.checkError(error);
            });
        }
    };
    ResponsibilitiesComponent.prototype.openedit = function (responsibility) {
        this.formSuccess = false;
        this.formErrors = [];
        this.reset_from();
        this.formResponsibilities = responsibility;
        if (responsibility.division_function) {
            this.geClassifications(responsibility.division);
        }
        this.formResponsibilities.is_disable = true;
    };
    ResponsibilitiesComponent.prototype.reset_from = function () {
        this.formResponsibilities = {
            id: null,
            name: "",
            division: null,
            classification: null,
            division_function: "null",
            is_disable: false
        };
        this.formSuccess = false;
        this.formErrors = [];
    };
    ResponsibilitiesComponent.prototype.conformed_delete = function (responsibility) {
        var _this = this;
        //alert("d");
        if (confirm("Are you sure to delete " + responsibility.name + "?")) {
            this.rs.delete(responsibility.id).subscribe(function (result) {
                _this.getResposiblities();
            }, function (error) {
                _this.formSuccess = false;
                if (error.status === 400) {
                    _this.formErrors = error.error;
                }
                _this.rs.checkError(error);
            });
        }
    };
    ResponsibilitiesComponent.prototype.check_classification = function (classification) {
        if (this.classification_id !== classification) {
            this.classification_id = classification;
            return true;
        }
        else {
            return false;
        }
    };
    ResponsibilitiesComponent.prototype.check_division = function (division) {
        if (this.division_id !== division) {
            this.division_id = division;
            this.classification_id = 0;
            return true;
        }
        else {
            return false;
        }
    };
    ResponsibilitiesComponent.prototype.check_responsibility = function (classification) {
        if (this.classification_id !== classification) {
            return true;
        }
        else {
            return false;
        }
    };
    ResponsibilitiesComponent.prototype.check_div_td_boder = function (division) {
        if (this.division_id !== division) {
            //return false;
            //no border always
            return true;
        }
        else {
            return true;
        }
    };
    ResponsibilitiesComponent.prototype.check_td_boder = function (classification) {
        if (this.classification_id !== classification) {
            //return false;
            //no border always
            return true;
        }
        else {
            return true;
        }
    };
    ResponsibilitiesComponent.prototype.updateModal = function (description) {
        this.responsibility_description = description;
    };
    ResponsibilitiesComponent.prototype.geClassifications = function (division) {
        var _this = this;
        this.rs.getClassification(division).subscribe(function (result) {
            _this.division_classification = result;
        }, function (error) {
            _this.rs.checkError(error);
        });
    };
    ResponsibilitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responsibilities',
            template: __webpack_require__(/*! ./responsibilities.component.html */ "./src/app/responsibilities/responsibilities.component.html"),
            styles: [__webpack_require__(/*! ./responsibilities.component.css */ "./src/app/responsibilities/responsibilities.component.css")]
        }),
        __metadata("design:paramtypes", [_services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_1__["DivisionsService"], _services_classifications_classifications_service__WEBPACK_IMPORTED_MODULE_2__["ClassificationsService"], _services_responsibilities_responsibilities_service__WEBPACK_IMPORTED_MODULE_3__["ResponsibilitiesService"]])
    ], ResponsibilitiesComponent);
    return ResponsibilitiesComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-border{\n    border-style: groove;\n    border-left-style: none;\n}\nselect{\n    margin-bottom: 10px;\n}\n.classfication-name{\n    background: #79cae76b ;\n     font-weight:bold;\n}"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pl-3 pr-3 row\">\n    <h2>Search</h2>\n  </div>\n\n<div class=\"pl-3 pr-3 row\" id=\"locations_mapping_header\">\n    <div class=\"col-md-4 card  alert-info border\">\n      <div class=\"row\">\n      <div class=\"col-md-6\">\n        <label><b>Divison</b></label>\n        <select id=\"division\" class=\"form-control\" [(ngModel)]=\"search.divisionId\" (ngModelChange)=\"getLocations(search.divisionId)\">\n          <option value=\"\" selected>Select your option</option>\n          <option *ngFor=\"let division of divisions\" value=\"{{ division.id }}\">{{ division.name }}</option>\n        </select>\n        </div>\n        <div class=\"col-md-6\">\n        <label><b>Location</b></label>\n        <select id=\"location\" class=\"form-control\" [(ngModel)]=\"search.locationdivision\" (ngModelChange)=\"getList(search.locationdivision)\">\n          <option value=\"\" selected>Select your option</option>\n          <option *ngFor=\"let location of locations\" value=\"{{ location.id }}\">{{ location.location_data.name }}</option>\n        </select>\n      </div>\n    </div>\n    </div>\n    <div class=\"col-md-4 card border alert-info\">\n        <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label><b>Employee</b></label>\n          <select id=\"employee\" class=\"form-control\" [(ngModel)]=\"search.employeeId\" (ngModelChange)=\"getEmployeeResponsibility(search.employeeId)\">\n            <option value=\"\" selected>Select your option</option>\n            <option *ngFor=\"let emp of employees\" value=\"{{ emp.id }}\">{{ emp.first_name }} {{ emp.last_name }}</option>\n          </select>\n          </div>\n      </div>\n      </div>\n\n\n      <div class=\"col-md-4 card alert-info border\">\n          <div class=\"row\">\n          <div class=\"col-md-6\">\n            <label><b>Divison</b></label>\n            <select id=\"division-res\" class=\"form-control\" [(ngModel)]=\"search.divisionResId\" (ngModelChange)=\"getResponsibility(search.divisionResId)\">\n              <option value=\"\" selected>Select your option</option>\n              <option *ngFor=\"let division of divisions\" value=\"{{ division.id }}\">{{ division.name }}</option>\n            </select>\n            </div>\n            <div class=\"col-md-6\">\n            <label><b>Responsibility</b></label>\n            <select id=\"location\" class=\"form-control\" [(ngModel)]=\"search.responsibilitie_id\" (ngModelChange)=\"getEmployeeRoles(search.divisionResId,search.responsibilitie_id)\">\n              <option value=\"\" selected>Select your option</option>\n              <option *ngFor=\"let res of div_responsibilities\" value=\"{{ res.id }}\">{{ res.name }}</option>\n            </select>\n          </div>\n        </div>\n        </div>\n  </div>\n\n\n\n  <div class=\"row\" *ngIf=\"responsibilities?.length > 0\">\n      <div class=\"col-md-12 table-responsive\">\n        <table class=\"table table-striped table-bordered table-sm\">\n          <thead class=\"\">\n            <tr>\n              <th class=\"w-2\"  >#</th>\n              <th class=\"w-25\" scope=\"col\">Responsibilities</th>\n              <th class=\"w-73\" >Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngFor=\"let res of responsibilities\">\n                <tr *ngIf=\"check_classification(res.responsibility_data.classification_data.id)\">\n                    <td class=\"table_th\" >  {{res.responsibility_data.classification_data.id}} </td>\n                    <td  [colSpan]=\"3\" class=\"table_th\">{{res.responsibility_data.classification_data.name}}</td>\n                  </tr>\n              <tr>\n                <td>{{res.responsibility_data.classification_data.id}}.{{res.responsibility_data.position}} </td>\n                <td>{{res.responsibility_data.name}}</td>\n                <td>{{res.responsibility_data.description}}</td>\n              </tr>\n            </ng-container>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"emp_responsibilities?.length > 0\">\n        <div class=\"col-md-12 table-responsive\">\n          <table class=\"table table-striped table-bordered table-sm\">\n            <thead class=\"\">\n              <tr>\n                  <th class=\"w-2\"  >#</th>\n                  <th class=\"w-25\" scope=\"col\">Responsibilities</th>\n                  <th class=\"w-70\" >Description</th>\n                  <th class=\"w-3\"  *ngIf=\"application_settting.is_role_based_responsibility_ass\">Role</th>\n              </tr>\n            </thead>\n            <tbody>\n              <ng-container *ngFor=\"let res of emp_responsibilities\">\n                <tr *ngIf=\"application_settting.is_role_based_responsibility_ass\">\n                  <td class=\"table_th\"> {{res.id}}</td>\n                  <td colspan=\"4\"  class=\"table_th\">{{res.name}}</td>\n                </tr>\n                <tr *ngIf=\"!application_settting.is_role_based_responsibility_ass\">\n                    <td class=\"table_th\"> {{res.id}}</td>\n                    <td colspan=\"2\"  class=\"table_th\">{{res.name}}</td>\n                  </tr>\n                <tr *ngFor=\"let responsibility of res.responsibility_classification\">\n                  <td>{{res.id}}.{{responsibility.position}} </td>\n                  <td>{{responsibility.name}}</td>\n                  <td>{{responsibility.description}}</td>\n                  <td *ngIf=\"application_settting.is_role_based_responsibility_ass\">{{responsibility.role.role__name}}</td>\n\n                </tr>\n              </ng-container>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"employee_roles?.length > 0\">\n          <div class=\"col-md-12 table-responsive\">\n            <table class=\"table table-striped table-bordered table-sm\">\n              <thead class=\"\">\n                <tr>\n                  <th  class=\"table_th\" scope=\"col\">Employee Name</th>\n                  <th  class=\"table_th\" *ngIf=\"application_settting.is_role_based_responsibility_ass\">Role</th>\n                </tr>\n              </thead>\n              <tbody>\n                  <tr  *ngFor=\"let emp of employee_roles\">\n                    <td>{{emp.employee_data.first_name}} {{emp.employee_data.last_name}}</td>\n                    <td *ngIf=\"application_settting.is_role_based_responsibility_ass\" ><p *ngIf=\"emp.role_data\">{{emp.role_data.name}}</p></td>\n                  </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"employee_roles?.length == 0 && emp_responsibilities?.length == 0 && responsibilities?.length == 0\">\n            <div class=\"col-md-12 table-responsive\">\n                <h6 class=\"text-center\">No Data found</h6> \n            </div>\n          \n        </div>\n\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_role_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/role/role.service */ "./src/app/services/role/role.service.ts");
/* harmony import */ var _services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/divisions/divisions.service */ "./src/app/services/divisions/divisions.service.ts");
/* harmony import */ var _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/locations/locations.service */ "./src/app/services/locations/locations.service.ts");
/* harmony import */ var _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/employee/employee.service */ "./src/app/services/employee/employee.service.ts");
/* harmony import */ var _services_application_settings_application_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/application-settings/application-settings.service */ "./src/app/services/application-settings/application-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = /** @class */ (function () {
    function SearchComponent(ds, ls, es, rs, ass) {
        var _this = this;
        this.ds = ds;
        this.ls = ls;
        this.es = es;
        this.rs = rs;
        this.ass = ass;
        this.search = {};
        this.application_settting = {};
        this.search = {
            divisionId: "",
            locationdivision: "",
            employeeId: "",
            divisionResId: "",
            responsibilitie_id: ""
        };
        this.ass.get().subscribe(function (result) {
            if (result[0]) {
                _this.application_settting = result[0];
            }
            else {
                _this.application_settting.is_role_based_responsibility_ass = 0;
                _this.application_settting.id = "";
            }
        }, function (error) {
            _this.ass.checkError(error);
        });
        this.ds.get().subscribe(function (result) {
            _this.divisions = result;
        }, function (error) {
            ds.checkError(error);
        });
        this.es.getAllEmployee().subscribe(function (result) {
            _this.employees = result;
        }, function (error) {
            ds.checkError(error);
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.getLocations = function (divisionId) {
        var _this = this;
        this.search = {
            divisionId: divisionId,
            locationdivision: "",
            employeeId: "",
            divisionResId: "",
            responsibilitie_id: ""
        };
        this.responsibilities = [];
        this.emp_responsibilities = [];
        this.employee_roles = [];
        this.locations = [];
        if (divisionId) {
            this.ls.get(divisionId).subscribe(function (result) {
                _this.locations = result;
            }, function (error) {
                _this.ls.checkError(error);
            });
        }
    };
    SearchComponent.prototype.getResponsibilities = function (locationDivisoinId) {
        var _this = this;
        this.ls.responsibilities_location(locationDivisoinId, true).subscribe(function (result) {
            _this.responsibilities = result;
        }, function (error) {
            _this.ls.checkError(error);
        });
    };
    SearchComponent.prototype.getList = function (locationDivisoinId) {
        this.search = {
            divisionId: this.search.divisionId,
            locationdivision: locationDivisoinId,
            employeeId: "",
            divisionResId: "",
            responsibilitie_id: ""
        };
        this.emp_responsibilities = [];
        this.employee_roles = [];
        if (locationDivisoinId) {
            this.getResponsibilities(locationDivisoinId);
        }
        else {
            this.responsibilities = [];
        }
    };
    SearchComponent.prototype.getResponsibility = function (divisionId) {
        var _this = this;
        this.search = {
            divisionId: "",
            locationdivision: "",
            employeeId: "",
            divisionResId: divisionId,
            responsibilitie_id: ""
        };
        this.responsibilities = [];
        this.emp_responsibilities = [];
        if (divisionId) {
            this.rs.getResponsibilities(divisionId).subscribe(function (result) {
                _this.div_responsibilities = result;
            }, function (error) {
                _this.ls.checkError(error);
            });
        }
    };
    SearchComponent.prototype.getEmployeeResponsibility = function (emp_id) {
        var _this = this;
        this.search = {
            divisionId: "",
            locationdivision: "",
            employeeId: emp_id,
            divisionResId: "",
            responsibilitie_id: ""
        };
        this.responsibilities = [];
        this.employee_roles = [];
        if (emp_id) {
            this.es.getResponsibilitiesByEmployee(emp_id).subscribe(function (result) {
                _this.emp_responsibilities = result;
            }, function (error) {
                _this.ls.checkError(error);
            });
        }
        else {
            this.emp_responsibilities = [];
        }
    };
    SearchComponent.prototype.getEmployeeRoles = function (division_id, res_id) {
        var _this = this;
        this.search = {
            divisionId: "",
            locationdivision: "",
            employeeId: "",
            divisionResId: division_id,
            responsibilitie_id: res_id
        };
        if (res_id) {
            this.es.getEmployeeAndRoles(division_id, res_id).subscribe(function (result) {
                _this.employee_roles = result;
            }, function (error) {
                _this.ls.checkError(error);
            });
        }
        else {
            this.employee_roles = [];
        }
    };
    SearchComponent.prototype.check_classification = function (classification) {
        if (this.classification_id !== classification) {
            this.classification_id = classification;
            return true;
        }
        else {
            return false;
        }
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_divisions_divisions_service__WEBPACK_IMPORTED_MODULE_2__["DivisionsService"], _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_3__["LocationsService"], _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"], _services_role_role_service__WEBPACK_IMPORTED_MODULE_1__["RoleService"], _services_application_settings_application_settings_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationSettingsService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/application-settings/application-settings.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/application-settings/application-settings.service.ts ***!
  \*******************************************************************************/
/*! exports provided: ApplicationSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSettingsService", function() { return ApplicationSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http-client-cust */ "./src/app/services/http/http-client-cust.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationSettingsService = /** @class */ (function () {
    function ApplicationSettingsService(http) {
        this.http = http;
    }
    ApplicationSettingsService.prototype.get = function () {
        return this.http.get("/organization/application-setting/");
    };
    ApplicationSettingsService.prototype.post = function (data) {
        return this.http.post("/organization/application-setting/", data);
    };
    ApplicationSettingsService.prototype.put = function (id, data) {
        return this.http.put("/organization/application-setting/" + id + "/", data);
    };
    ApplicationSettingsService.prototype.checkError = function (error) {
        return this.http.checkError(error);
    };
    ApplicationSettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__["HttpClientCust"]])
    ], ApplicationSettingsService);
    return ApplicationSettingsService;
}());



/***/ }),

/***/ "./src/app/services/audit/audit.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/audit/audit.service.ts ***!
  \*************************************************/
/*! exports provided: AuditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditService", function() { return AuditService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http-client-cust */ "./src/app/services/http/http-client-cust.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuditService = /** @class */ (function () {
    function AuditService(http) {
        this.http = http;
    }
    AuditService.prototype.get = function (module) {
        if (module === 'all') {
            return this.http.get("/organization/log-entry/");
        }
        return this.http.get("/organization/log-entry/?model_name=" + module);
    };
    AuditService.prototype.getAllModels = function () {
        return this.http.get("/organization/list-model");
    };
    AuditService.prototype.checkError = function (error) {
        return this.http.checkError(error);
    };
    AuditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__["HttpClientCust"]])
    ], AuditService);
    return AuditService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase;
var client_id = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].client_id;
var client_secret = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].client_secret;
var redirect_uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].redirect_uri;
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.authorizeuser = function () {
        window.location.href = API_URL + "/oauth/authorize?client_id=" + client_id + "&response_type=code&redirect_uri=" + redirect_uri;
    };
    AuthService.prototype.getAccessToken = function (code) {
        var _this = this;
        if (code) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            headers.append('Content-Type', 'application/json');
            var tokendata = {
                code: code,
                client_id: client_id,
                client_secret: client_secret,
                grant_type: "authorization_code",
                redirect_uri: redirect_uri
            };
            this.http.post(API_URL + "/oauth/token/", tokendata, { headers: headers }).subscribe(function (data) {
                var response = data.json();
                //get the user information
                //localStorage.setItem('currentAuth', JSON.stringify(response));
                var empheaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
                empheaders.append('Content-Type', 'application/json');
                empheaders.append('Authorization', 'Bearer ' + response.access_token);
                _this.http.get(API_URL + "/user/userinfo/", { headers: empheaders }).subscribe(function (userdata) {
                    localStorage.setItem('currentUser', JSON.stringify(userdata.json()));
                    localStorage.setItem('currentAuth', JSON.stringify(response));
                    //this.router.navigateByUrl('/home');
                    window.location.href = '/home';
                }, function (emperr) {
                    _this.router.navigateByUrl('/forbidden');
                    console.log(emperr);
                });
                //this.router.navigateByUrl('/home');
            }, function (err) {
                _this.router.navigateByUrl('/forbidden');
                console.log(err);
            });
        }
        else {
            this.router.navigateByUrl('/forbidden');
        }
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentAuth');
        localStorage.removeItem('currentUser');
        //this.router.navigateByUrl('/login');
    };
    AuthService.prototype.token = function () {
        var token = JSON.parse(localStorage.getItem('currentAuth'));
        if (token) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.user = function () {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            return user;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/classifications/classifications.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/classifications/classifications.service.ts ***!
  \*********************************************************************/
/*! exports provided: ClassificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificationsService", function() { return ClassificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http-client-cust */ "./src/app/services/http/http-client-cust.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClassificationsService = /** @class */ (function () {
    function ClassificationsService(http) {
        this.http = http;
    }
    ClassificationsService.prototype.get = function () {
        return this.http.get("/r-and-r/classifications/");
    };
    ClassificationsService.prototype.new = function (data) {
        return this.http.post("/r-and-r/classifications/", data);
    };
    ClassificationsService.prototype.checkError = function (error) {
        return this.http.checkError(error);
    };
    ClassificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__["HttpClientCust"]])
    ], ClassificationsService);
    return ClassificationsService;
}());



/***/ }),

/***/ "./src/app/services/division-classifications/division-classifications.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/services/division-classifications/division-classifications.service.ts ***!
  \***************************************************************************************/
/*! exports provided: DivisionClassificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionClassificationsService", function() { return DivisionClassificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http-client-cust */ "./src/app/services/http/http-client-cust.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DivisionClassificationsService = /** @class */ (function () {
    function DivisionClassificationsService(http) {
        this.http = http;
    }
    DivisionClassificationsService.prototype.get = function (divisionId) {
        if (divisionId === void 0) { divisionId = null; }
        if (divisionId) {
            return this.http.get("/r-and-r/division_classifications/?division=" + divisionId);
        }
        else {
            return this.http.get("/r-and-r/division_classifications/");
        }
    };
    DivisionClassificationsService.prototype.new = function (data) {
        return this.http.post("/r-and-r/division_classifications/", data);
    };
    DivisionClassificationsService.prototype.put = function (id, data) {
        return this.http.put("/r-and-r/division_classifications/" + id + "/", data);
    };
    DivisionClassificationsService.prototype.delete = function (id) {
        return this.http.delete("/r-and-r/division_classifications/" + id + "/");
    };
    DivisionClassificationsService.prototype.checkError = function (error) {
        return this.http.checkError(error);
    };
    DivisionClassificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__["HttpClientCust"]])
    ], DivisionClassificationsService);
    return DivisionClassificationsService;
}());



/***/ }),

/***/ "./src/app/services/divisions/divisions.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/divisions/divisions.service.ts ***!
  \*********************************************************/
/*! exports provided: DivisionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionsService", function() { return DivisionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http-client-cust */ "./src/app/services/http/http-client-cust.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DivisionsService = /** @class */ (function () {
    function DivisionsService(http) {
        this.http = http;
    }
    DivisionsService.prototype.get = function () {
        return this.http.get("/organization/divisions/");
    };
    DivisionsService.prototype.post = function (data) {
        return this.http.post("/organization/divisions/", data);
    };
    DivisionsService.prototype.put = function (id, data) {
        return this.http.put("/organization/divisions/" + id + "/", data);
    };
    DivisionsService.prototype.delete = function (id) {
        return this.http.delete("/organization/divisions/" + id + "/");
    };
    DivisionsService.prototype.checkError = function (error) {
        return this.http.checkError(error);
    };
    DivisionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__["HttpClientCust"]])
    ], DivisionsService);
    return DivisionsService;
}());



/***/ }),

/***/ "./src/app/services/employee/employee.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/employee/employee.service.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http-client-cust */ "./src/app/services/http/http-client-cust.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.get = function (division_locationId) {
        return this.http.get("/employees/job-location/?division_location=" + division_locationId);
    };
    EmployeeService.prototype.post = function (data) {
        return this.http.post("/r-and-r/locations_responsibilities/", data);
    };
    EmployeeService.prototype.getAllEmployee = function () {
        return this.http.get("/employees/users/");
    };
    EmployeeService.prototype.getResponsibilitiesByEmployee = function (emp_id) {
        return this.http.get("/r-and-r/employee-responsibilities/?employee=" + emp_id);
    };
    EmployeeService.prototype.getEmployeeAndRoles = function (division_id, responsibility_id) {
        return this.http.get("/r-and-r/employee-responsibility/?responsibility_id=" + responsibility_id + "&division=" + division_id);
    };
    EmployeeService.prototype.getCurrentUserResponsibility = function () {
        return this.http.get("/r-and-r/employee-responsibility/?get_currentuser=" + true);
    };
    EmployeeService.prototype.checkError = function (error) {
        return this.http.checkError(error);
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__["HttpClientCust"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/services/http/http-client-cust.ts":
/*!***************************************************!*\
  !*** ./src/app/services/http/http-client-cust.ts ***!
  \***************************************************/
/*! exports provided: HttpClientCust */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientCust", function() { return HttpClientCust; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBase;
var HttpClientCust = /** @class */ (function () {
    function HttpClientCust(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.headers = this.headers.set('Content-Type', 'application/json');
        var currentAuth = JSON.parse(localStorage.getItem('currentAuth'));
        if (currentAuth && currentAuth.access_token) {
            this.headers = this.headers.set('Authorization', 'Bearer ' + currentAuth.access_token);
        }
    }
    HttpClientCust.prototype.get = function (url) {
        return this.http.get(API_URL + url, { headers: this.headers });
    };
    HttpClientCust.prototype.post = function (url, data) {
        return this.http.post(API_URL + url, data, { headers: this.headers });
    };
    HttpClientCust.prototype.put = function (url, data) {
        return this.http.put(API_URL + url, data, { headers: this.headers });
    };
    HttpClientCust.prototype.delete = function (url) {
        return this.http.delete(API_URL + url, { headers: this.headers });
    };
    HttpClientCust.prototype.checkError = function (error) {
        if (error.status === 401) {
            //invalid token
            // remove user from local storage to log user out
            localStorage.removeItem('currentAuth');
            localStorage.removeItem('currentUser');
            this.router.navigateByUrl('/login');
        }
        else if (error.status === 400) {
            //alert("validation error");
        }
        else {
            alert("error");
        }
    };
    HttpClientCust = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HttpClientCust);
    return HttpClientCust;
}());



/***/ }),

/***/ "./src/app/services/locations/locations.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/locations/locations.service.ts ***!
  \*********************************************************/
/*! exports provided: LocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return LocationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http-client-cust */ "./src/app/services/http/http-client-cust.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationsService = /** @class */ (function () {
    function LocationsService(http) {
        this.http = http;
    }
    LocationsService.prototype.get = function (divisionId) {
        return this.http.get("/r-and-r/location_by_division/?division=" + divisionId);
    };
    LocationsService.prototype.locations_responsibilities = function (divisionId) {
        return this.http.get("/r-and-r/locations_responsibilities/?division=" + divisionId);
    };
    LocationsService.prototype.responsibilities_location = function (locationsdivisionId, responsibility_by_active) {
        if (responsibility_by_active === void 0) { responsibility_by_active = null; }
        return this.http.get("/r-and-r/locations_responsibilities/?division_location=" + locationsdivisionId + "&responsibility_by_active=" + responsibility_by_active);
        //   return this.http.get("/r-and-r/locations_responsibilities/?division_location="+locationsdivisionId);
    };
    LocationsService.prototype.post = function (data) {
        return this.http.post("/r-and-r/locations_responsibilities/", data);
    };
    LocationsService.prototype.update = function (id, division_id, data) {
        return this.http.put("/r-and-r/locations_responsibilities/" + id + "/?division=" + division_id, data);
    };
    LocationsService.prototype.delete = function (id, divisionId) {
        return this.http.delete("/r-and-r/locations_responsibilities/" + id + "/?division=" + divisionId);
    };
    LocationsService.prototype.checkError = function (error) {
        return this.http.checkError(error);
    };
    LocationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__["HttpClientCust"]])
    ], LocationsService);
    return LocationsService;
}());



/***/ }),

/***/ "./src/app/services/org-scope/org-scope.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/org-scope/org-scope.service.ts ***!
  \*********************************************************/
/*! exports provided: OrgScopeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgScopeService", function() { return OrgScopeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http-client-cust */ "./src/app/services/http/http-client-cust.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrgScopeService = /** @class */ (function () {
    function OrgScopeService(http) {
        this.http = http;
    }
    OrgScopeService.prototype.get = function () {
        return this.http.get("/r-and-r/scope/");
    };
    OrgScopeService.prototype.post = function (data) {
        return this.http.post("/r-and-r/scope/", data);
    };
    OrgScopeService.prototype.put = function (id, data) {
        return this.http.put("/r-and-r/scope/" + id + "/", data);
    };
    OrgScopeService.prototype.checkError = function (error) {
        return this.http.checkError(error);
    };
    OrgScopeService.prototype.delete = function (id) {
        return this.http.delete("/r-and-r/scope/" + id + "/");
    };
    OrgScopeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__["HttpClientCust"]])
    ], OrgScopeService);
    return OrgScopeService;
}());



/***/ }),

/***/ "./src/app/services/responsibilities/responsibilities.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/responsibilities/responsibilities.service.ts ***!
  \***********************************************************************/
/*! exports provided: ResponsibilitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsibilitiesService", function() { return ResponsibilitiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http-client-cust */ "./src/app/services/http/http-client-cust.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResponsibilitiesService = /** @class */ (function () {
    function ResponsibilitiesService(http) {
        this.http = http;
    }
    ResponsibilitiesService.prototype.get = function (divisionId, viewType) {
        if (divisionId === void 0) { divisionId = null; }
        if (viewType === void 0) { viewType = null; }
        if (divisionId) {
            return this.http.get("/r-and-r/responsibilities/?division=" + divisionId + "&viewType=" + viewType);
        }
        else {
            return this.http.get("/r-and-r/responsibilities/");
        }
    };
    ResponsibilitiesService.prototype.post = function (data) {
        return this.http.post("/r-and-r/responsibilities/", data);
    };
    ResponsibilitiesService.prototype.put = function (id, data) {
        return this.http.put("/r-and-r/responsibilities/" + id + "/", data);
    };
    ResponsibilitiesService.prototype.delete = function (id) {
        return this.http.delete("/r-and-r/responsibilities/" + id + "/");
    };
    ResponsibilitiesService.prototype.updatePositions = function (data, viewType) {
        return this.http.post("/r-and-r/responsibilities_position/?viewType=" + viewType, data);
    };
    ResponsibilitiesService.prototype.checkError = function (error) {
        return this.http.checkError(error);
    };
    ResponsibilitiesService.prototype.getClassification = function (divisionId) {
        if (divisionId === void 0) { divisionId = null; }
        if (divisionId) {
            return this.http.get("/r-and-r/division_classifications/?division=" + divisionId);
        }
        else {
            return this.http.get("/r-and-r/division_classifications/");
        }
    };
    ResponsibilitiesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__["HttpClientCust"]])
    ], ResponsibilitiesService);
    return ResponsibilitiesService;
}());



/***/ }),

/***/ "./src/app/services/role/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/role/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http-client-cust */ "./src/app/services/http/http-client-cust.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
    }
    RoleService.prototype.getRole = function () {
        return this.http.get("/r-and-r/role/");
    };
    RoleService.prototype.getEmployeeResponsibilityRole = function (locationDivisoinId) {
        return this.http.get("/r-and-r/employee-responsibility/?division_location=" + locationDivisoinId);
    };
    RoleService.prototype.createEmployeeResponsibilityRole = function (data) {
        return this.http.post("/r-and-r/employee-responsibility/", data);
    };
    RoleService.prototype.updateEmployeeResponsibilityRole = function (id, locationDivisoinId, data) {
        return this.http.put("/r-and-r/employee-responsibility/" + id + "/?division_location=" + locationDivisoinId, data);
    };
    RoleService.prototype.getResponsibilities = function (division_id) {
        return this.http.get("/r-and-r/responsibilities/?division=" + division_id);
    };
    RoleService.prototype.checkError = function (error) {
        return this.http.checkError(error);
    };
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__["HttpClientCust"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http-client-cust */ "./src/app/services/http/http-client-cust.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.info = function () {
        return this.http.get("/user/userinfo/");
    };
    UserService.prototype.checkError = function (error) {
        return this.http.checkError(error);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_client_cust__WEBPACK_IMPORTED_MODULE_1__["HttpClientCust"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".line{\n  color: blue;\n}\n"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nvd3 [options]=\"options\" [data]=\"data\"></nvd3>\n</div>\n"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
        this.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10
                }
            }
        };
        this.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label": "A",
                        "value": -29.765957771107
                    },
                    {
                        "label": "B",
                        "value": 0
                    },
                    {
                        "label": "C",
                        "value": 32.807804682612
                    },
                    {
                        "label": "D",
                        "value": 196.45946739256
                    },
                    {
                        "label": "E",
                        "value": 0.19434030906893
                    },
                    {
                        "label": "F",
                        "value": -98.079782601442
                    },
                    {
                        "label": "G",
                        "value": -13.925743130903
                    },
                    {
                        "label": "H",
                        "value": -5.1387322875705
                    }
                ]
            }
        ];
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], TestComponent);
    return TestComponent;
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
var environment = {
    production: false,
    apiBase: 'http://talemaster.anabond.co.in',
    client_id: "VU5r0VwZh6oolTe2M4qxtKCJCe5JEyRAQAUCXOqx",
    client_secret: "zNCCmlHFKfbAZ9raumoUPrXdU9tVyFZtNzdRrU8nWoBDad7giDTEO3GgWkyLsFAsH2go2MVjxq04RbD98mLcUEc2yxUmo9s2U1EsQBTMJbxs4Ie2wLi1G1NvEjNQiFz8",
    redirect_uri: "http://randrtale.anabond.co.in/callback",
    site_url: "http://randrtale.anabond.co.in"
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/randrtale/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map