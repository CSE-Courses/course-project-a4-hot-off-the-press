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
  @Input() endPoint: string;
  albums: Album[] = [];

  constructor(private albumListService:AlbumListService) { }

  ngOnInit(): void {
    //this.showAlbums();
    this.mapData();
  }

  mapData() {
    return this.albumListService.getAlbums(this.endPoint).then(data => {
      this.albums = data["Items"].map(alb => {
        const container = new Album();
        container.title = alb.AlbumTitle;
        container.artist = alb.Artist;
        container.date = "";
        container.genre = alb.Genre;
        container.price = alb.Price;
        container.productID = alb.ProductID;
        container.quality = alb.Quality;
        container.image = alb.Image;
        container.lat = alb.Lat;
        container.lng = alb.Lng;
        return container;
      });
    });
  }
}
