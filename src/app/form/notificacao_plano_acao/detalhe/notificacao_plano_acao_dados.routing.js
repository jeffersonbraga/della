"use strict";
var router_1 = require('@angular/router');
var notificacao_plano_acao_dados_component_1 = require('./notificacao_plano_acao_dados.component');
var notificacao_plano_acao_dadosDetails_component_1 = require('./notificacao_plano_acao_dadosDetails.component');
var notificacao_plano_acao_dadosEdit_component_1 = require('./notificacao_plano_acao_dadosEdit.component');
var notificacao_plano_acao_dados_routes = [{ path: '', component: notificacao_plano_acao_dados_component_1.Notificacao_plano_acaoDadosComponent, children: [{ path: 'details', component: notificacao_plano_acao_dadosDetails_component_1.Notificacao_plano_acaoDadosDetailsComponent }, { path: 'edit', component: notificacao_plano_acao_dadosEdit_component_1.Notificacao_plano_acaoDadosEditComponent }] }];
exports.notificacao_plano_acao_dados_routing = router_1.RouterModule.forChild(notificacao_plano_acao_dados_routes);
//# sourceMappingURL=notificacao_plano_acao_dados.routing.js.map