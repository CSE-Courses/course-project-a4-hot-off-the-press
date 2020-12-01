import { Component, Input, OnInit } from '@angular/core';
import { IndividualProductsService } from '../../../app/services/individual-products.service'
import { Album } from '../../../app/models/album';
import { map } from 'rxjs/operators';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-individual-products',
  templateUrl: './individual-products.component.html',
  styleUrls: ['./individual-products.component.scss']
})
export class IndividualProductsComponent implements OnInit {
  album: Album;

  addtocart() {
    window.alert('This product has been added to your cart!');
  }

  constructor(private ips:IndividualProductsService) { }

  ngOnInit(): void {
    this.album = this.ips.get();
  }

  initMap(){}
}
