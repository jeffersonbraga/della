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
var Grupo_usuario_programaDadosComponent = (function () {
    function Grupo_usuario_programaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Grupo_usuario_programaDadosDisplayModeEnum;
    }
    Grupo_usuario_programaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Grupo_usuario_programaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Grupo_usuario_programaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Grupo_usuario_programaDadosDisplayModeEnum.Edit;
            break;
    } };
    Grupo_usuario_programaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'grupo_usuario_programa-dados', templateUrl: 'grupo_usuario_programa_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Grupo_usuario_programaDadosComponent);
    return Grupo_usuario_programaDadosComponent;
}());
exports.Grupo_usuario_programaDadosComponent = Grupo_usuario_programaDadosComponent;
var Grupo_usuario_programaDadosDisplayModeEnum;
(function (Grupo_usuario_programaDadosDisplayModeEnum) {
    Grupo_usuario_programaDadosDisplayModeEnum[Grupo_usuario_programaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Grupo_usuario_programaDadosDisplayModeEnum[Grupo_usuario_programaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Grupo_usuario_programaDadosDisplayModeEnum[Grupo_usuario_programaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Grupo_usuario_programaDadosDisplayModeEnum || (Grupo_usuario_programaDadosDisplayModeEnum = {}));
//# sourceMappingURL=grupo_usuario_programa_dados.component.js.map