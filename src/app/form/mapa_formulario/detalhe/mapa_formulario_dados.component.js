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
var Mapa_formularioDadosComponent = (function () {
    function Mapa_formularioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Mapa_formularioDadosDisplayModeEnum;
    }
    Mapa_formularioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Mapa_formularioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Mapa_formularioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Mapa_formularioDadosDisplayModeEnum.Edit;
            break;
    } };
    Mapa_formularioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'mapa_formulario-dados', templateUrl: 'mapa_formulario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Mapa_formularioDadosComponent);
    return Mapa_formularioDadosComponent;
}());
exports.Mapa_formularioDadosComponent = Mapa_formularioDadosComponent;
var Mapa_formularioDadosDisplayModeEnum;
(function (Mapa_formularioDadosDisplayModeEnum) {
    Mapa_formularioDadosDisplayModeEnum[Mapa_formularioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Mapa_formularioDadosDisplayModeEnum[Mapa_formularioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Mapa_formularioDadosDisplayModeEnum[Mapa_formularioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Mapa_formularioDadosDisplayModeEnum || (Mapa_formularioDadosDisplayModeEnum = {}));
//# sourceMappingURL=mapa_formulario_dados.component.js.map