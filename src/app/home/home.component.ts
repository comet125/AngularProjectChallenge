import { Component } from '@angular/core';
import {ProductList} from '../data/ProductList';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    productList = ProductList;
}
