"use strict";
var router_1 = require('@angular/router');
var ponto_mapa_component_1 = require('./ponto_mapa.component');
var ponto_mapa_routes = [{ path: 'ponto_mapa*', pathMatch: 'full', redirectTo: '/ponto_mapa' }, { path: 'ponto_mapa', component: ponto_mapa_component_1.Ponto_mapaComponent }];
exports.ponto_mapa_routing = router_1.RouterModule.forChild(ponto_mapa_routes);
//# sourceMappingURL=ponto_mapa.routing.js.map