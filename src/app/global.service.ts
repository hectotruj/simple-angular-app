import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Information } from './information';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

const url = 'http://localhost:3000/api/information/';
const headers = new Headers({ 'Content-Type': 'application/json' });
@Injectable()
export class GlobalService {
    constructor(private http: Http) { }

    getById(id: string): Observable<Information> {
        return this.http.get(url + id)
            .map(response => response.json().information as Information);
    }
}