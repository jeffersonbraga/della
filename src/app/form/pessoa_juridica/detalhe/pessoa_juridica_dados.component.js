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
var Pessoa_juridicaDadosComponent = (function () {
    function Pessoa_juridicaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Pessoa_juridicaDadosDisplayModeEnum;
    }
    Pessoa_juridicaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Pessoa_juridicaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Pessoa_juridicaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Pessoa_juridicaDadosDisplayModeEnum.Edit;
            break;
    } };
    Pessoa_juridicaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'pessoa_juridica-dados', templateUrl: 'pessoa_juridica_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Pessoa_juridicaDadosComponent);
    return Pessoa_juridicaDadosComponent;
}());
exports.Pessoa_juridicaDadosComponent = Pessoa_juridicaDadosComponent;
var Pessoa_juridicaDadosDisplayModeEnum;
(function (Pessoa_juridicaDadosDisplayModeEnum) {
    Pessoa_juridicaDadosDisplayModeEnum[Pessoa_juridicaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Pessoa_juridicaDadosDisplayModeEnum[Pessoa_juridicaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Pessoa_juridicaDadosDisplayModeEnum[Pessoa_juridicaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Pessoa_juridicaDadosDisplayModeEnum || (Pessoa_juridicaDadosDisplayModeEnum = {}));
//# sourceMappingURL=pessoa_juridica_dados.component.js.map