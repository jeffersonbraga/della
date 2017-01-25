"use strict";
var router_1 = require('@angular/router');
var grupo_usuario_dados_component_1 = require('./grupo_usuario_dados.component');
var grupo_usuario_dadosDetails_component_1 = require('./grupo_usuario_dadosDetails.component');
var grupo_usuario_dadosEdit_component_1 = require('./grupo_usuario_dadosEdit.component');
var grupo_usuario_dados_routes = [{ path: '', component: grupo_usuario_dados_component_1.Grupo_usuarioDadosComponent, children: [{ path: 'details', component: grupo_usuario_dadosDetails_component_1.Grupo_usuarioDadosDetailsComponent }, { path: 'edit', component: grupo_usuario_dadosEdit_component_1.Grupo_usuarioDadosEditComponent }] }];
exports.grupo_usuario_dados_routing = router_1.RouterModule.forChild(grupo_usuario_dados_routes);
//# sourceMappingURL=grupo_usuario_dados.routing.js.map