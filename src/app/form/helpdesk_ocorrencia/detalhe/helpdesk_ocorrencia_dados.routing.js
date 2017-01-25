"use strict";
var router_1 = require('@angular/router');
var helpdesk_ocorrencia_dados_component_1 = require('./helpdesk_ocorrencia_dados.component');
var helpdesk_ocorrencia_dadosDetails_component_1 = require('./helpdesk_ocorrencia_dadosDetails.component');
var helpdesk_ocorrencia_dadosEdit_component_1 = require('./helpdesk_ocorrencia_dadosEdit.component');
var helpdesk_ocorrencia_dados_routes = [{ path: '', component: helpdesk_ocorrencia_dados_component_1.Helpdesk_ocorrenciaDadosComponent, children: [{ path: 'details', component: helpdesk_ocorrencia_dadosDetails_component_1.Helpdesk_ocorrenciaDadosDetailsComponent }, { path: 'edit', component: helpdesk_ocorrencia_dadosEdit_component_1.Helpdesk_ocorrenciaDadosEditComponent }] }];
exports.helpdesk_ocorrencia_dados_routing = router_1.RouterModule.forChild(helpdesk_ocorrencia_dados_routes);
//# sourceMappingURL=helpdesk_ocorrencia_dados.routing.js.map