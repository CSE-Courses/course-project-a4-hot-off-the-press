import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent{

  CartClicked = true;
  CartContent = true;

  ngOnInit() {

  }

  CartBtn() {
    this.CartClicked = true;
    this.CartContent = true;
  }

  

  addCard() {

  }

}