"use strict";
var router_1 = require('@angular/router');
var notificacao_dados_component_1 = require('./notificacao_dados.component');
var notificacao_dadosDetails_component_1 = require('./notificacao_dadosDetails.component');
var notificacao_dadosEdit_component_1 = require('./notificacao_dadosEdit.component');
var notificacao_dados_routes = [{ path: '', component: notificacao_dados_component_1.NotificacaoDadosComponent, children: [{ path: 'details', component: notificacao_dadosDetails_component_1.NotificacaoDadosDetailsComponent }, { path: 'edit', component: notificacao_dadosEdit_component_1.NotificacaoDadosEditComponent }] }];
exports.notificacao_dados_routing = router_1.RouterModule.forChild(notificacao_dados_routes);
//# sourceMappingURL=notificacao_dados.routing.js.map