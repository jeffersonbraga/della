"use strict";
var router_1 = require('@angular/router');
var pessoa_dados_component_1 = require('./pessoa_dados.component');
var pessoa_dadosDetails_component_1 = require('./pessoa_dadosDetails.component');
var pessoa_dadosEdit_component_1 = require('./pessoa_dadosEdit.component');
var pessoa_dadosInfo_component_1 = require('./pessoa_dadosInfo.component');
var pessoa_dados_routes = [
    { path: '', component: pessoa_dados_component_1.PessoaDadosComponent, children: [
            { path: 'details', component: pessoa_dadosDetails_component_1.PessoaDadosDetailsComponent },
            { path: 'edit', component: pessoa_dadosEdit_component_1.PessoaDadosEditComponent },
            { path: 'info', component: pessoa_dadosInfo_component_1.PessoaDadosInfoComponent }
        ]
    }
];
exports.pessoa_dados_routing = router_1.RouterModule.forChild(pessoa_dados_routes);
//# sourceMappingURL=pessoa_dados.routing.js.map