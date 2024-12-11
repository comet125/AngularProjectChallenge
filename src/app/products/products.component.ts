import { Component } from '@angular/core';
import {ProductList} from '../data/ProductList';
import {NgForOf} from '@angular/common';
import {ProductCardComponent} from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [
    NgForOf,
    ProductCardComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  protected readonly productList = ProductList;
}
