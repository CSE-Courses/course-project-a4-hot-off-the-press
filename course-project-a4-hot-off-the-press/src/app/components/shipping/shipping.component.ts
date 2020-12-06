import { Component, OnInit } from '@angular/core';
import { IndividualProductsService } from '../../../app/services/individual-products.service'


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

    shippingCosts;

  constructor(private ips: IndividualProductsService) { }

  ngOnInit() {
    this.shippingCosts = this.ips.getShippingPrices();
  }

}