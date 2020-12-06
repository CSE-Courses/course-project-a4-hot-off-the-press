import { Component,OnInit } from '@angular/core';
import { IndividualProductsService } from '../../../app/services/individual-products.service';
import { FormBuilder } from '@angular/forms';
import { PurchaseNotificationService } from '../../services/emailNotifications/purchase-notification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  albums;
  checkoutForm;

  constructor(
    private ips: IndividualProductsService, // not sure
    private notificationService: PurchaseNotificationService,
    private formBuilder: FormBuilder,
    ) { 
      this.checkoutForm = this.formBuilder.group({
        username: '',
        Email: '',
        address: ''
      });
    }

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

  onSubmit(customerData) {
    // Process checkout data here
    //this.notificationService.sendNotification(customerData)

    this.albums = this.ips.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
    window.alert('Your order has been submitted!');
  }

}