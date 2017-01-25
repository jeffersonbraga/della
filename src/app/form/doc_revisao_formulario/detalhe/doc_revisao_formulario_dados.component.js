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
var Doc_revisao_formularioDadosComponent = (function () {
    function Doc_revisao_formularioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Doc_revisao_formularioDadosDisplayModeEnum;
    }
    Doc_revisao_formularioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Doc_revisao_formularioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Doc_revisao_formularioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Doc_revisao_formularioDadosDisplayModeEnum.Edit;
            break;
    } };
    Doc_revisao_formularioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'doc_revisao_formulario-dados', templateUrl: 'doc_revisao_formulario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Doc_revisao_formularioDadosComponent);
    return Doc_revisao_formularioDadosComponent;
}());
exports.Doc_revisao_formularioDadosComponent = Doc_revisao_formularioDadosComponent;
var Doc_revisao_formularioDadosDisplayModeEnum;
(function (Doc_revisao_formularioDadosDisplayModeEnum) {
    Doc_revisao_formularioDadosDisplayModeEnum[Doc_revisao_formularioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Doc_revisao_formularioDadosDisplayModeEnum[Doc_revisao_formularioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Doc_revisao_formularioDadosDisplayModeEnum[Doc_revisao_formularioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Doc_revisao_formularioDadosDisplayModeEnum || (Doc_revisao_formularioDadosDisplayModeEnum = {}));
//# sourceMappingURL=doc_revisao_formulario_dados.component.js.map