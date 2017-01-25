"use strict";
var router_1 = require('@angular/router');
var revisao_programa_qualidade_dados_component_1 = require('./revisao_programa_qualidade_dados.component');
var revisao_programa_qualidade_dadosDetails_component_1 = require('./revisao_programa_qualidade_dadosDetails.component');
var revisao_programa_qualidade_dadosEdit_component_1 = require('./revisao_programa_qualidade_dadosEdit.component');
var revisao_programa_qualidade_dados_routes = [{ path: '', component: revisao_programa_qualidade_dados_component_1.Revisao_programa_qualidadeDadosComponent, children: [{ path: 'details', component: revisao_programa_qualidade_dadosDetails_component_1.Revisao_programa_qualidadeDadosDetailsComponent }, { path: 'edit', component: revisao_programa_qualidade_dadosEdit_component_1.Revisao_programa_qualidadeDadosEditComponent }] }];
exports.revisao_programa_qualidade_dados_routing = router_1.RouterModule.forChild(revisao_programa_qualidade_dados_routes);
//# sourceMappingURL=revisao_programa_qualidade_dados.routing.js.map