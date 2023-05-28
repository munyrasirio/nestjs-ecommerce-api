import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/create-product.dto';
import { UUID, randomUUID } from 'crypto';
import { TProduct } from './product.type';
import { GetProductDTO } from './dto/get-product.dto';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDTO) {
    const id = randomUUID();
    const product: TProduct = { ...productData, id };
    this.productRepository.save(product);

    return {
      product: new GetProductDTO(product.id, product.userId, product.name),
      message: 'Product created successfully.',
    };
  }

  @Put('/:id')
  async updateProduct(@Param('id') id: UUID, @Body() productData: TProduct) {
    const product = await this.productRepository.update(id, productData);

    return {
      product: new GetProductDTO(product.id, product.userId, product.name),
      message: 'Product updated successfully.',
    };
  }
  }

  @Get()
  async getProducts() {
    return this.productRepository.get();
  }
}
