import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Item;
  @Output() addproduct: EventEmitter<Item> = new EventEmitter;
 

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
  add(product:Item):void{
    this.addproduct.emit(product);

  }

}
