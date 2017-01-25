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
var ProgramaDadosComponent = (function () {
    function ProgramaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = ProgramaDadosDisplayModeEnum;
    }
    ProgramaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = ProgramaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = ProgramaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = ProgramaDadosDisplayModeEnum.Edit;
            break;
    } };
    ProgramaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'programa-dados', templateUrl: 'programa_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ProgramaDadosComponent);
    return ProgramaDadosComponent;
}());
exports.ProgramaDadosComponent = ProgramaDadosComponent;
var ProgramaDadosDisplayModeEnum;
(function (ProgramaDadosDisplayModeEnum) {
    ProgramaDadosDisplayModeEnum[ProgramaDadosDisplayModeEnum["Details"] = 0] = "Details";
    ProgramaDadosDisplayModeEnum[ProgramaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    ProgramaDadosDisplayModeEnum[ProgramaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(ProgramaDadosDisplayModeEnum || (ProgramaDadosDisplayModeEnum = {}));
//# sourceMappingURL=programa_dados.component.js.map