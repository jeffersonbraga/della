"use strict";
var router_1 = require('@angular/router');
var notificacao_usuario_dados_component_1 = require('./notificacao_usuario_dados.component');
var notificacao_usuario_dadosDetails_component_1 = require('./notificacao_usuario_dadosDetails.component');
var notificacao_usuario_dadosEdit_component_1 = require('./notificacao_usuario_dadosEdit.component');
var notificacao_usuario_dados_routes = [{ path: '', component: notificacao_usuario_dados_component_1.Notificacao_usuarioDadosComponent, children: [{ path: 'details', component: notificacao_usuario_dadosDetails_component_1.Notificacao_usuarioDadosDetailsComponent }, { path: 'edit', component: notificacao_usuario_dadosEdit_component_1.Notificacao_usuarioDadosEditComponent }] }];
exports.notificacao_usuario_dados_routing = router_1.RouterModule.forChild(notificacao_usuario_dados_routes);
//# sourceMappingURL=notificacao_usuario_dados.routing.js.map