import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { GetAccountService } from '../../services/get-account.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:User;
  endPoint:string = "test1";
  image:string = "../../../assets/avi.png"

  constructor(private gas:GetAccountService) { }

  ngOnInit(): void {
    this.mapData();
  }

  mapData(){
    return this.gas.getUser(this.endPoint).then(data=> {
      const container = new User();
      container.username = data["Username"];
      container.email = data["Email"];
      container.firstName = data["FirstName"];
      container.lastName = data["LastName"];
      this.user = container;
    });
  }

}
