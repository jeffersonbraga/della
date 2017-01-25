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
var Executar_manutencaoDadosComponent = (function () {
    function Executar_manutencaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Executar_manutencaoDadosDisplayModeEnum;
    }
    Executar_manutencaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Executar_manutencaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Executar_manutencaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Executar_manutencaoDadosDisplayModeEnum.Edit;
            break;
    } };
    Executar_manutencaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'executar_manutencao-dados', templateUrl: 'executar_manutencao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Executar_manutencaoDadosComponent);
    return Executar_manutencaoDadosComponent;
}());
exports.Executar_manutencaoDadosComponent = Executar_manutencaoDadosComponent;
var Executar_manutencaoDadosDisplayModeEnum;
(function (Executar_manutencaoDadosDisplayModeEnum) {
    Executar_manutencaoDadosDisplayModeEnum[Executar_manutencaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Executar_manutencaoDadosDisplayModeEnum[Executar_manutencaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Executar_manutencaoDadosDisplayModeEnum[Executar_manutencaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Executar_manutencaoDadosDisplayModeEnum || (Executar_manutencaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=executar_manutencao_dados.component.js.map