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
var Campo_agrupadorDadosComponent = (function () {
    function Campo_agrupadorDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Campo_agrupadorDadosDisplayModeEnum;
    }
    Campo_agrupadorDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Campo_agrupadorDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Campo_agrupadorDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Campo_agrupadorDadosDisplayModeEnum.Edit;
            break;
    } };
    Campo_agrupadorDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'campo_agrupador-dados', templateUrl: 'campo_agrupador_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Campo_agrupadorDadosComponent);
    return Campo_agrupadorDadosComponent;
}());
exports.Campo_agrupadorDadosComponent = Campo_agrupadorDadosComponent;
var Campo_agrupadorDadosDisplayModeEnum;
(function (Campo_agrupadorDadosDisplayModeEnum) {
    Campo_agrupadorDadosDisplayModeEnum[Campo_agrupadorDadosDisplayModeEnum["Details"] = 0] = "Details";
    Campo_agrupadorDadosDisplayModeEnum[Campo_agrupadorDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Campo_agrupadorDadosDisplayModeEnum[Campo_agrupadorDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Campo_agrupadorDadosDisplayModeEnum || (Campo_agrupadorDadosDisplayModeEnum = {}));
//# sourceMappingURL=campo_agrupador_dados.component.js.map