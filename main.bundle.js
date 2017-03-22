webpackJsonp([1,4],{

/***/ 314:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 314;


/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(425);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(af) {
        var _this = this;
        this.af = af;
        this.user = {};
        this.af.auth.subscribe(function (user) {
            console.log('---->', user);
            if (user) {
                _this.user = user.auth.providerData[0];
                _this.items = af.database.list('/items');
            }
            else {
                _this.user = {};
                _this.items = null;
            }
        });
    }
    AppComponent.prototype.login = function () {
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup
        });
    };
    AppComponent.prototype.logout = function () {
        this.af.auth.logout();
    };
    AppComponent.prototype.isUserLoggedIn = function () {
        return (Object.keys(this.user).length === 0);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(494),
            styles: [__webpack_require__(488)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(288);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var firebaseConfig = {
    apiKey: "AIzaSyBBEGyIqwgIafVz3l8XC1XjcajBGTfvkZI",
    authDomain: "pixeon-teste-161707.firebaseapp.com",
    databaseURL: "https://pixeon-teste-161707.firebaseio.com",
    storageBucket: "pixeon-teste-161707.appspot.com"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(199)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper green\">\n    <a href=\"#!\" class=\"brand-logo\">\n      Pixeon -\n      <!-- <span id=\"cronometro\" value=\"00:00:00\">00:00:00</span> -->\n      <span id=\"showtm\">0:0</span>\n      </a>\n\n    <ul class=\"right hide-on-med-and-down\">\n      <li [hidden]=\"isUserLoggedIn()\">\n        <div class=\"row\">\n          <div class=\"col s9\">\n            <span>\n                 <b>Usuário:</b> {{user.displayName}}\n              </span>\n          </div>\n        </div>\n      </li>\n      <li [hidden]=\"isUserLoggedIn()\">\n        <a class=\"waves-effect waves-light btn orange\" (click)=\"logout()\">\n            Sair\n          </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"section no-pad-bot\" [hidden]=\"!isUserLoggedIn()\">\n  <div class=\"container\">\n    <br><br>\n    <h1 class=\"header center green-text\">Seja Bem-Vindo</h1>\n    <div class=\"row center\">\n      <h5 class=\"header col s12 light\">Entre com sua conta do Google</h5>\n    </div>\n    <div class=\"row center\" [hidden]=\"!isUserLoggedIn()\">\n      <a class=\"waves-effect waves-light btn green\" (click)=\"login()\">Entrar</a>\n    </div>\n    <br><br>\n  </div>\n</div>\n\n<div class=\"section no-pad-bot blue-text text-darken-3\" [hidden]=\"isUserLoggedIn()\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s6\">\n        <div class=\"row\">\n        <div class=\"col s12 m7\">\n          <div class=\"card\">\n            <div class=\"card-image\">\n              <img src=\"{{user.photoURL}}\">\n            </div>\n            <div class=\"card-content\">\n              <h5 class=\"green-text\">{{user.displayName}}</h5>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      </div>\n      <div class=\"col s6\">\n        <h5 class=\"green-text\">Problema da Combinação</h5>\n        <form class=\"col s12\">\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <input id=\"last_name\" type=\"text\" class=\"validate\">\n              <label for=\"last_name\">Insira um texto</label>\n            </div>\n            <div class=\"input-field col s6\">\n              <input id=\"last_name\" type=\"number\" class=\"validate\">\n              <label for=\"last_name\">Insira um número</label>\n            </div>\n          </div>\n          <a class=\"waves-effect waves-light btn\">Combinar!</a>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(315);


/***/ })

},[519]);
//# sourceMappingURL=main.bundle.js.map