"use strict";
var router_1 = require('@angular/router');
var categoria_ocorrencia_dados_component_1 = require('./categoria_ocorrencia_dados.component');
var categoria_ocorrencia_dadosDetails_component_1 = require('./categoria_ocorrencia_dadosDetails.component');
var categoria_ocorrencia_dadosEdit_component_1 = require('./categoria_ocorrencia_dadosEdit.component');
var categoria_ocorrencia_dados_routes = [{ path: '', component: categoria_ocorrencia_dados_component_1.Categoria_ocorrenciaDadosComponent, children: [{ path: 'details', component: categoria_ocorrencia_dadosDetails_component_1.Categoria_ocorrenciaDadosDetailsComponent }, { path: 'edit', component: categoria_ocorrencia_dadosEdit_component_1.Categoria_ocorrenciaDadosEditComponent }] }];
exports.categoria_ocorrencia_dados_routing = router_1.RouterModule.forChild(categoria_ocorrencia_dados_routes);
//# sourceMappingURL=categoria_ocorrencia_dados.routing.js.map