import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { FormsModule, NgForm } from '@angular/forms';

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
  
  onSubmit(uploadForm:NgForm){
    var title:string = uploadForm.value.title;
    var artist:string = uploadForm.value.artist;
    var genre:string = uploadForm.value.genre;
    var quality:string = uploadForm.value.quality;
    var price:number = uploadForm.value.price;
    console.log(title, artist, genre, quality, price);
    return;
  }

}
