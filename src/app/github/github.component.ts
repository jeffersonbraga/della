import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({ 
  moduleId: module.id,
  selector: 'github', 
  templateUrl: 'github.component.html',
  providers : [ GithubService ]
})

export class GithubComponent implements OnInit {

    constructor(private _githubService : GithubService) {
      console.log('GithubCompoenent Init');
    }

  	ngOnInit() {

      this._githubService.getUser()
      .subscribe(users => { 
        console.log(users); 
      });
  	}
}