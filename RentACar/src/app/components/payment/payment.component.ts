import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/modules/rental';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rental: Rental
  nameOnTheCard: string;
  cardNumber: string;
  expirationDate: string;
  cardCvv: string;
  moneyInTheCard: number;
  totalPrice: number;
  carId: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private toastrService: ToastrService,
    private rentalService: RentalService,
    private cardetailService: CarDetailDtoService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['rental']) {
        this.rental = JSON.parse(params['rental']);
        this.carId = Number(this.rental.carId);
        this.totalPrice = Number(this.rental.totalPrice);
      }
    });
  }
  rentACar(){
    this.rentalService.add(this.rental).subscribe(response=>{
   this.toastrService.success("Başarılı","Kiralama İşlemi Tamamlandı")})
   this.router.navigate(['/cars/detail/'+this.carId]);
}

}
