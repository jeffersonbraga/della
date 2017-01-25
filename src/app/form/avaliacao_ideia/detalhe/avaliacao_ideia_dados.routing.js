"use strict";
var router_1 = require('@angular/router');
var avaliacao_ideia_dados_component_1 = require('./avaliacao_ideia_dados.component');
var avaliacao_ideia_dadosDetails_component_1 = require('./avaliacao_ideia_dadosDetails.component');
var avaliacao_ideia_dadosEdit_component_1 = require('./avaliacao_ideia_dadosEdit.component');
var avaliacao_ideia_dados_routes = [{ path: '', component: avaliacao_ideia_dados_component_1.Avaliacao_ideiaDadosComponent, children: [{ path: 'details', component: avaliacao_ideia_dadosDetails_component_1.Avaliacao_ideiaDadosDetailsComponent }, { path: 'edit', component: avaliacao_ideia_dadosEdit_component_1.Avaliacao_ideiaDadosEditComponent }] }];
exports.avaliacao_ideia_dados_routing = router_1.RouterModule.forChild(avaliacao_ideia_dados_routes);
//# sourceMappingURL=avaliacao_ideia_dados.routing.js.map