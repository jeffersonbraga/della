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
var Produto_servicoDadosComponent = (function () {
    function Produto_servicoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Produto_servicoDadosDisplayModeEnum;
    }
    Produto_servicoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Produto_servicoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Produto_servicoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Produto_servicoDadosDisplayModeEnum.Edit;
            break;
    } };
    Produto_servicoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'produto_servico-dados', templateUrl: 'produto_servico_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Produto_servicoDadosComponent);
    return Produto_servicoDadosComponent;
}());
exports.Produto_servicoDadosComponent = Produto_servicoDadosComponent;
var Produto_servicoDadosDisplayModeEnum;
(function (Produto_servicoDadosDisplayModeEnum) {
    Produto_servicoDadosDisplayModeEnum[Produto_servicoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Produto_servicoDadosDisplayModeEnum[Produto_servicoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Produto_servicoDadosDisplayModeEnum[Produto_servicoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Produto_servicoDadosDisplayModeEnum || (Produto_servicoDadosDisplayModeEnum = {}));
//# sourceMappingURL=produto_servico_dados.component.js.map