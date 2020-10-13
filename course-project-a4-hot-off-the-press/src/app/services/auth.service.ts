import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUrl: string = "https://ecfi61snh7.execute-api.us-east-1.amazonaws.com/test/getid/{username}"

  constructor(private http: HttpClient) { }
  //contact data base in this service

  getAuthentication(username: string, password: string) {
    
  }
}
