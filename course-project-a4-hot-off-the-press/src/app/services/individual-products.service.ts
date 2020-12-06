import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndividualProductsService {
  static get(arg0: string) {
    throw new Error("Method not implemented.");
  }
  static set(arg0: import("../models/album").Album) {
    throw new Error("Method not implemented.");
  } 

  constructor(private http: HttpClient) { }

  albums = [];

  addtocart(product) {
    this.albums.push(product);
  }

  getItems() {
    return this.albums;
  }

  clearCart() {
    this.albums = [];
    return this.albums;
  }

    savedData:Album;
    set(data:Album) {
      this.savedData = data
    //  console.log(this.savedData);
    }
    get() {
     // console.log(this.savedData);
      return this.savedData;
    }
    
    getShippingPrices() {
      return this.http.get('/assets/shipping.json');
    }


}
