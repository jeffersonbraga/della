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
var Proposta_candidatoDadosComponent = (function () {
    function Proposta_candidatoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Proposta_candidatoDadosDisplayModeEnum;
    }
    Proposta_candidatoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Proposta_candidatoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Proposta_candidatoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Proposta_candidatoDadosDisplayModeEnum.Edit;
            break;
    } };
    Proposta_candidatoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'proposta_candidato-dados', templateUrl: 'proposta_candidato_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Proposta_candidatoDadosComponent);
    return Proposta_candidatoDadosComponent;
}());
exports.Proposta_candidatoDadosComponent = Proposta_candidatoDadosComponent;
var Proposta_candidatoDadosDisplayModeEnum;
(function (Proposta_candidatoDadosDisplayModeEnum) {
    Proposta_candidatoDadosDisplayModeEnum[Proposta_candidatoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Proposta_candidatoDadosDisplayModeEnum[Proposta_candidatoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Proposta_candidatoDadosDisplayModeEnum[Proposta_candidatoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Proposta_candidatoDadosDisplayModeEnum || (Proposta_candidatoDadosDisplayModeEnum = {}));
//# sourceMappingURL=proposta_candidato_dados.component.js.map