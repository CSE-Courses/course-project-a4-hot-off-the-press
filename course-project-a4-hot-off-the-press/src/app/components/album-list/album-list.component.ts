import { Component, OnInit } from '@angular/core';
import { ALBUMS } from '../../../testData'

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  title:string = "New Releases";
  albums = ALBUMS;

  constructor() { }

  ngOnInit(): void {
  }

}
