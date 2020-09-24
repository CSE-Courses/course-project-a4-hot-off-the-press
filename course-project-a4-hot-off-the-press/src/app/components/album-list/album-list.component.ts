import { Component, Input, OnInit } from '@angular/core';
import { AlbumListService } from '../../services/album-list.service'
import { Album } from '../../models/album'

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  /* listTitle - name of the list, albums - albums to be displayed */
  @Input() listTitle: string;
  albums: Album[];

  constructor(private albumListService:AlbumListService) { }

  ngOnInit(): void {
    this.albums = this.albumListService.getAlbums(this.listTitle);
  }

}
