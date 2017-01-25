import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import { ObjetoVirtual } from '../../../../app/modelo/ObjetoVirtual';
import { ControleService } from '../controle/controle.service';

@Injectable()
export class CrudService {

	private headers = new Headers({'Content-Type': 'application/json'});

	private data : string;

    _baseUrl: string = '';

    constructor(private http: Http, private controleApp: ControleService) { }

    salvarObjetoCompleto(obj : ObjetoVirtual) : Observable<ObjetoVirtual> {

		return this.http.put( this.controleApp.contexto_aplicacao + '/api/crud', obj, {headers: this.headers})
                    .map(this.extractData)
                    .catch(this.handleError);
	}

    excluirObjetoCompleto(obj : ObjetoVirtual) : Observable<ObjetoVirtual> {

		return this.http.post( this.controleApp.contexto_aplicacao + '/api/excluir', obj, {headers: this.headers})
                    .map(this.extractData)
                    .catch(this.handleError);
	}
  
	private extractData(res: Response) {
		if (res.status == 200) {
			return res.json();
		}
		return false;
	}
    
    private createObservable(data: any) : Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }
    
    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'LSD CRUD Server error');
    }

}