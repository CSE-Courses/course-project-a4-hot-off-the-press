import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() {}

  ngOnInit() {}

  processForm() {
    const allInfo = `Dear ${this.name}, We have received your feedback "${this.message}". We will send a reply to your email ${this.email} as soon as possible. Thank you!`;
    
    alert(allInfo); 
  }

}