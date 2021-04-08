import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/app/modules/color';
import { Brand } from 'src/app/modules/brand';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  colors: Color[];
  brands: Brand[];
  carAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.createCarAddForm();
  }
  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      description: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
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
add(){
  if(this.carAddForm.valid){

    let carModel = Object.assign({}, this.carAddForm.value);

  this.carService.add(carModel).subscribe(response=>{
    
    this.toastrService.success("Başarılı",response.message)},responseError=>{
    if(responseError.error.Errors.length>0){
     for (let i = 0; i < responseError.error.Errors.length; i++) {
      this.toastrService.error(responseError.error.Errors[i].ErrorMessage)}
       
     }
     
    }
  )
  }
  else{
this.toastrService.error("Dikkat","Araç Eklenemedi, Formunuz Eksik")
  }
  
}
}
