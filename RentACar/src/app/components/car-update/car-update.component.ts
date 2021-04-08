import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/modules/brand';
import { CarModel } from 'src/app/modules/carModel';
import { Color } from 'src/app/modules/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
})
export class CarUpdateComponent implements OnInit {
  carUpdateForm: FormGroup;
  colors: Color[];
  car: CarModel;
  carId: number;
  dataLoaded = false;
  brands: Brand[];
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getBrands();
      this.getColors();
      if (params['carId']) {
        this.carId = Number(params['carId']);
        this.getCarById(this.carId);
        this.createCarUpdateForm();
      }
    });
  }
  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      colorId: [''],
      brandId: [''],
      description: [''],
      dailyPrice: [''],
      modelYear: [''],
    });
  }
  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.car = response.data;
      this.dataLoaded = true;
      this.setValueUpdateForm();
    });
  }
  setValueUpdateForm() {
    this.carUpdateForm.setValue({
      colorId: [this.car.colorId],
      brandId: [this.car.brandId],
      description: [this.car.description],
      dailyPrice: [this.car.dailyPrice],
      modelYear: [this.car.modelYear],
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

  update() {
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({}, this.carUpdateForm.value);
      carModel.iD = this.carId;
      this.carService.update(carModel).subscribe(
        (response) => {
          this.toastrService.success('Başarılı', response.message);
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Dikkat', 'Araç Güncellenemedi, Formunuz Eksik');
    }
  }
}
