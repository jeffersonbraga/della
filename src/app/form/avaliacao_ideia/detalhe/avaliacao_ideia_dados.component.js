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
var Avaliacao_ideiaDadosComponent = (function () {
    function Avaliacao_ideiaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Avaliacao_ideiaDadosDisplayModeEnum;
    }
    Avaliacao_ideiaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Avaliacao_ideiaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Avaliacao_ideiaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Avaliacao_ideiaDadosDisplayModeEnum.Edit;
            break;
    } };
    Avaliacao_ideiaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'avaliacao_ideia-dados', templateUrl: 'avaliacao_ideia_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Avaliacao_ideiaDadosComponent);
    return Avaliacao_ideiaDadosComponent;
}());
exports.Avaliacao_ideiaDadosComponent = Avaliacao_ideiaDadosComponent;
var Avaliacao_ideiaDadosDisplayModeEnum;
(function (Avaliacao_ideiaDadosDisplayModeEnum) {
    Avaliacao_ideiaDadosDisplayModeEnum[Avaliacao_ideiaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Avaliacao_ideiaDadosDisplayModeEnum[Avaliacao_ideiaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Avaliacao_ideiaDadosDisplayModeEnum[Avaliacao_ideiaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Avaliacao_ideiaDadosDisplayModeEnum || (Avaliacao_ideiaDadosDisplayModeEnum = {}));
//# sourceMappingURL=avaliacao_ideia_dados.component.js.map