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

  getAnAirline(id): Observable<any> {
    let params = new HttpParams()
      .set('id', id);
    return this.http.get(environment.url + "/airline", {headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' }),params});
  }

  updateAnAirline(obj: any): Observable<any> {
    let send = Object.assign(obj.form, {_id: obj.id});
    console.log(send);
    return this.http.put(environment.url + "/update-single", send, this.httpOptions);
  }

  deleteAirline(obj: Airline): Observable<any> {
    let params = new HttpParams()
      .set('id', obj._id)
      .set('logo', obj.logo);
    return this.http.delete(environment.url + "/del-airline", {headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' }),params});
  }
}
