import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ControleService } from '../core/services/controle/controle.service';

@Component({ 
  moduleId: module.id,
  selector: 'home', 
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

	constructor(private router: Router, private controleApp: ControleService) {
    this.controleApp.alterarStatusMenuTopo(true);
  }
  
	ngOnInit() {

	}
}