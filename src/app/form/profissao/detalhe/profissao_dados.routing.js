"use strict";
var router_1 = require('@angular/router');
var profissao_dados_component_1 = require('./profissao_dados.component');
var profissao_dadosDetails_component_1 = require('./profissao_dadosDetails.component');
var profissao_dadosEdit_component_1 = require('./profissao_dadosEdit.component');
var profissao_dados_routes = [{ path: '', component: profissao_dados_component_1.ProfissaoDadosComponent, children: [{ path: 'details', component: profissao_dadosDetails_component_1.ProfissaoDadosDetailsComponent }, { path: 'edit', component: profissao_dadosEdit_component_1.ProfissaoDadosEditComponent }] }];
exports.profissao_dados_routing = router_1.RouterModule.forChild(profissao_dados_routes);
//# sourceMappingURL=profissao_dados.routing.js.map