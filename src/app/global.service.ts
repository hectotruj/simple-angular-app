import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Information } from './information';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

const url = 'http://localhost:3000/api/information/';
const headers = new Headers({ 'Content-Type': 'application/json' });
@Injectable()
export class GlobalService {
    constructor(private http: Http) { }


    private information_ = new Subject<Information>();
    information$ = this.information_.asObservable();
    getById(id: string): void {
        console.log(id);
        this.http.get(url + id)
            .map(response => response.json().information as Information).subscribe(
            information => {
                this.information_.next(information);
            }
            );
    }//get information
    create(information: Information): void {
        console.log(JSON.stringify(information));
        this.http
            .post(url, JSON.stringify(information), { headers: headers })
            .toPromise()
            .then(res => {
                this.getById(res.json().id)
            });
    }//post information
}