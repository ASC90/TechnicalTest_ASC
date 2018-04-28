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
    //let dataFile = new FormData(obj.img);
    //dataFile.append('avatar', obj.img, obj.img.name);
    console.log(obj);
    //const content = { data: obj.form, img: obj.img };
    return this.http.post(environment.url + "/create-airline", obj, this.httpOptions);
  }
}
