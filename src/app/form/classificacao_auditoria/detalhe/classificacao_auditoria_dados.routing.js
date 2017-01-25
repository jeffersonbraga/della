"use strict";
var router_1 = require('@angular/router');
var classificacao_auditoria_dados_component_1 = require('./classificacao_auditoria_dados.component');
var classificacao_auditoria_dadosDetails_component_1 = require('./classificacao_auditoria_dadosDetails.component');
var classificacao_auditoria_dadosEdit_component_1 = require('./classificacao_auditoria_dadosEdit.component');
var classificacao_auditoria_dados_routes = [{ path: '', component: classificacao_auditoria_dados_component_1.Classificacao_auditoriaDadosComponent, children: [{ path: 'details', component: classificacao_auditoria_dadosDetails_component_1.Classificacao_auditoriaDadosDetailsComponent }, { path: 'edit', component: classificacao_auditoria_dadosEdit_component_1.Classificacao_auditoriaDadosEditComponent }] }];
exports.classificacao_auditoria_dados_routing = router_1.RouterModule.forChild(classificacao_auditoria_dados_routes);
//# sourceMappingURL=classificacao_auditoria_dados.routing.js.map