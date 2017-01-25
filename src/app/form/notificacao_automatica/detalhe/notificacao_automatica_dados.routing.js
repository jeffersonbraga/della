"use strict";
var router_1 = require('@angular/router');
var notificacao_automatica_dados_component_1 = require('./notificacao_automatica_dados.component');
var notificacao_automatica_dadosDetails_component_1 = require('./notificacao_automatica_dadosDetails.component');
var notificacao_automatica_dadosEdit_component_1 = require('./notificacao_automatica_dadosEdit.component');
var notificacao_automatica_dados_routes = [{ path: '', component: notificacao_automatica_dados_component_1.Notificacao_automaticaDadosComponent, children: [{ path: 'details', component: notificacao_automatica_dadosDetails_component_1.Notificacao_automaticaDadosDetailsComponent }, { path: 'edit', component: notificacao_automatica_dadosEdit_component_1.Notificacao_automaticaDadosEditComponent }] }];
exports.notificacao_automatica_dados_routing = router_1.RouterModule.forChild(notificacao_automatica_dados_routes);
//# sourceMappingURL=notificacao_automatica_dados.routing.js.map