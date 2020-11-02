import { Injectable, ɵɵresolveBody } from '@angular/core';
import { Album } from '../models/album';
import { NEWRELEASES, BESTSELLERS } from '../../testData'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumListService {


  //getUrl: string = "https://ecfi61snh7.execute-api.us-east-1.amazonaws.com/test/newreleases/Songlines";

  constructor(private http: HttpClient) { }

  //TODO: Change this to make a request to the database server
  getAlbums(title:string){
    //return this.http.get(this.getUrl);


    //Placeholder solution
    if(title==="Best Sellers"){
      return BESTSELLERS;
    } else if (title==="New Releases"){
      return NEWRELEASES;
    }
    return [];
    
  }

}
