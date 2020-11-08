import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// AUTHOR: Ben Badaszewski, bmbadasz

@Injectable({
  providedIn: 'root'
})
export class PurchaseNotificationService {
  private baseURL:string = "https://97c2xci62k.execute-api.us-east-2.amazonaws.com/alpha/purchase/";
  private uname:string; //Username of new account
  private dest:string; //Destination email to send to
  private item:string; //Item purchased by user
  
  constructor(private http:HttpClient) {
  }

  public sendNotification(username:string, destEmail:string, itemPurchased:string):Observable<string>{
    this.dest = destEmail;
    this.uname = username;
    this.item = itemPurchased;
    return this.http.get<string>(this.baseURL, {
      params: {
        destination: this.dest,
        username: this.uname,
        item: this.item
      }
    })
  }
}
