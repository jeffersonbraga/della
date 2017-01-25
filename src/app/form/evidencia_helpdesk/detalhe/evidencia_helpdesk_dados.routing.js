"use strict";
var router_1 = require('@angular/router');
var evidencia_helpdesk_dados_component_1 = require('./evidencia_helpdesk_dados.component');
var evidencia_helpdesk_dadosDetails_component_1 = require('./evidencia_helpdesk_dadosDetails.component');
var evidencia_helpdesk_dadosEdit_component_1 = require('./evidencia_helpdesk_dadosEdit.component');
var evidencia_helpdesk_dados_routes = [{ path: '', component: evidencia_helpdesk_dados_component_1.Evidencia_helpdeskDadosComponent, children: [{ path: 'details', component: evidencia_helpdesk_dadosDetails_component_1.Evidencia_helpdeskDadosDetailsComponent }, { path: 'edit', component: evidencia_helpdesk_dadosEdit_component_1.Evidencia_helpdeskDadosEditComponent }] }];
exports.evidencia_helpdesk_dados_routing = router_1.RouterModule.forChild(evidencia_helpdesk_dados_routes);
//# sourceMappingURL=evidencia_helpdesk_dados.routing.js.map