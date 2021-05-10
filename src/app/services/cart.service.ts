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
    const found = currentCart.some(el => el.name == cart.name)
    if(found){
      alert('item already exist')
    }else{
      window.alert(`${cart.name} added to cart!`);
      currentCart.push(cart);
      localStorage.setItem('cartItems', JSON.stringify(currentCart));
    }
  }
  clearCart() {
    this.cartlist = [];
    return this.cartlist;
  }
}
