import { Component, Input, OnInit } from '@angular/core';
import { IndividualProductsService } from '../../../services/individual-products.service'
import { Album } from '../../../models/album'

@Component({
  selector: 'app-individual-products',
  templateUrl: './individual-products.component.html',
  styleUrls: ['./individual-products.component.scss']
})
export class IndividualProductsComponent implements OnInit {
  
  @Input() listTitle: string;
  albums: Album[] = [];

  constructor(private individualproductsservice:IndividualProductsService) { }

  ngOnInit(): void {
   IndividualProductsService.get("Your_Data"); 
  }

}
