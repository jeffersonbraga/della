"use strict";
var router_1 = require('@angular/router');
var indicador_customizado_dados_component_1 = require('./indicador_customizado_dados.component');
var indicador_customizado_dadosDetails_component_1 = require('./indicador_customizado_dadosDetails.component');
var indicador_customizado_dadosEdit_component_1 = require('./indicador_customizado_dadosEdit.component');
var indicador_customizado_dados_routes = [{ path: '', component: indicador_customizado_dados_component_1.Indicador_customizadoDadosComponent, children: [{ path: 'details', component: indicador_customizado_dadosDetails_component_1.Indicador_customizadoDadosDetailsComponent }, { path: 'edit', component: indicador_customizado_dadosEdit_component_1.Indicador_customizadoDadosEditComponent }] }];
exports.indicador_customizado_dados_routing = router_1.RouterModule.forChild(indicador_customizado_dados_routes);
//# sourceMappingURL=indicador_customizado_dados.routing.js.map