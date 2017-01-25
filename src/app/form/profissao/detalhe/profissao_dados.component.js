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
var ProfissaoDadosComponent = (function () {
    function ProfissaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = ProfissaoDadosDisplayModeEnum;
    }
    ProfissaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = ProfissaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = ProfissaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = ProfissaoDadosDisplayModeEnum.Edit;
            break;
    } };
    ProfissaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'profissao-dados', templateUrl: 'profissao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ProfissaoDadosComponent);
    return ProfissaoDadosComponent;
}());
exports.ProfissaoDadosComponent = ProfissaoDadosComponent;
var ProfissaoDadosDisplayModeEnum;
(function (ProfissaoDadosDisplayModeEnum) {
    ProfissaoDadosDisplayModeEnum[ProfissaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    ProfissaoDadosDisplayModeEnum[ProfissaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    ProfissaoDadosDisplayModeEnum[ProfissaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(ProfissaoDadosDisplayModeEnum || (ProfissaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=profissao_dados.component.js.map