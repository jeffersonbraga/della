"use strict";
var router_1 = require('@angular/router');
var classificacao_helpdesk_dados_component_1 = require('./classificacao_helpdesk_dados.component');
var classificacao_helpdesk_dadosDetails_component_1 = require('./classificacao_helpdesk_dadosDetails.component');
var classificacao_helpdesk_dadosEdit_component_1 = require('./classificacao_helpdesk_dadosEdit.component');
var classificacao_helpdesk_dados_routes = [{ path: '', component: classificacao_helpdesk_dados_component_1.Classificacao_helpdeskDadosComponent, children: [{ path: 'details', component: classificacao_helpdesk_dadosDetails_component_1.Classificacao_helpdeskDadosDetailsComponent }, { path: 'edit', component: classificacao_helpdesk_dadosEdit_component_1.Classificacao_helpdeskDadosEditComponent }] }];
exports.classificacao_helpdesk_dados_routing = router_1.RouterModule.forChild(classificacao_helpdesk_dados_routes);
//# sourceMappingURL=classificacao_helpdesk_dados.routing.js.map