import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// AUTHOR: Ben Badaszewski, bmbadasz

@Injectable({
  providedIn: 'root'
})
export class SignupNotificationService{
  private baseURL:string = "https://97c2xci62k.execute-api.us-east-2.amazonaws.com/alpha/signup/";
  private uname:string; //Username of new account
  private dest:string; //Destination email to send to
  
  constructor(private http:HttpClient) {
  }

  public sendNotification(username:string, destEmail:string):Observable<string>{
    this.dest = destEmail;
    this.uname = username;
    return this.http.get<string>(this.baseURL, {
      params: {
        destination: this.dest,
        username: this.uname
      }
    })
  }

}
