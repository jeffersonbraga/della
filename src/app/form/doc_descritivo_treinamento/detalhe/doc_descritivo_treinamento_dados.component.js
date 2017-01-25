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
var Doc_descritivo_treinamentoDadosComponent = (function () {
    function Doc_descritivo_treinamentoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Doc_descritivo_treinamentoDadosDisplayModeEnum;
    }
    Doc_descritivo_treinamentoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Doc_descritivo_treinamentoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Doc_descritivo_treinamentoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Doc_descritivo_treinamentoDadosDisplayModeEnum.Edit;
            break;
    } };
    Doc_descritivo_treinamentoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'doc_descritivo_treinamento-dados', templateUrl: 'doc_descritivo_treinamento_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Doc_descritivo_treinamentoDadosComponent);
    return Doc_descritivo_treinamentoDadosComponent;
}());
exports.Doc_descritivo_treinamentoDadosComponent = Doc_descritivo_treinamentoDadosComponent;
var Doc_descritivo_treinamentoDadosDisplayModeEnum;
(function (Doc_descritivo_treinamentoDadosDisplayModeEnum) {
    Doc_descritivo_treinamentoDadosDisplayModeEnum[Doc_descritivo_treinamentoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Doc_descritivo_treinamentoDadosDisplayModeEnum[Doc_descritivo_treinamentoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Doc_descritivo_treinamentoDadosDisplayModeEnum[Doc_descritivo_treinamentoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Doc_descritivo_treinamentoDadosDisplayModeEnum || (Doc_descritivo_treinamentoDadosDisplayModeEnum = {}));
//# sourceMappingURL=doc_descritivo_treinamento_dados.component.js.map