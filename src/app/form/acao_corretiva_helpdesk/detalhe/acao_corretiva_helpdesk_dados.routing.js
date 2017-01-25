"use strict";
var router_1 = require('@angular/router');
var acao_corretiva_helpdesk_dados_component_1 = require('./acao_corretiva_helpdesk_dados.component');
var acao_corretiva_helpdesk_dadosDetails_component_1 = require('./acao_corretiva_helpdesk_dadosDetails.component');
var acao_corretiva_helpdesk_dadosEdit_component_1 = require('./acao_corretiva_helpdesk_dadosEdit.component');
var acao_corretiva_helpdesk_dados_routes = [{ path: '', component: acao_corretiva_helpdesk_dados_component_1.Acao_corretiva_helpdeskDadosComponent, children: [{ path: 'details', component: acao_corretiva_helpdesk_dadosDetails_component_1.Acao_corretiva_helpdeskDadosDetailsComponent }, { path: 'edit', component: acao_corretiva_helpdesk_dadosEdit_component_1.Acao_corretiva_helpdeskDadosEditComponent }] }];
exports.acao_corretiva_helpdesk_dados_routing = router_1.RouterModule.forChild(acao_corretiva_helpdesk_dados_routes);
//# sourceMappingURL=acao_corretiva_helpdesk_dados.routing.js.map