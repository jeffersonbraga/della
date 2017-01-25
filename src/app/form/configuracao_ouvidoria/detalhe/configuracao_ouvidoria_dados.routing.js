"use strict";
var router_1 = require('@angular/router');
var configuracao_ouvidoria_dados_component_1 = require('./configuracao_ouvidoria_dados.component');
var configuracao_ouvidoria_dadosDetails_component_1 = require('./configuracao_ouvidoria_dadosDetails.component');
var configuracao_ouvidoria_dadosEdit_component_1 = require('./configuracao_ouvidoria_dadosEdit.component');
var configuracao_ouvidoria_dados_routes = [{ path: '', component: configuracao_ouvidoria_dados_component_1.Configuracao_ouvidoriaDadosComponent, children: [{ path: 'details', component: configuracao_ouvidoria_dadosDetails_component_1.Configuracao_ouvidoriaDadosDetailsComponent }, { path: 'edit', component: configuracao_ouvidoria_dadosEdit_component_1.Configuracao_ouvidoriaDadosEditComponent }] }];
exports.configuracao_ouvidoria_dados_routing = router_1.RouterModule.forChild(configuracao_ouvidoria_dados_routes);
//# sourceMappingURL=configuracao_ouvidoria_dados.routing.js.map