import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
    @Input() productTitle!: string;
    @Input() productURL!: string;
    @Input() productDesc!: string;
    @Input() productPrice!: number;
}
