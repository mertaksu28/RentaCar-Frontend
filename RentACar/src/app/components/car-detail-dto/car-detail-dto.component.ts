import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/modules/car';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css'],
})
export class CarDetailDtoComponent implements OnInit {
  constructor(
    private carDetailDtoService: CarDetailDtoService,
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService
  ) { }

  car: Car
  carControl = false
  dataLoaded = false
  url: string = "https://localhost:44367"


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (params['carId']) {

        this.getCarsDetailByCarId(params['carId'])
        this.checkCar(params['carId'])
      }
    })
  }

  getCarsDetailByCarId(carId: number) {
    this.carDetailDtoService.getCarsDetailByCarId(carId).subscribe((response) => {
      this.car = response.data
      this.dataLoaded = true
    })
  }

  checkCar(carId: number) {
    this.rentalService.checkCar(carId).subscribe((response) => { this.carControl = response.success });
  }

}