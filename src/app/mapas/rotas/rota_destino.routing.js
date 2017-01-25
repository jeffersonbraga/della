"use strict";
var router_1 = require('@angular/router');
var rota_destino_component_1 = require('./rota_destino.component');
var rota_destino_routes = [
    { path: 'rota_destino*', pathMatch: 'full', redirectTo: '/rota_destino' },
    { path: 'rota_destino', component: rota_destino_component_1.Rota_destinoComponent }
];
exports.rota_destino_routing = router_1.RouterModule.forChild(rota_destino_routes);
//# sourceMappingURL=rota_destino.routing.js.map