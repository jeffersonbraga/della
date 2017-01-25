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
var Produto_compraDadosComponent = (function () {
    function Produto_compraDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Produto_compraDadosDisplayModeEnum;
    }
    Produto_compraDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Produto_compraDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Produto_compraDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Produto_compraDadosDisplayModeEnum.Edit;
            break;
    } };
    Produto_compraDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'produto_compra-dados', templateUrl: 'produto_compra_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Produto_compraDadosComponent);
    return Produto_compraDadosComponent;
}());
exports.Produto_compraDadosComponent = Produto_compraDadosComponent;
var Produto_compraDadosDisplayModeEnum;
(function (Produto_compraDadosDisplayModeEnum) {
    Produto_compraDadosDisplayModeEnum[Produto_compraDadosDisplayModeEnum["Details"] = 0] = "Details";
    Produto_compraDadosDisplayModeEnum[Produto_compraDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Produto_compraDadosDisplayModeEnum[Produto_compraDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Produto_compraDadosDisplayModeEnum || (Produto_compraDadosDisplayModeEnum = {}));
//# sourceMappingURL=produto_compra_dados.component.js.map