import { Component, Input } from "@angular/core";

@Component({
  selector:'app-product',
  template:
  `
    <h2><a [routerLink]="['/product', product.id]">{{product.name}}</a></h2>
    <p>Price: {{product.price}}</p>
  `
})
export class ProductComponent {
  @Input() product: any;
}