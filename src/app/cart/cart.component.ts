import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Output() user: EventEmitter<string> = new EventEmitter<string>();
  cartList: Item[] = [];
  total: number = 0;
  fullName: string = '';
  address: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
    this.getTotalValue();
    // this.getTotalValue()
  }
  clearCart(): void {
    this.cartService.clearCart();
    this.cartList = [];

    alert('Cleared!');
  }
  getTotalValue() {
    var total = 0;
    this.cartList.forEach(cart => {
      total += cart.price * cart.value;
    });
    return (this.total = total);
  }
  submit() {
    if(this.fullName.length > 3){
      localStorage.setItem('user', this.fullName);
      const toString = this.total.toString();
      localStorage.setItem('price', toString);
    }else{
      alert('please fill in full name')
    }
    location.href='/confirmed'
  }
  remove(d:number){
    alert(d)
  const newCart: Item[] =  this.cartService.getCartList().filter((u)=>{
       this. total = this.total -  (u.price * u.value);
      return u.id != d
    });
    var newtotal = 0
    newCart.forEach(cart => {
      newtotal += cart.price * cart.value;
    });
    this.cartList = newCart;
    localStorage.setItem('cartItems', JSON.stringify(newCart));

    return (this.total = newtotal);
  }
    
}
