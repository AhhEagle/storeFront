import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartlist: Item[] = []

  constructor() { }

  getCartList(){
    return this.cartlist;
  }
  addToCart(cart: Item){
    this.cartlist.push(cart);
    return this.cartlist;
  }
  clearCart(){
    this.cartlist = [];
    return this.cartlist;
  }
}
