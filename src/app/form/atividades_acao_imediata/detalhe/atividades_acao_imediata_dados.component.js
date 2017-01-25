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
var Atividades_acao_imediataDadosComponent = (function () {
    function Atividades_acao_imediataDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Atividades_acao_imediataDadosDisplayModeEnum;
    }
    Atividades_acao_imediataDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Atividades_acao_imediataDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Atividades_acao_imediataDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Atividades_acao_imediataDadosDisplayModeEnum.Edit;
            break;
    } };
    Atividades_acao_imediataDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atividades_acao_imediata-dados', templateUrl: 'atividades_acao_imediata_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Atividades_acao_imediataDadosComponent);
    return Atividades_acao_imediataDadosComponent;
}());
exports.Atividades_acao_imediataDadosComponent = Atividades_acao_imediataDadosComponent;
var Atividades_acao_imediataDadosDisplayModeEnum;
(function (Atividades_acao_imediataDadosDisplayModeEnum) {
    Atividades_acao_imediataDadosDisplayModeEnum[Atividades_acao_imediataDadosDisplayModeEnum["Details"] = 0] = "Details";
    Atividades_acao_imediataDadosDisplayModeEnum[Atividades_acao_imediataDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Atividades_acao_imediataDadosDisplayModeEnum[Atividades_acao_imediataDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Atividades_acao_imediataDadosDisplayModeEnum || (Atividades_acao_imediataDadosDisplayModeEnum = {}));
//# sourceMappingURL=atividades_acao_imediata_dados.component.js.map