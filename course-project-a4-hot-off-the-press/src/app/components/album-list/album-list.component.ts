import { Component, Input, OnInit } from '@angular/core';
import { ALBUMS } from '../../../testData'

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  @Input() title: string;
  albums = ALBUMS;

  constructor() { }

  ngOnInit(): void {
  }

}
