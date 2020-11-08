import { Injectable } from '@angular/core';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class IndividualProductsService {

  constructor() { }

    savedData:Album;
    set(data:Album) {
      this.savedData = data
      console.log(this.savedData);
    }
    get() {
      console.log(this.savedData);
      return this.savedData;
    }



}
