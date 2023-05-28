import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsUUID,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { IsUser } from 'src/user/validation/is-user.validator';
import {
  ProductCharacteristicsDTO,
  ProductImagesDTO,
} from './create-product.dto';

export class UpdateProductDTO {
  @IsUUID()
  id: string;

  @IsUUID()
  @IsUser({ message: 'This userID does not exist in our database.' })
  userId: string;

  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @IsOptional()
  price: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  quantity: number;

  @IsNotEmpty()
  @MaxLength(1000)
  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsOptional()
  category: string;

  @IsArray()
  @ArrayMinSize(3)
  @ValidateNested()
  @Type(() => ProductCharacteristicsDTO)
  @IsOptional()
  characteristics: ProductCharacteristicsDTO[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  @Type(() => ProductImagesDTO)
  @IsOptional()
  images: ProductImagesDTO[];

  @IsNotEmpty()
  @IsOptional()
  created_at: string;

  @IsNotEmpty()
  updated_at: string;
}
