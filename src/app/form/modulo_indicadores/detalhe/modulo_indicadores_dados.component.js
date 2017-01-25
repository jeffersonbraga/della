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
var Modulo_indicadoresDadosComponent = (function () {
    function Modulo_indicadoresDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Modulo_indicadoresDadosDisplayModeEnum;
    }
    Modulo_indicadoresDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Modulo_indicadoresDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Modulo_indicadoresDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Modulo_indicadoresDadosDisplayModeEnum.Edit;
            break;
    } };
    Modulo_indicadoresDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'modulo_indicadores-dados', templateUrl: 'modulo_indicadores_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Modulo_indicadoresDadosComponent);
    return Modulo_indicadoresDadosComponent;
}());
exports.Modulo_indicadoresDadosComponent = Modulo_indicadoresDadosComponent;
var Modulo_indicadoresDadosDisplayModeEnum;
(function (Modulo_indicadoresDadosDisplayModeEnum) {
    Modulo_indicadoresDadosDisplayModeEnum[Modulo_indicadoresDadosDisplayModeEnum["Details"] = 0] = "Details";
    Modulo_indicadoresDadosDisplayModeEnum[Modulo_indicadoresDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Modulo_indicadoresDadosDisplayModeEnum[Modulo_indicadoresDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Modulo_indicadoresDadosDisplayModeEnum || (Modulo_indicadoresDadosDisplayModeEnum = {}));
//# sourceMappingURL=modulo_indicadores_dados.component.js.map