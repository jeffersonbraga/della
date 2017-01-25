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
var Escalonamento_formularioDadosComponent = (function () {
    function Escalonamento_formularioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Escalonamento_formularioDadosDisplayModeEnum;
    }
    Escalonamento_formularioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Escalonamento_formularioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Escalonamento_formularioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Escalonamento_formularioDadosDisplayModeEnum.Edit;
            break;
    } };
    Escalonamento_formularioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'escalonamento_formulario-dados', templateUrl: 'escalonamento_formulario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Escalonamento_formularioDadosComponent);
    return Escalonamento_formularioDadosComponent;
}());
exports.Escalonamento_formularioDadosComponent = Escalonamento_formularioDadosComponent;
var Escalonamento_formularioDadosDisplayModeEnum;
(function (Escalonamento_formularioDadosDisplayModeEnum) {
    Escalonamento_formularioDadosDisplayModeEnum[Escalonamento_formularioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Escalonamento_formularioDadosDisplayModeEnum[Escalonamento_formularioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Escalonamento_formularioDadosDisplayModeEnum[Escalonamento_formularioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Escalonamento_formularioDadosDisplayModeEnum || (Escalonamento_formularioDadosDisplayModeEnum = {}));
//# sourceMappingURL=escalonamento_formulario_dados.component.js.map