import { Component, Input, OnInit } from '@angular/core';
import { AlbumListService } from '../../../services/album-list.service'
import { Album } from '../../../models/album'

@Component({
  selector: 'app-individual-products',
  templateUrl: './individual-products.component.html',
  styleUrls: ['./individual-products.component.scss']
})
export class IndividualProductsComponent implements OnInit {
  
  @Input() listTitle: string;
  albums: Album[] = [];

  constructor(private albumListService:AlbumListService) { }

  ngOnInit(): void {
    //this.showAlbums();
    //this.albums = this.albumListService.getAlbums(this.listTitle);
  }

}
