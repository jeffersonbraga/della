"use strict";
var router_1 = require('@angular/router');
var config_campo_pesquisa_dados_component_1 = require('./config_campo_pesquisa_dados.component');
var config_campo_pesquisa_dadosDetails_component_1 = require('./config_campo_pesquisa_dadosDetails.component');
var config_campo_pesquisa_dadosEdit_component_1 = require('./config_campo_pesquisa_dadosEdit.component');
var config_campo_pesquisa_dados_routes = [{ path: '', component: config_campo_pesquisa_dados_component_1.Config_campo_pesquisaDadosComponent, children: [{ path: 'details', component: config_campo_pesquisa_dadosDetails_component_1.Config_campo_pesquisaDadosDetailsComponent }, { path: 'edit', component: config_campo_pesquisa_dadosEdit_component_1.Config_campo_pesquisaDadosEditComponent }] }];
exports.config_campo_pesquisa_dados_routing = router_1.RouterModule.forChild(config_campo_pesquisa_dados_routes);
//# sourceMappingURL=config_campo_pesquisa_dados.routing.js.map