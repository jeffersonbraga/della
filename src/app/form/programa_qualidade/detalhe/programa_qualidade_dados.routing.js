"use strict";
var router_1 = require('@angular/router');
var programa_qualidade_dados_component_1 = require('./programa_qualidade_dados.component');
var programa_qualidade_dadosDetails_component_1 = require('./programa_qualidade_dadosDetails.component');
var programa_qualidade_dadosEdit_component_1 = require('./programa_qualidade_dadosEdit.component');
var programa_qualidade_dados_routes = [{ path: '', component: programa_qualidade_dados_component_1.Programa_qualidadeDadosComponent, children: [{ path: 'details', component: programa_qualidade_dadosDetails_component_1.Programa_qualidadeDadosDetailsComponent }, { path: 'edit', component: programa_qualidade_dadosEdit_component_1.Programa_qualidadeDadosEditComponent }] }];
exports.programa_qualidade_dados_routing = router_1.RouterModule.forChild(programa_qualidade_dados_routes);
//# sourceMappingURL=programa_qualidade_dados.routing.js.map