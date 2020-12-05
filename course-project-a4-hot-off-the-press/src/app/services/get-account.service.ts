import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAccountService {
  getUrl = "https://ecfi61snh7.execute-api.us-east-1.amazonaws.com/test/getid/";

  constructor(private http:HttpClient) { }

  getUser(endPoint:string){
    return this.http.get(this.getUrl + endPoint).toPromise();
  }
}
