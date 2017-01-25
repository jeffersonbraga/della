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
var Categoria_ishikawaDadosComponent = (function () {
    function Categoria_ishikawaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Categoria_ishikawaDadosDisplayModeEnum;
    }
    Categoria_ishikawaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Categoria_ishikawaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Categoria_ishikawaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Categoria_ishikawaDadosDisplayModeEnum.Edit;
            break;
    } };
    Categoria_ishikawaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'categoria_ishikawa-dados', templateUrl: 'categoria_ishikawa_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Categoria_ishikawaDadosComponent);
    return Categoria_ishikawaDadosComponent;
}());
exports.Categoria_ishikawaDadosComponent = Categoria_ishikawaDadosComponent;
var Categoria_ishikawaDadosDisplayModeEnum;
(function (Categoria_ishikawaDadosDisplayModeEnum) {
    Categoria_ishikawaDadosDisplayModeEnum[Categoria_ishikawaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Categoria_ishikawaDadosDisplayModeEnum[Categoria_ishikawaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Categoria_ishikawaDadosDisplayModeEnum[Categoria_ishikawaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Categoria_ishikawaDadosDisplayModeEnum || (Categoria_ishikawaDadosDisplayModeEnum = {}));
//# sourceMappingURL=categoria_ishikawa_dados.component.js.map