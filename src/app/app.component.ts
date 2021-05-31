import { ProductService } from './services/product.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public products: Product[];
  public wishlist: Product[] = [];

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  public addToWishlist(product: Product): void {
    this.wishlist.push(product);
  }
}
