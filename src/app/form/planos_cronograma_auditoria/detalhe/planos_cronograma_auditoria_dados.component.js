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
var Planos_cronograma_auditoriaDadosComponent = (function () {
    function Planos_cronograma_auditoriaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Planos_cronograma_auditoriaDadosDisplayModeEnum;
    }
    Planos_cronograma_auditoriaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Planos_cronograma_auditoriaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Planos_cronograma_auditoriaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Planos_cronograma_auditoriaDadosDisplayModeEnum.Edit;
            break;
    } };
    Planos_cronograma_auditoriaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'planos_cronograma_auditoria-dados', templateUrl: 'planos_cronograma_auditoria_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Planos_cronograma_auditoriaDadosComponent);
    return Planos_cronograma_auditoriaDadosComponent;
}());
exports.Planos_cronograma_auditoriaDadosComponent = Planos_cronograma_auditoriaDadosComponent;
var Planos_cronograma_auditoriaDadosDisplayModeEnum;
(function (Planos_cronograma_auditoriaDadosDisplayModeEnum) {
    Planos_cronograma_auditoriaDadosDisplayModeEnum[Planos_cronograma_auditoriaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Planos_cronograma_auditoriaDadosDisplayModeEnum[Planos_cronograma_auditoriaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Planos_cronograma_auditoriaDadosDisplayModeEnum[Planos_cronograma_auditoriaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Planos_cronograma_auditoriaDadosDisplayModeEnum || (Planos_cronograma_auditoriaDadosDisplayModeEnum = {}));
//# sourceMappingURL=planos_cronograma_auditoria_dados.component.js.map