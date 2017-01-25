"use strict";
var router_1 = require('@angular/router');
var funcao_usuario_dados_component_1 = require('./funcao_usuario_dados.component');
var funcao_usuario_dadosDetails_component_1 = require('./funcao_usuario_dadosDetails.component');
var funcao_usuario_dadosEdit_component_1 = require('./funcao_usuario_dadosEdit.component');
var funcao_usuario_dados_routes = [{ path: '', component: funcao_usuario_dados_component_1.Funcao_usuarioDadosComponent, children: [{ path: 'details', component: funcao_usuario_dadosDetails_component_1.Funcao_usuarioDadosDetailsComponent }, { path: 'edit', component: funcao_usuario_dadosEdit_component_1.Funcao_usuarioDadosEditComponent }] }];
exports.funcao_usuario_dados_routing = router_1.RouterModule.forChild(funcao_usuario_dados_routes);
//# sourceMappingURL=funcao_usuario_dados.routing.js.map