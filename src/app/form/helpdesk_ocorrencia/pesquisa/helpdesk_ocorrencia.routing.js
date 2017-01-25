"use strict";
var router_1 = require('@angular/router');
var helpdesk_ocorrencia_component_1 = require('./helpdesk_ocorrencia.component');
var helpdesk_ocorrencia_routes = [{ path: 'helpdesk_ocorrencia*', pathMatch: 'full', redirectTo: '/helpdesk_ocorrencia' }, { path: 'helpdesk_ocorrencia', component: helpdesk_ocorrencia_component_1.Helpdesk_ocorrenciaComponent }];
exports.helpdesk_ocorrencia_routing = router_1.RouterModule.forChild(helpdesk_ocorrencia_routes);
//# sourceMappingURL=helpdesk_ocorrencia.routing.js.map