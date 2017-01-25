import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { LoginService } from '../../app/core/services/login/login.service';
import { ControleService } from '../../app/core/services/controle/controle.service';
import { Usuario } from '../modelo/Usuario';
import { GithubComponent } from '../github/github.component';

@Component({ 
  moduleId: module.id,
  selector: 'login', 
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

	usuario: Usuario;
	
	errorMessage : string = '';
  
  	constructor(private dataService: LoginService, private router: Router, private controleApp: ControleService) {
		this.usuario = new Usuario();
	}
  
  	ngOnInit() {
/*
    this.dataService.getCustomers()
        .subscribe((customers: ICustomer[]) => {
          this.customers = this.filteredCustomers = customers;
        });
*/
  }

	onSubmit() {
		this.dataService.efetuarLogin(this.usuario)
					.subscribe(
						result => this.onLogin(result),
						error =>  this.errorMessage = <any>error);
	}

	onLogin(result : any) {
		if (!result) {
			this.errorMessage = 'Houve um erro ao efetuar o login. ';
		} else {
			this.controleApp.setUsuario(this.usuario)
			this.router.navigate(['/home']);
		}
	}
}