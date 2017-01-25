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
var Registro_treinamentoDadosComponent = (function () {
    function Registro_treinamentoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Registro_treinamentoDadosDisplayModeEnum;
    }
    Registro_treinamentoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Registro_treinamentoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Registro_treinamentoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Registro_treinamentoDadosDisplayModeEnum.Edit;
            break;
    } };
    Registro_treinamentoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'registro_treinamento-dados', templateUrl: 'registro_treinamento_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Registro_treinamentoDadosComponent);
    return Registro_treinamentoDadosComponent;
}());
exports.Registro_treinamentoDadosComponent = Registro_treinamentoDadosComponent;
var Registro_treinamentoDadosDisplayModeEnum;
(function (Registro_treinamentoDadosDisplayModeEnum) {
    Registro_treinamentoDadosDisplayModeEnum[Registro_treinamentoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Registro_treinamentoDadosDisplayModeEnum[Registro_treinamentoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Registro_treinamentoDadosDisplayModeEnum[Registro_treinamentoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Registro_treinamentoDadosDisplayModeEnum || (Registro_treinamentoDadosDisplayModeEnum = {}));
//# sourceMappingURL=registro_treinamento_dados.component.js.map