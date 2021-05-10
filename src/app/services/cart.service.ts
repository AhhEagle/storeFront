import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartlist: Item[] = [];

  constructor() {}

  getCartList() {
    const getItems = localStorage.getItem('cartItems');
    if (getItems == null) {
      return [];
    }
    this.cartlist = <Item[]>JSON.parse(getItems);
    return this.cartlist;
  }
  addToCart(cart: Item) {
    const currentCart = this.getCartList();
    currentCart.push(cart);
    localStorage.setItem('cartItems', JSON.stringify(currentCart));
    return this.cartlist;
  }
  clearCart() {
    this.cartlist = [];
    return this.cartlist;
  }
}
