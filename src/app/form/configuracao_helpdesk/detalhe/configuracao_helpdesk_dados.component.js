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
var Configuracao_helpdeskDadosComponent = (function () {
    function Configuracao_helpdeskDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Configuracao_helpdeskDadosDisplayModeEnum;
    }
    Configuracao_helpdeskDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Configuracao_helpdeskDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Configuracao_helpdeskDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Configuracao_helpdeskDadosDisplayModeEnum.Edit;
            break;
    } };
    Configuracao_helpdeskDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'configuracao_helpdesk-dados', templateUrl: 'configuracao_helpdesk_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Configuracao_helpdeskDadosComponent);
    return Configuracao_helpdeskDadosComponent;
}());
exports.Configuracao_helpdeskDadosComponent = Configuracao_helpdeskDadosComponent;
var Configuracao_helpdeskDadosDisplayModeEnum;
(function (Configuracao_helpdeskDadosDisplayModeEnum) {
    Configuracao_helpdeskDadosDisplayModeEnum[Configuracao_helpdeskDadosDisplayModeEnum["Details"] = 0] = "Details";
    Configuracao_helpdeskDadosDisplayModeEnum[Configuracao_helpdeskDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Configuracao_helpdeskDadosDisplayModeEnum[Configuracao_helpdeskDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Configuracao_helpdeskDadosDisplayModeEnum || (Configuracao_helpdeskDadosDisplayModeEnum = {}));
//# sourceMappingURL=configuracao_helpdesk_dados.component.js.map