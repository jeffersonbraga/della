"use strict";
var router_1 = require('@angular/router');
var atividades_manutencao_component_1 = require('./atividades_manutencao.component');
var atividades_manutencao_routes = [{ path: 'atividades_manutencao*', pathMatch: 'full', redirectTo: '/atividades_manutencao' }, { path: 'atividades_manutencao', component: atividades_manutencao_component_1.Atividades_manutencaoComponent }];
exports.atividades_manutencao_routing = router_1.RouterModule.forChild(atividades_manutencao_routes);
//# sourceMappingURL=atividades_manutencao.routing.js.map