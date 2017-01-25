import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class GithubService {

    private userName = 'jeffersonbraga';
    private client_id = 'b7624be603a5fc36f6c4';
    private client_secret = '02890068dbff14ce1e0f3d7e8cb4baf01e7b01e7';

    constructor(private _http:Http) {
        console.log('Github Service Init');
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.userName).map(res=> res.json());
    }
}