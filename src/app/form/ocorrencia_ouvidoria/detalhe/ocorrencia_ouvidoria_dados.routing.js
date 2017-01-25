"use strict";
var router_1 = require('@angular/router');
var ocorrencia_ouvidoria_dados_component_1 = require('./ocorrencia_ouvidoria_dados.component');
var ocorrencia_ouvidoria_dadosDetails_component_1 = require('./ocorrencia_ouvidoria_dadosDetails.component');
var ocorrencia_ouvidoria_dadosEdit_component_1 = require('./ocorrencia_ouvidoria_dadosEdit.component');
var ocorrencia_ouvidoria_dados_routes = [{ path: '', component: ocorrencia_ouvidoria_dados_component_1.Ocorrencia_ouvidoriaDadosComponent, children: [{ path: 'details', component: ocorrencia_ouvidoria_dadosDetails_component_1.Ocorrencia_ouvidoriaDadosDetailsComponent }, { path: 'edit', component: ocorrencia_ouvidoria_dadosEdit_component_1.Ocorrencia_ouvidoriaDadosEditComponent }] }];
exports.ocorrencia_ouvidoria_dados_routing = router_1.RouterModule.forChild(ocorrencia_ouvidoria_dados_routes);
//# sourceMappingURL=ocorrencia_ouvidoria_dados.routing.js.map