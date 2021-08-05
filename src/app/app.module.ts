import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product.component';
import { Error404Component } from './error404/error404.component';
import { DetailsProductComponent } from './products/details-product/details-product.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    Error404Component,
    DetailsProductComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
