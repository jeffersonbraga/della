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
var Plano_acao_auditoriaDadosComponent = (function () {
    function Plano_acao_auditoriaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Plano_acao_auditoriaDadosDisplayModeEnum;
    }
    Plano_acao_auditoriaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Plano_acao_auditoriaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Plano_acao_auditoriaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Plano_acao_auditoriaDadosDisplayModeEnum.Edit;
            break;
    } };
    Plano_acao_auditoriaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'plano_acao_auditoria-dados', templateUrl: 'plano_acao_auditoria_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Plano_acao_auditoriaDadosComponent);
    return Plano_acao_auditoriaDadosComponent;
}());
exports.Plano_acao_auditoriaDadosComponent = Plano_acao_auditoriaDadosComponent;
var Plano_acao_auditoriaDadosDisplayModeEnum;
(function (Plano_acao_auditoriaDadosDisplayModeEnum) {
    Plano_acao_auditoriaDadosDisplayModeEnum[Plano_acao_auditoriaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Plano_acao_auditoriaDadosDisplayModeEnum[Plano_acao_auditoriaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Plano_acao_auditoriaDadosDisplayModeEnum[Plano_acao_auditoriaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Plano_acao_auditoriaDadosDisplayModeEnum || (Plano_acao_auditoriaDadosDisplayModeEnum = {}));
//# sourceMappingURL=plano_acao_auditoria_dados.component.js.map