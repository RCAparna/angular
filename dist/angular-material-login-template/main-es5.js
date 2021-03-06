(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/about/about.component */
      "./src/app/components/about/about.component.ts");
      /* harmony import */


      var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/dashboard/dashboard.component */
      "./src/app/components/dashboard/dashboard.component.ts");
      /* harmony import */


      var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/log-in/log-in.component */
      "./src/app/components/log-in/log-in.component.ts");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/register/register.component */
      "./src/app/components/register/register.component.ts");
      /* harmony import */


      var _components_team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/team/team.component */
      "./src/app/components/team/team.component.ts");
      /* harmony import */


      var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/logout/logout.component */
      "./src/app/components/logout/logout.component.ts");
      /* harmony import */


      var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./helpers/auth-guard */
      "./src/app/helpers/auth-guard.ts");

      var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }, {
        path: 'login',
        component: _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__["LogInComponent"]
      }, {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
      }, {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
      }, {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
      }, {
        path: 'team',
        component: _components_team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
      }, {
        path: 'logout',
        component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [[1, "layout"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/log-in/log-in.component */
      "./src/app/components/log-in/log-in.component.ts");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/register/register.component */
      "./src/app/components/register/register.component.ts");
      /* harmony import */


      var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/dashboard/dashboard.component */
      "./src/app/components/dashboard/dashboard.component.ts");
      /* harmony import */


      var _components_team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/team/team.component */
      "./src/app/components/team/team.component.ts");
      /* harmony import */


      var _services_AppService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/AppService */
      "./src/app/services/AppService.ts");
      /* harmony import */


      var _constants_REST_API__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./constants/REST_API */
      "./src/app/constants/REST_API.ts");
      /* harmony import */


      var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/logout/logout.component */
      "./src/app/components/logout/logout.component.ts");
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/about/about.component */
      "./src/app/components/about/about.component.ts");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/header/header.component */
      "./src/app/components/header/header.component.ts");
      /* harmony import */


      var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./helpers/jwt.interceptor */
      "./src/app/helpers/jwt.interceptor.ts");
      /* harmony import */


      var _helpers_error_interceptors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./helpers/error-interceptors */
      "./src/app/helpers/error-interceptors.ts");
      /* Components */


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_16__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _helpers_error_interceptors__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"],
          multi: true
        }, _services_AppService__WEBPACK_IMPORTED_MODULE_11__["AppService"], _constants_REST_API__WEBPACK_IMPORTED_MODULE_12__["REST_API"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_7__["LogInComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"], _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_13__["LogoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_7__["LogInComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"], _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_13__["LogoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
              useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_16__["JwtInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
              useClass: _helpers_error_interceptors__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"],
              multi: true
            }, _services_AppService__WEBPACK_IMPORTED_MODULE_11__["AppService"], _constants_REST_API__WEBPACK_IMPORTED_MODULE_12__["REST_API"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/about/about.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/about/about.component.ts ***!
      \*****************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_AppService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/AppService */
      "./src/app/services/AppService.ts");
      /* harmony import */


      var _constants_REST_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../constants/REST_API */
      "./src/app/constants/REST_API.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/components/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AboutComponent_h3_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please add a description in the dashboard to see the About section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function AboutComponent_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var d_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", d_r3.description, " ");
        }
      }

      function AboutComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AboutComponent_div_3_div_1_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.aboutData);
        }
      }

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(appService, api, router) {
          _classCallCheck(this, AboutComponent);

          this.appService = appService;
          this.api = api;
          this.router = router;
          this.serverErrorMessage = '';
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAboutDetails();
          }
        }, {
          key: "getAboutDetails",
          value: function getAboutDetails() {
            var _this = this;

            this.appService.retreiveUserDashBoardDetails(this.api.dashboard.retreiveUserDashBoardDetails).subscribe(function (res) {
              _this.aboutData = res.dashboard;
            }, function (err) {
              console.log('Error', err);
              _this.serverErrorMessage = err;
            });
          }
        }]);

        return AboutComponent;
      }();

      AboutComponent.??fac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_AppService__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_constants_REST_API__WEBPACK_IMPORTED_MODULE_2__["REST_API"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AboutComponent,
        selectors: [["about"]],
        decls: 4,
        vars: 2,
        consts: [[1, "container-fluid"], [4, "ngIf"], ["class", "description", 4, "ngFor", "ngForOf"], [1, "description"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AboutComponent_h3_2_Template, 2, 0, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, AboutComponent_div_3_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.aboutData && ctx.aboutData.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.aboutData && ctx.aboutData.length > 0);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: [".description[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n    padding: 20px;\r\n    border: 1px solid gainsboro;\r\n    background: powderblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBnYWluc2Jvcm87XHJcbiAgICBiYWNrZ3JvdW5kOiBwb3dkZXJibHVlO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
          }]
        }], function () {
          return [{
            type: _services_AppService__WEBPACK_IMPORTED_MODULE_1__["AppService"]
          }, {
            type: _constants_REST_API__WEBPACK_IMPORTED_MODULE_2__["REST_API"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/dashboard/dashboard.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/dashboard/dashboard.component.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_AppService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/AppService */
      "./src/app/services/AppService.ts");
      /* harmony import */


      var _constants_REST_API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../constants/REST_API */
      "./src/app/constants/REST_API.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/components/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function DashboardComponent_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Welcome ", ctx_r0.user.username, " !");
        }
      }

      function DashboardComponent_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Last login: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, ctx_r1.user.lastlogin), "");
        }
      }

      function DashboardComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r2.serverErrorMessage);
        }
      }

      function DashboardComponent_table_8_tr_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var d_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 3, d_r10.updatedAt));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](d_r10.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](d_r10.amount);
        }
      }

      function DashboardComponent_table_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, DashboardComponent_table_8_tr_9_Template, 8, 5, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r3.dashboardData);
        }
      }

      function DashboardComponent_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Field is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_div_17_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Must be at least 100 characters long. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DashboardComponent_div_17_div_1_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, DashboardComponent_div_17_div_2_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.description.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.description.errors.minlength);
        }
      }

      function DashboardComponent_div_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Field is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DashboardComponent_div_22_div_1_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.amount.errors.required);
        }
      }

      function DashboardComponent_div_27_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Field is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DashboardComponent_div_27_div_1_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r7.teammember.errors.required);
        }
      }

      function DashboardComponent_div_40_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Field is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DashboardComponent_div_40_div_1_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r8.role.errors.required);
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(appService, api, router) {
          _classCallCheck(this, DashboardComponent);

          this.appService = appService;
          this.api = api;
          this.router = router;
          this.totalAmount = 0;
          this.dasboardSuccess = '';
          this.serverErrorMessage = '';
          this.dashboardFormFields = {
            description: '',
            amount: '',
            teammember: '',
            role: ''
          };
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dashboardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dashboardFormFields.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]),
              'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dashboardFormFields.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              'teammember': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dashboardFormFields.teammember, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              'role': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dashboardFormFields.role, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
            this.retreiveUserDashBoardDetails();
          }
        }, {
          key: "retreiveUserDashBoardDetails",
          value: function retreiveUserDashBoardDetails() {
            var _this2 = this;

            this.appService.retreiveUserDashBoardDetails(this.api.dashboard.retreiveUserDashBoardDetails).subscribe(function (res) {
              _this2.dasboardSuccess = res.message;
              _this2.dashboardData = res.dashboard;
              _this2.user = res.user;
              _this2.totalAmount = 0;

              _this2.dashboardData.forEach(function (element) {
                _this2.totalAmount += parseInt(element.amount);
              });
            }, function (err) {
              console.log('Error', err);
              _this2.serverErrorMessage = err;
            });
          }
        }, {
          key: "createdashBoard",
          value: function createdashBoard() {
            var _this3 = this;

            var userDashboardDetails = this.dashboardForm.value;
            this.appService.createDashboard(this.api.dashboard.createDashboard, userDashboardDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (res) {
              _this3.dasboardSuccess = res.message;

              _this3.retreiveUserDashBoardDetails();

              _this3.dashboardForm.reset();
            }, function (err) {
              console.log('Error', err);
              _this3.serverErrorMessage = err;
            });
          }
        }, {
          key: "description",
          get: function get() {
            return this.dashboardForm.get('description');
          }
        }, {
          key: "amount",
          get: function get() {
            return this.dashboardForm.get('amount');
          }
        }, {
          key: "teammember",
          get: function get() {
            return this.dashboardForm.get('teammember');
          }
        }, {
          key: "role",
          get: function get() {
            return this.dashboardForm.get('role');
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.??fac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_AppService__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_constants_REST_API__WEBPACK_IMPORTED_MODULE_4__["REST_API"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DashboardComponent,
        selectors: [["dashboard"]],
        decls: 43,
        vars: 11,
        consts: [[1, "container-fluid"], ["class", "welcome-user", 4, "ngIf"], ["class", "lastlogin", 4, "ngIf"], [1, "balance"], ["class", "isError", 4, "ngIf"], [4, "ngIf"], [1, "welcome-user"], [3, "formGroup"], ["formReg", "ngForm"], [1, "form-group"], ["for", "description"], ["rows", "2", "maxlength", "100", "minlength", "100", "id", "description", "formControlName", "description", "required", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "amount"], ["type", "number", "id", "amount", "formControlName", "amount", "required", "", 1, "form-control"], ["for", "teammember"], ["id", "teammember", "formControlName", "teammember", "required", "", 1, "form-control"], ["for", "role"], ["id", "role", "formControlName", "role", "required", "", 1, "form-control"], ["value", "Admin"], ["value", "Manager"], ["value", "Developer"], ["value", "Tester"], ["type", "submit", 1, "btn", "btn-default", 3, "disabled", "click"], [1, "lastlogin"], [1, "isError"], [4, "ngFor", "ngForOf"], [1, "alert", "alert-danger"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, DashboardComponent_p_3_Template, 2, 1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardComponent_p_4_Template, 3, 3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, DashboardComponent_div_7_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, DashboardComponent_table_8_Template, 10, 1, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Add a new dashboard:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "textarea", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, DashboardComponent_div_17_Template, 3, 2, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, DashboardComponent_div_22_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Add a team member");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, DashboardComponent_div_27_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Assign Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Tester");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, DashboardComponent_div_40_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_button_click_41_listener() {
              return ctx.createdashBoard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Create Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Account Balance: Rs. ", ctx.totalAmount, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.serverErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.dashboardData && ctx.dashboardData.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.dashboardForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.description.invalid && (ctx.description.dirty || ctx.description.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.amount.invalid && (ctx.amount.dirty || ctx.amount.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.teammember.invalid && (ctx.teammember.dirty || ctx.teammember.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.role.invalid && (ctx.role.dirty || ctx.role.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.dashboardForm.invalid);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: [".isError[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin: 12px 0;\r\n    color: #a94442;\r\n}\r\n\r\n.isSuccess[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin: 12px 0;\r\n    color: #42A948\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 1px solid gray;\r\n    background-color: lightgrey;\r\n    padding: 12px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    padding: 12px;\r\n}\r\n\r\n.welcome-user[_ngcontent-%COMP%] {\r\n    margin: 12px 0px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.lastlogin[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n    font-size: 10px;\r\n}\r\n\r\n.balance[_ngcontent-%COMP%] {\r\n    color: red\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc0Vycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG4gICAgY29sb3I6ICNhOTQ0NDI7XHJcbn1cclxuXHJcbi5pc1N1Y2Nlc3Mge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICBjb2xvcjogIzQyQTk0OFxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGFibGUgdGhlYWQgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbnRhYmxlIHRib2R5IHRyIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLndlbGNvbWUtdXNlciB7XHJcbiAgICBtYXJnaW46IDEycHggMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmxhc3Rsb2dpbiB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5iYWxhbmNlIHtcclxuICAgIGNvbG9yOiByZWRcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _services_AppService__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }, {
            type: _constants_REST_API__WEBPACK_IMPORTED_MODULE_4__["REST_API"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/header/header.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_AppService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/AppService */
      "./src/app/services/AppService.ts");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router, appService) {
          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.appService = appService;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            this.appService.logout();
            this.appService.setRegisteredUserObs(false);
            this.router.navigate(['/login']);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.??fac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_AppService__WEBPACK_IMPORTED_MODULE_2__["AppService"]));
      };

      HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HeaderComponent,
        selectors: [["header"]],
        decls: 9,
        vars: 0,
        consts: [["routerLink", "/dashboard", "routerLinkActive", "active"], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/team", "routerLinkActive", "active"], ["routerLink", "/logout", "routerLinkActive", "active", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_a_click_7_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: ["nav[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    background-color: lightgrey;\r\n    margin: 0px 15px;\r\n    padding: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: src_app_services_AppService__WEBPACK_IMPORTED_MODULE_2__["AppService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/log-in/log-in.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/log-in/log-in.component.ts ***!
      \*******************************************************/

    /*! exports provided: LogInComponent */

    /***/
    function srcAppComponentsLogInLogInComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogInComponent", function () {
        return LogInComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_AppService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/AppService */
      "./src/app/services/AppService.ts");
      /* harmony import */


      var _constants_REST_API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../constants/REST_API */
      "./src/app/constants/REST_API.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function LogInComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Registration Done!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LogInComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.serverErrorMessage);
        }
      }

      function LogInComponent_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " User ID is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LogInComponent_div_11_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Invalid User ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LogInComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LogInComponent_div_11_div_1_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, LogInComponent_div_11_div_2_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.username.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r3.username.errors.required && ctx_r3.username.invalid);
        }
      }

      function LogInComponent_div_16_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LogInComponent_div_16_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Must be at least 8 characters long. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LogInComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LogInComponent_div_16_div_1_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, LogInComponent_div_16_div_2_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.password.errors.minlength);
        }
      }

      var LogInComponent = /*#__PURE__*/function () {
        function LogInComponent(appService, api, router) {
          _classCallCheck(this, LogInComponent);

          this.appService = appService;
          this.api = api;
          this.router = router;
          this.pageTitle = 'Login';
          this.loginFormFields = {
            username: '',
            password: ''
          };
          this.isRegistered = false;
          this.serverErrorMessage = '';
        }

        _createClass(LogInComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.appService.getRegisteredUserObs().subscribe(function (res) {
              _this4.isRegistered = res;
            });
            this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.loginFormFields.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.loginFormFields.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
            });
          }
        }, {
          key: "login",
          value: function login(evt) {
            var _this5 = this;

            var userLoginDetails = this.loginForm.value;
            this.appService.login(this.api.authAPIs.login, userLoginDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (res) {
              if (res.userId && res.token) {
                _this5.router.navigate(['/dashboard']);
              }
            }, function (err) {
              console.log('Error', err);
              _this5.serverErrorMessage = err;
            });
          }
        }, {
          key: "register",
          value: function register() {
            this.router.navigate(['register']);
          }
        }, {
          key: "username",
          get: function get() {
            return this.loginForm.get('username');
          }
        }, {
          key: "password",
          get: function get() {
            return this.loginForm.get('password');
          }
        }]);

        return LogInComponent;
      }();

      LogInComponent.??fac = function LogInComponent_Factory(t) {
        return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_AppService__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_constants_REST_API__WEBPACK_IMPORTED_MODULE_4__["REST_API"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      LogInComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LogInComponent,
        selectors: [["login"]],
        decls: 22,
        vars: 7,
        consts: [[1, "container-fluid", "layout"], ["class", "isSuccess", 4, "ngIf"], ["class", "isError", 4, "ngIf"], [3, "formGroup"], ["formDir", "ngForm"], [1, "form-group"], ["for", "username"], ["id", "username", "type", "email", "ngModel", "", "email", "", "formControlName", "username", "required", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "required", "", 1, "form-control"], [1, "login-btn"], ["type", "submit", 1, "btn", "btn-default", 3, "disabled", "click"], [1, "btn", "btn-default", 3, "click"], [1, "isSuccess"], [1, "isError"], [1, "alert", "alert-danger"], [4, "ngIf"]],
        template: function LogInComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, LogInComponent_div_3_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, LogInComponent_div_4_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "User ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, LogInComponent_div_11_Template, 3, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, LogInComponent_div_16_Template, 3, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LogInComponent_Template_button_click_18_listener($event) {
              return ctx.login($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LogInComponent_Template_button_click_20_listener() {
              return ctx.register();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isRegistered);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.serverErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.username.invalid && (ctx.username.dirty || ctx.username.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.loginForm.invalid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
        styles: [".isError[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin: 12px 0;\r\n    color: #a94442;\r\n}\r\n\r\n.isSuccess[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin: 12px 0;\r\n    color: #42A948\r\n}\r\n\r\n.layout[_ngcontent-%COMP%] {\r\n    top: 40%;\r\n    left: 50%;\r\n    width: 35em;\r\n    height: auto;\r\n    transform: translate(-50%, -50%);\r\n    position: fixed;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc0Vycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG4gICAgY29sb3I6ICNhOTQ0NDI7XHJcbn1cclxuXHJcbi5pc1N1Y2Nlc3Mge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICBjb2xvcjogIzQyQTk0OFxyXG59XHJcblxyXG4ubGF5b3V0IHtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDM1ZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LogInComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'login',
            templateUrl: './log-in.component.html',
            styleUrls: ['./log-in.component.css']
          }]
        }], function () {
          return [{
            type: _services_AppService__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }, {
            type: _constants_REST_API__WEBPACK_IMPORTED_MODULE_4__["REST_API"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/logout/logout.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/logout/logout.component.ts ***!
      \*******************************************************/

    /*! exports provided: LogoutComponent */

    /***/
    function srcAppComponentsLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
        return LogoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_AppService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/AppService */
      "./src/app/services/AppService.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var LogoutComponent = /*#__PURE__*/function () {
        function LogoutComponent(appService, router) {
          _classCallCheck(this, LogoutComponent);

          this.appService = appService;
          this.router = router;
          this.pageTitle = 'Log Out';
        }

        _createClass(LogoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.appService.logout();
          }
        }]);

        return LogoutComponent;
      }();

      LogoutComponent.??fac = function LogoutComponent_Factory(t) {
        return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_AppService__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      LogoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LogoutComponent,
        selectors: [["logout"]],
        decls: 1,
        vars: 0,
        template: function LogoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Logout");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LogoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'logout',
            template: "Logout"
          }]
        }], function () {
          return [{
            type: _services_AppService__WEBPACK_IMPORTED_MODULE_1__["AppService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/register/register.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/register/register.component.ts ***!
      \***********************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_AppService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/AppService */
      "./src/app/services/AppService.ts");
      /* harmony import */


      var _constants_REST_API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../constants/REST_API */
      "./src/app/constants/REST_API.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function RegisterComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.serverErrorMessage);
        }
      }

      function RegisterComponent_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RegisterComponent_div_10_div_1_Template, 2, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.username.errors.required);
        }
      }

      function RegisterComponent_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_15_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Invalid Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RegisterComponent_div_15_div_1_Template, 2, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, RegisterComponent_div_15_div_2_Template, 2, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r3.email.errors.required && ctx_r3.email.invalid);
        }
      }

      function RegisterComponent_div_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_20_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Must be at least 8 characters long. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RegisterComponent_div_20_div_1_Template, 2, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, RegisterComponent_div_20_div_2_Template, 2, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.password.errors.minlength);
        }
      }

      function RegisterComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Passswords don't match. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(appService, api, router) {
          _classCallCheck(this, RegisterComponent);

          this.appService = appService;
          this.api = api;
          this.router = router;
          this.serverErrorMessage = '';
          this.pageTitle = 'Sign Up';
          this.registerFormFields = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
          };
          this.confPwd = false;
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.registerFormFields.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.registerFormFields.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.registerFormFields.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
              'confirmPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.registerFormFields.confirmPassword, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
          }
        }, {
          key: "registerUser",
          value: function registerUser(evt) {
            var _this6 = this;

            var userRegistrationDetails = this.registerForm.value;
            this.appService.register(this.api.authAPIs.register, userRegistrationDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (res) {
              if (res.userId) {
                _this6.router.navigate(['/login']);

                _this6.appService.setRegisteredUserObs(true);
              }
            }, function (err) {
              console.log('Error', err);
              _this6.serverErrorMessage = err;
            });
          }
        }, {
          key: "signIn",
          value: function signIn() {
            this.router.navigate(['login']);
          }
        }, {
          key: "username",
          get: function get() {
            return this.registerForm.get('username');
          }
        }, {
          key: "password",
          get: function get() {
            return this.registerForm.get('password');
          }
        }, {
          key: "email",
          get: function get() {
            return this.registerForm.get('email');
          }
        }, {
          key: "confirmPassword",
          get: function get() {
            if (this.registerForm.get('password').value !== this.registerForm.get('confirmPassword').value) {
              this.registerForm.get('confirmPassword').setErrors({
                'incorrect': true
              });
            } else {
              this.registerForm.get('confirmPassword').setErrors(null);
            }

            return this.registerForm.get('confirmPassword');
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.??fac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_AppService__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_constants_REST_API__WEBPACK_IMPORTED_MODULE_4__["REST_API"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: RegisterComponent,
        selectors: [["register"]],
        decls: 31,
        vars: 8,
        consts: [[1, "container-fluid", "layout"], ["class", "isError", 4, "ngIf"], [3, "formGroup"], ["formReg", "ngForm"], [1, "form-group"], ["for", "username"], ["id", "username", "formControlName", "username", "required", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "email"], ["id", "email", "type", "email", "ngModel", "", "email", "", "formControlName", "email", "required", "", 1, "form-control"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "required", "", 1, "form-control"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", "required", "", 1, "form-control"], [1, "login-btn"], ["type", "submit", 1, "btn", "btn-default", 3, "disabled", "click"], [1, "btn", "btn-default", 3, "click"], [1, "isError"], [1, "alert", "alert-danger"], [4, "ngIf"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, RegisterComponent_div_3_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, RegisterComponent_div_10_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, RegisterComponent_div_15_Template, 3, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, RegisterComponent_div_20_Template, 3, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, RegisterComponent_div_25_Template, 2, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RegisterComponent_Template_button_click_27_listener($event) {
              return ctx.registerUser($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RegisterComponent_Template_button_click_29_listener() {
              return ctx.signIn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.pageTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.serverErrorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.username.invalid && (ctx.username.dirty || ctx.username.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.confirmPassword && ctx.confirmPassword.errors && ctx.confirmPassword.errors.incorrect);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.registerForm.invalid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"]],
        styles: [".isError[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin: 12px 0;\r\n    color: #a94442;\r\n}\r\n\r\n.isSuccess[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin: 12px 0;\r\n    color: #42A948\r\n}\r\n\r\n.layout[_ngcontent-%COMP%] {\r\n    top: 40%;\r\n    left: 50%;\r\n    width: 35em;\r\n    height: auto;\r\n    transform: translate(-50%, -50%);\r\n    position: fixed;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzRXJyb3Ige1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICBjb2xvcjogI2E5NDQ0MjtcclxufVxyXG5cclxuLmlzU3VjY2VzcyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDEycHggMDtcclxuICAgIGNvbG9yOiAjNDJBOTQ4XHJcbn1cclxuXHJcbi5sYXlvdXQge1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMzVlbTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
          }]
        }], function () {
          return [{
            type: _services_AppService__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }, {
            type: _constants_REST_API__WEBPACK_IMPORTED_MODULE_4__["REST_API"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/team/team.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/components/team/team.component.ts ***!
      \***************************************************/

    /*! exports provided: TeamComponent */

    /***/
    function srcAppComponentsTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
        return TeamComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_AppService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/AppService */
      "./src/app/services/AppService.ts");
      /* harmony import */


      var _constants_REST_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../constants/REST_API */
      "./src/app/constants/REST_API.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/components/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function TeamComponent_h3_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.pageTitle);
        }
      }

      function TeamComponent_h3_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "You have not added any team member");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function TeamComponent_table_4_tr_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var d_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](d_r4.teammember);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](d_r4.role);
        }
      }

      function TeamComponent_table_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Team Member");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, TeamComponent_table_4_tr_7_Template, 5, 2, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.teamData);
        }
      }

      var TeamComponent = /*#__PURE__*/function () {
        function TeamComponent(appService, api, router) {
          _classCallCheck(this, TeamComponent);

          this.appService = appService;
          this.api = api;
          this.router = router;
          this.pageTitle = 'Meet the Team';
          this.serverErrorMessage = '';
        }

        _createClass(TeamComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getTeamDetails();
          }
        }, {
          key: "getTeamDetails",
          value: function getTeamDetails() {
            var _this7 = this;

            this.appService.retreiveUserDashBoardDetails(this.api.dashboard.retreiveUserDashBoardDetails).subscribe(function (res) {
              _this7.teamData = res.dashboard;
            }, function (err) {
              console.log('Error', err);
              _this7.serverErrorMessage = err;
            });
          }
        }]);

        return TeamComponent;
      }();

      TeamComponent.??fac = function TeamComponent_Factory(t) {
        return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_AppService__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_constants_REST_API__WEBPACK_IMPORTED_MODULE_2__["REST_API"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      TeamComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TeamComponent,
        selectors: [["team"]],
        decls: 5,
        vars: 3,
        consts: [[1, "container-fluid"], [4, "ngIf"], [4, "ngFor", "ngForOf"]],
        template: function TeamComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TeamComponent_h3_2_Template, 2, 1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TeamComponent_h3_3_Template, 2, 0, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, TeamComponent_table_4_Template, 8, 1, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.teamData && ctx.teamData.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.teamData && ctx.teamData.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.teamData && ctx.teamData.length > 0);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: [".isError[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin: 12px 0;\r\n    color: #a94442;\r\n}\r\n\r\n.isSuccess[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin: 12px 0;\r\n    color: #42A948\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 1px solid gray;\r\n    background-color: lightgrey;\r\n    padding: 12px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    padding: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc0Vycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG4gICAgY29sb3I6ICNhOTQ0NDI7XHJcbn1cclxuXHJcbi5pc1N1Y2Nlc3Mge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICBjb2xvcjogIzQyQTk0OFxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGFibGUgdGhlYWQgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbnRhYmxlIHRib2R5IHRyIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TeamComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'team',
            templateUrl: './team.component.html',
            styleUrls: ['./team.component.css']
          }]
        }], function () {
          return [{
            type: _services_AppService__WEBPACK_IMPORTED_MODULE_1__["AppService"]
          }, {
            type: _constants_REST_API__WEBPACK_IMPORTED_MODULE_2__["REST_API"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/constants/REST_API.ts":
    /*!***************************************!*\
      !*** ./src/app/constants/REST_API.ts ***!
      \***************************************/

    /*! exports provided: REST_API */

    /***/
    function srcAppConstantsREST_APITs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REST_API", function () {
        return REST_API;
      });

      var REST_API = function REST_API() {
        _classCallCheck(this, REST_API);

        this.server_URL = 'https://app-fullstack-aparna.herokuapp.com/';
        this.authAPIs = {
          register: this.server_URL + 'auth/register',
          login: this.server_URL + 'auth/login'
        };
        this.dashboard = {
          createDashboard: this.server_URL + 'dashboard/createYourDashboard',
          retreiveUserDashBoardDetails: this.server_URL + 'dashboard/retreiveUserDashBoardDetails'
        };
      };

      ;
      /***/
    },

    /***/
    "./src/app/helpers/auth-guard.ts":
    /*!***************************************!*\
      !*** ./src/app/helpers/auth-guard.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppHelpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var user = '';

            if (localStorage.getItem('currentUser')) {
              user = JSON.parse(localStorage.getItem('currentUser')).token;
            }

            if (user) {
              return true;
            }

            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.??fac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/helpers/error-interceptors.ts":
    /*!***********************************************!*\
      !*** ./src/app/helpers/error-interceptors.ts ***!
      \***********************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function srcAppHelpersErrorInterceptorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_AppService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/AppService */
      "./src/app/services/AppService.ts");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(accountService) {
          _classCallCheck(this, ErrorInterceptor);

          this.accountService = accountService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this8 = this;

            var jwt = '';

            if (localStorage.getItem('currentUser')) {
              jwt = JSON.parse(localStorage.getItem('currentUser')).token;
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              var _a;

              if ([401, 403].includes(err.status) && jwt) {
                // auto logout if 401 or 403 response returned from api
                _this8.accountService.logout();
              }

              var error = ((_a = err.error) === null || _a === void 0 ? void 0 : _a.message) || err.statusText;
              console.log(err);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.??fac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_AppService__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
      };

      ErrorInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _services_AppService__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/helpers/jwt.interceptor.ts":
    /*!********************************************!*\
      !*** ./src/app/helpers/jwt.interceptor.ts ***!
      \********************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function srcAppHelpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor() {
          _classCallCheck(this, JwtInterceptor);
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var jwt = '';

            if (localStorage.getItem('currentUser')) {
              jwt = JSON.parse(localStorage.getItem('currentUser')).token;
            }

            if (!!jwt) {
              req = req.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(jwt)
                }
              });
            }

            return next.handle(req);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.??fac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)();
      };

      JwtInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](JwtInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/AppService.ts":
    /*!****************************************!*\
      !*** ./src/app/services/AppService.ts ***!
      \****************************************/

    /*! exports provided: AppService */

    /***/
    function srcAppServicesAppServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppService", function () {
        return AppService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AppService = /*#__PURE__*/function () {
        function AppService(http) {
          _classCallCheck(this, AppService);

          this.http = http;
          this.userRegistered = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(AppService, [{
          key: "getUserValue",
          value: function getUserValue() {
            return this.currentUserSubject.asObservable();
          }
        }, {
          key: "getRegisteredUserObs",
          value: function getRegisteredUserObs() {
            return this.userRegistered.asObservable();
          }
        }, {
          key: "setRegisteredUserObs",
          value: function setRegisteredUserObs(isRegistered) {
            this.userRegistered.next(isRegistered);
          }
        }, {
          key: "login",
          value: function login(URL, userDetails) {
            var _this9 = this;

            return this.http.post(URL, {
              email: userDetails.username,
              password: userDetails.password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));

                _this9.currentUserSubject.next(user);
              }

              return user;
            }));
          }
        }, {
          key: "register",
          value: function register(URL, userDetails) {
            return this.http.put(URL, {
              email: userDetails.email,
              password: userDetails.password,
              username: userDetails.username
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              return user;
            }));
          }
        }, {
          key: "createDashboard",
          value: function createDashboard(URL, userDashboardDetails) {
            return this.http.post(URL, {
              description: userDashboardDetails.description,
              amount: userDashboardDetails.amount,
              teammember: userDashboardDetails.teammember,
              role: userDashboardDetails.role
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (dashboard) {
              return dashboard;
            }));
          }
        }, {
          key: "retreiveUserDashBoardDetails",
          value: function retreiveUserDashBoardDetails(URL) {
            return this.http.get(URL + '?userId=' + this.currentUserValue['userId']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (dashboard) {
              return dashboard;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
            return;
          }
        }, {
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }]);

        return AppService;
      }();

      AppService.??fac = function AppService_Factory(t) {
        return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      AppService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AppService,
        factory: AppService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        apiUrl: 'http://localhost:4200'
      };
      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\AparnaRoyChowdhury\Desktop\angular\angular\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map