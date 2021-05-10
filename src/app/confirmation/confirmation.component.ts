import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
user:any = '';
 price:any = ''
  constructor() {
    this.user = localStorage.getItem('user');
    this.price = localStorage.getItem('price')
   }

  ngOnInit(): void {
  }
  goBack(){
    localStorage.clear()
  }

}
