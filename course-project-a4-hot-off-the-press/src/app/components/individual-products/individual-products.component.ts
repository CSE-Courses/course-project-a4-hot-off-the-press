import { Component, OnInit } from '@angular/core';
import { IndividualProductsService } from '../../../app/services/individual-products.service'
import { Album } from '../../../app/models/album'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-individual-products',
  templateUrl: './individual-products.component.html',
  styleUrls: ['./individual-products.component.scss']
})
export class IndividualProductsComponent implements OnInit {
  album;


  constructor(
    private route: ActivatedRoute, // Not sure!!!
    private ips:IndividualProductsService
    ) { }

    addtocart(album) {
      this.ips.addtocart(album);
      window.alert('This product has been added to your cart!');
    }

  ngOnInit(): void {
    this.album = this.ips.get(); 
  }



}
