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
var Resposta_auditoriaDadosComponent = (function () {
    function Resposta_auditoriaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Resposta_auditoriaDadosDisplayModeEnum;
    }
    Resposta_auditoriaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Resposta_auditoriaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Resposta_auditoriaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Resposta_auditoriaDadosDisplayModeEnum.Edit;
            break;
    } };
    Resposta_auditoriaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'resposta_auditoria-dados', templateUrl: 'resposta_auditoria_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Resposta_auditoriaDadosComponent);
    return Resposta_auditoriaDadosComponent;
}());
exports.Resposta_auditoriaDadosComponent = Resposta_auditoriaDadosComponent;
var Resposta_auditoriaDadosDisplayModeEnum;
(function (Resposta_auditoriaDadosDisplayModeEnum) {
    Resposta_auditoriaDadosDisplayModeEnum[Resposta_auditoriaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Resposta_auditoriaDadosDisplayModeEnum[Resposta_auditoriaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Resposta_auditoriaDadosDisplayModeEnum[Resposta_auditoriaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Resposta_auditoriaDadosDisplayModeEnum || (Resposta_auditoriaDadosDisplayModeEnum = {}));
//# sourceMappingURL=resposta_auditoria_dados.component.js.map