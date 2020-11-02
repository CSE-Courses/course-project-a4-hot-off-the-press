import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string
  password: string


  constructor(private Auth: AuthService) { }

  ngOnInit(): void {
  }

  loginUser(event) {
    //checking of event is triggered when submitting user and password fields
    this.Auth.getUserNameConfig(this.username).then(data => {
      console.log(data)
    })
  }

}
