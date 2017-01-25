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
var Grupo_usuarioDadosComponent = (function () {
    function Grupo_usuarioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Grupo_usuarioDadosDisplayModeEnum;
    }
    Grupo_usuarioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Grupo_usuarioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Grupo_usuarioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Grupo_usuarioDadosDisplayModeEnum.Edit;
            break;
    } };
    Grupo_usuarioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'grupo_usuario-dados', templateUrl: 'grupo_usuario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Grupo_usuarioDadosComponent);
    return Grupo_usuarioDadosComponent;
}());
exports.Grupo_usuarioDadosComponent = Grupo_usuarioDadosComponent;
var Grupo_usuarioDadosDisplayModeEnum;
(function (Grupo_usuarioDadosDisplayModeEnum) {
    Grupo_usuarioDadosDisplayModeEnum[Grupo_usuarioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Grupo_usuarioDadosDisplayModeEnum[Grupo_usuarioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Grupo_usuarioDadosDisplayModeEnum[Grupo_usuarioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Grupo_usuarioDadosDisplayModeEnum || (Grupo_usuarioDadosDisplayModeEnum = {}));
//# sourceMappingURL=grupo_usuario_dados.component.js.map