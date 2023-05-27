import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() product) {
    this.productRepository.save(product);

    return product;
  }

  @Get()
  async getProducts() {
    return this.productRepository.get();
  }
}
