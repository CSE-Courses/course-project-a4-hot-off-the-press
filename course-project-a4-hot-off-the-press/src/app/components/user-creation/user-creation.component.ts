import { Component, OnInit } from '@angular/core';
import { PostAccountService } from '../../services/post-account.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {

  constructor(private Post: PostAccountService) { }

  ngOnInit(): void {
  }

  createAccount(event) {

  }

}
