import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { throwError, Observable } from 'rxjs';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //AUTHOR: Kartik Rayavarapu

  getUrl: string = `https://ecfi61snh7.execute-api.us-east-1.amazonaws.com/test/getid/test1`

  httpOptions = {
    headers: new HttpHeaders({
      'x-api-key': '3IoVrnoyYf3Ttlft13Eim1r2iBQ9Cf1H8xHlbeZA'
    })
  }
  
  constructor(private http: HttpClient) { }
  //contact data base in this service

  // ngOnInit() {

  // }

  getUserNameConfig(uploadForm:NgForm) {
    //return this.http.get(this.getUrl + username);
    //console.log(uploadForm.value)


    return this.http.get<any>(this.getUrl).subscribe()
    // .toPromise().then(response => {
    //   console.log(response)
    // }).catch(e => {
    //   console.log(e)
    // })
    

}

}
