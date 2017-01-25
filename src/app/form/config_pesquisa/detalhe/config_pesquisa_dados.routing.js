"use strict";
var router_1 = require('@angular/router');
var config_pesquisa_dados_component_1 = require('./config_pesquisa_dados.component');
var config_pesquisa_dadosDetails_component_1 = require('./config_pesquisa_dadosDetails.component');
var config_pesquisa_dadosEdit_component_1 = require('./config_pesquisa_dadosEdit.component');
var config_pesquisa_dados_routes = [{ path: '', component: config_pesquisa_dados_component_1.Config_pesquisaDadosComponent, children: [{ path: 'details', component: config_pesquisa_dadosDetails_component_1.Config_pesquisaDadosDetailsComponent }, { path: 'edit', component: config_pesquisa_dadosEdit_component_1.Config_pesquisaDadosEditComponent }] }];
exports.config_pesquisa_dados_routing = router_1.RouterModule.forChild(config_pesquisa_dados_routes);
//# sourceMappingURL=config_pesquisa_dados.routing.js.map