"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-container',
            template: "\n    <nav class=\"navbar navbar-fluid\">\n        <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">\n            <!--<img alt=\"Brand\" src=\"../images/people.png\">-->\n        </a>\n        </div>\n        <div class=\"container-fluid navbar-right\">\n            <menu-topo></menu-topo>\n        </div>\n    </nav>\n    <router-outlet></router-outlet>\n\n    <!--<footer>\n        <div class=\"navbar navbar-fixed-bottom\">\n            <div class=\"navbar-inner footer\">\n                <div class=\"container\">\n                    <footer>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <h4>Life Software Development</h4>\n                            </div>\n                        </div>\n                    </footer>\n                </div>\n            </div>\n        </div>\n    </footer>-->"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map