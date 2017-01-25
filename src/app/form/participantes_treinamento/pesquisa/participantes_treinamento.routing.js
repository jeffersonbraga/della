"use strict";
var router_1 = require('@angular/router');
var participantes_treinamento_component_1 = require('./participantes_treinamento.component');
var participantes_treinamento_routes = [{ path: 'participantes_treinamento*', pathMatch: 'full', redirectTo: '/participantes_treinamento' }, { path: 'participantes_treinamento', component: participantes_treinamento_component_1.Participantes_treinamentoComponent }];
exports.participantes_treinamento_routing = router_1.RouterModule.forChild(participantes_treinamento_routes);
//# sourceMappingURL=participantes_treinamento.routing.js.map