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
 
totalNumber:number = 1
num = 0
  constructor() { 
   
    this.product = {
      id: 1,
      name: "",
      price: 1,
      url: "",
      description: "",
      value: 1
    }
  }

  ngOnInit(): void {
  }

  add(product:Item):void{

    product.value = this.totalNumber;
    this.addproduct.emit(product);
  }
  tlNum(event:any){
    this.totalNumber = event
  }
  item(id:any){
    location.href=`/productdetails/${id}`
    
  }

}
