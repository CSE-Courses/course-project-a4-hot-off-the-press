import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']

})
export class UploadComponent implements OnInit {
  submitted:boolean = false;
  model = new Album();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }
}
