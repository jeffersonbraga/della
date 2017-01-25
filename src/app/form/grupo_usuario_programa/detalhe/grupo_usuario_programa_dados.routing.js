"use strict";
var router_1 = require('@angular/router');
var grupo_usuario_programa_dados_component_1 = require('./grupo_usuario_programa_dados.component');
var grupo_usuario_programa_dadosDetails_component_1 = require('./grupo_usuario_programa_dadosDetails.component');
var grupo_usuario_programa_dadosEdit_component_1 = require('./grupo_usuario_programa_dadosEdit.component');
var grupo_usuario_programa_dados_routes = [{ path: '', component: grupo_usuario_programa_dados_component_1.Grupo_usuario_programaDadosComponent, children: [{ path: 'details', component: grupo_usuario_programa_dadosDetails_component_1.Grupo_usuario_programaDadosDetailsComponent }, { path: 'edit', component: grupo_usuario_programa_dadosEdit_component_1.Grupo_usuario_programaDadosEditComponent }] }];
exports.grupo_usuario_programa_dados_routing = router_1.RouterModule.forChild(grupo_usuario_programa_dados_routes);
//# sourceMappingURL=grupo_usuario_programa_dados.routing.js.map