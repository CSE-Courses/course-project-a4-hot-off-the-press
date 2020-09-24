import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { HttpClientModule } from '@angular/common/http'
import { NEWRELEASES, BESTSELLERS } from '../../testData'

@Injectable({
  providedIn: 'root'
})
export class AlbumListService {

  constructor() { }

  //TODO: Change this to make a request to the database server
  getAlbums(title:string): Album[] {
    if(title==="New Releases"){
      return NEWRELEASES;
    } else if(title==="Best Sellers"){
      return BESTSELLERS;
    }
    return [];
  }

}
