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
  endPoint:string;

  constructor(private gas:GetAccountService) { }

  ngOnInit(): void {
  }

  mapData(){
    return this.gas.getUser(this.endPoint).then(data=> {
      //TODO: Finish this up
      /*
      this.user.username = data.username;
      this.user.email = data.email;
      this.user.DOB = data.DOB;
      */
    });
  }

}
