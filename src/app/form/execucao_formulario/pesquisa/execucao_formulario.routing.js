"use strict";
var router_1 = require('@angular/router');
var execucao_formulario_component_1 = require('./execucao_formulario.component');
var execucao_formulario_routes = [{ path: 'execucao_formulario*', pathMatch: 'full', redirectTo: '/execucao_formulario' }, { path: 'execucao_formulario', component: execucao_formulario_component_1.Execucao_formularioComponent }];
exports.execucao_formulario_routing = router_1.RouterModule.forChild(execucao_formulario_routes);
//# sourceMappingURL=execucao_formulario.routing.js.map