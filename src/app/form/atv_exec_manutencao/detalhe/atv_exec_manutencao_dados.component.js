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
var Atv_exec_manutencaoDadosComponent = (function () {
    function Atv_exec_manutencaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Atv_exec_manutencaoDadosDisplayModeEnum;
    }
    Atv_exec_manutencaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Atv_exec_manutencaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Atv_exec_manutencaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Atv_exec_manutencaoDadosDisplayModeEnum.Edit;
            break;
    } };
    Atv_exec_manutencaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atv_exec_manutencao-dados', templateUrl: 'atv_exec_manutencao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Atv_exec_manutencaoDadosComponent);
    return Atv_exec_manutencaoDadosComponent;
}());
exports.Atv_exec_manutencaoDadosComponent = Atv_exec_manutencaoDadosComponent;
var Atv_exec_manutencaoDadosDisplayModeEnum;
(function (Atv_exec_manutencaoDadosDisplayModeEnum) {
    Atv_exec_manutencaoDadosDisplayModeEnum[Atv_exec_manutencaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Atv_exec_manutencaoDadosDisplayModeEnum[Atv_exec_manutencaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Atv_exec_manutencaoDadosDisplayModeEnum[Atv_exec_manutencaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Atv_exec_manutencaoDadosDisplayModeEnum || (Atv_exec_manutencaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=atv_exec_manutencao_dados.component.js.map