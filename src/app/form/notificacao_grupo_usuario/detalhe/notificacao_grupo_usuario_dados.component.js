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
var Notificacao_grupo_usuarioDadosComponent = (function () {
    function Notificacao_grupo_usuarioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Notificacao_grupo_usuarioDadosDisplayModeEnum;
    }
    Notificacao_grupo_usuarioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Notificacao_grupo_usuarioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Notificacao_grupo_usuarioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Notificacao_grupo_usuarioDadosDisplayModeEnum.Edit;
            break;
    } };
    Notificacao_grupo_usuarioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'notificacao_grupo_usuario-dados', templateUrl: 'notificacao_grupo_usuario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Notificacao_grupo_usuarioDadosComponent);
    return Notificacao_grupo_usuarioDadosComponent;
}());
exports.Notificacao_grupo_usuarioDadosComponent = Notificacao_grupo_usuarioDadosComponent;
var Notificacao_grupo_usuarioDadosDisplayModeEnum;
(function (Notificacao_grupo_usuarioDadosDisplayModeEnum) {
    Notificacao_grupo_usuarioDadosDisplayModeEnum[Notificacao_grupo_usuarioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Notificacao_grupo_usuarioDadosDisplayModeEnum[Notificacao_grupo_usuarioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Notificacao_grupo_usuarioDadosDisplayModeEnum[Notificacao_grupo_usuarioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Notificacao_grupo_usuarioDadosDisplayModeEnum || (Notificacao_grupo_usuarioDadosDisplayModeEnum = {}));
//# sourceMappingURL=notificacao_grupo_usuario_dados.component.js.map