"use strict";
var router_1 = require('@angular/router');
var plano_acao_auditoria_dados_component_1 = require('./plano_acao_auditoria_dados.component');
var plano_acao_auditoria_dadosDetails_component_1 = require('./plano_acao_auditoria_dadosDetails.component');
var plano_acao_auditoria_dadosEdit_component_1 = require('./plano_acao_auditoria_dadosEdit.component');
var plano_acao_auditoria_dados_routes = [{ path: '', component: plano_acao_auditoria_dados_component_1.Plano_acao_auditoriaDadosComponent, children: [{ path: 'details', component: plano_acao_auditoria_dadosDetails_component_1.Plano_acao_auditoriaDadosDetailsComponent }, { path: 'edit', component: plano_acao_auditoria_dadosEdit_component_1.Plano_acao_auditoriaDadosEditComponent }] }];
exports.plano_acao_auditoria_dados_routing = router_1.RouterModule.forChild(plano_acao_auditoria_dados_routes);
//# sourceMappingURL=plano_acao_auditoria_dados.routing.js.map