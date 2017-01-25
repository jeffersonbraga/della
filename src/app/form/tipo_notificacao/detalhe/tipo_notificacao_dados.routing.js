"use strict";
var router_1 = require('@angular/router');
var tipo_notificacao_dados_component_1 = require('./tipo_notificacao_dados.component');
var tipo_notificacao_dadosDetails_component_1 = require('./tipo_notificacao_dadosDetails.component');
var tipo_notificacao_dadosEdit_component_1 = require('./tipo_notificacao_dadosEdit.component');
var tipo_notificacao_dados_routes = [{ path: '', component: tipo_notificacao_dados_component_1.Tipo_notificacaoDadosComponent, children: [{ path: 'details', component: tipo_notificacao_dadosDetails_component_1.Tipo_notificacaoDadosDetailsComponent }, { path: 'edit', component: tipo_notificacao_dadosEdit_component_1.Tipo_notificacaoDadosEditComponent }] }];
exports.tipo_notificacao_dados_routing = router_1.RouterModule.forChild(tipo_notificacao_dados_routes);
//# sourceMappingURL=tipo_notificacao_dados.routing.js.map