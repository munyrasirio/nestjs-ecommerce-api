import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() product: CreateProductDTO) {
    this.productRepository.save(product);

    return product;
  }

  @Get()
  async getProducts() {
    return this.productRepository.get();
  }
}
