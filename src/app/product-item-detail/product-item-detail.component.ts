import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from "../services/products.service";
import { Item } from '../models/item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  @Input() header: string;
  @Input() productlist:string;
  @Input() cart:string;

  product:any = []
  totalNumber: number = 1;
  num:number = 0

  constructor(private route:ActivatedRoute, public getProduct:ProductsService, private cartService: CartService){ 
    this.header = "";
    this.productlist = "";
    this.cart = "";
  }

  ngOnInit(): void {
    this.getItem()
  }
  getItem(){
    const id = this.route.snapshot.paramMap.get('id');
   let num = Number(id)
    const item = this.getProduct.getProducts().subscribe(res => {
   const user = res.find((i)=>{
    return i.id == num
    })
    this.product.push(user)
    })
  }
  addCart(item:Item):void{
    const getItem = this.cartService.getCartList()
    item.value = this.totalNumber
      this.cartService.addToCart(item);
  }
  tlNum(event:any){
    this.totalNumber = event 
  }

}
