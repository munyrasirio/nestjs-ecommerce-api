import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsUUID,
  IsUrl,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';

export class ProductCharacteristicsDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MaxLength(1000)
  description: string;
}

export class ProductImagesDTO {
  @IsUrl()
  url: string;

  @IsNotEmpty()
  @MaxLength(1000)
  description: string;
}

export class CreateProductDTO {
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  name: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;

  @IsNumber()
  @Min(0)
  quantity: number;

  @IsNotEmpty()
  @MaxLength(1000)
  description: string;

  @IsNotEmpty()
  category: string;

  @IsArray()
  @ArrayMinSize(3)
  @ValidateNested()
  @Type(() => ProductCharacteristicsDTO)
  characteristics: ProductCharacteristicsDTO[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  @Type(() => ProductImagesDTO)
  images: ProductImagesDTO[];

  @IsNotEmpty()
  created_at: string;

  @IsNotEmpty()
  updated_at: string;
}
