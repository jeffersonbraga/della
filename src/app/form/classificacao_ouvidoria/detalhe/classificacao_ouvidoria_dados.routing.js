"use strict";
var router_1 = require('@angular/router');
var classificacao_ouvidoria_dados_component_1 = require('./classificacao_ouvidoria_dados.component');
var classificacao_ouvidoria_dadosDetails_component_1 = require('./classificacao_ouvidoria_dadosDetails.component');
var classificacao_ouvidoria_dadosEdit_component_1 = require('./classificacao_ouvidoria_dadosEdit.component');
var classificacao_ouvidoria_dados_routes = [{ path: '', component: classificacao_ouvidoria_dados_component_1.Classificacao_ouvidoriaDadosComponent, children: [{ path: 'details', component: classificacao_ouvidoria_dadosDetails_component_1.Classificacao_ouvidoriaDadosDetailsComponent }, { path: 'edit', component: classificacao_ouvidoria_dadosEdit_component_1.Classificacao_ouvidoriaDadosEditComponent }] }];
exports.classificacao_ouvidoria_dados_routing = router_1.RouterModule.forChild(classificacao_ouvidoria_dados_routes);
//# sourceMappingURL=classificacao_ouvidoria_dados.routing.js.map