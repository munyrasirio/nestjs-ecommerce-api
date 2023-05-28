import { Injectable } from '@nestjs/common';
import { TProduct } from './product.type';
import { UUID } from 'crypto';

@Injectable()
export class ProductRepository {
  private products: TProduct[] = [];

  async save(product: TProduct) {
    this.products.push(product);
  }

  async get() {
    return this.products;
  }
}
