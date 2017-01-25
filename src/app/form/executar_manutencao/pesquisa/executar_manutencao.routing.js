"use strict";
var router_1 = require('@angular/router');
var executar_manutencao_component_1 = require('./executar_manutencao.component');
var executar_manutencao_routes = [{ path: 'executar_manutencao*', pathMatch: 'full', redirectTo: '/executar_manutencao' }, { path: 'executar_manutencao', component: executar_manutencao_component_1.Executar_manutencaoComponent }];
exports.executar_manutencao_routing = router_1.RouterModule.forChild(executar_manutencao_routes);
//# sourceMappingURL=executar_manutencao.routing.js.map