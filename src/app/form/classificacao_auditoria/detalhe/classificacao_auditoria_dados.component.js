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
var Classificacao_auditoriaDadosComponent = (function () {
    function Classificacao_auditoriaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Classificacao_auditoriaDadosDisplayModeEnum;
    }
    Classificacao_auditoriaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Classificacao_auditoriaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Classificacao_auditoriaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Classificacao_auditoriaDadosDisplayModeEnum.Edit;
            break;
    } };
    Classificacao_auditoriaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'classificacao_auditoria-dados', templateUrl: 'classificacao_auditoria_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Classificacao_auditoriaDadosComponent);
    return Classificacao_auditoriaDadosComponent;
}());
exports.Classificacao_auditoriaDadosComponent = Classificacao_auditoriaDadosComponent;
var Classificacao_auditoriaDadosDisplayModeEnum;
(function (Classificacao_auditoriaDadosDisplayModeEnum) {
    Classificacao_auditoriaDadosDisplayModeEnum[Classificacao_auditoriaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Classificacao_auditoriaDadosDisplayModeEnum[Classificacao_auditoriaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Classificacao_auditoriaDadosDisplayModeEnum[Classificacao_auditoriaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Classificacao_auditoriaDadosDisplayModeEnum || (Classificacao_auditoriaDadosDisplayModeEnum = {}));
//# sourceMappingURL=classificacao_auditoria_dados.component.js.map