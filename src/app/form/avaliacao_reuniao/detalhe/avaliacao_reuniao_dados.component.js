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
var Avaliacao_reuniaoDadosComponent = (function () {
    function Avaliacao_reuniaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Avaliacao_reuniaoDadosDisplayModeEnum;
    }
    Avaliacao_reuniaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Avaliacao_reuniaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Avaliacao_reuniaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Avaliacao_reuniaoDadosDisplayModeEnum.Edit;
            break;
    } };
    Avaliacao_reuniaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'avaliacao_reuniao-dados', templateUrl: 'avaliacao_reuniao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Avaliacao_reuniaoDadosComponent);
    return Avaliacao_reuniaoDadosComponent;
}());
exports.Avaliacao_reuniaoDadosComponent = Avaliacao_reuniaoDadosComponent;
var Avaliacao_reuniaoDadosDisplayModeEnum;
(function (Avaliacao_reuniaoDadosDisplayModeEnum) {
    Avaliacao_reuniaoDadosDisplayModeEnum[Avaliacao_reuniaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Avaliacao_reuniaoDadosDisplayModeEnum[Avaliacao_reuniaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Avaliacao_reuniaoDadosDisplayModeEnum[Avaliacao_reuniaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Avaliacao_reuniaoDadosDisplayModeEnum || (Avaliacao_reuniaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=avaliacao_reuniao_dados.component.js.map