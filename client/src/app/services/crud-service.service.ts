import { Injectable } from '@angular/core';
import { Airline } from '../Models/airline';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable()
export class CrudServiceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' }),
  };
  constructor(private http: HttpClient) { }

  createAirline(obj: any): Observable<any> {
    console.log(obj);
    return this.http.post(environment.url + "/create-airline", obj, this.httpOptions);
  }

  getAirlines(): Observable<any> {
    return this.http.get(environment.url + "/airlines", this.httpOptions);
  }
}
