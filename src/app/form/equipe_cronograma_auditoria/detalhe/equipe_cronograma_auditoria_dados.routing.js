"use strict";
var router_1 = require('@angular/router');
var equipe_cronograma_auditoria_dados_component_1 = require('./equipe_cronograma_auditoria_dados.component');
var equipe_cronograma_auditoria_dadosDetails_component_1 = require('./equipe_cronograma_auditoria_dadosDetails.component');
var equipe_cronograma_auditoria_dadosEdit_component_1 = require('./equipe_cronograma_auditoria_dadosEdit.component');
var equipe_cronograma_auditoria_dados_routes = [{ path: '', component: equipe_cronograma_auditoria_dados_component_1.Equipe_cronograma_auditoriaDadosComponent, children: [{ path: 'details', component: equipe_cronograma_auditoria_dadosDetails_component_1.Equipe_cronograma_auditoriaDadosDetailsComponent }, { path: 'edit', component: equipe_cronograma_auditoria_dadosEdit_component_1.Equipe_cronograma_auditoriaDadosEditComponent }] }];
exports.equipe_cronograma_auditoria_dados_routing = router_1.RouterModule.forChild(equipe_cronograma_auditoria_dados_routes);
//# sourceMappingURL=equipe_cronograma_auditoria_dados.routing.js.map