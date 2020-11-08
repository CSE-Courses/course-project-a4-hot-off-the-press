import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { AlbumListService } from 'src/app/services/album-list.service';
import { IndividualProductsService} from 'src/app/services/individual-products.service'
//Author: Ben Badaszewski

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  /* Album to be displayed on card */
  @Input() album: Album;

  constructor() { }

  ngOnInit(): void {
  }

  public setPlaceholderPic(){
    this.album.image = "../../../../assets/alb.png";
  }

  public onClick(){
    console.log(this.getAlbum());
    IndividualProductsService.set(this.getAlbum());

  }
  
  public getAlbum(): Album{
    return this.album;
  }
}
