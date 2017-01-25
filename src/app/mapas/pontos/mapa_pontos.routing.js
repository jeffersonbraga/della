"use strict";
var router_1 = require('@angular/router');
var mapa_pontos_component_1 = require('./mapa_pontos.component');
var mapa_pontos_routes = [
    { path: 'mapa_pontos*', pathMatch: 'full', redirectTo: '/mapa_pontos' },
    { path: 'mapa_pontos', component: mapa_pontos_component_1.Mapa_pontosComponent }
];
exports.mapa_pontos_routing = router_1.RouterModule.forChild(mapa_pontos_routes);
//# sourceMappingURL=mapa_pontos.routing.js.map