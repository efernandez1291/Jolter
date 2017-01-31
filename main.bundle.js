webpackJsonp([0,3],{

/***/ 1096:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1096;


/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(516);


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindJobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FindJobsComponent = (function () {
    function FindJobsComponent() {
    }
    FindJobsComponent.prototype.ngOnInit = function () {
    };
    FindJobsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-find-jobs',
            template: __webpack_require__(828),
            styles: [__webpack_require__(820)]
        }), 
        __metadata('design:paramtypes', [])
    ], FindJobsComponent);
    return FindJobsComponent;
}());
//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/find-jobs.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // TODO create log in service 
    LoginComponent.prototype.logIn = function () {
        if (this.userName === 'manager') {
            this.router.navigate(['manager']);
        }
        else {
            this.router.navigate(['find-jobs']);
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(829),
            styles: [__webpack_require__(821)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/login.component.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagerComponent = (function () {
    function ManagerComponent(router) {
        this.router = router;
    }
    ManagerComponent.prototype.ngOnInit = function () {
    };
    // TODO import roles from a role service to populate this html.
    // TODO use ngFor to loop through array of roles for manager page.
    // TODO pass in roleID from array object, not manually.
    ManagerComponent.prototype.openRole = function (roleID) {
        this.router.navigate(['/manager/role', roleID]);
    };
    ManagerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-manager',
            template: __webpack_require__(830),
            styles: [__webpack_require__(822)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object])
    ], ManagerComponent);
    return ManagerComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/manager.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoPageFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoPageFoundComponent = (function () {
    function NoPageFoundComponent() {
    }
    NoPageFoundComponent.prototype.ngOnInit = function () {
    };
    NoPageFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-no-page-found',
            template: __webpack_require__(831),
            styles: [__webpack_require__(823)]
        }), 
        __metadata('design:paramtypes', [])
    ], NoPageFoundComponent);
    return NoPageFoundComponent;
}());
//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/no-page-found.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_applications_applications_service__ = __webpack_require__(397);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleComponent = (function () {
    function RoleComponent(applicationsService, activatedRoute) {
        this.applicationsService = applicationsService;
        this.activatedRoute = activatedRoute;
        this.removedApplications = [];
    }
    RoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.getMinimumRoleRequirements(+params['id']);
        }, function (error) {
            console.error('Not able to find role');
        });
        this.applicationsService.getApplications().subscribe(function (applications) {
            _this.applications = applications;
            _this.filterApplications();
        });
    };
    // TODO call a service that returns manager set requirements for the given role ID
    RoleComponent.prototype.getMinimumRoleRequirements = function (roleID) {
        // Sets default application filters
        this.occupation = 'Web Developer';
        this.experience = 3;
        this.convictions = "None";
    };
    // TODO this should be a pipe, but i'm running out of time.
    RoleComponent.prototype.filterApplications = function () {
        // Loop through applications
        for (var application in this.applications) {
            // Loop through questions
            for (var question in this.applications[application].questions) {
                // Check answers against the application filters for a match
                var answer = this.applications[application].questions[question].answer;
                var questionId = this.applications[application].questions[question].id;
                // Ternary that determines if an Application needs to be removed from the array
                var removeApp = (answer === this.occupation ||
                    answer >= Number(this.experience) ||
                    answer === this.convictions) ?
                    false : true;
                if (removeApp) {
                    // Used the removed application's index to save the one you need.
                    this.removedApplications.push(this.applications[Number(application)]);
                    this.removeApplication(Number(application));
                    return;
                }
            }
            ;
        }
        ;
    };
    RoleComponent.prototype.removeApplication = function (applicationIndex) {
        this.applications.splice(applicationIndex, 1);
        this.filterApplications();
    };
    RoleComponent.prototype.saveRemovedApps = function (applicationToBeSavedIndex) {
        this.removedApplications.push(this.applications[applicationToBeSavedIndex]);
    };
    RoleComponent.prototype.changeFilter = function () {
        for (var removedApplication in this.removedApplications) {
            this.applications.push(this.removedApplications[removedApplication]);
        }
        this.removedApplications = [];
        this.filterApplications();
    };
    RoleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-role',
            template: __webpack_require__(832),
            styles: [__webpack_require__(824)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_applications_applications_service__["a" /* ApplicationsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_applications_applications_service__["a" /* ApplicationsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], RoleComponent);
    return RoleComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/role.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationsService = (function () {
    function ApplicationsService() {
        // TODO Make an Applications Model and set type as a model.
        this.applications = [
            {
                name: 'Bob Walters',
                applicationId: 200,
                manager: 'Manager001',
                questions: [
                    {
                        id: 'id1',
                        question: 'Current Occupation',
                        answer: 'Web Developer'
                    },
                    {
                        id: 'id2',
                        question: 'Years of Experience',
                        answer: 5
                    },
                    {
                        id: 'id3',
                        question: 'Convictions',
                        answer: 'None'
                    }
                ]
            },
            {
                name: 'Joe Swazy',
                applicationId: 200,
                manager: 'Manager001',
                questions: [
                    {
                        id: 'id1',
                        question: 'Current Occupation',
                        answer: 'Web Developer'
                    },
                    {
                        id: 'id2',
                        question: 'Years of Experience',
                        answer: 3
                    },
                    {
                        id: 'id3',
                        question: 'Convictions',
                        answer: 'None'
                    }
                ]
            },
            {
                name: 'Lisa Yen',
                applicationId: 200,
                manager: 'Manager001',
                questions: [
                    {
                        id: 'id1',
                        question: 'Current Occupation',
                        answer: 'Web Developer'
                    },
                    {
                        id: 'id2',
                        question: 'Years of Experience',
                        answer: 4
                    },
                    {
                        id: 'id3',
                        question: 'Convictions',
                        answer: 'None'
                    }
                ]
            },
            {
                name: 'Sue Ann',
                applicationId: 200,
                manager: 'Manager001',
                questions: [
                    {
                        id: 'id1',
                        question: 'Current Occupation',
                        answer: 'Construction'
                    },
                    {
                        id: 'id2',
                        question: 'Years of Experience',
                        answer: 4
                    },
                    {
                        id: 'id3',
                        question: 'Convictions',
                        answer: 'None'
                    }
                ]
            },
            {
                name: 'Jim Jobe',
                applicationId: 200,
                manager: 'Manager001',
                questions: [
                    {
                        id: 'id1',
                        question: 'Current Occupation',
                        answer: 'Doctor'
                    },
                    {
                        id: 'id2',
                        question: 'Years of Experience',
                        answer: 3
                    },
                    {
                        id: 'id3',
                        question: 'Convictions',
                        answer: 'None'
                    }
                ]
            },
            {
                name: 'Regina Douglas',
                applicationId: 200,
                manager: 'Manager001',
                questions: [
                    {
                        id: 'id1',
                        question: 'Current Occupation',
                        answer: 'Gym Instructor'
                    },
                    {
                        id: 'id2',
                        question: 'Years of Experience',
                        answer: 1
                    },
                    {
                        id: 'id3',
                        question: 'Convictions',
                        answer: 'Felony'
                    }
                ]
            },
            {
                name: 'Mongo Ride',
                applicationId: 200,
                manager: 'Manager001',
                questions: [
                    {
                        id: 'id1',
                        question: 'Current Occupation',
                        answer: 'Doctor'
                    },
                    {
                        id: 'id2',
                        question: 'Years of Experience',
                        answer: 4
                    },
                    {
                        id: 'id3',
                        question: 'Convictions',
                        answer: 'Misdemeanor'
                    }
                ]
            }
        ];
    }
    ApplicationsService.prototype.getApplications = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(this.applications)
            .map(function (applications) { return applications; });
    };
    ApplicationsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ApplicationsService);
    return ApplicationsService;
}());
//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/applications.service.js.map

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 515;


/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(632);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/main.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(827),
            styles: [__webpack_require__(819)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/app.component.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_applications_applications_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manager_manager_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__find_jobs_find_jobs_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__no_page_found_no_page_found_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_user_bar_user_bar_component__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_emblem_emblem_component__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__role_role_component__ = __webpack_require__(396);
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















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__no_page_found_no_page_found_component__["a" /* NoPageFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_user_bar_user_bar_component__["a" /* UserBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_emblem_emblem_component__["a" /* EmblemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__manager_manager_component__["a" /* ManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__find_jobs_find_jobs_component__["a" /* FindJobsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__role_role_component__["a" /* RoleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* JolterRoutes */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["DropdownModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__shared_applications_applications_service__["a" /* ApplicationsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/app.module.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_page_found__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manager_manager_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_jobs_find_jobs_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__role_role_component__ = __webpack_require__(396);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JolterRoutes; });






var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginComponent */]
    },
    {
        path: 'no-page-found',
        component: __WEBPACK_IMPORTED_MODULE_2__no_page_found__["a" /* NoPageFoundComponent */]
    },
    {
        path: 'manager',
        component: __WEBPACK_IMPORTED_MODULE_3__manager_manager_component__["a" /* ManagerComponent */],
    },
    {
        path: 'manager/role/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__role_role_component__["a" /* RoleComponent */],
    },
    {
        path: 'find-jobs',
        component: __WEBPACK_IMPORTED_MODULE_4__find_jobs_find_jobs_component__["a" /* FindJobsComponent */]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: '**',
        redirectTo: 'no-page-found'
    }
];
var JolterRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/app.routes.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(393);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });
// Barrel for login

//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/index.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__no_page_found_component__ = __webpack_require__(395);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__no_page_found_component__["a"]; });
// Barrel for login

//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/index.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmblemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmblemComponent = (function () {
    function EmblemComponent() {
    }
    EmblemComponent.prototype.ngOnInit = function () {
    };
    EmblemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-emblem',
            template: __webpack_require__(833),
            styles: [__webpack_require__(825)]
        }), 
        __metadata('design:paramtypes', [])
    ], EmblemComponent);
    return EmblemComponent;
}());
//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/emblem.component.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserBarComponent = (function () {
    function UserBarComponent(location) {
        this.location = location;
    }
    UserBarComponent.prototype.ngOnInit = function () {
        this.getUserName();
    };
    // TODO get this from a service that stores a user model
    UserBarComponent.prototype.getUserName = function () {
        if (this.location.path() === '/manager' || this.location.path() === '/manager/role/200') {
            this.userName = 'Manager001';
        }
        else {
            this.userName = 'User001';
        }
    };
    UserBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-user-bar',
            template: __webpack_require__(834),
            styles: [__webpack_require__(826)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */]) === 'function' && _a) || Object])
    ], UserBarComponent);
    return UserBarComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/user-bar.component.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/environment.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1095);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/Ed/Documents/Jolter/src/polyfills.js.map

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = ".slogan {\n  text-align: center;\n  font-size: 30px;\n  font-weight: 200;\n  margin-top: 30px; }\n\n.login-form {\n  text-align: center;\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  margin-top: 40px; }\n"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = ".list-group {\n  margin-top: 50px; }\n"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = ".no-page-found {\n  text-align: center;\n  padding-top: 15%; }\n  .no-page-found p {\n    font-size: 3em; }\n"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = ".role-description {\n  margin-top: 40px;\n  text-align: center; }\n\n.application-filter {\n  margin-top: 40px; }\n  .application-filter select {\n    margin-right: 10px; }\n\n.considerable-applications {\n  margin-top: 40px; }\n  .considerable-applications tr button {\n    margin-top: 10px; }\n  .considerable-applications th {\n    border-top: none; }\n  .considerable-applications td {\n    cursor: pointer; }\n"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = ".emblem {\n  width: 34px;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer; }\n\n.emblem-text {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  cursor: pointer; }\n"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = ".user-info {\n  float: right; }\n  .user-info .user-name {\n    text-align: right;\n    display: inline;\n    vertical-align: middle;\n    margin-right: 2px; }\n  .user-info .user-image {\n    width: 44px;\n    vertical-align: bottom;\n    background-color: white;\n    border-radius: 44px;\n    vertical-align: middle; }\n  .user-info button {\n    margin-left: 20px; }\n"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<app-user-bar></app-user-bar>"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "<app-emblem></app-emblem>\n\n<p class=\"slogan\">Job Hunting at Lightning Speed</p>\n\n<form class=\"login-form\" #loginForm=\"ngForm\" (ngSubmit)=\"logIn()\">\n  <div class=\"form-group\">\n    <label for=\"userName\">User Name</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userName\" [ngModelOptions]=\"{standalone: true}\" id=\"userName\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" id=\"password\" required>\n  </div>\n  <button type=\"submit\" class=\"btn btn-success\">Log In</button>\n  <button type=\"button\" class=\"btn btn-primary\">Sign Up</button>\n</form>\n\n"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<app-user-bar></app-user-bar>\n\n<div class=\"list-group\">\n  <h5 class=\"mb-1\"> Active Roles</h5>\n  <button class=\"btn btn-success btn-sm\">+ Create Role</button>\n  <button href=\"#\" class=\"list-group-item list-group-item-action list-group-item-info\" (click)=\"openRole(200)\"> \n    Web Developer - Role ID #200 ( Open ) - 4 Applications Submitted\n  </button>\n</div>\n\n<div class=\"list-group\">\n  <h5 class=\"mb-1\">Filled Roles</h5>\n  <button class=\"list-group-item list-group-item-action list-group-item-success\">Web Developer - Role ID #201 ( Filled ) - 28 Applications Submitted</button>\n  <button class=\"list-group-item list-group-item-action list-group-item-success\">Web Developer - Role ID #202 ( Filled ) - 18 Applications Submitted</button>\n  <button class=\"list-group-item list-group-item-action list-group-item-danger\">Web Developer - Role ID #203 ( Canceled ) - 0 Applications Submitted</button>\n  <button class=\"list-group-item list-group-item-action list-group-item-success\">Web Developer - Role ID #204 ( Filled ) - 213 Applications Submitted</button>\n  <button class=\"list-group-item list-group-item-action list-group-item-success\">Web Developer - Role ID #205 ( Filled ) - 42 Applications Submitted</button>\n  <button class=\"list-group-item list-group-item-action list-group-item-success\">Web Developer - Role ID #201 ( Filled ) - 14 Applications Submitted</button>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<div class=\"no-page-found\"> \n  <p>Darn, we couldnt find that.</p>\n</div>\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<app-user-bar></app-user-bar>\n\n<div class=\"role-description\">\n  <h4>Role - Web Developer</h4>\n</div>\n\n<div class=\"application-filter\">\n  <h5>Application Filter</h5>\n  \n  <label for=\"\">Occupation</label>\n  <select (change)=\"changeFilter()\" [(ngModel)]=\"occupation\" >\n    <option>Web Developer</option>\n    <option>Doctor</option>\n    <option>Nurse</option>\n    <option>Construction</option>\n    <option>Biologist</option>\n    <option>Gym Instructor</option>\n  </select>\n\n  <label for=\"\">Years Of Experience</label>\n  <select (change)=\"changeFilter()\" [(ngModel)]=\"experience\">\n    <option>0</option>\n    <option>1</option>\n    <option>2</option>\n    <option>3</option>\n    <option value=4 >4+</option>\n  </select>\n\n  <label for=\"\">Convictions</label>\n  <select (change)=\"changeFilter()\" [(ngModel)]=\"convictions\">\n    <option>None</option>\n    <option>Felony</option>\n    <option>Misdemeanor</option>\n  </select>\n</div>\n\n<div class=\"considerable-applications\">\n  <h5>Considerable Applications</h5>\n  <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-success\" type=\"button\">Go!</button>\n      </span>\n    </div>\n  <table class=\"table table-striped table-hover\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Name</th>\n        <th>Occupation</th>\n        <th>Years Of Experience</th>\n        <th>Convictions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let application of applications\">\n        <button class=\"btn btn-info btn-sm\" (click)=\"setActiveApplication()\" >Show Application</button>\n        <td>{{application.name}}</td>\n        <td *ngFor=\"let question of application.questions\">{{question.answer}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"applicant\">\n  Bob 20\n</div>\n\n<button class=\"btn btn-primary\" routerLink=\"/manager\">Back to All Roles</button>\n"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<img class=\"emblem\" routerLink=\"/login\" src='assets/jolter-emblem.svg'/>\n<h1 class=\"emblem-text\" routerLink=\"/login\" >Jolter</h1>"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<app-emblem></app-emblem>\n\n<div class=\"user-info\">\n  <p class=\"user-name\">Welcome Back - {{userName}}</p>\n  <img class=\"user-image\" src=\"assets/user.png\" />\n  <button class=\"btn btn-outline-warning btn-sm\" routerLink=\"/login\">Log Out</button>\n</div>"

/***/ })

},[1097]);
//# sourceMappingURL=main.bundle.map