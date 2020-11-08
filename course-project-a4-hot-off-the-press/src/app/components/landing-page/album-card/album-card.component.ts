import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { IndividualProductsService } from 'src/app/services/individual-products.service';
import { Router } from '@angular/router';

//Author: Ben Badaszewski

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  /* Album to be displayed on card */
  @Input() album: Album;

  constructor(private router:Router, private ips:IndividualProductsService) { }

  ngOnInit(): void {
  }

  public setPlaceholderPic(){
    this.album.image = "../../../../assets/alb.png";
  }

  public onClick(){
    this.ips.set(this.getAlbum());
    this.router.navigateByUrl('/details');
  }
  
  public getAlbum(): Album{
    return this.album;
  }
}
