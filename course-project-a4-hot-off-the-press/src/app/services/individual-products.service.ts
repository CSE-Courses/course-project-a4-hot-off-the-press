import { Injectable } from '@angular/core';

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

  constructor() { }

    savedData;
    set(data) {
      this.savedData = data
      console.log(this.savedData);
    }
    get() {
      console.log(this.savedData);
      return this.savedData;
    }



}
