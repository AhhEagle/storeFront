import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header: string = "MyStore";
  product:string = "Product List";
  cart: string = "Cart"
  constructor() { }

  ngOnInit(): void {
  }

}
