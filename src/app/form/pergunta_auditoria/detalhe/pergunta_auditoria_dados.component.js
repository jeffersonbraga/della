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
var Pergunta_auditoriaDadosComponent = (function () {
    function Pergunta_auditoriaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Pergunta_auditoriaDadosDisplayModeEnum;
    }
    Pergunta_auditoriaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Pergunta_auditoriaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Pergunta_auditoriaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Pergunta_auditoriaDadosDisplayModeEnum.Edit;
            break;
    } };
    Pergunta_auditoriaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'pergunta_auditoria-dados', templateUrl: 'pergunta_auditoria_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Pergunta_auditoriaDadosComponent);
    return Pergunta_auditoriaDadosComponent;
}());
exports.Pergunta_auditoriaDadosComponent = Pergunta_auditoriaDadosComponent;
var Pergunta_auditoriaDadosDisplayModeEnum;
(function (Pergunta_auditoriaDadosDisplayModeEnum) {
    Pergunta_auditoriaDadosDisplayModeEnum[Pergunta_auditoriaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Pergunta_auditoriaDadosDisplayModeEnum[Pergunta_auditoriaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Pergunta_auditoriaDadosDisplayModeEnum[Pergunta_auditoriaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Pergunta_auditoriaDadosDisplayModeEnum || (Pergunta_auditoriaDadosDisplayModeEnum = {}));
//# sourceMappingURL=pergunta_auditoria_dados.component.js.map