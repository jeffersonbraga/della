import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';

@Component({ moduleId: module.id, selector: 'pessoa-dados', templateUrl: 'pessoa_dados.component.html' })

export class PessoaDadosComponent implements OnInit {
        displayMode: PessoaDadosDisplayModeEnum; displayModeEnum = PessoaDadosDisplayModeEnum;

    constructor(private router: Router) { } ngOnInit() {
        
        const path = this.router.url.split('/')[3];
        
        switch (path) {
            case 'details': 
                this.displayMode = PessoaDadosDisplayModeEnum.Details; break; 
            case 'info':
                this.displayMode = PessoaDadosDisplayModeEnum.Info; break; 
            case 'edit':
                this.displayMode = PessoaDadosDisplayModeEnum.Edit; break;
        }
    }
} enum PessoaDadosDisplayModeEnum { 
    Details = 0, 
    Orders = 1, 
    Edit = 2, 
    Info = 3 
}