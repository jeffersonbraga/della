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
var SistemaDadosComponent = (function () {
    function SistemaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = SistemaDadosDisplayModeEnum;
    }
    SistemaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = SistemaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = SistemaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = SistemaDadosDisplayModeEnum.Edit;
            break;
    } };
    SistemaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'sistema-dados', templateUrl: 'sistema_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SistemaDadosComponent);
    return SistemaDadosComponent;
}());
exports.SistemaDadosComponent = SistemaDadosComponent;
var SistemaDadosDisplayModeEnum;
(function (SistemaDadosDisplayModeEnum) {
    SistemaDadosDisplayModeEnum[SistemaDadosDisplayModeEnum["Details"] = 0] = "Details";
    SistemaDadosDisplayModeEnum[SistemaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    SistemaDadosDisplayModeEnum[SistemaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(SistemaDadosDisplayModeEnum || (SistemaDadosDisplayModeEnum = {}));
//# sourceMappingURL=sistema_dados.component.js.map