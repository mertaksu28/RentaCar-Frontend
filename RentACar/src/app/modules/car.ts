import { CarImage } from './carImage';

export interface Car {
  id: number;
  carName: string;
  brandName: string;
  colorName: string;
  modelYear: string;
  dailyPrice: number;
  description: string;
  carImages: CarImage[];
  imagePath: string;
}
