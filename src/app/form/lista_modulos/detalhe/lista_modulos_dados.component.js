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
var Lista_modulosDadosComponent = (function () {
    function Lista_modulosDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Lista_modulosDadosDisplayModeEnum;
    }
    Lista_modulosDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Lista_modulosDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Lista_modulosDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Lista_modulosDadosDisplayModeEnum.Edit;
            break;
    } };
    Lista_modulosDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'lista_modulos-dados', templateUrl: 'lista_modulos_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Lista_modulosDadosComponent);
    return Lista_modulosDadosComponent;
}());
exports.Lista_modulosDadosComponent = Lista_modulosDadosComponent;
var Lista_modulosDadosDisplayModeEnum;
(function (Lista_modulosDadosDisplayModeEnum) {
    Lista_modulosDadosDisplayModeEnum[Lista_modulosDadosDisplayModeEnum["Details"] = 0] = "Details";
    Lista_modulosDadosDisplayModeEnum[Lista_modulosDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Lista_modulosDadosDisplayModeEnum[Lista_modulosDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Lista_modulosDadosDisplayModeEnum || (Lista_modulosDadosDisplayModeEnum = {}));
//# sourceMappingURL=lista_modulos_dados.component.js.map