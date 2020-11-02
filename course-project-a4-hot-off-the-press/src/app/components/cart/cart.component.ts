import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent{

  CartClicked = true;
  CartContent = true;
  nextClicked = true;
  nextContent = true;


  ngOnInit() {

  }

  CartBtn() {
    this.CartClicked = true;
    this.CartContent = true;
  }

  nextBtn(){
    this.nextClicked = true;
    this.nextContent = true;

  }
  

  addCard() {

  }

}
