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

  public show:boolean = false;
  public buttonName:any = 'Show';

  addtocart() {
    window.alert('This product has been added to your cart!');
  }
  
  submit() {
    window.alert('Thank you for reviewing this product!');
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  

  constructor(private ips:IndividualProductsService) { }

  ngOnInit(): void {
    this.album = this.ips.get();
  }

  initMap(){}
}
