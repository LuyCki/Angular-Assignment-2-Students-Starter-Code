import { Component, Input } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.css']
})
export class WishItemComponent {
  @Input() public wishItem: Product;
}
