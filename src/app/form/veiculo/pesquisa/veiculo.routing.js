"use strict";
var router_1 = require('@angular/router');
var veiculo_component_1 = require('./veiculo.component');
var veiculo_routes = [{ path: 'veiculo*', pathMatch: 'full', redirectTo: '/veiculo' }, { path: 'veiculo', component: veiculo_component_1.VeiculoComponent }];
exports.veiculo_routing = router_1.RouterModule.forChild(veiculo_routes);
//# sourceMappingURL=veiculo.routing.js.map