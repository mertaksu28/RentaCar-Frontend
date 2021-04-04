import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Brand } from 'src/app/modules/brand';
import { Car } from 'src/app/modules/car';
import { Color } from 'src/app/modules/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  currentBrand: Brand = { brandId: 23, brandName: '' };
  currentColor: Color = { colorId: 15, colorName: '' };

  url: string = 'https://localhost:44367';
  empty: boolean = false;
  carText = '';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService
  ) {} // Servisleri kullanmak için yazılır...

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      }
      if (params['brandId'] && params['colorId']) {
        this.getCarsFilter(params['brandId'], params['colorId']);
      }
      if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCars();
      }
    });
    this.getBrands();
    this.getColors();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      if (this.cars.length == 0) {
        this.empty = true;
      } else {
        this.empty = false;
      }
    });
  }
  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      if (this.cars.length == 0) {
        this.empty = true;
      } else {
        this.empty = false;
      }
    });
  }
  getCarsFilter(brandId: number, colorId: number) {
    this.carService.getCarsFilter(brandId, colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
    return true;
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
    return true;
  }
}
