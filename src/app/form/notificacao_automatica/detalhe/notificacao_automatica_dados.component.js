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
var Notificacao_automaticaDadosComponent = (function () {
    function Notificacao_automaticaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Notificacao_automaticaDadosDisplayModeEnum;
    }
    Notificacao_automaticaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Notificacao_automaticaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Notificacao_automaticaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Notificacao_automaticaDadosDisplayModeEnum.Edit;
            break;
    } };
    Notificacao_automaticaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'notificacao_automatica-dados', templateUrl: 'notificacao_automatica_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Notificacao_automaticaDadosComponent);
    return Notificacao_automaticaDadosComponent;
}());
exports.Notificacao_automaticaDadosComponent = Notificacao_automaticaDadosComponent;
var Notificacao_automaticaDadosDisplayModeEnum;
(function (Notificacao_automaticaDadosDisplayModeEnum) {
    Notificacao_automaticaDadosDisplayModeEnum[Notificacao_automaticaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Notificacao_automaticaDadosDisplayModeEnum[Notificacao_automaticaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Notificacao_automaticaDadosDisplayModeEnum[Notificacao_automaticaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Notificacao_automaticaDadosDisplayModeEnum || (Notificacao_automaticaDadosDisplayModeEnum = {}));
//# sourceMappingURL=notificacao_automatica_dados.component.js.map