"use strict";
var router_1 = require('@angular/router');
var escalonamento_usuario_dados_component_1 = require('./escalonamento_usuario_dados.component');
var escalonamento_usuario_dadosDetails_component_1 = require('./escalonamento_usuario_dadosDetails.component');
var escalonamento_usuario_dadosEdit_component_1 = require('./escalonamento_usuario_dadosEdit.component');
var escalonamento_usuario_dados_routes = [{ path: '', component: escalonamento_usuario_dados_component_1.Escalonamento_usuarioDadosComponent, children: [{ path: 'details', component: escalonamento_usuario_dadosDetails_component_1.Escalonamento_usuarioDadosDetailsComponent }, { path: 'edit', component: escalonamento_usuario_dadosEdit_component_1.Escalonamento_usuarioDadosEditComponent }] }];
exports.escalonamento_usuario_dados_routing = router_1.RouterModule.forChild(escalonamento_usuario_dados_routes);
//# sourceMappingURL=escalonamento_usuario_dados.routing.js.map