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
var Atividades_manutencaoDadosComponent = (function () {
    function Atividades_manutencaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Atividades_manutencaoDadosDisplayModeEnum;
    }
    Atividades_manutencaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Atividades_manutencaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Atividades_manutencaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Atividades_manutencaoDadosDisplayModeEnum.Edit;
            break;
    } };
    Atividades_manutencaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atividades_manutencao-dados', templateUrl: 'atividades_manutencao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Atividades_manutencaoDadosComponent);
    return Atividades_manutencaoDadosComponent;
}());
exports.Atividades_manutencaoDadosComponent = Atividades_manutencaoDadosComponent;
var Atividades_manutencaoDadosDisplayModeEnum;
(function (Atividades_manutencaoDadosDisplayModeEnum) {
    Atividades_manutencaoDadosDisplayModeEnum[Atividades_manutencaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Atividades_manutencaoDadosDisplayModeEnum[Atividades_manutencaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Atividades_manutencaoDadosDisplayModeEnum[Atividades_manutencaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Atividades_manutencaoDadosDisplayModeEnum || (Atividades_manutencaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=atividades_manutencao_dados.component.js.map