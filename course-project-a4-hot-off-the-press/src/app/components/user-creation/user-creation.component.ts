import { Component, OnInit } from '@angular/core';
import { PostAccountService } from '../../services/post-account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {

  constructor(private Post: PostAccountService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(uploadForm: NgForm) {
    this.Post.sendUserInfo(uploadForm.value)
    console.warn("Succesfully created account: ")
    window.alert("Security Code: " + Math.floor(Math.random() * Math.floor(23145)))
    this.route.navigate(['/'])
  }

  // createAccount(event) {

  // }

}
