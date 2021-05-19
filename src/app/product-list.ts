import { Product } from './product/product.component';

export const products: Product[] = [
  {
    title: 'Product1',
    description: 'Product1 Description',
    price: 100,
    available: true,
    imageLink: 'https://picsum.photos/200/300'
  },
  {
    title: 'Product2',
    description: 'Product2 Description',
    price: 200,
    available: true,
    imageLink: 'https://picsum.photos/200/300'
  },
  {
    title: 'Product3',
    description: 'Product3 Description',
    price: 300,
    available: false,
    imageLink: 'https://picsum.photos/200/300'
  }
];
