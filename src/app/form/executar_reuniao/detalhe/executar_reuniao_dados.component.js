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
var Executar_reuniaoDadosComponent = (function () {
    function Executar_reuniaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Executar_reuniaoDadosDisplayModeEnum;
    }
    Executar_reuniaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Executar_reuniaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Executar_reuniaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Executar_reuniaoDadosDisplayModeEnum.Edit;
            break;
    } };
    Executar_reuniaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'executar_reuniao-dados', templateUrl: 'executar_reuniao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Executar_reuniaoDadosComponent);
    return Executar_reuniaoDadosComponent;
}());
exports.Executar_reuniaoDadosComponent = Executar_reuniaoDadosComponent;
var Executar_reuniaoDadosDisplayModeEnum;
(function (Executar_reuniaoDadosDisplayModeEnum) {
    Executar_reuniaoDadosDisplayModeEnum[Executar_reuniaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Executar_reuniaoDadosDisplayModeEnum[Executar_reuniaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Executar_reuniaoDadosDisplayModeEnum[Executar_reuniaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Executar_reuniaoDadosDisplayModeEnum || (Executar_reuniaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=executar_reuniao_dados.component.js.map