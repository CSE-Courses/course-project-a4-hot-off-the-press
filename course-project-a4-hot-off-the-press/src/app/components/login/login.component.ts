import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string
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
    if (uploadForm.submitted) {
      this.route.navigate(['/user-settings'])
    }
    
  }

}
