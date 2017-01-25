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
var Notificacao_plano_acaoDadosComponent = (function () {
    function Notificacao_plano_acaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Notificacao_plano_acaoDadosDisplayModeEnum;
    }
    Notificacao_plano_acaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Notificacao_plano_acaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Notificacao_plano_acaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Notificacao_plano_acaoDadosDisplayModeEnum.Edit;
            break;
    } };
    Notificacao_plano_acaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'notificacao_plano_acao-dados', templateUrl: 'notificacao_plano_acao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Notificacao_plano_acaoDadosComponent);
    return Notificacao_plano_acaoDadosComponent;
}());
exports.Notificacao_plano_acaoDadosComponent = Notificacao_plano_acaoDadosComponent;
var Notificacao_plano_acaoDadosDisplayModeEnum;
(function (Notificacao_plano_acaoDadosDisplayModeEnum) {
    Notificacao_plano_acaoDadosDisplayModeEnum[Notificacao_plano_acaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Notificacao_plano_acaoDadosDisplayModeEnum[Notificacao_plano_acaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Notificacao_plano_acaoDadosDisplayModeEnum[Notificacao_plano_acaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Notificacao_plano_acaoDadosDisplayModeEnum || (Notificacao_plano_acaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=notificacao_plano_acao_dados.component.js.map