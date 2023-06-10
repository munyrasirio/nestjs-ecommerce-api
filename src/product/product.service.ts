import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { GetProductDTO } from './dto/get-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(productEntity: ProductEntity) {
    await this.productRepository.save(productEntity);
  }

  async updateProduct(id: UUID, productEntity: UpdateProductDTO) {
    await this.productRepository.update(id, productEntity);
  }

  async deleteProduct(id: UUID) {
    await this.productRepository.delete(id);
  }

  async getProducts() {
    const products = await this.productRepository.find();
    const sanitizedProducts = products.map(
      (product) => new GetProductDTO(product.id, product.name),
    );

    return sanitizedProducts;
  }
}
