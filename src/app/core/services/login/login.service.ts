import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import { Usuario } from '../../../../app/modelo/Usuario';
import { ControleService } from '../controle/controle.service';

@Injectable()
export class LoginService {

	private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

	private data : string;

    _baseUrl: string = '';
    usuario: Usuario;

    constructor(private http: Http, private controleApp: ControleService) { 

    }
    
    getUsuarioSession() : Observable<Usuario[]> {
        /*if (!this.usuario) {
            return this.http.get(this._baseUrl + 'customers.json')
                        .map((res: Response) => {
                            this.usuario = res.json();
                            return this.usuario;
                        })
                        .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.usuario);
        }*/
		
		return null;
    }

    efetuarLogin(usr : Usuario) : Observable<Usuario> {
		this.data = 'nm_usuario=' + encodeURIComponent(usr.nm_usuario) +
							'&ds_senha=' + encodeURIComponent(usr.ds_senha);

		/*return this.http.post('http://192.168.210.106:8181/api/authentication', this.data, {headers: this.headers})
							.toPromise()
							.then(
							response => response.json().data as Usuario)
							.catch(this.handleError);*/
		/*
		return this.http.get('http://192.168.210.106:8181/api/pesquisar/?ds_caminho_classe=br.com.primum.modelo.acao_corretiva.Acao_corretiva')
                    .map(this.extractData)
                    .catch(this.handleError);*/

		return this.http.post(this.controleApp.contexto_aplicacao + '/api/authentication', this.data, {headers: this.headers})
                    .map(this.extractData)
                    .catch(this.handleError);
	}
  
	private extractData(res: Response) {		
		if (res.status == 200) {
			return true;
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
        return Observable.throw(error.json().error || 'Server error');
    }

}
