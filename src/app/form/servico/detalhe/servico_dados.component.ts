import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'servico-dados',
    templateUrl: 'servico_dados.component.html'
})

export class ServicoDadosComponent implements OnInit {
    displayMode: ServicoDadosDisplayModeEnum;
    displayModeEnum = ServicoDadosDisplayModeEnum;

    constructor(private router: Router) { }

    ngOnInit() {
        const path = this.router.url.split('/')[3];

        switch (path) {
            case 'details':
                this.displayMode = ServicoDadosDisplayModeEnum.Details; break;
            case 'info':
                this.displayMode = ServicoDadosDisplayModeEnum.Orders; break;
            case 'edit': this.displayMode = ServicoDadosDisplayModeEnum.Edit; break;
        }
    }
}
enum ServicoDadosDisplayModeEnum { Details = 0, Orders = 1, Edit = 2 }