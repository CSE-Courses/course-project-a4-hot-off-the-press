import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
<<<<<<< HEAD
import { AlbumListService } from 'src/app/services/album-list.service';

//Author: Ben Badaszewski
=======
>>>>>>> 84fdd71870e87049d23a434b10e5f3482957e076

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
  }
  
  public getAlbum(): Album{
    return this.album;
  }
}
