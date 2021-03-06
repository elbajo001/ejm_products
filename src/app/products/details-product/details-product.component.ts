import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  /* public product = {id:1, name:'egg', category:'food', description:'egg for eating', price:2} */
  public product:any = {}

  constructor(
    private route:ActivatedRoute, 
    private dataSvc: DataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    [this.product] = this.dataSvc.getProductById(productId);
    console.log('products -> ', this.product)
  }

  onGoBack(): void{
    this.location.back();
  }

}
