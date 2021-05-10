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
  totalSum: any = '';
  total: number = 0;
  fullName: string = '';
  address: string = '';
  creditCard: string = '';
  num: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
    this.getTotalValue();
  }
  clearCart(): void {
    this.cartService.clearCart();
    this.cartList = [];

    alert('Cleared!');
  }
  getTotalValue() {
    var _total = 0;
    this.cartList.forEach(cart => {
      _total += cart.price * cart.value;
    });
    this.total = _total;
    this.totalSum = Number(_total).toFixed(2);
  }
  submit() {
    if(this.cartList.length >0){
      if (
        this.fullName.length >= 3 &&
        this.address.length >= 6 &&
        this.creditCard.length == 16
      ) {
        localStorage.setItem('user', this.fullName);
        const toString = this.total.toString();
        localStorage.setItem('price', toString);
        location.href = '/confirmed';
      } else {
        alert('please fill in all appropriate information');
      }

    }else{alert('Please add item to cart')}
    
  }
  remove(d: number) {
    const newCart: Item[] = this.cartService.getCartList().filter(u => {
      this.total = this.total - (u.price * u.value);
      return u.id != d;
    });
    var newtotal = 0;
    newCart.forEach(cart => {
      newtotal += cart.price * cart.value;
    });
    this.cartList = newCart;
    localStorage.setItem('cartItems', JSON.stringify(newCart));  
    return (this.totalSum = newtotal);
  }
  changePrice(e: any) {}

  onCreditCardChange(e: any) {
    // if(this.creditCard.length > 16) {
    //   this.creditCard = this.creditCard.substring(0)
    // }
  }
}
