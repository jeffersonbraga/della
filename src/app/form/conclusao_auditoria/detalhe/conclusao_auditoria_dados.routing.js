"use strict";
var router_1 = require('@angular/router');
var conclusao_auditoria_dados_component_1 = require('./conclusao_auditoria_dados.component');
var conclusao_auditoria_dadosDetails_component_1 = require('./conclusao_auditoria_dadosDetails.component');
var conclusao_auditoria_dadosEdit_component_1 = require('./conclusao_auditoria_dadosEdit.component');
var conclusao_auditoria_dados_routes = [{ path: '', component: conclusao_auditoria_dados_component_1.Conclusao_auditoriaDadosComponent, children: [{ path: 'details', component: conclusao_auditoria_dadosDetails_component_1.Conclusao_auditoriaDadosDetailsComponent }, { path: 'edit', component: conclusao_auditoria_dadosEdit_component_1.Conclusao_auditoriaDadosEditComponent }] }];
exports.conclusao_auditoria_dados_routing = router_1.RouterModule.forChild(conclusao_auditoria_dados_routes);
//# sourceMappingURL=conclusao_auditoria_dados.routing.js.map