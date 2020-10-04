import { Component } from '@angular/core';

import { settings } from '../../models/settings';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})



export class ProductListComponent {
  settings = settings;

  username() {
    window.alert('Your username has been changed!');
  }

  email() {
    window.alert('Your email has been updated!');
  }
  password() {
    window.alert('Your password has been changed!');
  }


}
