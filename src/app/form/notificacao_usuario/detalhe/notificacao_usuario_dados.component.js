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
var Notificacao_usuarioDadosComponent = (function () {
    function Notificacao_usuarioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Notificacao_usuarioDadosDisplayModeEnum;
    }
    Notificacao_usuarioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Notificacao_usuarioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Notificacao_usuarioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Notificacao_usuarioDadosDisplayModeEnum.Edit;
            break;
    } };
    Notificacao_usuarioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'notificacao_usuario-dados', templateUrl: 'notificacao_usuario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Notificacao_usuarioDadosComponent);
    return Notificacao_usuarioDadosComponent;
}());
exports.Notificacao_usuarioDadosComponent = Notificacao_usuarioDadosComponent;
var Notificacao_usuarioDadosDisplayModeEnum;
(function (Notificacao_usuarioDadosDisplayModeEnum) {
    Notificacao_usuarioDadosDisplayModeEnum[Notificacao_usuarioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Notificacao_usuarioDadosDisplayModeEnum[Notificacao_usuarioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Notificacao_usuarioDadosDisplayModeEnum[Notificacao_usuarioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Notificacao_usuarioDadosDisplayModeEnum || (Notificacao_usuarioDadosDisplayModeEnum = {}));
//# sourceMappingURL=notificacao_usuario_dados.component.js.map