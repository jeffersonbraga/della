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
var Conclusao_auditoriaDadosComponent = (function () {
    function Conclusao_auditoriaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Conclusao_auditoriaDadosDisplayModeEnum;
    }
    Conclusao_auditoriaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Conclusao_auditoriaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Conclusao_auditoriaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Conclusao_auditoriaDadosDisplayModeEnum.Edit;
            break;
    } };
    Conclusao_auditoriaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'conclusao_auditoria-dados', templateUrl: 'conclusao_auditoria_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Conclusao_auditoriaDadosComponent);
    return Conclusao_auditoriaDadosComponent;
}());
exports.Conclusao_auditoriaDadosComponent = Conclusao_auditoriaDadosComponent;
var Conclusao_auditoriaDadosDisplayModeEnum;
(function (Conclusao_auditoriaDadosDisplayModeEnum) {
    Conclusao_auditoriaDadosDisplayModeEnum[Conclusao_auditoriaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Conclusao_auditoriaDadosDisplayModeEnum[Conclusao_auditoriaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Conclusao_auditoriaDadosDisplayModeEnum[Conclusao_auditoriaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Conclusao_auditoriaDadosDisplayModeEnum || (Conclusao_auditoriaDadosDisplayModeEnum = {}));
//# sourceMappingURL=conclusao_auditoria_dados.component.js.map