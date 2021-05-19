import { OnInit } from '@angular/core';
import { Component } from '@angular/core';;
import { products } from './product-list';
import { Product } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public products: Product[];

  ngOnInit(): void {
    this.products = products;
  }
}
