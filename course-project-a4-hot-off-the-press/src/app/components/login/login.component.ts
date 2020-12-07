import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
//import { GetLoginService } from '../../services/get-login.service'
import { ProfileComponent } from '../profile/profile.component';
import { JsonPipe } from '@angular/common';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username;
  password: string

  data: any



  constructor(private Auth: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(uploadForm: NgForm) {
    //checking of event is triggered when submitting user and password fields
    // this.data = this.Auth.getUserNameConfig(this.username)
    console.log(uploadForm.value)
    //this.data = this.Auth.getUserNameConfig(uploadForm);
    //console.log(this.data)
    //this.username = document.getElementById("Username");
    this.setUsername(uploadForm.value.Username);
    if (uploadForm.submitted) {
      window.alert("you are logged in as " + uploadForm.value.Username)
      this.route.navigate(['/user-settings'])
    }
    
  }

  setUsername(username) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }

}
