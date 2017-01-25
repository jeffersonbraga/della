"use strict";
var router_1 = require('@angular/router');
var configuracao_helpdesk_dados_component_1 = require('./configuracao_helpdesk_dados.component');
var configuracao_helpdesk_dadosDetails_component_1 = require('./configuracao_helpdesk_dadosDetails.component');
var configuracao_helpdesk_dadosEdit_component_1 = require('./configuracao_helpdesk_dadosEdit.component');
var configuracao_helpdesk_dados_routes = [{ path: '', component: configuracao_helpdesk_dados_component_1.Configuracao_helpdeskDadosComponent, children: [{ path: 'details', component: configuracao_helpdesk_dadosDetails_component_1.Configuracao_helpdeskDadosDetailsComponent }, { path: 'edit', component: configuracao_helpdesk_dadosEdit_component_1.Configuracao_helpdeskDadosEditComponent }] }];
exports.configuracao_helpdesk_dados_routing = router_1.RouterModule.forChild(configuracao_helpdesk_dados_routes);
//# sourceMappingURL=configuracao_helpdesk_dados.routing.js.map