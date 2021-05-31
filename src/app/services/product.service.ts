import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/product.component';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private HOST = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.HOST}/products`);
  }
}
