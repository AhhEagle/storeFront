import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Item;

  constructor() { 
    this.product = {
      id: 1,
      name: "",
      price: 1,
      url: "",
      description: ""
    }
  }

  ngOnInit(): void {
  }

}
