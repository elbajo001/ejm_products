import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './products/details-product/details-product.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products', component:ProductsListComponent},
  {path:'product/:id', component:DetailsProductComponent},
  {path:'**', component:Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
