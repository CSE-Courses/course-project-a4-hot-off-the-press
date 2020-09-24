import { Component, Input, OnInit } from '@angular/core';
import { AlbumListService } from '../../../services/album-list.service'
import { Album } from '../../../models/album'

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  /* listTitle - name of the list, albums - albums to be displayed */
  @Input() listTitle: string;
  albums: Album[] = [];

  constructor(private albumListService:AlbumListService) { }

  ngOnInit(): void {
    //this.showAlbums();
    this.albums = this.albumListService.getAlbums(this.listTitle);
  }

  //TODO: Have this show JSON data from database server
  /*
  showAlbums() {
    this.albumListService.getAlbums(this.listTitle).subscribe(data => this.albums = JSON.parse(JSON.stringify(data)));
  }
  */
}
