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
var Classificacao_helpdeskDadosComponent = (function () {
    function Classificacao_helpdeskDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Classificacao_helpdeskDadosDisplayModeEnum;
    }
    Classificacao_helpdeskDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Classificacao_helpdeskDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Classificacao_helpdeskDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Classificacao_helpdeskDadosDisplayModeEnum.Edit;
            break;
    } };
    Classificacao_helpdeskDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'classificacao_helpdesk-dados', templateUrl: 'classificacao_helpdesk_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Classificacao_helpdeskDadosComponent);
    return Classificacao_helpdeskDadosComponent;
}());
exports.Classificacao_helpdeskDadosComponent = Classificacao_helpdeskDadosComponent;
var Classificacao_helpdeskDadosDisplayModeEnum;
(function (Classificacao_helpdeskDadosDisplayModeEnum) {
    Classificacao_helpdeskDadosDisplayModeEnum[Classificacao_helpdeskDadosDisplayModeEnum["Details"] = 0] = "Details";
    Classificacao_helpdeskDadosDisplayModeEnum[Classificacao_helpdeskDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Classificacao_helpdeskDadosDisplayModeEnum[Classificacao_helpdeskDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Classificacao_helpdeskDadosDisplayModeEnum || (Classificacao_helpdeskDadosDisplayModeEnum = {}));
//# sourceMappingURL=classificacao_helpdesk_dados.component.js.map