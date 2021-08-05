import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products = [
    {id:1, name:'egg', category:'food', description:'egg for eating', price:2},
    {id:2, name:'chicken', category:'food', description:'chicken for eating', price:5},
    {id:3, name:'meal', category:'food', description:'cow\'s meal  for eating', price:4},
  ]

  getAllProducts(){
    return this.products
  }

  getProductById(id: string | number | null){
    return this.products.filter((product) => product.id == id);
  }
}
