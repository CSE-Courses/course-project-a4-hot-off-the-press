import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent{

  orderHistoryClicked = true;
  orderHistoryContent = true;

  ngOnInit() {

  }

  orderHistoryBtn() {
    this.orderHistoryClicked = true;
    this.orderHistoryContent = true;
  }

  

  addCard() {

  }

}