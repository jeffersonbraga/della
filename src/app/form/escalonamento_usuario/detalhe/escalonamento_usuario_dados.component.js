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
var Escalonamento_usuarioDadosComponent = (function () {
    function Escalonamento_usuarioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Escalonamento_usuarioDadosDisplayModeEnum;
    }
    Escalonamento_usuarioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Escalonamento_usuarioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Escalonamento_usuarioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Escalonamento_usuarioDadosDisplayModeEnum.Edit;
            break;
    } };
    Escalonamento_usuarioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'escalonamento_usuario-dados', templateUrl: 'escalonamento_usuario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Escalonamento_usuarioDadosComponent);
    return Escalonamento_usuarioDadosComponent;
}());
exports.Escalonamento_usuarioDadosComponent = Escalonamento_usuarioDadosComponent;
var Escalonamento_usuarioDadosDisplayModeEnum;
(function (Escalonamento_usuarioDadosDisplayModeEnum) {
    Escalonamento_usuarioDadosDisplayModeEnum[Escalonamento_usuarioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Escalonamento_usuarioDadosDisplayModeEnum[Escalonamento_usuarioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Escalonamento_usuarioDadosDisplayModeEnum[Escalonamento_usuarioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Escalonamento_usuarioDadosDisplayModeEnum || (Escalonamento_usuarioDadosDisplayModeEnum = {}));
//# sourceMappingURL=escalonamento_usuario_dados.component.js.map