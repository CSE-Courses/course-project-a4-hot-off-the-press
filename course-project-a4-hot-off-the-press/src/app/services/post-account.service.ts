import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PostAccountService {

  baseURL:string = 'https://ecfi61snh7.execute-api.us-east-1.amazonaws.com';
  endpoint:string = '/test/input';

  httpOptions = {
    headers: new HttpHeaders({
      'x-api-key': '3IoVrnoyYf3Ttlft13Eim1r2iBQ9Cf1H8xHlbeZA', 
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  sendUserInfo(uploadForm:NgForm) {
    console.log(uploadForm.value)
    this.http.post(this.baseURL + this.endpoint, uploadForm.value, this.httpOptions).subscribe(data => {console.log("Response: " + data);});
  }
}
