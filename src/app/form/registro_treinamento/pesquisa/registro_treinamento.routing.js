"use strict";
var router_1 = require('@angular/router');
var registro_treinamento_component_1 = require('./registro_treinamento.component');
var registro_treinamento_routes = [{ path: 'registro_treinamento*', pathMatch: 'full', redirectTo: '/registro_treinamento' }, { path: 'registro_treinamento', component: registro_treinamento_component_1.Registro_treinamentoComponent }];
exports.registro_treinamento_routing = router_1.RouterModule.forChild(registro_treinamento_routes);
//# sourceMappingURL=registro_treinamento.routing.js.map