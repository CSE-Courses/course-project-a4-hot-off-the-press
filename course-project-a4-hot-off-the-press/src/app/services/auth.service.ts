import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //AUTHOR: Kartik Rayavarapu

  getUrl: string = `https://ecfi61snh7.execute-api.us-east-1.amazonaws.com/test/getid/`

  constructor(private http: HttpClient) { }
  //contact data base in this service

  // ngOnInit() {

  // }

  getUserNameConfig(username: string) {
    return this.http.get(this.getUrl + username).toPromise()
    // .then(data => {
    //   console.log(data)
    // })
  }

}


