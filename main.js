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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-room/chat-room.component */ "./src/app/chat-room/chat-room.component.ts");






var routes = [
    { path: 'login', component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__["LoginFormComponent"] },
    { path: 'signup', component: _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_3__["SignupFormComponent"] },
    { path: 'chat', component: _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_5__["ChatRoomComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".chatHeaderWrapper {\n    height: 90px;\n    color: #222;\n    box-shadow: 0 2px 3px rgba(0,0,0,0.37), 1px 2px 3px rgba(0,0,0,0.54);\n    z-index: 2;\n}\n\n.chatRoom {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\nrouter-outlet {\n    height:0;\n}\n\n#buttonupload{\n    display : none;\n}\n\n@media all and (max-width : 480px){\n    \n  .chatRoom{\n      position : relative;\n      \n  }\n  #buttonupload{\n    display : block;\n    max-height : 20px;\n    margin-top : 10px;\n}\n\n.progressBarM{\n    position : absolute;\n    max-height : 20px;\n    margin-top : 10px;\n}\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9FQUFvRTtJQUNwRSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBR0E7O0VBRUU7TUFDSSxtQkFBbUI7O0VBRXZCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdEhlYWRlcldyYXBwZXIge1xuICAgIGhlaWdodDogOTBweDtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLDAsMCwwLjM3KSwgMXB4IDJweCAzcHggcmdiYSgwLDAsMCwwLjU0KTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uY2hhdFJvb20ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbnJvdXRlci1vdXRsZXQge1xuICAgIGhlaWdodDowO1xufVxuXG4jYnV0dG9udXBsb2Fke1xuICAgIGRpc3BsYXkgOiBub25lO1xufVxuXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGggOiA0ODBweCl7XG4gICAgXG4gIC5jaGF0Um9vbXtcbiAgICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XG4gICAgICBcbiAgfVxuICAjYnV0dG9udXBsb2Fke1xuICAgIGRpc3BsYXkgOiBibG9jaztcbiAgICBtYXgtaGVpZ2h0IDogMjBweDtcbiAgICBtYXJnaW4tdG9wIDogMTBweDtcbn1cblxuLnByb2dyZXNzQmFyTXtcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIG1heC1oZWlnaHQgOiAyMHB4O1xuICAgIG1hcmdpbi10b3AgOiAxMHB4O1xufVxuICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"chatRoom\">\n  <div class =\"chatHeaderWrapper\">\n    <app-navbar></app-navbar>\n  </div>\n  <router-outlet></router-outlet>\n  <div *ngIf=\"router.url === '/chat'\">\n  <div id=\"buttonupload\">\n    \n  <input type=\"file\"  (change)=\"featurePhotoSelected($event)\" accept=\".png,.jpg\"/>\n</div>\n</div>\n</div>\n\n<div *ngIf=\"percentage | async as pct\" class=\"progressBarM\" >\n    <span *ngIf=\"pct !=100\">\n<progress [value]=\"pct\" max=\"100\" >\n    {{pct | number}} %\n</progress>\n</span>\n</div>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var AppComponent = /** @class */ (function () {
    function AppComponent(router, chat, db, afAuth, storage) {
        this.router = router;
        this.chat = chat;
        this.db = db;
        this.afAuth = afAuth;
        this.storage = storage;
        this.title = 'BaseChat';
    }
    AppComponent.prototype.featurePhotoSelected = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var file, metaData, randomId, ref, task;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                file = event.target.files[0];
                console.log("Selected file : ", file.name);
                metaData = { 'contentType': file.type };
                randomId = Math.random().toString(36).substring(2);
                ref = this.storage.ref(randomId);
                task = this.storage.upload(randomId, file);
                this.percentage = task.percentageChanges();
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                    _this.url = ref.getDownloadURL();
                    console.log(_this.url);
                    _this.url.subscribe(function (url) { _this.chat.sendMessage(url); });
                    //this.chat.sendMessage(this.chat.getTimeStamp());
                })).subscribe();
                return [2 /*return*/];
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-form/chat-form.component */ "./src/app/chat-form/chat-form.component.ts");
/* harmony import */ var _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-room/chat-room.component */ "./src/app/chat-room/chat-room.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-item/user-item.component */ "./src/app/user-item/user-item.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/routes */ "./src/routes.ts");
/* harmony import */ var _emoji__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./emoji */ "./src/app/emoji.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




















//import{ChatService} from './Services/chat.service';
//import{AuthService} from './Services/auth.service';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_6__["ChatFormComponent"],
                _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_7__["ChatRoomComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_8__["FeedComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_10__["LoginFormComponent"],
                _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_11__["SignupFormComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__["UserListComponent"],
                _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_14__["UserItemComponent"],
                _emoji__WEBPACK_IMPORTED_MODULE_17__["FileSizePipe"],
                _emoji__WEBPACK_IMPORTED_MODULE_17__["Image"],
                _emoji__WEBPACK_IMPORTED_MODULE_17__["Youtube"],
                _emoji__WEBPACK_IMPORTED_MODULE_17__["Saut"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(src_routes__WEBPACK_IMPORTED_MODULE_16__["appRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_20__["AngularFireDatabaseModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebase),
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-form/chat-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatInput{\n    flex: 10;\n    font-size: 1.3em;\n    font-family: 'Open Sans', sans-serif;\n    background-color: #eee;\n    color: #000;\n    transition: 0.1s ease-out;\n    padding-left: 80px;\n    border-style: solid;\n    border-width: 1px;\n    \n}\n\n.chatInput:focus{\n    background-color: #E4F1FE;\n    color: #222;\n    transition: 0.2s ease-in;\n}\n\n.chatButton{\n    flex: 1;\n    padding: 10px;\n    padding: 0px 0px;\n    font-size: 1.3em;\n    font-family: 'Droid Sans', sans-serif;\n    background-color: #2A2845;\n    color: white;\n    transition: 0.2s ease-out;\n    min-width: 50px;\n    border-style: solid;\n    \n}\n\n.chatButton:hover{\n    background-color: #444;\n}\n\n[type=\"file\"] {\n    \n    height: 0;\n    overflow: hidden;\n    width: 0;\n  }\n\n[type=\"file\"] + label {\n    background: #2A2845;\n    border: none;\n    border-radius: 0px;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n      font-family: 'Poppins', sans-serif;\n      font-size: inherit;\n    font-weight: 600;\n    margin-bottom: 1rem;\n    outline: none;\n    padding: 1rem 50px;\n    position: relative;\n    transition: all 0.3s;\n    vertical-align: middle;\n    border-style: solid;\n    border-color: #444;\n    border-width: 0px 0px 5px 0px;\n  }\n\n[type=\"file\"] + label:hover {\n    background-color: darken(#f15d22, 10%);\n  }\n\n.btn-1 {\n    background-color: #f79159;\n    /*box-shadow: 0 30px darken(#f79159, 10%);*/\n    transition: none;\n    \n    \n  }\n\n.btn-1:hover {\n      box-shadow: 0 4px darken(#f79159, 10%);\n      top: 0px;\n    }\n\n#editor_area{\n        resize: none;\nwhite-space: nowrap;\noverflow-x: scroll;\n    }\n\n.progressBar{\n      \n      max-height : 20px;\n      margin-top : 10px;\n  }\n\n@media all and (max-width : 480px){\n      .chatInput{\n        float : none;\n        flex : none;\n        width : 90%;\n        padding-left: 0px;\n      }\n      .chatButton{\n        flex:none;\n        float :none;\n        width : 30px;\n        \n      }\n      #file{\n        flex : none;\n        display : none;\n        flex : none;\n        top:20px;\n        width:20px;\n        position : absolute;\n\n      }\n      .btn-1{\n        display :none;\n        width : 30px;\n        visibility: hidden;\n      }\n      label{\n        display : none;\n        visibility: hidden;\n      }\n      [type=\"file\"]{\n        display : none;\n        width : 30px;\n        visibility: hidden;\n      }\n      \n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1mb3JtL2NoYXQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsUUFBUTtFQUNWOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7TUFDbkIsa0NBQWtDO01BQ2xDLGtCQUFrQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw2QkFBNkI7RUFDL0I7O0FBRUE7SUFDRSxzQ0FBc0M7RUFDeEM7O0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsMkNBQTJDO0lBQzNDLGdCQUFnQjs7O0VBR2xCOztBQUlFO01BQ0Usc0NBQXNDO01BQ3RDLFFBQVE7SUFDVjs7QUFFQTtRQUNJLFlBQVk7QUFDcEIsbUJBQW1CO0FBQ25CLGtCQUFrQjtJQUNkOztBQUVBOztNQUVFLGlCQUFpQjtNQUNqQixpQkFBaUI7RUFDckI7O0FBRUU7TUFDRTtRQUNFLFlBQVk7UUFDWixXQUFXO1FBQ1gsV0FBVztRQUNYLGlCQUFpQjtNQUNuQjtNQUNBO1FBQ0UsU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZOztNQUVkO01BQ0E7UUFDRSxXQUFXO1FBQ1gsY0FBYztRQUNkLFdBQVc7UUFDWCxRQUFRO1FBQ1IsVUFBVTtRQUNWLG1CQUFtQjs7TUFFckI7TUFDQTtRQUNFLGFBQWE7UUFDYixZQUFZO1FBQ1osa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxjQUFjO1FBQ2Qsa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxjQUFjO1FBQ2QsWUFBWTtRQUNaLGtCQUFrQjtNQUNwQjs7SUFFRiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtZm9ybS9jaGF0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0SW5wdXR7XG4gICAgZmxleDogMTA7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIFxufVxuXG4uY2hhdElucHV0OmZvY3Vze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEYxRkU7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xufVxuXG4uY2hhdEJ1dHRvbntcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweDtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2FucycsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJBMjg0NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBcbn1cblxuLmNoYXRCdXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbn1cblxuW3R5cGU9XCJmaWxlXCJdIHtcbiAgICBcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIFt0eXBlPVwiZmlsZVwiXSArIGxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kOiAjMkEyODQ1O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMXJlbSA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjNDQ0O1xuICAgIGJvcmRlci13aWR0aDogMHB4IDBweCA1cHggMHB4O1xuICB9XG5cbiAgW3R5cGU9XCJmaWxlXCJdICsgbGFiZWw6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjZjE1ZDIyLCAxMCUpO1xuICB9XG4gIC5idG4tMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3OTE1OTtcbiAgICAvKmJveC1zaGFkb3c6IDAgMzBweCBkYXJrZW4oI2Y3OTE1OSwgMTAlKTsqL1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgXG4gICAgXG4gIH1cblxuXG5cbiAgICAuYnRuLTE6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggZGFya2VuKCNmNzkxNTksIDEwJSk7XG4gICAgICB0b3A6IDBweDtcbiAgICB9XG5cbiAgICAjZWRpdG9yX2FyZWF7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbndoaXRlLXNwYWNlOiBub3dyYXA7XG5vdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgfVxuXG4gICAgLnByb2dyZXNzQmFye1xuICAgICAgXG4gICAgICBtYXgtaGVpZ2h0IDogMjBweDtcbiAgICAgIG1hcmdpbi10b3AgOiAxMHB4O1xuICB9XG4gIFxuICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGggOiA0ODBweCl7XG4gICAgICAuY2hhdElucHV0e1xuICAgICAgICBmbG9hdCA6IG5vbmU7XG4gICAgICAgIGZsZXggOiBub25lO1xuICAgICAgICB3aWR0aCA6IDkwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICB9XG4gICAgICAuY2hhdEJ1dHRvbntcbiAgICAgICAgZmxleDpub25lO1xuICAgICAgICBmbG9hdCA6bm9uZTtcbiAgICAgICAgd2lkdGggOiAzMHB4O1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgICNmaWxle1xuICAgICAgICBmbGV4IDogbm9uZTtcbiAgICAgICAgZGlzcGxheSA6IG5vbmU7XG4gICAgICAgIGZsZXggOiBub25lO1xuICAgICAgICB0b3A6MjBweDtcbiAgICAgICAgd2lkdGg6MjBweDtcbiAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcblxuICAgICAgfVxuICAgICAgLmJ0bi0xe1xuICAgICAgICBkaXNwbGF5IDpub25lO1xuICAgICAgICB3aWR0aCA6IDMwcHg7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIGxhYmVse1xuICAgICAgICBkaXNwbGF5IDogbm9uZTtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgfVxuICAgICAgW3R5cGU9XCJmaWxlXCJde1xuICAgICAgICBkaXNwbGF5IDogbm9uZTtcbiAgICAgICAgd2lkdGggOiAzMHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG4gICAgICBcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<textarea\n\nclass=\"chatInput\"\n[(ngModel)]=\"message\" \n(keydown)=\"handleSubmit($event)\" \nrows=\"1\"\n></textarea>\n<script>\n    var emoji_replace = require('emoji-replace');\n \n //the string containing emoticons\n var str = 'When a boy winks at you :girl: fear not, ;-) back and give him a broad :-)';\n  \n //now some emoji replacements.\n var str = emoji_replace(str);\n  \n console.log(str); \n      </script>\n<button class=\"chatButton\" \n(click)=send()>Send</button>\n\n<input type=\"file\" id=\"file\" (change)=\"featurePhotoSelected($event)\" accept=\".png,.jpg\"/>\n<label for=\"file\" class=\"btn-1\"> upload file</label>\n<div *ngIf=\"percentage | async as pct\" >\n    <span *ngIf=\"pct !=100\">\n<progress [value]=\"pct\" max=\"100\" class=\"progressBar\">\n    {{pct | number}} %\n</progress>\n</span>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.ts ***!
  \**************************************************/
/*! exports provided: ChatFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatFormComponent", function() { return ChatFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");







//import{emoji_replace} from 'emoji-replace';
var ChatFormComponent = /** @class */ (function () {
    function ChatFormComponent(chat, db, afAuth, storage) {
        var _this = this;
        this.chat = chat;
        this.db = db;
        this.afAuth = afAuth;
        this.storage = storage;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth !== undefined && auth != null) {
                _this.user = auth;
            }
        });
    }
    ChatFormComponent.prototype.ngOnInit = function () {
        this.url = null;
        //the string containing emoticons
    };
    ChatFormComponent.prototype.boldText = function () {
        var txtarea = document.getElementById("editor_area");
    };
    ChatFormComponent.prototype.send = function () {
        console.log(this.message);
        this.chat.sendMessage(this.message);
        this.message = "";
    };
    ChatFormComponent.prototype.handleSubmit = function (event) {
        if (event.keyCode == 13 && !event.shiftKey) {
            this.send();
            // var text = $('#editor_area');
            //text.focus().val('stuff');
        }
    };
    ChatFormComponent.prototype.setPopupAction = function (fn) {
        this.openPopup = fn;
    };
    ChatFormComponent.prototype.featurePhotoSelected = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var file, metaData, randomId, ref, task;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                file = event.target.files[0];
                console.log("Selected file : ", file.name);
                metaData = { 'contentType': file.type };
                randomId = Math.random().toString(36).substring(2);
                ref = this.storage.ref(randomId);
                task = this.storage.upload(randomId, file);
                this.percentage = task.percentageChanges();
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                    _this.url = ref.getDownloadURL();
                    console.log(_this.url);
                    _this.url.subscribe(function (url) { _this.chat.sendMessage(url), _this.b = false; });
                    //this.chat.sendMessage(this.chat.getTimeStamp());
                })).subscribe();
                return [2 /*return*/];
            });
        });
    };
    ChatFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-form',
            template: __webpack_require__(/*! ./chat-form.component.html */ "./src/app/chat-form/chat-form.component.html"),
            styles: [__webpack_require__(/*! ./chat-form.component.css */ "./src/app/chat-form/chat-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
    ], ChatFormComponent);
    return ChatFormComponent;
}());



/***/ }),

/***/ "./src/app/chat-room/chat-room.component.css":
/*!***************************************************!*\
  !*** ./src/app/chat-room/chat-room.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContent{\n    display: flex;\n    height: 89.5%;\n}\n\n.userListWrapper {\n    background-color: #2A2845;\n    color: #fff;\n    display: flex;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 1.2em;\n    flex: 1;\n    order: 1;\n    padding:20px 0px 40px 30px;\n    border-right: 1px solid #222;\n}\n\n.feedWrapper {\n    background-color: #fff;\n    \n     \n  \n   background: \n        linear-gradient(181deg, rgba(100,200,255,0.6), rgba(0, 0, 0, 0.9)),\n        url('test.jpg') no-repeat  center;\n\n        \n    font-family: \"Open Sans\", sans-serif;\n    font-size: 1.2em;\n    flex: 5;\n    order: 2;\n    overflow-y: scroll;\n    padding:20px 0px 0px 24px;\n}\n\n.chatFormWrapper {\n    display: flex;\n    height: 50px;\n    background-color: #eee;\n    z-index: 3;\n   \n}\n\n#scroll-style::-webkit-scrollbar-track\n{\n\tborder-radius: 10px;\n\tbackground-color: #F5F5F5;\n}\n\napp-user-list {\n    width: 100%;\n}\n\n@media all and (max-width : 480px){\n    .userListWrapper{\n        display : none;\n    }\n    .chatFormWrapper{\n        float : left;\n        margin : auto;\n        \n    }\n\n    .feedWrapper{\n        width: 50%;\n        padding :0px 0px 0px 0px;\n        flex : auto;\n        order : 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1yb29tL2NoYXQtcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0lBQ1IsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjs7OztHQUl2Qjs7eUNBRXdEOzs7SUFHdkQsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixVQUFVOztBQUVkOztBQUVBOztDQUVDLG1CQUFtQjtDQUNuQix5QkFBeUI7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhOztJQUVqQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7UUFDeEIsV0FBVztRQUNYLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1yb29tL2NoYXQtcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5Db250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA4OS41JTtcbn1cblxuLnVzZXJMaXN0V3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJBMjg0NTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZmxleDogMTtcbiAgICBvcmRlcjogMTtcbiAgICBwYWRkaW5nOjIwcHggMHB4IDQwcHggMzBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjIyO1xufVxuXG4uZmVlZFdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgXG4gICAgIFxuICBcbiAgIGJhY2tncm91bmQ6IFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTgxZGVnLCByZ2JhKDEwMCwyMDAsMjU1LDAuNiksIHJnYmEoMCwgMCwgMCwgMC45KSksXG4gICAgICAgIHVybCgnLi4vLi4vYXNzZXRzL2ltZy90ZXN0LmpwZycpIG5vLXJlcGVhdCAgY2VudGVyIDtcblxuICAgICAgICBcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZsZXg6IDU7XG4gICAgb3JkZXI6IDI7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHBhZGRpbmc6MjBweCAwcHggMHB4IDI0cHg7XG59XG5cbi5jaGF0Rm9ybVdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgei1pbmRleDogMztcbiAgIFxufVxuXG4jc2Nyb2xsLXN0eWxlOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xue1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG5hcHAtdXNlci1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aCA6IDQ4MHB4KXtcbiAgICAudXNlckxpc3RXcmFwcGVye1xuICAgICAgICBkaXNwbGF5IDogbm9uZTtcbiAgICB9XG4gICAgLmNoYXRGb3JtV3JhcHBlcntcbiAgICAgICAgZmxvYXQgOiBsZWZ0O1xuICAgICAgICBtYXJnaW4gOiBhdXRvO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAuZmVlZFdyYXBwZXJ7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmcgOjBweCAwcHggMHB4IDBweDtcbiAgICAgICAgZmxleCA6IGF1dG87XG4gICAgICAgIG9yZGVyIDogMTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/chat-room/chat-room.component.html":
/*!****************************************************!*\
  !*** ./src/app/chat-room/chat-room.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContent\">\n  <div class=\"userListWrapper\">\n    <app-user-list></app-user-list>\n  </div>\n  <div #scroller class=\"feedWrapper\">\n    <app-feed></app-feed>\n  </div>\n</div>\n\n<div class=\"chatFormWrapper\">\n  <app-chat-form></app-chat-form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/chat-room/chat-room.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-room/chat-room.component.ts ***!
  \**************************************************/
/*! exports provided: ChatRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomComponent", function() { return ChatRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ChatRoomComponent = /** @class */ (function () {
    function ChatRoomComponent(route) {
        this.route = route;
    }
    ChatRoomComponent.prototype.ngOnInit = function () {
        /*
        this.route.params.subscribe(params => {
          this.userName = +params['credential.user.displayName']; // (+) converts string 'id' to a number
    
          // In a real app: dispatch action to load the details here.
       });*/
    };
    ChatRoomComponent.prototype.scrollToBottom = function () {
        this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
    };
    ChatRoomComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scroller'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatRoomComponent.prototype, "feedContainer", void 0);
    ChatRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-room',
            template: __webpack_require__(/*! ./chat-room.component.html */ "./src/app/chat-room/chat-room.component.html"),
            styles: [__webpack_require__(/*! ./chat-room.component.css */ "./src/app/chat-room/chat-room.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChatRoomComponent);
    return ChatRoomComponent;
}());



/***/ }),

/***/ "./src/app/emoji.ts":
/*!**************************!*\
  !*** ./src/app/emoji.ts ***!
  \**************************/
/*! exports provided: FileSizePipe, Image, Youtube, Saut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizePipe", function() { return FileSizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Youtube", function() { return Youtube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Saut", function() { return Saut; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var FileSizePipe = /** @class */ (function () {
    function FileSizePipe() {
    }
    FileSizePipe.prototype.transform = function (value) {
        return value.replace(':)', '😊').replace(':D', '😃').replace(':diable:', '😈').replace(':(', '😕').replace(':hm:', '🤔').replace(':lol:', '😆').replace(';)', '😉');
    };
    FileSizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'filesize' })
    ], FileSizePipe);
    return FileSizePipe;
}());

var Image = /** @class */ (function () {
    function Image(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Image.prototype.transform = function (value) {
        console.log(value);
        if (value.search('https://firebasestorage.googleapis.com/v0/b/chat-room-c61ac') == 0) {
            var valueHtml = "<a data-fancybox=\"gallery\"  href=\"" + value + "\"><img style=\"height:100px;width:120px;\" classe=\"imageChat\" src=\"" + value + "\"  /></a>";
            return this.sanitizer.bypassSecurityTrustHtml(valueHtml);
        }
        else if (value.search('https://www.youtube.com/watch') == 0) {
            var value2 = this.sanitizer.bypassSecurityTrustUrl(value);
            var url = "https://www.youtube.com/embed/";
            var videoId = this.getId(value);
            url = url + videoId;
            this.sanitizer.bypassSecurityTrustUrl(url);
            var value3 = "<iframe class=\"youtubeChat\" frameborder=\"0\" type=\"text/html\" \n      src=\"" + url + "\">\n      </iframe>";
            var value4 = "<iframe class=\"youtubeChat\" frameborder=\"0\" type=\"text/html\" \n      src=\"" + url + "\">\n      </iframe><a data-fancybox=\"gallery\"  href=\"" + value + "\"> <img style=\"height:50px;width:70px;margin-bottom:100px;\" src=\"../assets/img/youtube.png\" /></a>";
            return this.sanitizer.bypassSecurityTrustHtml(value4);
        }
        else {
            return value;
        }
    };
    Image.prototype.getId = function (url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        }
        else {
            return 'error';
        }
    };
    Image = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'youtubeImage' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], Image);
    return Image;
}());

var Youtube = /** @class */ (function () {
    function Youtube(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Youtube.prototype.transform = function (value) {
        console.log(value);
        if (value.search('https://www.youtube.com/watch') == 0) {
            var value2 = this.sanitizer.bypassSecurityTrustUrl(value);
            var url = "https://www.youtube.com/embed/";
            var videoId = this.getId(value);
            url = url + videoId;
            this.sanitizer.bypassSecurityTrustUrl(url);
            var value3 = "<iframe class=\"youtubeChat\" frameborder=\"0\" type=\"text/html\" \n      src=\"" + url + "\">\n      </iframe>";
            return this.sanitizer.bypassSecurityTrustHtml(value3);
        }
        else {
            return value;
        }
    };
    Youtube.prototype.getId = function (url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        }
        else {
            return 'error';
        }
    };
    Youtube = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'youtube' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], Youtube);
    return Youtube;
}());

var Saut = /** @class */ (function () {
    function Saut() {
    }
    Saut.prototype.transform = function (value) {
        return value.replace(/\n/g, "<" + "br/>");
    };
    Saut = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'saut' })
    ], Saut);
    return Saut;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/*!*****************************************!*\
  !*** ./src/app/feed/feed.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed{\n    display: flex;\n    flex-direction: column;\n    margin-bottom:'10px';\n}\n\n.message{\n    flex-direction: column;\n    margin: 10px 0;\n}\n\n#moreMsg {\n    \n        height: auto;\n        padding: 10px;\n        width: 90%;\n        margin-top: 10px;\n        border-radius: 1px;\n        align-items:flex-start;\n        background-color: #201835;\n        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n        color: #A098A5;\n        border-radius: 8px;\n        transition: ease-in 0.2s;\n        \n    \n}\n\n#moreMsg:hover{\n    background-color: #8A2BE2;\n    color: #ddd;\n    transition: ease-in 0.1s;\n}\n\n@media all and (max-width : 480px){\n    .feed{\n        height : 50%;\n    }\n    .message{\n        float : none;\n        width : 100px;\n    }\n    .test{\n       position :relative;\n       \n    }\n    #moreMsg{\n        margin-top : 30px;\n        position : relative;\n        \n\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUtBOztRQUVRLFlBQVk7UUFDWixhQUFhO1FBQ2IsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixrRUFBa0U7UUFDbEUsY0FBYztRQUNkLGtCQUFrQjtRQUNsQix3QkFBd0I7OztBQUdoQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO09BQ0csa0JBQWtCOztJQUVyQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLG1CQUFtQjs7O0lBR3ZCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVlZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTonMTBweCc7XG59XG5cbi5tZXNzYWdle1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cblxuXG5cbiNtb3JlTXNnIHtcbiAgICBcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDE4MzU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcbiAgICAgICAgY29sb3I6ICNBMDk4QTU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xuICAgICAgICBcbiAgICBcbn1cblxuI21vcmVNc2c6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhBMkJFMjtcbiAgICBjb2xvcjogI2RkZDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMXM7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGggOiA0ODBweCl7XG4gICAgLmZlZWR7XG4gICAgICAgIGhlaWdodCA6IDUwJTtcbiAgICB9XG4gICAgLm1lc3NhZ2V7XG4gICAgICAgIGZsb2F0IDogbm9uZTtcbiAgICAgICAgd2lkdGggOiAxMDBweDtcbiAgICB9XG4gICAgLnRlc3R7XG4gICAgICAgcG9zaXRpb24gOnJlbGF0aXZlO1xuICAgICAgIFxuICAgIH1cbiAgICAjbW9yZU1zZ3tcbiAgICAgICAgbWFyZ2luLXRvcCA6IDMwcHg7XG4gICAgICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XG4gICAgICAgIFxuXG4gICAgfVxuXG59Il19 */"

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<br />\n<a (click)=\"addMessages()\" id=\"moreMsg\">Voir plus de messages...</a>\n    <br />\n    <br />\n<div class=\"feed\">\n    \n  <div *ngFor=\"let message of feed | async\" class=\"message\">\n   \n    \n    <app-message [chatMessage]=message class=\"test\"></app-message>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);





var FeedComponent = /** @class */ (function () {
    function FeedComponent(chat, db, afAuth) {
        var _this = this;
        this.chat = chat;
        this.db = db;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth !== undefined && auth != null) {
                _this.user = auth;
            }
        });
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("feed initializing");
        this.addMsg = 0;
        this.feed = this.db.list('/Chat', function (ref) { return ref.orderByKey().limitToLast(20 + _this.addMsg); }).valueChanges(); /// <reference path="" />
        console.log(this.feed);
    };
    FeedComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.feed = this.db.list('/Chat', function (ref) { return ref.orderByKey().limitToLast(20 + _this.addMsg); }).valueChanges();
    };
    FeedComponent.prototype.addMessages = function () {
        var _this = this;
        this.addMsg += 10;
        this.feed = this.db.list('/Chat', function (ref) { return ref.orderByKey().limitToLast(20 + _this.addMsg); }).valueChanges();
        console.log(15 + this.addMsg);
    };
    FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    height: 100%;\n    overflow:hidden;\n    background: \n      linear-gradient(45deg, rgba(255,103,0,0.3), rgba(0, 0, 80, 0.9)),\n      \n  }\n  \n  .loginCard{\n    display: block;\n    border: 1px solid #000;\n    border-radius: 4px;\n    background-color: rgba(255,255,255,0.85);\n    width: 700px;\n    height: 600px;\n    margin: auto;\n    margin-top: 40px;\n    text-align: center;\n    padding: 80px 30px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    overflow: hidden;\n  }\n  \n  .formInput{\n    margin: auto;\n    margin-top: 16px;\n    display: block;\n    width: 60%;\n    height: 40px;\n    border-radius:4px;\n    background:#ecf0f1;\n    border: #ccc 1px solid;\n    padding: 8px;\n    font-size:1em;\n  }\n  \n  .btn{\n    height: 54px;\n    width: 60%;\n    margin: auto;\n    margin-top: 16px;\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n    border-radius: 4px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    transition: ease-in 0.2s;\n  }\n  \n  #btn-signUp{\n      background-color:#2A2845;\n  }\n  \n  #btn-signUp:hover{\n      background-color:#4A4865;\n      transition: ease-in 0.2s;\n  }\n  \n  #btn-login{\n      background-color:#4A4875;\n  }\n  \n  #btn-login:hover{\n      background-color:#5A5895;\n      transition: ease-in 0.2s;\n  }\n  \n  h2{\n      height: 2em;\n  }\n  \n  a {\n      text-decoration: none;\n  }\n  \n  #btn-google{\n      background-color:#B03D25  ;\n      color : white;\n  }\n  \n  #btn-facebook{\n    background-color:\t#3b5998  ;\n    color : white;\n}\n  \n  @media all and (max-width : 480px){\n    .heading{\n       position : relative;\n       /* padding-left:60px;*/\n       \n       margin-right : 400px;\n       \n    }\n    .formInput{\n        \n        position:relative;\n        margin-right : 400px;\n        width:42%;\n        height: 30px;\n\n    }\n\n    .btn{\n        position:relative;\n        margin-right : 400px;\n        width:42%;\n        float : none;\n        height : 10%;\n    }\n\n    .loginCard{\n        border : 0px;\n    }\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmOzs7RUFHRjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrRUFBa0U7SUFDbEUsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrRUFBa0U7SUFDbEUsd0JBQXdCO0VBQzFCOztFQUVBO01BQ0ksd0JBQXdCO0VBQzVCOztFQUVBO01BQ0ksd0JBQXdCO01BQ3hCLHdCQUF3QjtFQUM1Qjs7RUFFQTtNQUNJLHdCQUF3QjtFQUM1Qjs7RUFFQTtNQUNJLHdCQUF3QjtNQUN4Qix3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSxXQUFXO0VBQ2Y7O0VBRUE7TUFDSSxxQkFBcUI7RUFDekI7O0VBRUE7TUFDSSwwQkFBMEI7TUFDMUIsYUFBYTtFQUNqQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixhQUFhO0FBQ2pCOztFQUVBO0lBQ0k7T0FDRyxtQkFBbUI7T0FDbkIsc0JBQXNCOztPQUV0QixvQkFBb0I7O0lBRXZCO0lBQ0E7O1FBRUksaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixTQUFTO1FBQ1QsWUFBWTs7SUFFaEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLFNBQVM7UUFDVCxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7OztBQUdKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgYmFja2dyb3VuZDogXG4gICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LDEwMywwLDAuMyksIHJnYmEoMCwgMCwgODAsIDAuOSkpLFxuICAgICAgXG4gIH1cbiAgXG4gIC5sb2dpbkNhcmR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjg1KTtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogODBweCAzMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTcpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuZm9ybUlucHV0e1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgIGJhY2tncm91bmQ6I2VjZjBmMTtcbiAgICBib3JkZXI6ICNjY2MgMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6MWVtO1xuICB9XG4gIFxuICAuYnRue1xuICAgIGhlaWdodDogNTRweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjE3KSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xuICB9XG4gIFxuICAjYnRuLXNpZ25VcHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzJBMjg0NTtcbiAgfVxuICBcbiAgI2J0bi1zaWduVXA6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0QTQ4NjU7XG4gICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XG4gIH1cbiAgXG4gICNidG4tbG9naW57XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0QTQ4NzU7XG4gIH1cbiAgXG4gICNidG4tbG9naW46aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1QTU4OTU7XG4gICAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XG4gIH1cbiAgXG4gIGgye1xuICAgICAgaGVpZ2h0OiAyZW07XG4gIH1cbiAgXG4gIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgI2J0bi1nb29nbGV7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNCMDNEMjUgIDtcbiAgICAgIGNvbG9yIDogd2hpdGU7XG4gIH1cblxuICAjYnRuLWZhY2Vib29re1xuICAgIGJhY2tncm91bmQtY29sb3I6XHQjM2I1OTk4ICA7XG4gICAgY29sb3IgOiB3aGl0ZTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aCA6IDQ4MHB4KXtcbiAgICAuaGVhZGluZ3tcbiAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgIC8qIHBhZGRpbmctbGVmdDo2MHB4OyovXG4gICAgICAgXG4gICAgICAgbWFyZ2luLXJpZ2h0IDogNDAwcHg7XG4gICAgICAgXG4gICAgfVxuICAgIC5mb3JtSW5wdXR7XG4gICAgICAgIFxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0IDogNDAwcHg7XG4gICAgICAgIHdpZHRoOjQyJTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgfVxuXG4gICAgLmJ0bntcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1yaWdodCA6IDQwMHB4O1xuICAgICAgICB3aWR0aDo0MiU7XG4gICAgICAgIGZsb2F0IDogbm9uZTtcbiAgICAgICAgaGVpZ2h0IDogMTAlO1xuICAgIH1cblxuICAgIC5sb2dpbkNhcmR7XG4gICAgICAgIGJvcmRlciA6IDBweDtcbiAgICB9XG5cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"loginCard\">\n      <h2 class=\"heading\">Log In</h2>\n        <input \n          [(ngModel)]=\"email\"\n          type=\"email\" \n          name=\"email\" \n          class=\"formInput\" />\n        <input type=\"password\" \n          [(ngModel)]=\"password\"\n          name=\"password\" \n          class=\"formInput\" />\n        <button class=\"btn\" \n                id=\"btn-login\" \n                (click)=\"login()\">\n                Log In\n        </button>\n        \n        <button class=\"btn \" (click)=\"googleLogin()\" id=\"btn-google\" >\n            \n                <div class=\"left\">\n                  Login with Google\n                </div>\n                \n                \n            \n              </button>\n\n              <button class=\"btn\" id=\"btn-facebook\" (click)=\"facebookLogin()\">Login with facebook</button>\n              \n    </div>\n    \n  </div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__);





var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authService, router, afAuth) {
        this.authService = authService;
        this.router = router;
        this.afAuth = afAuth;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        console.log('login() called from login-form component');
        this.authService.login(this.email, this.password)
            .catch(function (error) { return _this.errorMsg = error.message; }).then(function (resolve) { return null; });
    };
    LoginFormComponent.prototype.googleLogin = function () {
        this.authService.doGoogleLogin().then(function (resolve) { return null; });
    };
    LoginFormComponent.prototype.facebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin().then(function (resolve) { return _this.router.navigate(['chat']); });
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageContainer{\n    display: flex;\n    height: auto;\n    width: 70%;\n    min-width: 350px;\n    border-radius: 5px;\n    align-items:stretch;\n    background-color: rgba(238, 238, 238, 0.425) ;\n    box-shadow: 0 3px 6px rgba(0,0,0,0.26), 0 3px 6px rgba(0,0,0,0.23);\n}\n\n.isOwnMessageContainer{\n    background-color: #01579B;\n}\n\n.messageData{\n    flex: 1;\n    padding: 10px;\n    font-size: 0.7em;\n}\n\n.sender{\n    display: block;\n    color: #222;\n    font-weight: bold;\n}\n\n.isOwnSender{\n    color: #E1F5FE;\n}\n\n.timestamp {\n    color: #555;\n    font-style: italic;\n}\n\n.isOwnTimestamp{\n    color: #4FC3F7;\n}\n\n.messageContent{\n    height: auto;\n    flex: 9;\n    background-color: rgba(255, 255, 255, 0.63);\n    padding: 10px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.isOwnMessageContent{\n    background-color: #E3F2FD;\n    color: #01579B;\n}\n\n.chatButton{\n    flex: 1;\n    padding: 10px;\n    padding: 8px 24px;\n    font-size: 1.3em;\n    font-family: 'Droid Sans', sans-serif;\n    background-color: #2A2845;\n    color: white;\n    transition: 0.2s ease-out;\n    min-width: 50px;\n}\n\n.chatButton:hover{\n    background-color: #444;\n}\n\n@media all and (max-width : 480px){\n    .messageContainer{\n        width : 150px;\n        min-width: 200;\n        margin-right: 50px;\n    }\n    .messageData{\n        width : 100px;\n        padding: 5px;\n        \n    }\n\n    .messageContent{\n        \n        width : 50%;\n    }\n\n    \n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0Msa0VBQWtFO0FBQ3RFOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixPQUFPO0lBQ1AsMkNBQTJDO0lBQzNDLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsWUFBWTs7SUFFaEI7O0lBRUE7O1FBRUksV0FBVztJQUNmOzs7OztBQUtKIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZUNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzAlO1xuICAgIG1pbi13aWR0aDogMzUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGFsaWduLWl0ZW1zOnN0cmV0Y2g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjQyNSkgO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcbn1cblxuLmlzT3duTWVzc2FnZUNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1NzlCO1xufVxuXG4ubWVzc2FnZURhdGF7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5zZW5kZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pc093blNlbmRlcntcbiAgICBjb2xvcjogI0UxRjVGRTtcbn1cblxuLnRpbWVzdGFtcCB7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaXNPd25UaW1lc3RhbXB7XG4gICAgY29sb3I6ICM0RkMzRjc7XG59XG5cbi5tZXNzYWdlQ29udGVudHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxleDogOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjMpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4uaXNPd25NZXNzYWdlQ29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNGMkZEO1xuICAgIGNvbG9yOiAjMDE1NzlCO1xufVxuXG4uY2hhdEJ1dHRvbntcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LWZhbWlseTogJ0Ryb2lkIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQTI4NDU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4uY2hhdEJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoIDogNDgwcHgpe1xuICAgIC5tZXNzYWdlQ29udGFpbmVye1xuICAgICAgICB3aWR0aCA6IDE1MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDIwMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICAubWVzc2FnZURhdGF7XG4gICAgICAgIHdpZHRoIDogMTAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLm1lc3NhZ2VDb250ZW50e1xuICAgICAgICBcbiAgICAgICAgd2lkdGggOiA1MCU7XG4gICAgfVxuXG4gICAgXG5cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"messageContainer\">\n  <div class=\"messageData\">\n    <span class=\"sender\">\n      {{userName}}\n    </span>\n    <span class='timeStamp'>\n      {{timeStamp}}\n    </span>\n  </div>\n  <div class=\"messageContent\" id=\"msgContent\" id=\"{{timeStamp}}\">\n      <span [outerHTML]=\"messageContent  | filesize  | saut | youtubeImage\"></span> \n    \n</div>\n\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/chat-message.model */ "./src/app/models/chat-message.model.ts");



var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function (chatMessage) {
        if (chatMessage === void 0) { chatMessage = this.chatMessage; }
        this.messageContent = chatMessage.message;
        this.timeStamp = chatMessage.timeSent;
        this.userEmail = chatMessage.email;
        this.userName = chatMessage.userName;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_chat_message_model__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"])
    ], MessageComponent.prototype, "chatMessage", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/models/chat-message.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/chat-message.model.ts ***!
  \**********************************************/
/*! exports provided: ChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navBar{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    background-color: #EAEAEB;\n    \n}\n\n#logo{\n    display: inline-block;\n    /*background: url('../../assets/img/logo.png') no-repeat;*/\n    background-size: cover;\n    margin: 12px 10px 12px 32px;\n    width: 60px;\n    height: 60px;\n    min-width: 60px;\n}\n\n#heading{\n    flex: 4;\n    padding: 24px 0px 8px 10px;\n    height: 60px;\n    font-size: 1.8em;\n    font-weight: bold;\n}\n\n.links{\n    padding-top: 32px;\n    padding-right: 30px;\n    white-space: nowrap;\n    display: block;\n}\n\n#heading > a{\n    text-decoration: none;\n    color: black;\n}\n\n.links a{\n    color: #555;\n    text-decoration: none;\n    transition: ease-in 0.2s;\n    padding-right: 12px;\n    overflow: hidden;\n}\n\n.links a:hover {\n    color: #1E88E5;\n    transition: ease-in 0.2s;\n}\n\n#userEmail {\n    padding-right: 16px;\n    font-weight: bold;\n}\n\n#logochat{\n   \n}\n\n@media all and (max-width : 480px){\n    #heading{\n        height : 20px;\n        float : none;\n    }\n    #userEmail {\n        position : absolute;\n        top : 70px;\n        left : 40px;\n        width : 20px;\n        padding-right : 0px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwwREFBMEQ7SUFDMUQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBOztBQUVBOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdkJhcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQjtcbiAgICBcbn1cblxuI2xvZ297XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8qYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2xvZ28ucG5nJykgbm8tcmVwZWF0OyovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW46IDEycHggMTBweCAxMnB4IDMycHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1pbi13aWR0aDogNjBweDtcbn1cblxuI2hlYWRpbmd7XG4gICAgZmxleDogNDtcbiAgICBwYWRkaW5nOiAyNHB4IDBweCA4cHggMTBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmtze1xuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuI2hlYWRpbmcgPiBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5saW5rcyBhe1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGlua3MgYTpob3ZlciB7XG4gICAgY29sb3I6ICMxRTg4RTU7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xufVxuXG4jdXNlckVtYWlsIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jbG9nb2NoYXR7XG4gICBcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aCA6IDQ4MHB4KXtcbiAgICAjaGVhZGluZ3tcbiAgICAgICAgaGVpZ2h0IDogMjBweDtcbiAgICAgICAgZmxvYXQgOiBub25lO1xuICAgIH1cbiAgICAjdXNlckVtYWlsIHtcbiAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wIDogNzBweDtcbiAgICAgICAgbGVmdCA6IDQwcHg7XG4gICAgICAgIHdpZHRoIDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodCA6IDBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navBar\">\n    <div id=\"logo\"><img src=\"http://clipart-library.com/image_gallery2/Chat-PNG-HD.png\" /></div>\n    <div id=\"heading\"><a routerLink=\"/\"> ChatApp</a></div>\n  <div class=\"links\">\n    <span>\n      <a *ngIf=\"!(user|async)?.uid\" href=\"#\" (click)=\"login()\">Login</a>\n    </span>\n    <span>\n      <a *ngIf=\"!(user|async)?.uid\" routerLink=\"/signup\">Sign Up</a>\n    </span>\n    <span>\n      <span id=\"userEmail\" *ngIf=\"(user|async)?.uid\">Hello, {{userEmail}}</span>\n    </span>\n    <span>\n      <a *ngIf=\"(user|async)?.uid\" href=\"#\" (click)=\"logout()\">Logout</a>\n    </span>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.authUser();
        this.user.subscribe(function (user) {
            if (user) {
                _this.userEmail = user.email;
            }
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);






var AuthService = /** @class */ (function () {
    function AuthService(afAuth, db, router) {
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.user = afAuth.authState;
    }
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        get: function () {
            return this.authState.user != null ? this.authState.user.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (resolve) {
            var status = 'online';
            _this.setUserStatus(status);
            _this.router.navigate(['chat']);
        });
    };
    AuthService.prototype.signUp = function (email, password, displayName) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            console.log("USER :" + user.user.uid);
            _this.authState = user;
            var status = 'online';
            _this.setUserData(email, displayName, status, "otherUser/" + _this.currentUserId);
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.setUserData = function (email, displayName, status, path) {
        //const path = `users/${this.currentUserId}`;
        var data = {
            email: email,
            displayName: displayName,
            status: status
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.setUserStatus = function (status) {
        var path = "users/" + this.currentUserId;
        var data = {
            status: status
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.authUser = function () {
        return this.user;
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['login']);
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var provider, credential;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider();
                        provider.addScope('profile');
                        provider.addScope('email');
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                    case 1:
                        credential = _a.sent();
                        this.setUserData(credential.user.email, credential.user.displayName, 'online', "users/" + credential.user.uid);
                        console.log("USERNAME : ", credential.user.displayName);
                        this.router.navigate(['chat']);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    //https://chat-room-c61ac.firebaseapp.com/__/auth/handler
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var provider, credential;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider();
                        provider.addScope('profile');
                        provider.addScope('email');
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                    case 1:
                        credential = _a.sent();
                        this.setUserData(credential.user.email, credential.user.displayName, 'online', "users/" + credential.user.uid);
                        console.log("USERNAME : ", credential.user.displayName);
                        this.router.navigate(['chat']);
                        return [2 /*return*/];
                }
            });
        }); });
        //this.setUserData(credential.user.email,credential.user.displayName,'online',`users/${credential.user.uid}`)
    };
    AuthService.prototype.updateOnDisconnect = function () {
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref().child('users/' + this.authState.user.uid).onDisconnect().update({
            status: "offline"
        });
    };
    AuthService.prototype.updateOnConnect = function () {
        return this.db.object('.info/connected');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





var ChatService = /** @class */ (function () {
    function ChatService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth !== undefined && auth != null) {
                _this.user = auth;
                console.log('AUTHENTIFICATION :' + _this.user.uid);
            }
        });
    }
    /*sendMessage2(msg: any){
      this.getUser()
      
      console.log(this.userN)
      const timestamp = this.getTimeStamp();
      const email = this.user.email;
      console.log("!!!!!!!!!!!!!!!!!!!!!!",this.userN)
      this.chatMessages = this.getMessages();
      this.chatMessages.push({
        message: msg,
        timeSent: timestamp,
        userName: this.user.displayName,
        email: email
  
      });
      console.log('sendMessage');
    }*/
    ChatService.prototype.getTimeStamp = function () {
        //throw new Error("Method not implemented.");
        var now = new Date();
        var date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDay();
        var time = now.getUTCHours() + ':' + (now.getUTCMinutes() + 1) + ':' + now.getUTCSeconds();
        return date + " " + time;
    };
    ChatService.prototype.getMessages = function () {
        // query to create our message feed binding
        return this.db.list('/Chat', function (ref) { return ref.orderByKey().limitToLast(15); });
    };
    ChatService.prototype.sendMessage = function (msg) {
        var _this = this;
        var userId = this.user.uid;
        console.log("USER ID :", userId);
        var path = "/users/" + userId;
        var user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;
        var test = this.db.object(path).valueChanges().subscribe(function (data) {
            var timestamp = _this.getTimeStamp();
            var email = _this.user.email;
            _this.chatMessages = _this.getMessages();
            _this.chatMessages.push({
                message: msg,
                timeSent: timestamp,
                userName: JSON.stringify(data).split(':')[1].split('"')[1],
                email: email
            });
        });
    };
    ChatService.prototype.getUsers = function () {
        var path = '/users';
        return this.db.list(path).valueChanges();
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/signup-form/signup-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    overflow:hidden;\n    background: \n      linear-gradient(45deg, rgba(0,103, 255, 0.3), rgba(0, 150, 80, 0.9)),\n      ;\n  }\n  \n  .signUpCard{\n    display: block;\n    border: 1px solid #000;\n    border-radius: 4px;\n    background-color: rgba(255,255,255,0.85);\n    width: 700px;\n    height: 520px;\n    margin: auto;\n    margin-top: 30px;\n    padding: 80px 30px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    overflow: hidden;\n  }\n  \n  .formInput{\n    display: block;\n    width: 100%;\n    height: 40px;\n    border-radius:4px;\n    background:#ecf0f1;\n    border: #ccc 1px solid;\n    padding: 8px;\n    font-size:1em;\n    margin-bottom: 18px;\n  }\n  \n  .btn{\n    height: 54px;\n    margin-top: 32px;\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n    border-radius: 4px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    transition: ease-in 0.2s;\n    width: 100%;\n  }\n  \n  #btn-signUp{\n      background-color:#2A2845;\n  }\n  \n  #btn-signUp:hover{\n      background-color:#4A4865;\n      transition: ease-in 0.2s;\n  }\n  \n  #btn-signUp:disabled{\n      background-color:#eee;\n      color: #999;\n  }\n  \n  h2{\n      text-align: center;\n      height: 2em;\n  }\n  \n  a {\n      text-decoration: none;\n  }\n  \n  .label{\n      font-size: 0.9em;\n  }\n  \n  @media all and (max-width : 480px){\n    .heading{\n       position : relative;\n       /* padding-left:60px;*/\n       \n       margin-right : 560px;\n       \n    }\n\n    .formInput{\n        position : relative;\n        width:35%;\n        height: 25px;\n    }\n\n    .btn{\n        width : 40%;\n        padding : 0px;\n        margin-top : 0px;\n    }\n    .signUpCard{\n        border : 0px;\n    }\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwLWZvcm0vc2lnbnVwLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZjs7TUFFRTtFQUNKOztFQUVBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLHdCQUF3QjtJQUN4QixXQUFXO0VBQ2I7O0VBRUE7TUFDSSx3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSx3QkFBd0I7TUFDeEIsd0JBQXdCO0VBQzVCOztFQUVBO01BQ0kscUJBQXFCO01BQ3JCLFdBQVc7RUFDZjs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixXQUFXO0VBQ2Y7O0VBRUE7TUFDSSxxQkFBcUI7RUFDekI7O0VBRUE7TUFDSSxnQkFBZ0I7RUFDcEI7O0VBRUE7SUFDRTtPQUNHLG1CQUFtQjtPQUNuQixzQkFBc0I7O09BRXRCLG9CQUFvQjs7SUFFdkI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsU0FBUztRQUNULFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjs7O0FBR0oiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAtZm9ybS9zaWdudXAtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgYmFja2dyb3VuZDogXG4gICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMCwxMDMsIDI1NSwgMC4zKSwgcmdiYSgwLCAxNTAsIDgwLCAwLjkpKSxcbiAgICAgIDtcbiAgfVxuICBcbiAgLnNpZ25VcENhcmR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjg1KTtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgaGVpZ2h0OiA1MjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiA4MHB4IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xNyksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5mb3JtSW5wdXR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgIGJhY2tncm91bmQ6I2VjZjBmMTtcbiAgICBib3JkZXI6ICNjY2MgMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6MWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIH1cbiAgXG4gIC5idG57XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTcpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gICNidG4tc2lnblVwe1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMkEyODQ1O1xuICB9XG4gIFxuICAjYnRuLXNpZ25VcDpob3ZlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzRBNDg2NTtcbiAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcbiAgfVxuICBcbiAgI2J0bi1zaWduVXA6ZGlzYWJsZWR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgfVxuICBcbiAgaDJ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDJlbTtcbiAgfVxuICBcbiAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5sYWJlbHtcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH1cblxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoIDogNDgwcHgpe1xuICAgIC5oZWFkaW5ne1xuICAgICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XG4gICAgICAgLyogcGFkZGluZy1sZWZ0OjYwcHg7Ki9cbiAgICAgICBcbiAgICAgICBtYXJnaW4tcmlnaHQgOiA1NjBweDtcbiAgICAgICBcbiAgICB9XG5cbiAgICAuZm9ybUlucHV0e1xuICAgICAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDozNSU7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG5cbiAgICAuYnRue1xuICAgICAgICB3aWR0aCA6IDQwJTtcbiAgICAgICAgcGFkZGluZyA6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcCA6IDBweDtcbiAgICB9XG4gICAgLnNpZ25VcENhcmR7XG4gICAgICAgIGJvcmRlciA6IDBweDtcbiAgICB9XG5cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"signUpCard\">\n     <form #signupForm=\"ngForm\">\n      <h2 class=\"heading\">Inscription</h2>\n  \n      <label class=\"label\">Email</label>\n         <input \n         type=\"email\" name=\"email\"\n         placeholder=\"Enter your email address\" \n         [(ngModel)]=\"email\" class=\"formInput\"\n         maxlength=\"60\" required/>\n  \n      <label class=\"label\">Mot de passe</label>\n        <input \n          type=\"password\" name=\"password\"\n          placeholder=\"Choose a password\" \n          [(ngModel)]=\"password\" class=\"formInput\" \n          required/>\n  \n      <label class=\"label\">Pseudo</label>\n        <input \n          name=\"displayName\"\n          placeholder=\"Enter a display name\" \n          [(ngModel)]=\"displayName\" class=\"formInput\"\n          maxlength=\"12\" required/>\n  \n        <button [disabled]=\"!signupForm.form.valid\" \n                type=\"submit\" (click)=\"signUp()\"\n                class=\"btn\" id=\"btn-signUp\">\n                S'inscrire\n        </button>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.ts ***!
  \******************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    SignupFormComponent.prototype.signUp = function () {
        var _this = this;
        var email = this.email;
        var password = this.password;
        var displayName = this.displayName;
        this.authService.signUp(email, password, displayName).then(function (resolve) { return null; })
            .catch(function (error) { return _this.errorMsg = error.message; });
    };
    SignupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-form',
            template: __webpack_require__(/*! ./signup-form.component.html */ "./src/app/signup-form/signup-form.component.html"),
            styles: [__webpack_require__(/*! ./signup-form.component.css */ "./src/app/signup-form/signup-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/app/user-item/user-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-item/user-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.userItem{\n    height: auto;\n    padding: 10px;\n    width: 90%;\n    margin-top: 10px;\n    border-radius: 1px;\n    align-items:flex-start;\n    background-color: #201835;\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n    color: #A098A5;\n    border-radius: 8px;\n    transition: ease-in 0.2s;\n}\n\n.userItem:hover{\n    background-color: #453968;\n    color: #ddd;\n    transition: ease-in 0.1s;\n}\n\n.online{\n    background-color: #0FA;\n}\n\n.busy{\n    background-color: #FB0;\n}\n\n.offline{\n    background-color: #888;\n}\n\n.away{\n    background-color: yellow;\n}\n\n.status{\n    border: 1px solid black;\n    display: inline-block;\n    min-width: 10px;\n    min-height: 10px;\n    border-radius: 50%;\n    margin: 10px 12px 0px 10px;\n}\n\n.userName{\n    display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pdGVtL3VzZXItaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixrRUFBa0U7SUFDbEUsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1pdGVtL3VzZXItaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udXNlckl0ZW17XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDE4MzU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xuICAgIGNvbG9yOiAjQTA5OEE1O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XG59XG5cbi51c2VySXRlbTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDUzOTY4O1xuICAgIGNvbG9yOiAjZGRkO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4xcztcbn1cblxuLm9ubGluZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEZBO1xufVxuXG4uYnVzeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkIwO1xufVxuXG4ub2ZmbGluZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xufVxuXG4uYXdheXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5zdGF0dXN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1pbi13aWR0aDogMTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDEwcHggMTJweCAwcHggMTBweDtcbn1cblxuLnVzZXJOYW1le1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user-item/user-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-item/user-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userItem\">\n  \n    \n    <span class=\"status\" [ngClass]=\"(user.status)\"></span>\n   \n    \n    <span class=\"userName\">\n      {{user.displayName}} \n    </span>\n  </div>"

/***/ }),

/***/ "./src/app/user-item/user-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-item/user-item.component.ts ***!
  \**************************************************/
/*! exports provided: UserItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItemComponent", function() { return UserItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");



var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
    }
    UserItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], UserItemComponent.prototype, "user", void 0);
    UserItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-item',
            template: __webpack_require__(/*! ./user-item.component.html */ "./src/app/user-item/user-item.component.html"),
            styles: [__webpack_require__(/*! ./user-item.component.css */ "./src/app/user-item/user-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserItemComponent);
    return UserItemComponent;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userList {\n    \n    overflow-y: scroll;\n\n}\n@media all and (max-width : 480px){\n    .userList{\n        display:none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJMaXN0IHtcbiAgICBcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGggOiA0ODBweCl7XG4gICAgLnVzZXJMaXN0e1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userList\">\n    <app-user-item\n    [user]=user *ngFor=\"let user of users\">\n    </app-user-item>\n  </div>"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");



var UserListComponent = /** @class */ (function () {
    function UserListComponent(chat) {
        var _this = this;
        chat.getUsers().subscribe(function (users) {
            _this.users = users;
        });
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], UserListComponent);
    return UserListComponent;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyCLliV_eTZ7RWuGZVQM_3d7i1DMevZr1P0",
        authDomain: "chat-room-c61ac.firebaseapp.com",
        databaseURL: "https://chat-room-c61ac.firebaseio.com",
        projectId: "chat-room-c61ac",
        storageBucket: "chat-room-c61ac.appspot.com",
        messagingSenderId: "184183373922"
    }
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

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _app_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _app_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/chat-room/chat-room.component */ "./src/app/chat-room/chat-room.component.ts");



var appRoutes = [
    { path: 'signup', component: _app_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_0__["SignupFormComponent"] },
    { path: 'login', component: _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__["LoginFormComponent"] },
    { path: 'chat', component: _app_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_2__["ChatRoomComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nadineribier/Desktop/Projects/base-chat/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map