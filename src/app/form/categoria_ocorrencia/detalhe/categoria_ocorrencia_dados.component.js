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
var Categoria_ocorrenciaDadosComponent = (function () {
    function Categoria_ocorrenciaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Categoria_ocorrenciaDadosDisplayModeEnum;
    }
    Categoria_ocorrenciaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Categoria_ocorrenciaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Categoria_ocorrenciaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Categoria_ocorrenciaDadosDisplayModeEnum.Edit;
            break;
    } };
    Categoria_ocorrenciaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'categoria_ocorrencia-dados', templateUrl: 'categoria_ocorrencia_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Categoria_ocorrenciaDadosComponent);
    return Categoria_ocorrenciaDadosComponent;
}());
exports.Categoria_ocorrenciaDadosComponent = Categoria_ocorrenciaDadosComponent;
var Categoria_ocorrenciaDadosDisplayModeEnum;
(function (Categoria_ocorrenciaDadosDisplayModeEnum) {
    Categoria_ocorrenciaDadosDisplayModeEnum[Categoria_ocorrenciaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Categoria_ocorrenciaDadosDisplayModeEnum[Categoria_ocorrenciaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Categoria_ocorrenciaDadosDisplayModeEnum[Categoria_ocorrenciaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Categoria_ocorrenciaDadosDisplayModeEnum || (Categoria_ocorrenciaDadosDisplayModeEnum = {}));
//# sourceMappingURL=categoria_ocorrencia_dados.component.js.map