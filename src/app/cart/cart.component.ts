import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Item[] = [];

  constructor(private cartService:  CartService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
  }
  clearCart(): void {
    this.cartService.clearCart();
    this.cartList = [];
    alert("Cleared!");
  }

}
