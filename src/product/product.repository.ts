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

  private getById(id: UUID) {
    const product = this.products.find((product) => product.id === id);
    if (!product) throw new Error('Product does not exist');

    return product;
  }

  async update(id: UUID, productData: Partial<TProduct>) {
    const product = this.getById(id);
    const cannotUpdate = ['id', 'userId'];

    Object.entries(productData).forEach(([key, value]) => {
      if (cannotUpdate.includes(key)) return;
      product[key] = value;
    });

    return product;
  }

  async delete(id: UUID) {
    const productById = this.getById(id);
    this.products = this.products.filter((product) => product.id !== id);

    return productById.id;
  }
}
