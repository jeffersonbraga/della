"use strict";
var router_1 = require('@angular/router');
var operacao_notificacao_dados_component_1 = require('./operacao_notificacao_dados.component');
var operacao_notificacao_dadosDetails_component_1 = require('./operacao_notificacao_dadosDetails.component');
var operacao_notificacao_dadosEdit_component_1 = require('./operacao_notificacao_dadosEdit.component');
var operacao_notificacao_dados_routes = [{ path: '', component: operacao_notificacao_dados_component_1.Operacao_notificacaoDadosComponent, children: [{ path: 'details', component: operacao_notificacao_dadosDetails_component_1.Operacao_notificacaoDadosDetailsComponent }, { path: 'edit', component: operacao_notificacao_dadosEdit_component_1.Operacao_notificacaoDadosEditComponent }] }];
exports.operacao_notificacao_dados_routing = router_1.RouterModule.forChild(operacao_notificacao_dados_routes);
//# sourceMappingURL=operacao_notificacao_dados.routing.js.map