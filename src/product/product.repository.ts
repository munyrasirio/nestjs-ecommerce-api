import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';
import { UUID } from 'crypto';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  async save(product: ProductEntity) {
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

  async update(id: UUID, productData: Partial<ProductEntity>) {
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
