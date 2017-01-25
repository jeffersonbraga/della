"use strict";
var router_1 = require('@angular/router');
var pergunta_auditoria_dados_component_1 = require('./pergunta_auditoria_dados.component');
var pergunta_auditoria_dadosDetails_component_1 = require('./pergunta_auditoria_dadosDetails.component');
var pergunta_auditoria_dadosEdit_component_1 = require('./pergunta_auditoria_dadosEdit.component');
var pergunta_auditoria_dados_routes = [{ path: '', component: pergunta_auditoria_dados_component_1.Pergunta_auditoriaDadosComponent, children: [{ path: 'details', component: pergunta_auditoria_dadosDetails_component_1.Pergunta_auditoriaDadosDetailsComponent }, { path: 'edit', component: pergunta_auditoria_dadosEdit_component_1.Pergunta_auditoriaDadosEditComponent }] }];
exports.pergunta_auditoria_dados_routing = router_1.RouterModule.forChild(pergunta_auditoria_dados_routes);
//# sourceMappingURL=pergunta_auditoria_dados.routing.js.map