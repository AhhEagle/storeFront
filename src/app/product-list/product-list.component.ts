import { Component, OnInit, EventEmitter } from '@angular/core';
import { Item } from '../models/item';
import { ProductsService } from '../services/products.service'
import { from } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Item[] = [];

  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });;
  }

    addCart(item:Item):void{
      this.cartService.addToCart(item);
    }
   
}
