import { Component, Input } from '@angular/core';

export interface Product {
  title: string;
  description: string;
  price: number;
  available: boolean;
  imageLink: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
}
