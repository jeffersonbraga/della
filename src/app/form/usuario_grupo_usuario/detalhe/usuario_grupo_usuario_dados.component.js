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
var Usuario_grupo_usuarioDadosComponent = (function () {
    function Usuario_grupo_usuarioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Usuario_grupo_usuarioDadosDisplayModeEnum;
    }
    Usuario_grupo_usuarioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Usuario_grupo_usuarioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Usuario_grupo_usuarioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Usuario_grupo_usuarioDadosDisplayModeEnum.Edit;
            break;
    } };
    Usuario_grupo_usuarioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'usuario_grupo_usuario-dados', templateUrl: 'usuario_grupo_usuario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Usuario_grupo_usuarioDadosComponent);
    return Usuario_grupo_usuarioDadosComponent;
}());
exports.Usuario_grupo_usuarioDadosComponent = Usuario_grupo_usuarioDadosComponent;
var Usuario_grupo_usuarioDadosDisplayModeEnum;
(function (Usuario_grupo_usuarioDadosDisplayModeEnum) {
    Usuario_grupo_usuarioDadosDisplayModeEnum[Usuario_grupo_usuarioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Usuario_grupo_usuarioDadosDisplayModeEnum[Usuario_grupo_usuarioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Usuario_grupo_usuarioDadosDisplayModeEnum[Usuario_grupo_usuarioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Usuario_grupo_usuarioDadosDisplayModeEnum || (Usuario_grupo_usuarioDadosDisplayModeEnum = {}));
//# sourceMappingURL=usuario_grupo_usuario_dados.component.js.map