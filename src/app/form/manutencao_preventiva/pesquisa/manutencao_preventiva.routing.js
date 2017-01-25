"use strict";
var router_1 = require('@angular/router');
var manutencao_preventiva_component_1 = require('./manutencao_preventiva.component');
var manutencao_preventiva_routes = [{ path: 'manutencao_preventiva*', pathMatch: 'full', redirectTo: '/manutencao_preventiva' }, { path: 'manutencao_preventiva', component: manutencao_preventiva_component_1.Manutencao_preventivaComponent }];
exports.manutencao_preventiva_routing = router_1.RouterModule.forChild(manutencao_preventiva_routes);
//# sourceMappingURL=manutencao_preventiva.routing.js.map