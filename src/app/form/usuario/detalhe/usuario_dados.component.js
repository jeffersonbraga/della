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
var UsuarioDadosComponent = (function () {
    function UsuarioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = UsuarioDadosDisplayModeEnum;
    }
    UsuarioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = UsuarioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = UsuarioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = UsuarioDadosDisplayModeEnum.Edit;
            break;
    } };
    UsuarioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'usuario-dados', templateUrl: 'usuario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], UsuarioDadosComponent);
    return UsuarioDadosComponent;
}());
exports.UsuarioDadosComponent = UsuarioDadosComponent;
var UsuarioDadosDisplayModeEnum;
(function (UsuarioDadosDisplayModeEnum) {
    UsuarioDadosDisplayModeEnum[UsuarioDadosDisplayModeEnum["Details"] = 0] = "Details";
    UsuarioDadosDisplayModeEnum[UsuarioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    UsuarioDadosDisplayModeEnum[UsuarioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(UsuarioDadosDisplayModeEnum || (UsuarioDadosDisplayModeEnum = {}));
//# sourceMappingURL=usuario_dados.component.js.map