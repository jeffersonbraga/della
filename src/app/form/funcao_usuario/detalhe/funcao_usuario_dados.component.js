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
var Funcao_usuarioDadosComponent = (function () {
    function Funcao_usuarioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Funcao_usuarioDadosDisplayModeEnum;
    }
    Funcao_usuarioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Funcao_usuarioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Funcao_usuarioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Funcao_usuarioDadosDisplayModeEnum.Edit;
            break;
    } };
    Funcao_usuarioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'funcao_usuario-dados', templateUrl: 'funcao_usuario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Funcao_usuarioDadosComponent);
    return Funcao_usuarioDadosComponent;
}());
exports.Funcao_usuarioDadosComponent = Funcao_usuarioDadosComponent;
var Funcao_usuarioDadosDisplayModeEnum;
(function (Funcao_usuarioDadosDisplayModeEnum) {
    Funcao_usuarioDadosDisplayModeEnum[Funcao_usuarioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Funcao_usuarioDadosDisplayModeEnum[Funcao_usuarioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Funcao_usuarioDadosDisplayModeEnum[Funcao_usuarioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Funcao_usuarioDadosDisplayModeEnum || (Funcao_usuarioDadosDisplayModeEnum = {}));
//# sourceMappingURL=funcao_usuario_dados.component.js.map