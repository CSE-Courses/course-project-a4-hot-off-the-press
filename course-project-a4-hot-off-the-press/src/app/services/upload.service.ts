import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { NgForm } from '@angular/forms';

// AUTHOR: Ben Badaszewski, bmbadasz

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  baseURL:string = 'https://ecfi61snh7.execute-api.us-east-1.amazonaws.com';
  endpoint:string = '/test/insertmusic';

  httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      })
    };

  constructor(private http:HttpClient) { }

  sendData(uploadForm:NgForm){
    console.log(uploadForm.value);
    this.http.post(this.baseURL + this.endpoint, uploadForm.value, this.httpOptions).subscribe(data => {console.log("Response: " + data);});
  }
}
