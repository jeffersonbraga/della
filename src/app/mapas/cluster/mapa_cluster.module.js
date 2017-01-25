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
var shared_module_1 = require('../../shared/shared.module');
var mapa_cluster_component_1 = require('./mapa_cluster.component');
var mapa_cluster_routing_1 = require('./mapa_cluster.routing');
var Mapa_clusterModule = (function () {
    function Mapa_clusterModule() {
    }
    Mapa_clusterModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, mapa_cluster_routing_1.mapa_cluster_routing, shared_module_1.SharedModule],
            declarations: [mapa_cluster_component_1.Mapa_clusterComponent],
            exports: [mapa_cluster_component_1.Mapa_clusterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Mapa_clusterModule);
    return Mapa_clusterModule;
}());
exports.Mapa_clusterModule = Mapa_clusterModule;
//# sourceMappingURL=mapa_cluster.module.js.map