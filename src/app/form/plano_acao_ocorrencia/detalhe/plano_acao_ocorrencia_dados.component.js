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
var Plano_acao_ocorrenciaDadosComponent = (function () {
    function Plano_acao_ocorrenciaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Plano_acao_ocorrenciaDadosDisplayModeEnum;
    }
    Plano_acao_ocorrenciaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Plano_acao_ocorrenciaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Plano_acao_ocorrenciaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Plano_acao_ocorrenciaDadosDisplayModeEnum.Edit;
            break;
    } };
    Plano_acao_ocorrenciaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'plano_acao_ocorrencia-dados', templateUrl: 'plano_acao_ocorrencia_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Plano_acao_ocorrenciaDadosComponent);
    return Plano_acao_ocorrenciaDadosComponent;
}());
exports.Plano_acao_ocorrenciaDadosComponent = Plano_acao_ocorrenciaDadosComponent;
var Plano_acao_ocorrenciaDadosDisplayModeEnum;
(function (Plano_acao_ocorrenciaDadosDisplayModeEnum) {
    Plano_acao_ocorrenciaDadosDisplayModeEnum[Plano_acao_ocorrenciaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Plano_acao_ocorrenciaDadosDisplayModeEnum[Plano_acao_ocorrenciaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Plano_acao_ocorrenciaDadosDisplayModeEnum[Plano_acao_ocorrenciaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Plano_acao_ocorrenciaDadosDisplayModeEnum || (Plano_acao_ocorrenciaDadosDisplayModeEnum = {}));
//# sourceMappingURL=plano_acao_ocorrencia_dados.component.js.map