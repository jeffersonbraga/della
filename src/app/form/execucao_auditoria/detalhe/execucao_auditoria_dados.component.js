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
var Execucao_auditoriaDadosComponent = (function () {
    function Execucao_auditoriaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Execucao_auditoriaDadosDisplayModeEnum;
    }
    Execucao_auditoriaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Execucao_auditoriaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Execucao_auditoriaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Execucao_auditoriaDadosDisplayModeEnum.Edit;
            break;
    } };
    Execucao_auditoriaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'execucao_auditoria-dados', templateUrl: 'execucao_auditoria_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Execucao_auditoriaDadosComponent);
    return Execucao_auditoriaDadosComponent;
}());
exports.Execucao_auditoriaDadosComponent = Execucao_auditoriaDadosComponent;
var Execucao_auditoriaDadosDisplayModeEnum;
(function (Execucao_auditoriaDadosDisplayModeEnum) {
    Execucao_auditoriaDadosDisplayModeEnum[Execucao_auditoriaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Execucao_auditoriaDadosDisplayModeEnum[Execucao_auditoriaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Execucao_auditoriaDadosDisplayModeEnum[Execucao_auditoriaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Execucao_auditoriaDadosDisplayModeEnum || (Execucao_auditoriaDadosDisplayModeEnum = {}));
//# sourceMappingURL=execucao_auditoria_dados.component.js.map