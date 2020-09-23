import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(event) {
    //checking of event is triggered when submitting user and password fields
    event.preventDefault()
    console.log(event)
  }

}
