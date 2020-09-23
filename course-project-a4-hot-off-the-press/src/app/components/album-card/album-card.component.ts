import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  album: Album;

  constructor() { }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void {
    this.album = { title: "The Optimist", artist: "Cory Wong", image: "/assets/optimist.jpg" };
  }

}
