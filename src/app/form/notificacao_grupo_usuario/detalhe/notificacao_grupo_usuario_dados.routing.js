"use strict";
var router_1 = require('@angular/router');
var notificacao_grupo_usuario_dados_component_1 = require('./notificacao_grupo_usuario_dados.component');
var notificacao_grupo_usuario_dadosDetails_component_1 = require('./notificacao_grupo_usuario_dadosDetails.component');
var notificacao_grupo_usuario_dadosEdit_component_1 = require('./notificacao_grupo_usuario_dadosEdit.component');
var notificacao_grupo_usuario_dados_routes = [{ path: '', component: notificacao_grupo_usuario_dados_component_1.Notificacao_grupo_usuarioDadosComponent, children: [{ path: 'details', component: notificacao_grupo_usuario_dadosDetails_component_1.Notificacao_grupo_usuarioDadosDetailsComponent }, { path: 'edit', component: notificacao_grupo_usuario_dadosEdit_component_1.Notificacao_grupo_usuarioDadosEditComponent }] }];
exports.notificacao_grupo_usuario_dados_routing = router_1.RouterModule.forChild(notificacao_grupo_usuario_dados_routes);
//# sourceMappingURL=notificacao_grupo_usuario_dados.routing.js.map