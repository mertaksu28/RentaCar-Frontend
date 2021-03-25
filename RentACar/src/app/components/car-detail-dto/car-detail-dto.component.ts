import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/modules/car';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css'],
})
export class CarDetailDtoComponent implements OnInit {
  constructor(
    private carDetailDtoService: CarDetailDtoService,
    private activatedRoute: ActivatedRoute
  ) { }

  car: Car
  dataLoaded = false
  url:string="https://localhost:44392"


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['carId']) {
        this.getCarsDetailByCarId(params['carId'])

      }
    })
  }

  getCarsDetailByCarId(carId: number) {
    this.carDetailDtoService.getCarsDetailByCarId(carId).subscribe((response) => {
      this.car = response.data
      this.dataLoaded = true
  })
  }
}