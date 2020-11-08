import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndividualProductsService {

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
