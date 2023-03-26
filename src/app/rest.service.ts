import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  strUrl: string = "http://localhost:8082/api/loginreg";

  //login
  login(loginObj: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };

    const body = JSON.stringify(loginObj)
    return this.http.post(this.strUrl + '/login',body, { 'headers': headers, 'responseType': 'text' })
  }
}
