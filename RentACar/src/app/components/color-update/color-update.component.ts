import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/modules/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css'],
})
export class ColorUpdateComponent implements OnInit {
  colorUpdateForm: FormGroup;
  color: Color;
  colorId: number;
  dataLoaded = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private colorService: ColorService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.colorId = Number(params['colorId']);
        this.getColorById(this.colorId);
        this.createColorUpdateForm();
      }
    });
  }
  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      colorName: [''],
    });
  }

  getColorById(colorId: number) {
    this.colorService.getColorById(colorId).subscribe((response) => {
      this.color = response.data;
      this.dataLoaded = true;
      this.setValueUpdateForm();
    });
  }
  setValueUpdateForm() {
    this.colorUpdateForm.setValue({
      colorName: [this.color.colorName],
    });
  }

  update() {
    if (this.colorUpdateForm.valid) {
      let colorModel = Object.assign({}, this.colorUpdateForm.value);
      colorModel.colorId = this.colorId;
      this.colorService.update(colorModel).subscribe(
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
      this.toastrService.error('Dikkat', 'Renk Güncellenemedi, Formunuz Eksik');
    }
  }
}
