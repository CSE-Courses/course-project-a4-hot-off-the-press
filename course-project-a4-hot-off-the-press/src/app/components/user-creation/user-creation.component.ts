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
    this.Post.sendUserInfo(uploadForm)
    this.route.navigate(['/'])
  }

  // createAccount(event) {

  // }

}
