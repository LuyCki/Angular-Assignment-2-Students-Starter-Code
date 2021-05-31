import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() public product: Product;
  @Output() addToWishlist: EventEmitter<Product> = new EventEmitter<Product>();

  public addToWishlistButton(product: Product): void {
    this.addToWishlist.emit(product);
  }
}
