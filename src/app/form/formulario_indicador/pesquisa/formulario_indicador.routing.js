"use strict";
var router_1 = require('@angular/router');
var formulario_indicador_component_1 = require('./formulario_indicador.component');
var formulario_indicador_routes = [{ path: 'formulario_indicador*', pathMatch: 'full', redirectTo: '/formulario_indicador' }, { path: 'formulario_indicador', component: formulario_indicador_component_1.Formulario_indicadorComponent }];
exports.formulario_indicador_routing = router_1.RouterModule.forChild(formulario_indicador_routes);
//# sourceMappingURL=formulario_indicador.routing.js.map