import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './layout/header/header.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'productdetails/:id', component:ProductItemDetailComponent},
  {path: 'cart', component: CartComponent},
  {path:'confirmed', component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
