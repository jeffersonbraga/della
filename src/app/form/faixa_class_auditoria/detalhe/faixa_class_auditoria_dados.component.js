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
var Faixa_class_auditoriaDadosComponent = (function () {
    function Faixa_class_auditoriaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Faixa_class_auditoriaDadosDisplayModeEnum;
    }
    Faixa_class_auditoriaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Faixa_class_auditoriaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Faixa_class_auditoriaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Faixa_class_auditoriaDadosDisplayModeEnum.Edit;
            break;
    } };
    Faixa_class_auditoriaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'faixa_class_auditoria-dados', templateUrl: 'faixa_class_auditoria_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Faixa_class_auditoriaDadosComponent);
    return Faixa_class_auditoriaDadosComponent;
}());
exports.Faixa_class_auditoriaDadosComponent = Faixa_class_auditoriaDadosComponent;
var Faixa_class_auditoriaDadosDisplayModeEnum;
(function (Faixa_class_auditoriaDadosDisplayModeEnum) {
    Faixa_class_auditoriaDadosDisplayModeEnum[Faixa_class_auditoriaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Faixa_class_auditoriaDadosDisplayModeEnum[Faixa_class_auditoriaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Faixa_class_auditoriaDadosDisplayModeEnum[Faixa_class_auditoriaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Faixa_class_auditoriaDadosDisplayModeEnum || (Faixa_class_auditoriaDadosDisplayModeEnum = {}));
//# sourceMappingURL=faixa_class_auditoria_dados.component.js.map