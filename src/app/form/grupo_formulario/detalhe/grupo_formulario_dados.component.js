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
var Grupo_formularioDadosComponent = (function () {
    function Grupo_formularioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Grupo_formularioDadosDisplayModeEnum;
    }
    Grupo_formularioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Grupo_formularioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Grupo_formularioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Grupo_formularioDadosDisplayModeEnum.Edit;
            break;
    } };
    Grupo_formularioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'grupo_formulario-dados', templateUrl: 'grupo_formulario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Grupo_formularioDadosComponent);
    return Grupo_formularioDadosComponent;
}());
exports.Grupo_formularioDadosComponent = Grupo_formularioDadosComponent;
var Grupo_formularioDadosDisplayModeEnum;
(function (Grupo_formularioDadosDisplayModeEnum) {
    Grupo_formularioDadosDisplayModeEnum[Grupo_formularioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Grupo_formularioDadosDisplayModeEnum[Grupo_formularioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Grupo_formularioDadosDisplayModeEnum[Grupo_formularioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Grupo_formularioDadosDisplayModeEnum || (Grupo_formularioDadosDisplayModeEnum = {}));
//# sourceMappingURL=grupo_formulario_dados.component.js.map