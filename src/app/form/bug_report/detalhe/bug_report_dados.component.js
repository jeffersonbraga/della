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
var router_1 = require('@angular/router');
var Bug_reportDadosComponent = (function () {
    function Bug_reportDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Bug_reportDadosDisplayModeEnum;
    }
    Bug_reportDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Bug_reportDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Bug_reportDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Bug_reportDadosDisplayModeEnum.Edit;
            break;
    } };
    Bug_reportDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'bug_report-dados', templateUrl: 'bug_report_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Bug_reportDadosComponent);
    return Bug_reportDadosComponent;
}());
exports.Bug_reportDadosComponent = Bug_reportDadosComponent;
var Bug_reportDadosDisplayModeEnum;
(function (Bug_reportDadosDisplayModeEnum) {
    Bug_reportDadosDisplayModeEnum[Bug_reportDadosDisplayModeEnum["Details"] = 0] = "Details";
    Bug_reportDadosDisplayModeEnum[Bug_reportDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Bug_reportDadosDisplayModeEnum[Bug_reportDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Bug_reportDadosDisplayModeEnum || (Bug_reportDadosDisplayModeEnum = {}));
//# sourceMappingURL=bug_report_dados.component.js.map