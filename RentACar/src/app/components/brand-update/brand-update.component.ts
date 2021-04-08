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
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css'],
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm: FormGroup;
  brand: Brand;
  brandId: number;
  dataLoaded = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.brandId = Number(params['brandId']);
        this.getBrandById(this.brandId);
        this.createBrandUpdateForm();
      }
    });
  }
  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      
      brandName: [""],
      

    });}

    getBrandById(brandId: number) {
      this.brandService.getBrandById(brandId).subscribe((response) => {
        this.brand=response.data
        this.dataLoaded=true
        this.setValueUpdateForm()
        
       });
    }
    setValueUpdateForm(){
        this.brandUpdateForm.setValue ({
      
        
          brandName: [this.brand.brandName],
        
  
      });}

      update() {
        if(this.brandUpdateForm.valid){
    
          let brandModel = Object.assign({}, this.brandUpdateForm.value);
    brandModel.brandId=this.brandId;
        this.brandService.update(brandModel).subscribe(response=>{
          
          this.toastrService.success("Başarılı",response.message)},responseError=>{
          if(responseError.error.Errors.length>0){
           for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage)}
             
           }
           
          }
        )
        }
        else{
    this.toastrService.error("Dikkat","Marka Güncellenemedi, Formunuz Eksik")
        }
        
      }

}
