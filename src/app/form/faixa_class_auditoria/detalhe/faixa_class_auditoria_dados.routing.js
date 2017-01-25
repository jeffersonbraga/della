"use strict";
var router_1 = require('@angular/router');
var faixa_class_auditoria_dados_component_1 = require('./faixa_class_auditoria_dados.component');
var faixa_class_auditoria_dadosDetails_component_1 = require('./faixa_class_auditoria_dadosDetails.component');
var faixa_class_auditoria_dadosEdit_component_1 = require('./faixa_class_auditoria_dadosEdit.component');
var faixa_class_auditoria_dados_routes = [{ path: '', component: faixa_class_auditoria_dados_component_1.Faixa_class_auditoriaDadosComponent, children: [{ path: 'details', component: faixa_class_auditoria_dadosDetails_component_1.Faixa_class_auditoriaDadosDetailsComponent }, { path: 'edit', component: faixa_class_auditoria_dadosEdit_component_1.Faixa_class_auditoriaDadosEditComponent }] }];
exports.faixa_class_auditoria_dados_routing = router_1.RouterModule.forChild(faixa_class_auditoria_dados_routes);
//# sourceMappingURL=faixa_class_auditoria_dados.routing.js.map