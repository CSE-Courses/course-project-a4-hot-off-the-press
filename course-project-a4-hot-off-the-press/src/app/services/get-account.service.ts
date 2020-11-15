import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAccountService {
  getUrl = "";

  constructor(private http:HttpClient) { }

  getUser(endPoint:string){
    return this.http.get(this.getUrl + endPoint).toPromise();
  }
}
