"use strict";
var router_1 = require('@angular/router');
var grupo_formulario_dados_component_1 = require('./grupo_formulario_dados.component');
var grupo_formulario_dadosDetails_component_1 = require('./grupo_formulario_dadosDetails.component');
var grupo_formulario_dadosEdit_component_1 = require('./grupo_formulario_dadosEdit.component');
var grupo_formulario_dados_routes = [{ path: '', component: grupo_formulario_dados_component_1.Grupo_formularioDadosComponent, children: [{ path: 'details', component: grupo_formulario_dadosDetails_component_1.Grupo_formularioDadosDetailsComponent }, { path: 'edit', component: grupo_formulario_dadosEdit_component_1.Grupo_formularioDadosEditComponent }] }];
exports.grupo_formulario_dados_routing = router_1.RouterModule.forChild(grupo_formulario_dados_routes);
//# sourceMappingURL=grupo_formulario_dados.routing.js.map