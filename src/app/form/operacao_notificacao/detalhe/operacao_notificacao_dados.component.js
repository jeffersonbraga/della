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
var Operacao_notificacaoDadosComponent = (function () {
    function Operacao_notificacaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Operacao_notificacaoDadosDisplayModeEnum;
    }
    Operacao_notificacaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Operacao_notificacaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Operacao_notificacaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Operacao_notificacaoDadosDisplayModeEnum.Edit;
            break;
    } };
    Operacao_notificacaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'operacao_notificacao-dados', templateUrl: 'operacao_notificacao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Operacao_notificacaoDadosComponent);
    return Operacao_notificacaoDadosComponent;
}());
exports.Operacao_notificacaoDadosComponent = Operacao_notificacaoDadosComponent;
var Operacao_notificacaoDadosDisplayModeEnum;
(function (Operacao_notificacaoDadosDisplayModeEnum) {
    Operacao_notificacaoDadosDisplayModeEnum[Operacao_notificacaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Operacao_notificacaoDadosDisplayModeEnum[Operacao_notificacaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Operacao_notificacaoDadosDisplayModeEnum[Operacao_notificacaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Operacao_notificacaoDadosDisplayModeEnum || (Operacao_notificacaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=operacao_notificacao_dados.component.js.map