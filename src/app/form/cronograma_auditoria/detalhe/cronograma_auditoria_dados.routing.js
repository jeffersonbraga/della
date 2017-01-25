"use strict";
var router_1 = require('@angular/router');
var cronograma_auditoria_dados_component_1 = require('./cronograma_auditoria_dados.component');
var cronograma_auditoria_dadosDetails_component_1 = require('./cronograma_auditoria_dadosDetails.component');
var cronograma_auditoria_dadosEdit_component_1 = require('./cronograma_auditoria_dadosEdit.component');
var cronograma_auditoria_dados_routes = [{ path: '', component: cronograma_auditoria_dados_component_1.Cronograma_auditoriaDadosComponent, children: [{ path: 'details', component: cronograma_auditoria_dadosDetails_component_1.Cronograma_auditoriaDadosDetailsComponent }, { path: 'edit', component: cronograma_auditoria_dadosEdit_component_1.Cronograma_auditoriaDadosEditComponent }] }];
exports.cronograma_auditoria_dados_routing = router_1.RouterModule.forChild(cronograma_auditoria_dados_routes);
//# sourceMappingURL=cronograma_auditoria_dados.routing.js.map