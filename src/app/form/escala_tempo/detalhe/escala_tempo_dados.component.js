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
var Escala_tempoDadosComponent = (function () {
    function Escala_tempoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Escala_tempoDadosDisplayModeEnum;
    }
    Escala_tempoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Escala_tempoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Escala_tempoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Escala_tempoDadosDisplayModeEnum.Edit;
            break;
    } };
    Escala_tempoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'escala_tempo-dados', templateUrl: 'escala_tempo_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Escala_tempoDadosComponent);
    return Escala_tempoDadosComponent;
}());
exports.Escala_tempoDadosComponent = Escala_tempoDadosComponent;
var Escala_tempoDadosDisplayModeEnum;
(function (Escala_tempoDadosDisplayModeEnum) {
    Escala_tempoDadosDisplayModeEnum[Escala_tempoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Escala_tempoDadosDisplayModeEnum[Escala_tempoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Escala_tempoDadosDisplayModeEnum[Escala_tempoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Escala_tempoDadosDisplayModeEnum || (Escala_tempoDadosDisplayModeEnum = {}));
//# sourceMappingURL=escala_tempo_dados.component.js.map