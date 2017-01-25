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
var Plano_acao_hpDadosComponent = (function () {
    function Plano_acao_hpDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Plano_acao_hpDadosDisplayModeEnum;
    }
    Plano_acao_hpDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Plano_acao_hpDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Plano_acao_hpDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Plano_acao_hpDadosDisplayModeEnum.Edit;
            break;
    } };
    Plano_acao_hpDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'plano_acao_hp-dados', templateUrl: 'plano_acao_hp_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Plano_acao_hpDadosComponent);
    return Plano_acao_hpDadosComponent;
}());
exports.Plano_acao_hpDadosComponent = Plano_acao_hpDadosComponent;
var Plano_acao_hpDadosDisplayModeEnum;
(function (Plano_acao_hpDadosDisplayModeEnum) {
    Plano_acao_hpDadosDisplayModeEnum[Plano_acao_hpDadosDisplayModeEnum["Details"] = 0] = "Details";
    Plano_acao_hpDadosDisplayModeEnum[Plano_acao_hpDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Plano_acao_hpDadosDisplayModeEnum[Plano_acao_hpDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Plano_acao_hpDadosDisplayModeEnum || (Plano_acao_hpDadosDisplayModeEnum = {}));
//# sourceMappingURL=plano_acao_hp_dados.component.js.map