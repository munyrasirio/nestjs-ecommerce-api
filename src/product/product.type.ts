import { UUID } from 'crypto';

export type TProductCharacteristics = {
  name: string;
  description: string;
};

export type TProductImages = {
  url: string;
  description: string;
};

export type TProduct = {
  id: UUID;
  userId: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
  characteristics: TProductCharacteristics[];
  images: TProductImages[];
  created_at: string;
  updated_at: string;
};
