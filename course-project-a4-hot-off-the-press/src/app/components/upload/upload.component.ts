import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { FormsModule } from '@angular/forms';

//AUTHOR: Ben Badaszewski, bmbadasz

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']

})
export class UploadComponent implements OnInit {
  model = new Album();
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    return;
  }

}
