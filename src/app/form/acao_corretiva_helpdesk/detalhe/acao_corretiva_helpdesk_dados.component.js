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
var Acao_corretiva_helpdeskDadosComponent = (function () {
    function Acao_corretiva_helpdeskDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Acao_corretiva_helpdeskDadosDisplayModeEnum;
    }
    Acao_corretiva_helpdeskDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Acao_corretiva_helpdeskDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Acao_corretiva_helpdeskDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Acao_corretiva_helpdeskDadosDisplayModeEnum.Edit;
            break;
    } };
    Acao_corretiva_helpdeskDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'acao_corretiva_helpdesk-dados', templateUrl: 'acao_corretiva_helpdesk_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Acao_corretiva_helpdeskDadosComponent);
    return Acao_corretiva_helpdeskDadosComponent;
}());
exports.Acao_corretiva_helpdeskDadosComponent = Acao_corretiva_helpdeskDadosComponent;
var Acao_corretiva_helpdeskDadosDisplayModeEnum;
(function (Acao_corretiva_helpdeskDadosDisplayModeEnum) {
    Acao_corretiva_helpdeskDadosDisplayModeEnum[Acao_corretiva_helpdeskDadosDisplayModeEnum["Details"] = 0] = "Details";
    Acao_corretiva_helpdeskDadosDisplayModeEnum[Acao_corretiva_helpdeskDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Acao_corretiva_helpdeskDadosDisplayModeEnum[Acao_corretiva_helpdeskDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Acao_corretiva_helpdeskDadosDisplayModeEnum || (Acao_corretiva_helpdeskDadosDisplayModeEnum = {}));
//# sourceMappingURL=acao_corretiva_helpdesk_dados.component.js.map