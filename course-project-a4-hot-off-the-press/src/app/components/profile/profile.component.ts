import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { GetAccountService } from '../../services/get-account.service';
//import { GetLoginService } from '../../services/get-login.service';
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:User;
  endPoint:string = "test1";
  image:string = "../../../assets/avi.png"

  constructor(private gas:GetAccountService, private username: LoginComponent) { }

  ngOnInit(): void {
    this.mapData();
  }

  mapData(){
    return this.gas.getUser(this.username.getUsername()).then(data=> {
      const container = new User();
      container.username = data["Username"];
      container.email = data["Email"];
      container.firstName = data["FirstName"];
      container.lastName = data["LastName"];
      this.user = container;
    });
  }

  
  changepic() {
    window.alert('Please choose your desired picture');
  }

}
