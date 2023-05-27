import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private products = [];

  async save(product) {
    this.products.push(product);
  }

  async get() {
    return this.products;
  }
}
