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
var Cronograma_auditoriaDadosComponent = (function () {
    function Cronograma_auditoriaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Cronograma_auditoriaDadosDisplayModeEnum;
    }
    Cronograma_auditoriaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Cronograma_auditoriaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Cronograma_auditoriaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Cronograma_auditoriaDadosDisplayModeEnum.Edit;
            break;
    } };
    Cronograma_auditoriaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'cronograma_auditoria-dados', templateUrl: 'cronograma_auditoria_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Cronograma_auditoriaDadosComponent);
    return Cronograma_auditoriaDadosComponent;
}());
exports.Cronograma_auditoriaDadosComponent = Cronograma_auditoriaDadosComponent;
var Cronograma_auditoriaDadosDisplayModeEnum;
(function (Cronograma_auditoriaDadosDisplayModeEnum) {
    Cronograma_auditoriaDadosDisplayModeEnum[Cronograma_auditoriaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Cronograma_auditoriaDadosDisplayModeEnum[Cronograma_auditoriaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Cronograma_auditoriaDadosDisplayModeEnum[Cronograma_auditoriaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Cronograma_auditoriaDadosDisplayModeEnum || (Cronograma_auditoriaDadosDisplayModeEnum = {}));
//# sourceMappingURL=cronograma_auditoria_dados.component.js.map