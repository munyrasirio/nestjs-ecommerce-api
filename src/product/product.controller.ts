import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/create-product.dto';
import { UUID, randomUUID } from 'crypto';
import { ProductEntity } from './entities/product.entity';
import { GetProductDTO } from './dto/get-product.dto';
import { ProductService } from './product.service';
import { UpdateProductDTO } from './dto/update-product.dto';

@Controller('/products')
export class ProductController {
  constructor(
    private productRepository: ProductRepository,
    private readonly productService: ProductService,
  ) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDTO) {
    const id = randomUUID();
    const product: ProductEntity = { id, ...productData };
    this.productService.createProduct(product);

    return {
      product: new GetProductDTO(product.id, product.name),
      message: 'Product created successfully.',
    };
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: UUID,
    @Body() productData: UpdateProductDTO,
  ) {
    const product = await this.productService.updateProduct(id, productData);

    return {
      product,
      message: 'Product updated successfully.',
    };
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: UUID) {
    const productId = await this.productService.deleteProduct(id);

    return {
      id: productId,
      message: 'Successfully deleted product.',
    };
  }

  @Get()
  async getProducts() {
    return this.productService.getProducts();
  }
}
