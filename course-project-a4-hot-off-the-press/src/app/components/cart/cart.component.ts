import { Component,OnInit } from '@angular/core';
import { IndividualProductsService } from '../../../app/services/individual-products.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  albums;

  constructor(
    private ips: IndividualProductsService // not sure
    ) { }

  ngOnInit() {
    this.albums = this.ips.getItems();
  }

  CartClicked = true;
  CartContent = true;
  nextClicked = true;
  nextContent = true;

  CartBtn() {
    this.CartClicked = true;
    this.CartContent = true;
  }

  nextBtn(){
    this.nextClicked = true;
    this.nextContent = true;

  }

}