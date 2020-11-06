import { Injectable, ɵɵresolveBody } from '@angular/core';
import { Album } from '../models/album';
import { NEWRELEASES, BESTSELLERS } from '../../testData'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumListService {
  getUrl: string = "https://ecfi61snh7.execute-api.us-east-1.amazonaws.com/test/batchget/";
  endPt: string = "rock";

  constructor(private http: HttpClient) { }

  getAlbums(){
    return this.http.get(this.getUrl + this.endPt).toPromise();
  }
}
