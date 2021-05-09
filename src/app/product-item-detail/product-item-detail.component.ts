import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  @Input() header: string;
  @Input() productlist:string;
  @Input() cart:string;

  constructor() { 
    this.header = "";
    this.productlist = "";
    this.cart = "";
  }

  ngOnInit(): void {
  }

}
