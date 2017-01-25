"use strict";
var router_1 = require('@angular/router');
var diagrama_helpdesk_dados_component_1 = require('./diagrama_helpdesk_dados.component');
var diagrama_helpdesk_dadosDetails_component_1 = require('./diagrama_helpdesk_dadosDetails.component');
var diagrama_helpdesk_dadosEdit_component_1 = require('./diagrama_helpdesk_dadosEdit.component');
var diagrama_helpdesk_dados_routes = [{ path: '', component: diagrama_helpdesk_dados_component_1.Diagrama_helpdeskDadosComponent, children: [{ path: 'details', component: diagrama_helpdesk_dadosDetails_component_1.Diagrama_helpdeskDadosDetailsComponent }, { path: 'edit', component: diagrama_helpdesk_dadosEdit_component_1.Diagrama_helpdeskDadosEditComponent }] }];
exports.diagrama_helpdesk_dados_routing = router_1.RouterModule.forChild(diagrama_helpdesk_dados_routes);
//# sourceMappingURL=diagrama_helpdesk_dados.routing.js.map