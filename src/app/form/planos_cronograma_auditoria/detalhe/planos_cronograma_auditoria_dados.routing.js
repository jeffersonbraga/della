"use strict";
var router_1 = require('@angular/router');
var planos_cronograma_auditoria_dados_component_1 = require('./planos_cronograma_auditoria_dados.component');
var planos_cronograma_auditoria_dadosDetails_component_1 = require('./planos_cronograma_auditoria_dadosDetails.component');
var planos_cronograma_auditoria_dadosEdit_component_1 = require('./planos_cronograma_auditoria_dadosEdit.component');
var planos_cronograma_auditoria_dados_routes = [{ path: '', component: planos_cronograma_auditoria_dados_component_1.Planos_cronograma_auditoriaDadosComponent, children: [{ path: 'details', component: planos_cronograma_auditoria_dadosDetails_component_1.Planos_cronograma_auditoriaDadosDetailsComponent }, { path: 'edit', component: planos_cronograma_auditoria_dadosEdit_component_1.Planos_cronograma_auditoriaDadosEditComponent }] }];
exports.planos_cronograma_auditoria_dados_routing = router_1.RouterModule.forChild(planos_cronograma_auditoria_dados_routes);
//# sourceMappingURL=planos_cronograma_auditoria_dados.routing.js.map