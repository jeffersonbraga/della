"use strict";
var router_1 = require('@angular/router');
var cronograma_manutencao_component_1 = require('./cronograma_manutencao.component');
var cronograma_manutencao_routes = [{ path: 'cronograma_manutencao*', pathMatch: 'full', redirectTo: '/cronograma_manutencao' }, { path: 'cronograma_manutencao', component: cronograma_manutencao_component_1.Cronograma_manutencaoComponent }];
exports.cronograma_manutencao_routing = router_1.RouterModule.forChild(cronograma_manutencao_routes);
//# sourceMappingURL=cronograma_manutencao.routing.js.map