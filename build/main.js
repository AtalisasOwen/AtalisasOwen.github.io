webpackJsonp([6],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the AnswersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnswersPage = /** @class */ (function () {
    function AnswersPage(navParams, modalCtrl, builder, toastController) {
        var _this = this;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.builder = builder;
        this.toastController = toastController;
        this.onSuccessToAddFaq = function () { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Added Successfully',
                            duration: 1500
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); };
        this.onFailToAddFaq = function () { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Failed. Please try again.',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); };
        this.myForm = this.builder.group({
            answer: ''
        });
    }
    AnswersPage.prototype.addAnswer = function () {
        this.navParams.data.answers.push(this.myForm.value.answer);
        this.myForm = this.builder.group({
            answer: ''
        });
        this.navParams.data.addAnswer(this.navParams.data.id, this.navParams.data.answers)
            .then(this.onSuccessToAddFaq)
            .catch(this.onFailToAddFaq);
    };
    AnswersPage.prototype.dismissModal = function () {
        this.modalCtrl.dismiss({
            'dismissed': true,
            'newFAQ': this.navParams.data
        });
    };
    AnswersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-answers',template:/*ion-inline-start:"F:\ionic_music\menulistApp1\src\pages\answers\answers.html"*/'<!--\n  Generated template for the AnswersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Answers for this question</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismissModal()"><ion-icon name="close"></ion-icon>Close</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>{{navParams.data.title}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>{{navParams.data.question}}</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-left disabled>\n          <ion-icon name=\'text\'></ion-icon>\n          {{navParams.data.answers.length}} Answers\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-left text-center disabled>\n          <ion-icon name=\'create\'></ion-icon>\n          Edit\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="danger" clear small icon-left text-center disabled>\n          <ion-icon name=\'trash\'></ion-icon>\n          Delete\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card *ngFor="let a of navParams.data.answers">\n    <ion-card-content>\n      {{a}}\n    </ion-card-content>\n  </ion-card>\n\n  <form [formGroup]="myForm">\n\n  <ion-item>\n    <ion-label stacked>Input your answer.</ion-label>\n    <ion-input type="text" formControlName="answer" name="answer"></ion-input>\n  </ion-item>\n\n\n  <button ion-button color="secondary" block (click)="addAnswer()">Confirm!</button>\n\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"F:\ionic_music\menulistApp1\src\pages\answers\answers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], AnswersPage);
    return AnswersPage;
}());

//# sourceMappingURL=answers.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, emailComposer, toastController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.toastController = toastController;
        this.onFailToAddFaq = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "Failed to load email plugin in this env.",
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); };
        this.sendEmail = function () {
            var email = {
                to: 'teacher02@music_studio.com',
                subject: 'Hello Mr.???',
                body: 'How are you? Nice greetings from ??????',
                isHtml: true
            };
            // Send a text message using default options
            _this.emailComposer.open(email);
        };
        this.emailComposer.isAvailable()
            .then(function (available) {
            if (available) {
                console.log("Email is OK!");
            }
            else {
                console.log("Email is NOT OK!");
            }
        }).catch(this.onFailToAddFaq);
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"F:\ionic_music\menulistApp1\src\pages\contact\contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/marty-avatar.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Headmaster</p>\n    </ion-item>\n\n    <ion-card-content>\n      <p>A short introduction.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          136 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start (click)="sendEmail()">\n          <ion-icon name=\'text\'></ion-icon>\n          Email\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <button ion-button color="primary" clear small icon-start disabled>\n          <ion-icon name=\'call\'></ion-icon>\n          Call\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/sarah-avatar.png.jpeg">\n      </ion-avatar>\n      <h2>Sarah Connor</h2>\n      <p>Teacher</p>\n    </ion-item>\n\n\n    <ion-card-content>\n      <p>A short introduction.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          72 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start (click)="sendEmail()">\n          <ion-icon name=\'text\'></ion-icon>\n          Email\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <button ion-button color="primary" clear small icon-start disabled>\n          <ion-icon name=\'call\'></ion-icon>\n          Call\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/ian-avatar.png">\n      </ion-avatar>\n      <h2>Dr. Ian Malcolm</h2>\n      <p>Teacher</p>\n    </ion-item>\n    <ion-card-content>\n      <p>A short introduction.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          46 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start (click)="sendEmail()">\n          <ion-icon name=\'text\'></ion-icon>\n          Email\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <button ion-button color="primary" clear small icon-start disabled>\n          <ion-icon name=\'call\'></ion-icon>\n          Call\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\ionic_music\menulistApp1\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display_display__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoursesPage = /** @class */ (function () {
    function CoursesPage(navCtrl, navParams, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalController = modalController;
    }
    CoursesPage.prototype.presentModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__display_display__["a" /* DisplayPage */])];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CoursesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-courses',template:/*ion-inline-start:"F:\ionic_music\menulistApp1\src\pages\courses\courses.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Courses</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item (click)="presentModal()"> Piano </ion-item>\n    <ion-item> Violin </ion-item>\n    <ion-item> Opera </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\ionic_music\menulistApp1\src\pages\courses\courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], CoursesPage);
    return CoursesPage;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisplayPage = /** @class */ (function () {
    function DisplayPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    DisplayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisplayPage');
    };
    DisplayPage.prototype.dismissModal = function () {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    };
    DisplayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-display',template:/*ion-inline-start:"F:\ionic_music\menulistApp1\src\pages\display\display.html"*/'<!--\n  Generated template for the DisplayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Details of This Course</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismissModal()">\n        <ion-icon name="close"></ion-icon>\n        Close\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <img src="../../assets/imgs/MPS.jpeg"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        Piano Teacher\n      </ion-card-title>\n      <p>\n        I believe in making piano lessons fun for my students, something that they can look forward to every week! When the learning process is enjoyable, students embrace new challenges. And so begins a lifelong love of piano playing and music appreciation.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n\n    <img src="../../assets/imgs/Piano.png"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        Lesson Types\n      </ion-card-title>\n      <p>\n        I teach piano to children and adults, specialising in beginners through to intermediate levels. Lessons are provided as one-on-one sessions or as buddy sessions where a portion of the lesson is shared with another student.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n\n    <img src="../../assets/imgs/Piano2.jpeg"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        The Studio\n      </ion-card-title>\n      <p>\n        Piano lessons are held in my home studio in the centre of Singapore. It is easily accessible by MRT and bus and there is on-site visitor parking. Being near Orchard Rd means plenty of options for shopping and coffee while the kids are having their lessons!\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n\n'/*ion-inline-end:"F:\ionic_music\menulistApp1\src\pages\display\display.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], DisplayPage);
    return DisplayPage;
}());

//# sourceMappingURL=display.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_question_question__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__answers_answers__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl, navParams, alertCtrl, questionProvider, toastController, modalController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.questionProvider = questionProvider;
        this.toastController = toastController;
        this.modalController = modalController;
        this.FAQs = [];
        this.temp = [];
        this.keyword = '';
        this.onSuccessToAddFaq = function () { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Added Successfully',
                            duration: 1500
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); };
        this.onSuccessToEditFaq = function () { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Edited Successfully',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); };
        this.onSuccessToDeleteFaq = function () { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Deleted Successfully',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); };
        this.onFailToAddFaq = function () { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Failed. Please try again.',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); };
        this.addAnswer = function (id, answers) {
            return _this.questionProvider.addAnswer(id, answers);
        };
        this.questionProvider.queryFAQs()
            .forEach(function (next) {
            next.forEach(function (doc) {
                var questionData = doc.data();
                questionData["id"] = doc.id;
                _this.FAQs.push(questionData);
                _this.temp.push(questionData);
            });
        });
    }
    FaqPage.prototype.onInput = function (e) {
        var _this = this;
        if (this.searchbar.value === '') {
            this.temp = this.FAQs.slice();
            return;
        }
        this.temp = [];
        this.FAQs.forEach(function (f) {
            if (f.title.toLowerCase().search(_this.searchbar.value) !== -1 || f.question.toLowerCase().search(_this.searchbar.value) !== -1) {
                _this.temp.push(f);
            }
        });
    };
    FaqPage.prototype.onCancel = function (e) {
        this.keyword = '';
        this.temp = this.FAQs.slice();
    };
    FaqPage.prototype.presentModal = function (FAQ) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__answers_answers__["a" /* AnswersPage */], {
                            id: FAQ.id,
                            title: FAQ.title,
                            question: FAQ.question,
                            answers: FAQ.answers,
                            addAnswer: this.addAnswer
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FaqPage.prototype.ionViewDidEnter = function () {
        this.refresher._top = '110px';
        this.refresher.state = 'refreshing';
        this.refresher._beginRefresh();
    };
    FaqPage.prototype.doRefresh = function (event) {
        setTimeout(function () {
            event.complete();
        }, 2000);
    };
    FaqPage.prototype.addFAQ = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Ask a question',
            inputs: [{ name: 'title', placeholder: 'Title' },
                { name: 'question', placeholder: 'Type your question' }],
            buttons: [{ text: 'Cancel' },
                { text: 'Add', handler: function (data) {
                        data.answers = [];
                        var _a = _this.questionProvider.addFAQ(data), callback = _a[0], newData = _a[1];
                        callback.then(_this.onSuccessToAddFaq)
                            .catch(_this.onFailToAddFaq);
                        _this.FAQs.push(newData);
                        _this.temp = _this.FAQs.slice();
                    }
                }
            ]
        });
        prompt.present();
        //console.log(this.FAQs);
    };
    FaqPage.prototype.editFAQ = function (FAQ) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Edit this question',
            inputs: [{ name: 'title', placeholder: FAQ.title },
                { name: 'question', placeholder: FAQ.question }],
            buttons: [{ text: 'Cancel' },
                { text: 'Save',
                    handler: function (data) {
                        var index = _this.FAQs.indexOf(FAQ);
                        data.id = FAQ.id;
                        data.answers = FAQ.answers;
                        if (index > -1) {
                            _this.FAQs[index] = data;
                            _this.questionProvider.editFAQ(data.id, data.title || FAQ.title, data.question || FAQ.question)
                                .then(_this.onSuccessToEditFaq)
                                .catch(_this.onFailToAddFaq);
                            _this.temp = _this.FAQs.slice();
                        }
                    }
                }]
        });
        prompt.present();
    };
    FaqPage.prototype.deleteFAQ = function (FAQ) {
        var index = this.FAQs.indexOf(FAQ);
        this.FAQs = this.FAQs.slice(0, index).concat(this.FAQs.slice(index + 1, this.FAQs.length));
        this.questionProvider.deleteFAQ(FAQ.id)
            .then(this.onSuccessToDeleteFaq)
            .catch(this.onFailToAddFaq);
        this.temp = this.FAQs.slice();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], FaqPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Refresher */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Refresher */])
    ], FaqPage.prototype, "refresher", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Searchbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Searchbar */])
    ], FaqPage.prototype, "searchbar", void 0);
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"F:\ionic_music\menulistApp1\src\pages\faq\faq.html"*/'<!--\n  Generated template for the FaqPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      FAQ\n    </ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-searchbar (ionInput)="onInput($event)"\n                   (ionClear)="onCancel($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor="let f of temp">\n    <ion-card-header>\n      <ion-card-title>{{f.title}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>{{f.question}}</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-left (click)="presentModal(f)">\n          <ion-icon name=\'text\'></ion-icon>\n          {{f.answers.length}} Answers\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-left text-center (click)="editFAQ(f)">\n          <ion-icon name=\'create\'></ion-icon>\n          Edit\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="danger" clear small icon-left text-center (click)="deleteFAQ(f)">\n          <ion-icon name=\'trash\'></ion-icon>\n          Delete\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="danger" (click)="addFAQ()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"F:\ionic_music\menulistApp1\src\pages\faq\faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_question_question__["a" /* QuestionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationPage = /** @class */ (function () {
    function LocationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"F:\ionic_music\menulistApp1\src\pages\location\location.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Location\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class="adv-map">\n    <div style="position: relative">\n      <img src="../../assets/imgs/advance-card-map-paris.png">\n      <ion-fab right top>\n        <button ion-fab color="secondary">\n          <ion-icon name="pin"></ion-icon>\n        </button>\n      </ion-fab>\n    </div>\n    <ion-item>\n      <ion-icon color="subtle" large item-start name=\'information-circle\'></ion-icon>\n      <h2>Museum of Information</h2>\n      <p>44 Rue de Info, 75010 Paris, France</p>\n    </ion-item>\n    <ion-item>\n      <ion-icon color="subtle" large item-start name=\'leaf\'></ion-icon>\n      <h2>Music School</h2>\n      <p>1 Avenue Faux, 75010 Paris, France</p>\n    </ion-item>\n    <ion-item actions>\n      <span ion-text item-start color="secondary" class="item-bold">26 min</span>\n      <span ion-text item-start color="subtle">(8.1 mi)</span>\n      <button ion-button color="secondary" clear item-end icon-start>\n        <ion-icon name=\'navigate\'></ion-icon>\n        Start\n      </button>\n    </ion-item>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"F:\ionic_music\menulistApp1\src\pages\location\location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/answers/answers.module": [
		474,
		5
	],
	"../pages/contact/contact.module": [
		475,
		4
	],
	"../pages/courses/courses.module": [
		476,
		3
	],
	"../pages/display/display.module": [
		477,
		2
	],
	"../pages/faq/faq.module": [
		478,
		1
	],
	"../pages/location/location.module": [
		479,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the QuestionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuestionProvider = /** @class */ (function () {
    function QuestionProvider(http, firestore) {
        this.http = http;
        this.firestore = firestore;
        this.questionCollectionRef = this.firestore.collection('FAQs');
    }
    QuestionProvider.prototype.addFAQ = function (data) {
        var id = this.firestore.createId();
        var temp = this.questionCollectionRef.doc(id).set(data);
        return [temp, __assign({}, data, { id: id })];
    };
    QuestionProvider.prototype.editFAQ = function (id, title, question) {
        return this.questionCollectionRef.doc(id).update({
            title: title, question: question
        });
    };
    QuestionProvider.prototype.queryFAQs = function () {
        return this.questionCollectionRef.get();
    };
    QuestionProvider.prototype.deleteFAQ = function (id) {
        return this.questionCollectionRef.doc(id).delete();
    };
    QuestionProvider.prototype.addAnswer = function (id, answers) {
        return this.questionCollectionRef.doc(id).update({
            answers: answers
        });
    };
    QuestionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
    ], QuestionProvider);
    return QuestionProvider;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cards = [
            {
                imageUrl: 'assets/imgs/card/01.png',
                title: 'Juzmusic',
                description: 'Juzmusic offers several different programs, and these are: Instrumental Lessons, Early Childhood Programmes, Pop Music Programme and Programs for Institutions. The teachings of Dr. Shin’ichi Suzuki are held to a high regard here. Besides this, they are also accredited by ABRSM (Associated Board of Royal School of Music). You can also purchase instruments from them. They currently have three branches.'
            },
            {
                imageUrl: 'assets/imgs/card/02.png',
                title: 'Aureus Academy',
                description: 'Aureus Academy wants to make sure that learning music is a fun experience for the little ones and adults alike. Whether you want to sing your heart out, or pick up an instrument, their teachers can guide you through it. You can opt for individual or group lessons here, and they currently have five centres throughout the island.'
            },
            {
                imageUrl: 'assets/imgs/card/03.png',
                title: 'Edvox Music School',
                description: 'Since 2002, Edvox Music School has offered theoretical and practical insights to music, with the support of qualified instructors. Lessons are offered for violin, piano, cello, flute, guitar, saxophone and clarinet. There is also a program called Funtime Doreme, engineered for those aged between 3 ½ to 5 years old, to introduce them to music education in a fun way. There are currently 5 Edvox branches located all over Singapore.'
            },
            {
                imageUrl: 'assets/imgs/card/04.png',
                title: 'Intune Music',
                description: 'If you feel like your calling in life is to pursue music, then Intune Music would be a great place to hone your talent. They work in collaboration with recording studios and artiste management companies in the music industry, giving students the opportunity to showcase their talents or find employment in the industry. Courses are taught for vocals, song composition, and instruments. There are also classes for children. Their school is located within Pomo Mall.'
            },
            {
                imageUrl: 'assets/imgs/card/05.png',
                title: 'Lee Wei Song School of Music',
                description: '20 years of experience makes Lee Wei Song School of Music a known name in music education within Singapore. Their secret to success is happiness – a feeling they want to encourage for all who attend their lessons. Classes include Pop Vocal Signatures, Specialised Classes and Masterclasses focusing on pop keyboard, songwriting, artiste grooming, exam prep, and private workshops, as well as their StaR’us Children Program – to introduce kids to music. They are located at the Pico Creative Centre.'
            },
        ];
    }
    HomePage.prototype.cardTapped = function (card) {
        alert(card.title + ' was tapped.');
    };
    HomePage.prototype.share = function (card) {
        alert(card.title + ' was shared.');
    };
    HomePage.prototype.listen = function (card) {
        alert('Listening to ' + card.title);
    };
    HomePage.prototype.favorite = function (card) {
        alert(card.title + ' was favorited.');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\ionic_music\menulistApp1\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      News\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let card of cards">\n    <img [src]="card.imageUrl" (click)="cardTapped(card)" />\n    <ion-card-content>\n      <h2 class="card-title">\n        <b>{{card.title}}</b>\n      </h2>\n      <p>\n        {{card.description}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\ionic_music\menulistApp1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(407);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_courses_courses__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_faq_faq__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_question_question__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_answers_answers__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_location_location__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_display_display__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_email_composer__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var config = {
    apiKey: "AIzaSyA5PROn7y65RRfuWKM4Qv3J_bSYM7qHt2M",
    authDomain: "music-studio-7349b.firebaseapp.com",
    databaseURL: "https://music-studio-7349b.firebaseio.com",
    projectId: "music-studio-7349b",
    storageBucket: "music-studio-7349b.appspot.com",
    messagingSenderId: "277210159587",
    appId: "1:277210159587:web:918005d3745acd2d"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_answers_answers__["a" /* AnswersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_display_display__["a" /* DisplayPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/answers/answers.module#AnswersPageModule', name: 'AnswersPage', segment: 'answers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/display/display.module#DisplayPageModule', name: 'DisplayPage', segment: 'display', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["AngularFireModule"].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["AngularFirestoreModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_answers_answers__["a" /* AnswersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_display_display__["a" /* DisplayPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_question_question__["a" /* QuestionProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_email_composer__["a" /* EmailComposer */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            exports: [__WEBPACK_IMPORTED_MODULE_13__pages_answers_answers__["a" /* AnswersPage */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_courses_courses__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_faq_faq__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_location_location__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.go_to_news = function (Page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.go_to_courses = function (Page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_courses_courses__["a" /* CoursesPage */]);
    };
    MyApp.prototype.go_to_faq = function (Page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_faq_faq__["a" /* FaqPage */]);
    };
    MyApp.prototype.go_to_location = function (Page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_location_location__["a" /* LocationPage */]);
    };
    MyApp.prototype.go_to_contact = function (Page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\ionic_music\menulistApp1\src\app\app.html"*/'<ion-menu side="left" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item (click)="go_to_news()" menuClose>\n        News\n      </ion-item>\n      <ion-item (click)="go_to_courses()" menuClose>\n        Courses\n      </ion-item>\n      <ion-item (click)="go_to_faq()" menuClose>\n        FAQ\n      </ion-item>\n      <ion-item (click)="go_to_contact()" menuClose>\n        Contact\n      </ion-item>\n      <ion-item (click)="go_to_location()" menuClose>\n        Location\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"F:\ionic_music\menulistApp1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map