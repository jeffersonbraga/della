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
var Acao_plano_acao_hpDadosComponent = (function () {
    function Acao_plano_acao_hpDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Acao_plano_acao_hpDadosDisplayModeEnum;
    }
    Acao_plano_acao_hpDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Acao_plano_acao_hpDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Acao_plano_acao_hpDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Acao_plano_acao_hpDadosDisplayModeEnum.Edit;
            break;
    } };
    Acao_plano_acao_hpDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'acao_plano_acao_hp-dados', templateUrl: 'acao_plano_acao_hp_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Acao_plano_acao_hpDadosComponent);
    return Acao_plano_acao_hpDadosComponent;
}());
exports.Acao_plano_acao_hpDadosComponent = Acao_plano_acao_hpDadosComponent;
var Acao_plano_acao_hpDadosDisplayModeEnum;
(function (Acao_plano_acao_hpDadosDisplayModeEnum) {
    Acao_plano_acao_hpDadosDisplayModeEnum[Acao_plano_acao_hpDadosDisplayModeEnum["Details"] = 0] = "Details";
    Acao_plano_acao_hpDadosDisplayModeEnum[Acao_plano_acao_hpDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Acao_plano_acao_hpDadosDisplayModeEnum[Acao_plano_acao_hpDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Acao_plano_acao_hpDadosDisplayModeEnum || (Acao_plano_acao_hpDadosDisplayModeEnum = {}));
//# sourceMappingURL=acao_plano_acao_hp_dados.component.js.map