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
var PessoaDadosComponent = (function () {
    function PessoaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = PessoaDadosDisplayModeEnum;
    }
    PessoaDadosComponent.prototype.ngOnInit = function () {
        var path = this.router.url.split('/')[3];
        switch (path) {
            case 'details':
                this.displayMode = PessoaDadosDisplayModeEnum.Details;
                break;
            case 'info':
                this.displayMode = PessoaDadosDisplayModeEnum.Info;
                break;
            case 'edit':
                this.displayMode = PessoaDadosDisplayModeEnum.Edit;
                break;
        }
    };
    PessoaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'pessoa-dados', templateUrl: 'pessoa_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], PessoaDadosComponent);
    return PessoaDadosComponent;
}());
exports.PessoaDadosComponent = PessoaDadosComponent;
var PessoaDadosDisplayModeEnum;
(function (PessoaDadosDisplayModeEnum) {
    PessoaDadosDisplayModeEnum[PessoaDadosDisplayModeEnum["Details"] = 0] = "Details";
    PessoaDadosDisplayModeEnum[PessoaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    PessoaDadosDisplayModeEnum[PessoaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
    PessoaDadosDisplayModeEnum[PessoaDadosDisplayModeEnum["Info"] = 3] = "Info";
})(PessoaDadosDisplayModeEnum || (PessoaDadosDisplayModeEnum = {}));
//# sourceMappingURL=pessoa_dados.component.js.map