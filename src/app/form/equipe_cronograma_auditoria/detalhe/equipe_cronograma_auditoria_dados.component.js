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
var Equipe_cronograma_auditoriaDadosComponent = (function () {
    function Equipe_cronograma_auditoriaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Equipe_cronograma_auditoriaDadosDisplayModeEnum;
    }
    Equipe_cronograma_auditoriaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Equipe_cronograma_auditoriaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Equipe_cronograma_auditoriaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Equipe_cronograma_auditoriaDadosDisplayModeEnum.Edit;
            break;
    } };
    Equipe_cronograma_auditoriaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'equipe_cronograma_auditoria-dados', templateUrl: 'equipe_cronograma_auditoria_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Equipe_cronograma_auditoriaDadosComponent);
    return Equipe_cronograma_auditoriaDadosComponent;
}());
exports.Equipe_cronograma_auditoriaDadosComponent = Equipe_cronograma_auditoriaDadosComponent;
var Equipe_cronograma_auditoriaDadosDisplayModeEnum;
(function (Equipe_cronograma_auditoriaDadosDisplayModeEnum) {
    Equipe_cronograma_auditoriaDadosDisplayModeEnum[Equipe_cronograma_auditoriaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Equipe_cronograma_auditoriaDadosDisplayModeEnum[Equipe_cronograma_auditoriaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Equipe_cronograma_auditoriaDadosDisplayModeEnum[Equipe_cronograma_auditoriaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Equipe_cronograma_auditoriaDadosDisplayModeEnum || (Equipe_cronograma_auditoriaDadosDisplayModeEnum = {}));
//# sourceMappingURL=equipe_cronograma_auditoria_dados.component.js.map