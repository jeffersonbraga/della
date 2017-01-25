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
var Atividade_acao_pl_hpDadosComponent = (function () {
    function Atividade_acao_pl_hpDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Atividade_acao_pl_hpDadosDisplayModeEnum;
    }
    Atividade_acao_pl_hpDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Atividade_acao_pl_hpDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Atividade_acao_pl_hpDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Atividade_acao_pl_hpDadosDisplayModeEnum.Edit;
            break;
    } };
    Atividade_acao_pl_hpDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atividade_acao_pl_hp-dados', templateUrl: 'atividade_acao_pl_hp_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Atividade_acao_pl_hpDadosComponent);
    return Atividade_acao_pl_hpDadosComponent;
}());
exports.Atividade_acao_pl_hpDadosComponent = Atividade_acao_pl_hpDadosComponent;
var Atividade_acao_pl_hpDadosDisplayModeEnum;
(function (Atividade_acao_pl_hpDadosDisplayModeEnum) {
    Atividade_acao_pl_hpDadosDisplayModeEnum[Atividade_acao_pl_hpDadosDisplayModeEnum["Details"] = 0] = "Details";
    Atividade_acao_pl_hpDadosDisplayModeEnum[Atividade_acao_pl_hpDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Atividade_acao_pl_hpDadosDisplayModeEnum[Atividade_acao_pl_hpDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Atividade_acao_pl_hpDadosDisplayModeEnum || (Atividade_acao_pl_hpDadosDisplayModeEnum = {}));
//# sourceMappingURL=atividade_acao_pl_hp_dados.component.js.map