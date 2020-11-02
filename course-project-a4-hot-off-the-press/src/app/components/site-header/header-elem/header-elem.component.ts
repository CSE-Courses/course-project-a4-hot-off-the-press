import { Component, Input, OnInit } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-header-elem',
  templateUrl: './header-elem.component.html',
  styleUrls: ['./header-elem.component.scss']
})
export class HeaderElemComponent implements OnInit {
  @Input('imgSrc') imgSrc:string;
  @Input('path') path:string;

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(): void {
    this.imgSrc = this.imgSrc.substr(0, this.imgSrc.length-4);
    this.imgSrc = this.imgSrc.concat("_active.png");
  }

  onMouseOut(): void {
    this.imgSrc = this.imgSrc.substr(0, this.imgSrc.length-11);
    this.imgSrc = this.imgSrc.concat(".png");
  }

}
