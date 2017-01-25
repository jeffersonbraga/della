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
var common_1 = require('@angular/common');
var shared_module_1 = require('../../../shared/shared.module');
var pic_component_1 = require('./pic.component');
var pic_routing_1 = require('./pic.routing');
var PicModule = (function () {
    function PicModule() {
    }
    PicModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, pic_routing_1.pic_routing, shared_module_1.SharedModule], declarations: [pic_component_1.PicComponent], exports: [pic_component_1.PicComponent] }), 
        __metadata('design:paramtypes', [])
    ], PicModule);
    return PicModule;
}());
exports.PicModule = PicModule;
//# sourceMappingURL=pic.module.js.map