import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { NgForm } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service'

//AUTHOR: Ben Badaszewski, bmbadasz

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']

})
export class UploadComponent implements OnInit {
  model = new Album();
  constructor(private us:UploadService) { }

  ngOnInit(): void {
  }

  onSubmit(uploadForm:NgForm){
    this.us.sendData(uploadForm);
  }

}
