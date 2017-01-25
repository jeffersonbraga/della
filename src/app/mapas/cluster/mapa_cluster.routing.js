"use strict";
var router_1 = require('@angular/router');
var mapa_cluster_component_1 = require('./mapa_cluster.component');
var mapa_cluster_routes = [
    { path: 'mapa_cluster*', pathMatch: 'full', redirectTo: '/mapa_cluster' },
    { path: 'mapa_cluster', component: mapa_cluster_component_1.Mapa_clusterComponent }
];
exports.mapa_cluster_routing = router_1.RouterModule.forChild(mapa_cluster_routes);
//# sourceMappingURL=mapa_cluster.routing.js.map