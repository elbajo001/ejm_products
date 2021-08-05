import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  /* public products = [
    {id:1, name:'egg', category:'food', description:'egg for eating', price:2},
    {id:2, name:'chicken', category:'food', description:'chicken for eating', price:5},
    {id:3, name:'meal', category:'food', description:'cow\'s meal  for eating', price:4},
  ] */
  public products:any = []
  constructor(private dataSvc:DataService) { }

  ngOnInit(): void {
    this.products = this.dataSvc.getAllProducts();
  }

}
